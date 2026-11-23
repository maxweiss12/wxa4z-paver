---
title: z-change-configuration-and-maintenance​
nav_order: 10
has_children: false
---
# Software Maintenance & Currency​

## Description

Identify missing HIPER, PE, APAR and FIXCAT updates, review software inventory, and maintain visibility into system maintenance requirements. The agent can also receive a requested PTF and report its installation or related job status, so teams can prepare maintenance and follow progress. Connects to z/OSMF and ServiceNow.​

**Skill name:** `z-change-configuration-and-maintenance​​`

**Personas:** System Programmers

**Data sources:** z/OS, z/OSMF


## Demoing the skill

**Pre-req:** Ensure you completed the setup in [this section](./02-getting-started/config-auth-personal.md).


### Retrieve a list of all products registered on the system:

```
List all products on my system.
```
<img src="image-50.png" alt="alt text" width="50%">


### List all software instances 

```
Show all my software instances
```
<img src="image-51.png" alt="alt text" width="50%">


### Show details for a particular software instance

```
Can you provide details about software instance IMS?
```

<img src="image-52.png" alt="alt text" width="50%">

 
### Retrieve missing critical updates for a SWI

```
Retrieve the missing critical updates for this software instance
```

<img src="image-53.png" alt="alt text" width="50%">


### Retrieve missing fixcats for a SWI

```
Retrieve all missing fixcats for software instance IMS.
```
<img src="image-54.png" alt="alt text" width="50%">


### Refresh the hold data

```
Refresh the hold data first
```
<img src="image-55.png" alt="alt text" width="50%">


### Check job status

```
Check the status of job xxx
```

<img src="image-56.png" alt="alt text" width="50%">


### Receive missing PTFs

```
Receive the missing PTF
```

<img src="image-57.png" alt="alt text" width="50%">
