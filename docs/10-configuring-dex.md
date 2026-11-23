---
title: configure-dex
nav_exclude: true
search_exclude: true
---

# Configuring Dex server for Local auth to wxa4z v4 UI

To configure local authentication to the wxa4z V4 UI using dex, the following core platform services need to be created as podman containers:
- `wxa4z-nginx`
- `wxa4z-platform-ui`

Once done, the remaining steps assume that the paver appliance has already been installed. 

## Install Dex:

As the `root` user (i.e. `sudo su`), create the `dex` folder with the required files by following the below steps:

1. `sudo su`
2. `cd /root`
3. `mkdir dex`
4. `cd dex`
5. Create the `config.yaml` file in the `dex` folder and copy and past the following contents, replacing `<public IP>` in the first line with your VM's public IP:

```
# Dex OIDC provider — VM deployment configuration
#
# Standalone config using staticPasswords — no upstream IDP required.
# Uses the built-in password DB with groups per user.
#
# Setup:
#   1. Set VM_HOST below to your VM's hostname or IP address.
#   2. Ensure port 5556 is open in the VM firewall.
#   3. Run:  docker compose up -d
#
# Default password for ALL users (change before going to production):
#   <PASSWORD>
#
# To regenerate a bcrypt hash:
#   htpasswd -bnBC 10 "" <new-password> | tr -d ':\n'
#
# Get a token (ROPC flow):
#   TOKEN=$(curl -s -X POST http://<VM_HOST>:5556/dex/token \
#     -u "connection-manager-client:<CLIENT_SECRET>" \
#     -d "grant_type=password&username=admin@local&password=<PASSWORD>&scope=openid+profile+email+groups" \
#     | jq -r .id_token)
#
# admin@local token will contain: "groups": ["admins"]  → IsAdmin() returns true
# user1-5 tokens will contain:    "groups": ["users"]   → IsAdmin() returns false
#
# Decode the payload:
#   TOKEN_PAYLOAD=$(echo $TOKEN | cut -d. -f2)
#   python3 -c "
#   import base64, json, sys
#   p = sys.argv[1]
#   p += '=' * (4 - len(p) % 4)
#   print(json.dumps(json.loads(base64.urlsafe_b64decode(p)), indent=2))
#   " "$TOKEN_PAYLOAD"

# ── CHANGE THIS ──────────────────────────────────────────────────────────────
# Replace <VM_HOST> with the actual hostname or IP of the VM (or localhost for local testing), e.g.:
#   issuer: http://localhost:5556/dex
#   issuer: http://192.168.1.42:5556/dex
# Must match IDP_VERIFY (without /.well-known/openid-configuration) in
# connection-manager's .env.
# ─────────────────────────────────────────────────────────────────────────────
issuer: http://<Public-IP>:5556/dex

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

# ── USERS ────────────────────────────────────────────────────────────────────
# 1 admin + 5 normal users.
# All users share the same password: <PASSWORD> — change before production.
# Re-hash:  htpasswd -bnBC 10 "" <new-password> | tr -d ':\n'
# ─────────────────────────────────────────────────────────────────────────────
staticPasswords:

  # Admin user — intended for write operations
  - email: admin@local
    hash: "$2b$10$pUrUPUAlpMwnpouMvhnYj.GAFIfII6e9UDVa/T.aTXQy3rzPDppW."
    username: admin
    userID: "61f0a820-4ecf-4191-9707-2baabf5cd22b"
    groups:
      - admins

  # Normal users — read-only / standard access
  - email: user1@local
    hash: "$2b$10$pUrUPUAlpMwnpouMvhnYj.GAFIfII6e9UDVa/T.aTXQy3rzPDppW."
    username: user1
    userID: "c505011c-b69e-4411-a640-3c7460fc5cdd"
    groups:
      - users

staticClients:
  - id: connection-manager-client
    secret: "dev-secret"
    name: Connection Manager
    redirectURIs:
      - http://localhost:3000/callback
      - http://localhost:43123/auth/callback
      - http://<Public IP>:3000/callback
      - http://<Public IP>:43123/auth/callback
      - https://<Public IP>:6443/auth/callback
    grantTypes:
      - authorization_code
      - refresh_token
      - password
    responseTypes:
      - code
      - token
      - id_token
    scopes:
      - openid
      - profile
      - email
      - groups

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
    image: ghcr.io/dexidp/dex:v2.46.1
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
  - Client ID: `connection-manager-client`
  - Client Secret: `dev-secret`
  - Identity Provider Endpoint: `http://<Public IP>:5556/dex/.well-known/openid-configuration`
  - Redirect URI: leave default
  - Enable ROPC (toggle on)
  - Then click Save Provider

Then log out of the UI. 

## Validate dex auth

Log back in as the default dex user:
   - username: `user1@local`
   - password: `password`

You should confirm that the dex user can log in. In the Chat, you may see that the paver shell doesn't load. Two changes need to be done to enable connectivity to the paver server

## Configure the `paveradm oidc` settings

Lastly, you'll need to configure the `paveradm oidc` settings to authenticate the web UI to the paver server. 

Run the following command as `root` to configure OIDC, replacing `<public IP>` with the public IP address of your VM:

```
paveradm config oidc --issuer http://<public IP>:5556/dex --client-id connection-manager-client --redirect-uris http://127.0.0.1:43123/auth/callback --use-allowlist false
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