---
title: zos-agent-skills
nav_exclude: true
search_exclude: true
---

# PREVIEW - z/OS Agent Skills

## Description and Use Cases

The `zos-agent-skills` delivers a set of use cases through the IBM Agents for z/OS to provide AI-driven assistance for essential z/OS system programming tasks - running fully on-system on the IBM Spyre Accelerator. 

Each use case can be invoked as a skill from watsonx Assistant for Z V4.0 and are outlined below.

## Domains covered

| Domain | Capability |
|---|---|
| **System Console** | `D`/`DISPLAY` and `$D` display commands; Health Checker; JES2 monitor |
| **Dataset Manager** | Catalog search, attributes, PDS members, content, DASD free space, APF list, PARMLIB/PROCLIB/LINKLIST, SMS |
| **Job Triage** | Job status/listing, spool log content, abend/return-code lookup, JES2 subsystem health |



## How to Demo

- whenever demoing the `zos-agents` skills, need to start a new conversation
- for the first prompt (at least) need to invoke the skill specifically:


## Demo questions:
### Health check:
- Run a health check on ORION
- 

### System Console:
- Run D IPLINFO on VEGA. What z/OS release is it running and when was it last IPLed?
- 

--------
### System Console queries

- Run a health check on ORION'
- What z/OS release is VEGA running and when was it last IPLed?'
- Show the processor configuration of LYRA. How many CPs are online?
- Run D IPLINFO on VEGA. What z/OS release is it running and when was it last IPLed?
- What is the JES2 spool utilization right now on RIGEL? Is any spool volume close to full?
- Check auxiliary storage on ARCTURUS. How full are the page datasets? (D ASM)?
- Show me the sysplex status and which XCF members are active (D XCF,S) on SIRIUS.
-     query: 'List the IBM Health Checker exceptions that are currently active at HIGH severity on ORION.'
-         query: 'On ORION, are any Health Checker checks completing with UNSUCCESSFUL status, and which ones?'
-             query: 'From VEGA, which systems are active members of this sysplex right now?'
-                 query: 'From LYRA, is every coupling facility in this sysplex available for structure allocation?'
-                 

### Dataset Manager queries

- Does SYS1.PARMLIB exist in the catalog on ORION?
- 'What are the attributes of SYS1.PARMLIB on VEGA — record format, record length and block size?'
-     query: 'Which datasets are in the LINKLIST concatenation on LYRA?'
-         query: 'List the APF-authorized libraries on RIGEL.'
-         


### Job Triage queries

-     query: 'Is job PAYRL04 currently running, waiting, or has it ended on ARCTURUS?'
-         query: 'Have any jobs on SIRIUS ended with a system abend such as S0C7 or S0C4? If so, which ones and what do the abend codes mean?'
-         




