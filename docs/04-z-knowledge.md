---
title: z-knowledge-and-documentation
nav_order: 4
has_children: false
---

# Enterprise Knowledge & Guidance

## Description

Access enterprise operational knowledge through natural-language interactions to investigate issues, understand procedures, retrieve information, and perform supported actions across connected systems and data sources. Quickly gain trusted insights into messages, abends, commands, architecture concepts, product documentation, known issues, fixes, and recommended actions.​


**Skill name:** `z-knowledge-and-documentation​`

**Personas:** All personas


Data sources:
- zRAG Documentation
- COBOL
- Java

## Use Cases & Sample Questions

<table>
  <thead>
    <tr>
      <th>Use Case</th>
      <th>Persona(s)</th>
      <th>Sample Question(s)</th>
      <th>Business Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Procedure Guidance</strong></td>
      <td>System Programmer, RACF Security Administrator,  IBM Z Operations Specialist</td>
      <td>
        <ul>
          <li>How do I configure RACF pass phrases on z/OS</li>
          <li>How can I display the status of an IMS Connect data store from the z/OS system console? What is the syntax for the QUERY​</li>
        </ul>
      </td>
      <td>Execute operational tasks faster and more consistently. Reduce reliance on expert assistance.​</td>
    </tr>
    <tr>
      <td><strong>Investigation Support​</strong></td>
      <td>DBA, System Programmer, ​Batch Operations Specialist​</td>
      <td>
        <ul>
          <li>How do i resolve a deadlock in Db2?​</li>
          <li>How do I investigate a long running batch job?​</li>
        </ul>
      </td>
      <td>Resolve operational issues more quickly ​​</td>
    </tr>
    <tr>
      <td><strong>Operational Knowledge Discovery​</strong></td>
      <td>New IBM Z Operations Staff Application Support Analyst, z/OS System Programmer​​</td>
      <td>
        <ul>
          <li>What is an SMS Complex? How is it different from a Parallel Sysplex?​</li>
          <li>What is the difference between JES2 and JES3?​</li>
        </ul>
      </td>
      <td>Make technical knowledge discoverable. Reduce reliance on experts.​​​</td>
    </tr>
    <tr>
      <td><strong>Defect Investigation​​</strong></td>
      <td>Developer, System Programmer​​​</td>
      <td>
        <ul>
          <li>COBOL: Our COBOL SORT fails with an S0C4 when using SORT-MODE-SIZE. Is there a known fix or workaround?​</li>
          <li>Java: Our Java app throws "Too many open files" under load and we suspect a race condition in NIO socket channels. Is there a known fix?​​</li>
        </ul>
      </td>
      <td>Speeds resolution​​​​</td>
    </tr>
    <tr>
      <td><strong>Migration Readiness​</strong></td>
      <td>System Programmer, Developer​​​​</td>
      <td>
        <ul>
          <li>We plan to move from COBOL V4.2 to V6.3. Are there known issues or fixes we should review for our workload?​​</li>
        </ul>
      </td>
      <td>Reduces migration risk​</td>
    </tr>
    <tr>
      <td><strong>Guide New Developers to the Right Fix​​</strong></td>
      <td>New Practitioners, Junior Developers​</td>
      <td>I'm new to COBOL on z/OS. My program abends with an S0C4 after a recompile. Is this a known compiler problem?​
      </td>
      <td>Reduces learning curve​</td>
    </tr>
    <tr>
      <td><strong>Compiler Option and Performance Diagnosis​​​</strong></td>
      <td>System Programmer, Developer​​</td>
      <td>CPU time went up after we started using DYNAM. Is there a known performance fix?​
      </td>
      <td>Avoids performance regressions​​</td>
    </tr>
    <tr>
      <td><strong>Determine the Problem and Escalate to IBM Support​​</strong></td>
      <td>Senior System Programmer, IBM L2 Service/Support​​​</td>
      <td>We have many candidate APARs for this symptom. Which ones apply, and should we apply a PTF or escalate?​
      </td>
      <td>Shortens escalation​​​</td>
    </tr>
  </tbody>
</table>
