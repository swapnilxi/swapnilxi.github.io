
# Pulse + CFOBuddy
## CFO → CEO Intelligence System for Quick Commerce

---

# 1. Product Overview

This repository builds **Pulse + CFOBuddy**, an AI-powered decision intelligence system designed for **Quick Commerce companies**.

The system provides:

1. **CFOBuddy** — an AI assistant for the CFO powered by Agentic RAG
2. **Pulse** — a CEO-facing confidence dashboard

The system helps CFOs analyze financial and operational signals, create strategy, and communicate clear insights to the CEO.

---

# 2. Core Product Philosophy

The system follows this hierarchy:

AI Assistant → CFO Intelligence Layer → CEO Confidence Dashboard

The AI **assists the CFO**, not replaces them.

The CEO receives simplified signals derived from CFO analysis.

Design principle:

"If the CEO feels calm opening the app, finance is doing its job."

---

# 3. Core CEO Signals

The CEO dashboard always shows exactly **three signals**:

1. Cash Health
2. Fulfillment Flow
3. Unit Economics Quality

Each signal is presented as:

Green / Amber / Red  
+ one sentence explanation

Example:

Cash Health 🟢  
Runway: 11 months

Fulfillment Flow 🟡  
Congestion increasing in East zone

Unit Economics →  
Margins stable, discount pressure rising

---

# 4. Problem Statement

Quick commerce companies often fail due to:

- Cash runway miscalculation
- Operational bottlenecks in dark stores
- Fulfillment delays
- Unit economics deterioration

Traditional dashboards are:

- complex
- reactive
- slow to interpret

This system replaces dashboards with **decision intelligence**.

---

# 5. System Architecture

High-level architecture:

Data Sources
↓
Financial Metrics Engine
↓
Computer Vision Signal Engine
↓
Vector Database
↓
Agentic RAG System
↓
CFOBuddy AI Assistant
↓
CFO Strategy Layer
↓
Pulse CEO Dashboard

---

# 6. Major Components

## 6.1 Financial Metrics Engine

Responsible for calculating:

- cash runway
- burn rate
- contribution margin
- delivery economics
- discount impact
- cost allocation

Example metric:

runway = cash_balance / monthly_burn

Outputs structured financial signals.

---

## 6.2 Computer Vision Engine

Detects operational bottlenecks in quick commerce logistics.

Inputs:

- dark store camera feeds
- picking station congestion
- rider queues
- packing delays

Important constraints:

- zone level analysis only
- no facial recognition
- no employee monitoring

Outputs:

Fulfillment Flow signals.

---

## 6.3 Agentic RAG System

This system enables CFOBuddy to reason about the business.

The system retrieves knowledge from:

- financial metrics
- operational logs
- CV signals
- company documentation
- strategy documents

Then produces:

- explanations
- recommendations
- strategy insights

---

# 7. Agent Architecture

Agents are implemented using **LangGraph**.

Agents include:

## CFO Agent

Handles:

- cash runway
- burn rate
- financial risk
- capital allocation

---

## Operations Agent

Handles:

- fulfillment flow
- rider efficiency
- dark store congestion
- SLA risk

---

## Strategy Agent

Handles:

- pricing strategy
- unit economics optimization
- growth vs margin tradeoffs

---

## Supervisor Agent

Routes tasks to the appropriate agent.

---

# 8. Technology Stack

## Frontend

Framework: **Next.js**

Features:

- CEO dashboard
- CFO chatbot interface
- executive signal visualization
- real-time signal updates

---

## Backend

Framework: **FastAPI**

Responsibilities:

- API layer
- agent orchestration
- financial metric computation
- RAG pipeline
- authentication

---

## Machine Learning Framework

Framework: **PyTorch**

Used for:

- computer vision models
- anomaly detection
- operational signal extraction

---

## RAG Stack

Agent framework:

LangGraph

RAG orchestration:

LangChain

Embedding models:

HuggingFace free embedding models

Examples:

- BAAI/bge-small-en
- sentence-transformers/all-MiniLM-L6-v2

---

## Vector Database

Primary vector database:

Neon Postgres + pgvector

Used for:

- document embeddings
- financial knowledge
- operational logs

---

## Fast Context Memory

System uses:

Zep / zvec

Purpose:

- conversational memory
- short-term context retrieval
- faster reasoning

---

## LLM

Primary model:

DeepSeek

Fallback:

Open-source models

Examples:

- DeepSeek
- Mixtral
- LLaMA variants

Goal:

Use **free or low-cost models** whenever possible.

---

# 9. Repository Structure

pulse/
│
├── backend/
│   ├── api/
│   ├── agents/
│   ├── rag/
│   ├── embeddings/
│   ├── database/
│   ├── services/
│   └── cv_engine/
│
├── frontend/
│   └── nextjs-app/
│
├── knowledge/
│   ├── finance.md
│   ├── fulfillment.md
│   ├── unit_economics.md
│   └── prd.md
│
├── prompts/
│   ├── cfo_agent.txt
│   ├── ops_agent.txt
│   └── strategy_agent.txt
│
└── ml/
    ├── cv_models/
    └── anomaly_detection/

---

# 10. Knowledge Sources for RAG

Documents used for retrieval:

- PRD
- financial models
- fulfillment strategy
- operating procedures
- margin analysis

These documents are embedded and stored in the vector database.

---

# 11. CFOBuddy Chatbot

CFO can ask questions like:

Why are margins declining?
Which stores are hurting unit economics?
Where should we reduce cost?
What happens if discounts increase 5%?

The system retrieves data and generates reasoning.

Example output:

Margin decline is driven by higher discounting in Zone East and increased delivery distance.

Reducing discounts by 2% could recover 3.5% contribution margin.

---

# 12. Pulse CEO Dashboard

The CEO dashboard shows simplified signals.

Only three metrics are visible.

Cash Health
Fulfillment Flow
Unit Economics Quality

Each signal includes:

- status color
- explanation
- optional trend indicator

---

# 13. Development Plan

The system will be built in phases.

Phase 1

Environment setup  
Repo structure  
Backend framework

Phase 2

Neon database integration  
pgvector setup

Phase 3

Embedding pipeline

Phase 4

RAG retrieval system

Phase 5

LangGraph agent system

Phase 6

CFO reasoning agent

Phase 7

Operations agent

Phase 8

Strategy agent

Phase 9

CEO dashboard

---

# 14. AI Safety & Governance

The system must follow strict constraints:

No facial recognition

No employee monitoring

Only aggregated operational signals

CFO approval for all financial thresholds

---

# 15. Success Metrics

The system is successful if:

CEOs check the app daily

Financial surprises are reduced

Operational risks are detected early

CFO decision speed increases

---

# 16. Key Principle

This is not a dashboard.

This is a **financial decision operating system**.

The system helps CFOs reason about the business and communicate clear signals to the CEO.
