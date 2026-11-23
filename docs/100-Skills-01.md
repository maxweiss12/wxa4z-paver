---
title: Skill Categories
nav_exclude: true
search_exclude: true
---

# Enterprise Knowledge & Guidance​

## Description

Access enterprise operational knowledge through natural-language interactions to investigate issues, understand procedures, retrieve information, and perform supported actions across connected systems and data sources. Quickly gain trusted insights into messages, abends, commands, architecture concepts, product documentation, known issues, fixes, and recommended actions.​

## Personas

All Personas​

## Sample Prompts

- “How do I configure RACF pass phrases on z/OS?”​
- “How can I display the status of an IMS Connect data store from the z/OS system console? What is the syntax for the QUERY command?”
- “What is an SMS Complex? How is it different from a Parallel Sysplex?”​
- How do i resolve a deadlock in Db2?​
- “We plan to move from COBOL V4.2 to V6.3. Will ARITH(COMPAT) behave differently, and are there known issues?”​


## Where does it get its data?

IBM documentation search, built-in catalogues​

-----
# Incident Analysis & Root Cause Investigation​

## Description

Correlate alerts, events, incidents, changes and dependencies across systems to accelerate diagnosis and identify probable causes of service disruptions. Combine Concert for Z, OMEGAMON, IMS, Db2 and ServiceNow evidence into timelines and ranked hypotheses, prepare shift handovers and post-incident reports, and create or update incident and change requests when asked.​


## Personas

Incident Managers, Operations​


## Sample Prompts


- Payments are slow. What is wrong and is there a ticket?
- If CICS region CICST11A fails, what else is affected?
- “Investigate the likely cause of incident INC0012345 and show the dependency chain.”​
- “Give me a shift handover snapshot. What should I know before taking the console?”​
- Payments are failing on SYSA. We started getting alerts about 14:15. What is the impact and is it still active?
- Online banking became slow in the last few hours. Multiple teams are getting calls. What happened?
- Triage the IMS outage on IF1A: what is the status of database IVPDB3 — is it open, stopped, or NOTOPEN?
- Build a timeline for TIVLP11 between 13:45 and 14:30. CICS, Db2, and the network show anomalies.
- Did change CHG0000024 cause any incidents?
- 


## Where does it get its data?

Alerts and events, ServiceNow, system map​


-----
# Performance, Capacity & Cost Management​

## Description

Monitor CPU, zIIP, WLM, CICS, storage, network and workload utilization to identify performance bottlenecks, capacity risks and software cost drivers. Compare time windows, find workloads missing their WLM goals, and explore peak MSU drivers and estimated cost contributions; forecasts and estimates depend on available data and assumptions. Leverages data from OMEGAMON monitors, Concert for Z, and other system data.​


## Personas

Performance Analysts, Capacity Planners​



## Sample Prompts

GOOD:
- “Which service classes in PAYPLEX missed their WLM goals during the last 24 hours?”​
- CPU utilisation on TIVLP11 has been climbing since 09:00 this morning. Which jobs or service classes are driving it?
- Which applications drove the highest MSU consumption on TIVLP11 last month and what is the estimated software cost contribution for each?
- Compare CP and zIIP consumption by service class on TIVLP11 for today 09:00–17:00 against the same window last Tuesday.
- Which applications had the highest MSU consumption on ZPR1 last month, and what was each application estimated software cost contribution?​
- What is the performance index for workload BATCH and service class BATNORML from 12 hours ago to now?





## Where does it get its data?

OMEGAMON monitoring, Concert for Z, history​

-----
# Batch Operations & Scheduling​

## Description

Analyze delayed, stalled or failed batch workloads by examining schedules, dependencies, resources, critical paths, job execution and completion status. The agent connects IBM Z Workload Scheduler plans to JES jobs, JCL and spool output, estimates deadlines, assesses downstream impact and proposes restarts.​


## Personas

Operations Teams​


## Sample Prompts (TO VERIFY)

- “PAYCALC failed on SCH1. Which successors are affected, and what step restart approach should we review?”​
- Display any failed jobs on TIVLP11
- “Which special resource is PAYWAIT on SCH1 waiting for, and which operation holds it?”​
- “Will application PAYROLL on SCH1 finish before its deadline, and what is its estimated completion time?”​
- “Which PAY jobs failed on ZPR1 yesterday, and what were their completion codes?”​
- Which special resource is PAYWAIT on SCH1 waiting for, and which operation holds it?​
- Will application PAYROLL on SCH1 finish before its deadline, and what is its estimated completion time?​
- Which PAY jobs failed on ZPR1 yesterday, and what were their completion codes?​
- Review workload dependencies and execution paths​

## Where does it get its data?

Job scheduler (IZWS), z/OSMF​

-----
# System Operations & Recovery​

## Description

Investigate system health, automation status, started tasks, console activity, IPL readiness, dumps and recovery procedures to resolve operational issues faster. Review outstanding replies, Z System Automation states and NetView CANZLOG entries, and collect z/OS dumps or send them to an IBM support case when requested.​

## Personas

Operators, System Programmers​


## Sample Prompts 

- Which resources in the MCMPLEX1 INGXSGLP domain on SYSA show a desired-versus-observed state mismatch right now?
- Show all resources in error state for domain MCMPLEX1 INGXSGLP
- “Why is resource PAYSTC failing to start on ZPR1? Show related CANZLOG entries for NetView domain NVP1.”​
- “Collect a z/OS dump for PAYSTC on ZPR1 and show the collection job status.”​
- “We plan to IPL ZPR1 at 02:00. What readiness checks should we review?”​


## Where does it get its data?

System Automation, NetView, dump service​

-----
# z-database-operations

- How many active threads are currently connected to Db2 subsystem DDD1 on TIVLP11?
- List all active bufferpools on DDD1 Db2 subsystem
- What are the ZPARM values for IRLMPRC and IRLMSID on DDD1 db2 subsystem
- We are getting Db2 lock timeouts on subsystem DDD1 (TIVLP11). Which application is causing it?
- What are the columns and their data types for table SYSIBM.SYSTABLESPACE on the DDD1 Db2 subsystem?
- “Show the current status of IMS database areas on IF1B. Which areas are stopped?”​
- Check the status of IMS database IVPDB1 on subsystem IF1B to see if it is started, stopped, or in an error state.

-----

# z-transaction

- “List all IMS transactions and their queue counts on subsystem IF1B.”​
- “Show queue details for MQ manager M94A on SMF system LP11.”​
- “Show locks for all JVM instances on SMF ID LP17"
- What is the current status of IMS transaction IVTNO on IF1B IMS subsystem?
- Show the status of IMS Fast Path transaction FPSAMP1 on IF1B IMS subsystem.
- Show me the MQ connections for CICS region IYCWENW1
- Show all CICS CCTL connections on IF1B IMS subsystem using /DIS CCTL.
- Get the details for transaction dump code AAL8 and system dump code EYU0XZPT in the current CICS region
- Which program is executed first when Transaction TXN2 starts, and what language is it written in?




------
# software maintenance



------
# ztpf







