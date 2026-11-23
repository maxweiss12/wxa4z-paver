---
title: configure-dex
nav_exclude: true
search_exclude: true
---

# Configuring Dex server for Local auth to wxa4z v4 UI

To configure local authentication to the wxa4z V4 UI using dex, the following core platform services need to be created as podman containers:
- `wxa4z-nginx`
- `wxa4z-platform-ui`

When deploying the `wxa4z-platform-ui` container, ensure that the following settings/environment variables are set, where `<public-IP>` is the IP address of your VM hosting the paver server:

- `PAVER_PROXY_ENABLED=true`
- `PAVER_SERVER=http://<public-IP>:8988`

Once done, the remaining steps assume that the paver appliance has already been installed. 

## Install Dex:

As the `root` user (i.e. `sudo su`), create the `dex` folder with the required files by following the below steps:

1. `sudo su`
2. `cd /root`
3. `mkdir dex`
4. `cd dex`
5. Create the `config.yaml` file in the `dex` folder and copy and past the following contents, replacing `<public IP>` in the first line with your VM's public IP:

    ```
    issuer: http://<public IP>:5556/dex

    storage:
    type: memory

    web:
    http: 0.0.0.0:5556

    logger:
    level: info
    format: text

    oauth2:
    skipApprovalScreen: true
    passwordConnector: local
    alwaysShowIdTokenClaims: true
    grantTypes:
        - authorization_code
        - refresh_token
        - password

    enablePasswordDB: true

    # Two static users.
    # admin@local — groups: [admins] — intended to be recognised as admin
    # user@local  — groups: []      — regular user
    #
    # Password for both accounts: "password"
    # Hash generated with bcrypt cost=10.
    staticPasswords:
    - email: admin@local
        hash: "$2y$10$oeKTurlmYP.50zl/Ez.y7e/B9vm0b4R2RKEZRnBwn3OUHoPMUQBbm"
        username: admin
        userID: "admin-001"
        groups:
        - admins

    - email: user@local
        hash: "$2y$10$oeKTurlmYP.50zl/Ez.y7e/B9vm0b4R2RKEZRnBwn3OUHoPMUQBbm"
        username: user
        userID: "user-001"
        groups: []

    staticClients:
    - id: connection-manager-dev
        secret: dev-secret
        name: Connection Manager (local dev)
        redirectURIs:
        - http://127.0.0.1:8080/callback
        grantTypes:
        - authorization_code
        - refresh_token
        - password
        responseTypes:
        - code
        - token
        - id_token
        

    expiry:
    idTokens: 24h
    refreshTokens:
        validIfNotUsedFor: 24h
    ```


6. Once saved, create the `docker-compose.yml` file also in the `dex` folder and copy and past the following contents:

    ```
    # Dex OIDC provider — standalone container (local development)
    #
    # Usage:
    #   docker compose up

    services:

    dex:
        image: ghcr.io/dexidp/dex:v2.42.0
        command: ["dex", "serve", "/etc/dex/config.yaml"]
        ports:
        - "5556:5556"
        volumes:
        - ./config.yaml:/etc/dex/config.yaml:ro
        healthcheck:
        test: ["CMD", "wget", "-qO-", "http://localhost:5556/dex/.well-known/openid-configuration"]
        interval: 5s
        timeout: 3s
        retries: 10
        start_period: 5s
        restart: unless-stopped
    ```


7. Once both files are saved, run these 2 commands from the `dex` directory:
   
   - `chmod 777 *`
   - `podman compose up -d`


## Configure Provider in UI

1. Log into UI as basic admin user (`wxa4z_creds`)

2. Go to Provider Management tab and define the following provider with these fields:
   
  - Provider ID: `dex-local`
  - Provider Name: `dex-local`
  - Client ID: `connection-manager-dev`
  - Client Secret: `dev-secret`
  - Identity Provider Endpoint: `http://<Public IP>:5556/dex/.well-known/openid-configuration`
  - Redirect URI: leave default
  - Enable ROPC (toggle on)
  - Then click Save Provider

Then log out of the UI. 

## Validate dex auth

Log back in as the default dex user:
   - username: `user@local`
   - password: `password`

You should confirm that the dex user can log in. In the Chat, you may see that the paver shell doesn't load. Two changes need to be done to enable connectivity to the paver server

## Expose the `paver-nginx` container port externally

By default, the `paver-nginx` service binds to `127.0.0.1:8988`. To make the service externally available, we can bind to `0.0.0.0:8988`.

1. Change active user to `paver` using `su paver`
2. `cd` to get to paver home directory
3. Run `cat /home/paver/.config/containers/systemd/paver-nginx.container`
   
   You should see the following line:
   ```
   PublishPort=127.0.0.1:8988:80
   ```
4. Modify this line with `vi /home/paver/.config/containers/systemd/paver-nginx.container` to set to `PublishPort=0.0.0.0:8988:80`

5. Then save the file.

6. Persist the changes to the running container by running the below commands:
   
    ```
    export XDG_RUNTIME_DIR=/run/user/$(id -u)
    ```

    ```
    systemctl --user daemon-reload
    ```

    ```
    systemctl --user restart paver-nginx.service
    ```

    When the `paver-nginx` container comes back up, it should use the new port config. Verify by running:

    `podman ps -a`

    You should then see:

    ```
    0.0.0.0:8988->80/tcp
    ```

7. Lastly, issue `exit` to go back to the `root` user.

## Configure the `paveradm oidc` settings

Lastly, you'll need to configure the `paveradm oidc` settings to authenticate the web UI to the paver server. 

Run the following command as `root` to configure OIDC, replacing `<public IP>` with the public IP address of your VM:

```
paveradm config oidc --issuer http://<public IP>:5556/dex --client-id connection-manager-dev --redirect-uris http://127.0.0.1:43123/auth/callback --use-allowlist false
```

After the command is issued and the paver server restarts, confirm that OIDC was properly configured by running: `paveradm config oidc -s`

Finally, log out and then log back into the UI as the default dex user (`user@local` / `password`). You should see that the user is now connected to the paver server and no errors. 


## Adding additional DEX users

### Step 1: Generate a bcrypt hash for the password

On the VM (or any machine with Python), run the following command, replacing `<enter-password>` with a unique password of your choice:

```
python3.12 -c "import bcrypt; print(bcrypt.hashpw(b'<enter-password>', bcrypt.gensalt(10)).decode())"
```
Record the output for later.

### Step 2: Generate a UUID for the new user

```
python3 -c "import uuid; print(str(uuid.uuid4()))"
```

Save the output for later

### Step 3: Add the user to dex

Modify the `/root/dex/config.yaml` file using `vi` and add a new entry under `staticPasswords`:

```
  - email: <username>@local
    hash: "$2b$10$<has-from-step-1>"
    username: <enter-username>
    userID: "<uuid-from-step-2>"
```

Once saved, restart the dex service for the changes to be reflected:

```
podman compose down && podman compose up -d
```