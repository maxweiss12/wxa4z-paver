---
title: z-job-and-scheduling-operations
nav_order: 6
has_children: false
---
# Batch Operations & Scheduling

## Description

Analyze delayed, stalled or failed batch workloads by examining schedules, dependencies, resources, critical paths, job execution and completion status. The agent connects IBM Z Workload Scheduler plans to JES jobs, JCL and spool output, estimates deadlines, assesses downstream impact and proposes restarts.​

**Skill name:** `z-job-and-scheduling-operations​`

**Personas:** Operations Teams​


Data sources:
- Job Scheduler (IZWS)
- z/OSMF



## Example Demo Scenario: Investigating failed jobs

```
What is the status of my job streams?
```
<img src="image-120.png" alt="alt text" width="60%">



```
Investigate the root cause of the failed jobs
```
<img src="image-121.png" alt="alt text" width="60%">


```
Examine the CEEDUMP to provide more details on the error for PAYFAIL
```
<img src="image-122.png" alt="alt text" width="60%">


```
Analyze the JCL error in PAYJCL
```
<img src="image-123.png" alt="alt text" width="60%">



```
For PAYRC analyze the SPOOL data for more details
```
<img src="image-124.png" alt="alt text" width="60%">



```
What is PAYWAIT waiting for? Create a flow diagram of the job dependencies
```
<img src="image-125.png" alt="alt text" width="60%">



### Other Sample prompts

```
PAYCALC failed on SCH1. Which successors are affected, and what step restart approach should we review?
```
<img src="image-83.png" alt="alt text" width="60%">


```
Will application PAYMENTS on SCH1 finish before its deadline, and what is its estimated completion time?
```

<img src="image-85.png" alt="alt text" width="60%">



```
Review workload dependencies and execution paths
```
