---
title: Overview and Positioning
parent: Getting Started
nav_order: 1
---
# Overview and Positioning

## Simple AI Agents vs. Deep Agents

<table>
  <thead>
    <tr>
      <th><em>Agent type</em></th>
      <th>Simple AI Agent</th>
      <th>Deep Agent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Summary</strong></td>
      <td>Answers questions and can use tools (search, files, APIs).</td>
      <td>Plans, reasons, executes multiple steps, checks its work, adapts when something fails, and works toward a complex objective.</td>
    </tr>
    <tr>
      <td><strong>Workflow</strong></td>
      <td>
        <ul>
          <li>Few steps (1-2 actions)</li>
          <li>Reactive behavior</li>
          <li>Minimal planning</li>
          <li>Little or no planning</li>
          <li>Limited tool use</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Multi-step workflows (10+ steps)</li>
          <li>Plans, executes, and reflects</li>
          <li>Stateful with memory</li>
          <li>Iterative & self-correcting</li>
          <li>Orchestrates many tools</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><strong>Key points</strong></td>
      <td>
        <ul>
          <li>Can run on smaller on-prem LLMs (less footprint)</li>
          <li>Quick responses</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Require larger LLMs</li>
          <li>Run longer</li>
          <li>Use Agentic Skills</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


### Example Questions and Execution


**Simple AI Agent** | **Deep Agent**
--- | ---
`Show me the jobs running on the systems?` | `Which jobs are not executing and investigate the reason why they are not running?`
`Show me the CICS regions on the system?` | `What does transaction PAYR mean for our business and how is it configured in CICS?` |
`What is the configuration of JVMServer JVS1?` | `Do I need to scale the JVM that runs on the transaction INVJ?` |
`What are the top CPU consumers on LPAR XYZ?` | `Investigate this incident across my environment, determine root cause, correlatedata from multiple systems, recommend a fix, and optionally execute it?`


## What Are Agentic Skills and How do they work?

IBM watsonx Assistant for Z is adopting the Agent Skills Standard to deliver a deep agent that goes beyond executing a predefined set of tasks. It can dynamically discover and orchestrate the right skills to understand context, reason across multiple sources of information, investigate issues, develop execution plans, and securely assist users in taking action across their environments with appropriate human oversight. The agent can also evaluate the results of its actions, validate its own work, and adapt its approach when conditions change, enabling users to achieve complex objectives with greater efficiency and confidence.

Through natural language interaction, watsonx Assistant for Z can understand the intent and context behind a request, build and execute a multi-step investigation or remediation plan, gather and synthesize relevant insights from across the environment, and recommend or carry out the most appropriate course of action.

### **Definition of Agent Skills**

Agentic skills are a modular way to extend Deep Agents with reusable expertise, defined using a simple filesystem-based format.

### **Skill Structure and Metadata**

Skills use `SKILL.md` files with `YAML` metadata and detailed Markdown instructions guiding agent behavior.

A skill is a folder containing the following assets:

- `skill-name/`

  - `SKILL.md` *# a required set of Markdown instructions in YAML format*
  
  - `scripts/` *# a folder containing executable code (i.e. Python, Bash)*
  
  - `references/` *# documentation loaded as needed*
  
  - `assets/` *# optional templates or additional resources*


### **Dynamic Skill Selection**

Language models evaluate user intent and select relevant skills without rule-based routing.


## Private Preview

The private preview of the next release of IBM watsonx Assistant for Z is an important step toward delivering a deep agentic AI platform for IBM Z. Starting October 1, selected clients and sponsor users will get early access to explore how agentic AI can transform IBM Z experience. Feedback from participating clients will help IBM validate priority scenarios, refine the user experience, explore opportunities for extending skills and guide the capabilities delivered in future releases.
