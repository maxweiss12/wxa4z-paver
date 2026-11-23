---
title: Incident Analysis & Root Cause Investigation​
nav_exclude: true
search_exclude: true
---
# Incident Analysis & Root Cause Investigation​

## Description

Correlate alerts, events, incidents, changes and dependencies across systems to accelerate diagnosis and identify probable causes of service disruptions. Combine Concert for Z, OMEGAMON, IMS, Db2 and ServiceNow evidence into timelines and ranked hypotheses, prepare shift handovers and post-incident reports, and create or update incident and change requests when asked.​


**Skill name:** `z-incident-investigator​​`

**Personas:** Incident Managers & Operations


Data sources:
- Alerts and events
- ServiceNow
- System map


## Example Prompts

```
Payments are slow. What is wrong and is there a ticket?
```

```
Get the first 5 critical event groups from the last 48 hours
```

```
Payments are failing. We started getting alerts about 14:15. What is the impact and is it still active?
```

```
If CICS region CICST11A fails, what else is affected?
```

```
Online banking became slow in the last few hours. Multiple teams are getting calls. What happened?
```



### End-to-end scenario (C4Z and SNOW)

**Example Demo Prompt** | **What the skill does** | **Skill invoked**
--- | --- | ---
*Which anomalies occurred on Sept 18 that I should be investigating?* | List critical anomalies from Sept 18, all of which are from Db2 subsystems. | Concert skill
*Respond to me as though I am a newbie in mainframe operations, including explaining what you are doing and all the terminology in details.* | Set persona for response content to be operations SME focused, resulting in substantially more detailed and thorough responses. | 
*Which business applications are related to the anomalies?* | Leverage ServiceNow to map CMDB configuration items to business applications, resulting in the Payroll application being highlighted. | ServiceNow
*Which configuration items are related to the Payroll application?* | Identify the application to configuration item mapping for the Payroll application. | ServiceNow skill
*Show a topology map for the Payroll application including 3 levels of dependencies.* | Leverage ServiceNow for multi-hop relationship traversal to identify the LPAR, subsystem and API components. | ServiceNow
*Has DDD1 been producing repeated alerts?  If so, correlate them with the Sept 18 timeline.* | Check the recent history of alerts generated against resource DDD1, which shows recurring Db2 events, and correlate them with the Sept 18 timeline. | Concert
*What is the blast radius for DDD1?* | Leverage service now application relationship mapping to identify downstream impacts for the DD1 resource. | zen-agent and ServiceNow
*Which WLM service classes are related to DDD1?* | Check Workload Manager performance index retrieval for service classes related to DDD1. | concert
*Is there a change request that may have impacted the Payroll application?* | Query ServiceNow for change requests that involved DDD1 and occurred prior to the Sept 18 event. | ServiceNow
*Provide audit level evidence that CHG0030012 was fully approved and tested before being implemented on the mainframe.* | Ensure that there are test and approval records associated with the change.  Results do not identify the required validation information. | zen-agent
*Based on the current failure of the Payroll app, what are the specific risks of rolling back CHG0030012, and which other systems might be affected by that rollback?* | Evaluate risks of performing a change rollback versus not rolling back the changes. | zen-agent
*Provide a detailed report of the the potential rollback change request including all necessary evidence and justification so that it can be reviewed by the next shift to determine whether to move forward immediately or to wait for additional analysis.* | Provide a thorough assessment of the issue and identify next best actions, based on event data as well as change request and incident analysis. | concert and servicenow
