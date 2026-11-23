---
title: z-transaction-and-messaging-operations
nav_order: 9
has_children: false
---
# Transaction and Messaging Runtime Diagnostics​

## Description

Troubleshoot CICS, IMS, MQ and Java environments by tracing transactions, runtime resources, dependencies and application failures. Examine CICS regions, programs and files, IMS transaction states and queues, MQ and JVM lock information and z/OS Connect API errors, with topology and IMSplex-wide checks. Leverages data coming from CICS, IMS, OMEGAMON, and Concert for Z.​

**Skill name:** `z-transaction-and-messaging-operations​​`

**Personas:** Application Support Teams​


Data sources:
- CICS
- IMS
- OMEGAMON Monitoring
- Concert for Z



## Sample Prompts

### IMS 

```
List all IMS transactions and their queue counts on subsystem IF1B.
```
<img src="image-75.png" alt="alt text" width="50%">




```
What is the current status of IMS transaction IVTNO on IF1B IMS subsystem?
```
<img src="image-77.png" alt="alt text" width="50%">


```
Show the status of IMS Fast Path transaction FPSAMP1 on IF1B IMS subsystem.
```
<img src="image-79.png" alt="alt text" width="50%">



### CICS

```
Show all CICS CCTL connections on IF1B IMS subsystem using /DIS CCTL.
```
<img src="image-76.png" alt="alt text" width="50%">



```
Get the details for transaction dump code AAL8 and system dump code EYU0XZPT in the current CICS region
```
<img src="image-78.png" alt="alt text" width="50%">



```
Which program is executed first when Transaction TXN2 starts, and what language is it written in?
```
<img src="image-80.png" alt="alt text" width="50%">


```
Fetch me information on program PROGA5 in my CICS system
```
<img src="image-102.png" alt="alt text" width="50%">



```
Is the program executed by Transaction TXN1 currently available for use?
```
<img src="image-103.png" alt="alt text" width="50%">


```
Get me information on active CICS regions, sit parameters configured and transaction TXN1
```
<img src="image-105.png" alt="alt text" width="50%">



### JVM and JVM Lock queries

```
Retrieve details of all JVMs.
```
<img src="image-104.png" alt="alt text" width="50%">


```
List all available details for each JVM
```
<img src="image-106.png" alt="alt text" width="50%">



```
Provide detailed information for JVM APMZCEE1
```


```
Show locks for JVM instance APMZCEE1
```
<img src="image-107.png" alt="alt text" width="50%">




### MQ Managers and Queue Questions

```
List all MQ Managers.
```
<img src="image-113.png" alt="alt text" width="50%">


```
Provide full details for MQ manager M94A
```

<img src="image-118.png" alt="alt text" width="50%">

```
Show queue details for MQ manager M94A
```

```
Show me the MQ connections for CICS region IYCWENW1
```
<img src="image-119.png" alt="alt text" width="50%">

