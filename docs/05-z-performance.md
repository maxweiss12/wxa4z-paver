---
title: z-performance-capacity-and-cost
nav_order: 5
has_children: false
---
# Performance, Capacity & Cost Management​

## Description

Monitor CPU, zIIP, WLM, CICS, storage, network and workload utilization to identify performance bottlenecks, capacity risks and software cost drivers. Compare time windows, find workloads missing their WLM goals, and explore peak MSU drivers and estimated cost contributions; forecasts and estimates depend on available data and assumptions. Leverages data from OMEGAMON monitors, Concert for Z, and other system data.​

**Skill name:** `z-performance-capacity-and-cost​`

**Personas:** Performance Analysts, Capacity planners

Data sources:
- OMEGAMON monitoring
- Concert for Z


## Sample Prompts

```
CPU utilization on TIVLP11 has been climbing since 09:00 this morning. Which jobs or service classes are driving it?
```

<img src="image-69.png" alt="alt text" width="60%">




```
Which applications drove the highest MSU consumption on LP11 last month and what is the estimated software cost contribution for each?
```

<img src="image-87.png" alt="alt text" width="60%">


```
Compare CP and zIIP consumption by service class on TIVLP11 for today 09:00–17:00 against the same window last Tuesday.
```

<img src="image-89.png" alt="alt text" width="60%">




```
What is the performance index for workload BATCH and service class BATNORML from 12 hours ago to now?
```

![alt text](image-90.png)


```
Which service classes in PAYPLEX missed their WLM goals during the last 24 hours?
```
<img src="image-74.png" alt="alt text" width="60%">

