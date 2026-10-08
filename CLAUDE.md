# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Design + prototype package for a **Next-Gen R&R (Rewards & Recognition) portal** to be built for the user's team. It is the reference for a portal with five core features: a kudos/praise feed, company tree sync (HR directory), an AI workflow agent that validates and routes recognition/nominations, Employee of the Quarter (EoQ) awards with a jury, and a points economy (wallet + marketplace).

The three deliverables are **standalone static HTML files** — no build step, no dependencies, no server. Open any of them in a browser.

- `team-structure.html` — the REAL org tree and the real example flows. This is the source of truth for people and routing.
- `rr-wireframes.html` — 12 lo-fi wireframes ("Figma pass") covering every screen of the journey. Grayscale by convention; teal marks tappable elements, amber dashed boxes are design notes.
- `rr-portal-prototype.html` — clickable end-to-end demo: kudos with live AI checks → manager dashboard with budget → nomination → AI review → approvals → jury vote → winner → wallet ledger → marketplace redemption.

## Real team data (use these names)

Org chain (updated 2026-10-08: Prastina is the head; Shan and Prateesh sit on the same level beneath them): **Prastina** (org head) → **Shan** (senior manager, L2) and **Prateesh** (manager, budget owner, L1) → interns **Nikhilesh, Syed, Shourya**, who all report to Prateesh. The earlier 7-intern roster (Nandana, Anu, Bhavani, Tarun) was retired to keep the demo tight.

Routing rules that come from the tree:
- Peer kudos to an intern notifies Prateesh automatically.
- Award nominations: if an intern nominates, approvals start at **Prateesh → Prastina → Shan → jury**; if the manager nominates, they start at **Prastina → Shan → jury**.

## The 7 personas (mapped to the real people)

| Persona | Person | Carries / does |
|---|---|---|
| Employee | Nikhilesh | demo wallet owner |
| Peer Employee | Syed | peer kudos, ≤100-pt attach |
| Manager L1 | Prateesh | Manager boost quota (10,000/mo) |
| Manager L2 | Shan | Quarterly Excellence quota |
| Manager L3 | Prastina | Annual Pride quota |
| Manager with Quota & Budget | registry decides (Prateesh today) | the carrier **changes per award type** |
| Admin / HR | the awards office (no named person) | rules, pools, ballot, jury |

Employee has two demo views (Nikhilesh and Shourya) — same persona keys for both.

## Award registry (the quota rules)

`AWARDS` in the prototype is the single source of truth; `CARRIER_POOL` holds each carrier's points pool (Prateesh · L1 pool 10,000/mo seeded 6,500 used; Shan · L2 pool 25,000; Prastina · L3 pool 50,000; awards office 40,000). Rows: Kudos thanks (free), Peer reward (≤100 cap → office pool), Manager boost (100–1,000 → Prateesh), Quarterly Excellence (2,500 → Shan), Annual Pride (10,000 → Prastina), EoQ (5,000 → awards office). The Award rules view lets Admin/HR flip a carrier with a `<select>` — give flows, approval routes and pool deductions all re-read it live. The key emids rule: **the quota-carrying manager is not one fixed person; each award type names its own.**

## Business rules baked into the flows

- Kudos is always **free to give**; points are optional and separate.
- Peer recognition reward cap: **100 points** (paid from the program pool). Manager boost range: 100–1,000 points. Quarterly Excellence: 2,500. EoQ award: **5,000 points**. Annual Pride: 10,000.
- Manager pools: exceeding a pool blocks the gift and offers "reduce" or "request more budget" (escalates up the tree — Prateesh → Prastina → Shan/office).
- Wallet is a strict ledger — every point in/out is recorded; marketplace treats **10 points = ₹1**. The demo wallet is **Nikhilesh's**.
- Approvals walk the tree per the registry: intern-nominated EoQ starts at Prateesh, manager-nominated at Prastina; each step is gated to that persona's person (Approve button shows whom you're acting as).

## Technical notes

- `rr-portal-prototype.html` is vanilla JS in one file. All app state lives in a single `S` object at the top of the script (points, ledger, posts, budgets, nomination state incl. `route`/`step`, per-persona notification lists). Views are `<main id="view-…">` sections toggled by `openView()`; renderers are `renderFeed/renderManager/renderAwards/renderApproval/renderJury/renderRules/renderPersonaMenu` etc. Modify state and re-render — never hand-edit the rendered lists.
- Key consts: `PERSONAS` (the 7), `ROLES` (real people + persona field), `DIR` (directory for AI checks), `AWARDS` (registry: id/icon/points/given/route/carrier), `CARRIER_POOL` (budget pools per carrier), `WALLET_OWNER` ('Nikhilesh'). The approval chain is **built live from the registry** (`buildRoute()` by nominator type) — no hardcoded manager names anywhere.
- The persona switcher (top-right avatar) opens a 7-row drawer; switching picks the persona's person and auto-opens their home view (interns → feed, managers → dashboard, Quota & Budget + Admin/HR → Award rules). The manager dashboard shows the pools carried by the current persona; the Award rules view is the rule-book table with carrier `<select>`s.
- Since 2026-10-08 the prototype uses the **real team** (Shan/Prastina/Prateesh/Nikhilesh/Syed/Shourya + the generic awards office). The old fictional story team (Priya/Rahul/Anjali/Kiran/Arjun/Meera) is retired — do not reintroduce it.
- Shared design tokens (teal `#0C7A6C` primary, gold `#9A6A0B` for points/value, light green-grey background) live in `:root` CSS variables in each file. System fonts only — the files are expected to render correctly inside sandboxed previews with no network.
- Keep every deliverable **single-file and dependency-free**.

## Working style for this repo

The user prefers: structure/tree **first**, then wireframes ("Figma"), then simple clickable HTML — "simple, no heavy UI, just simple". Real names for anything representing the org. Wireframes stay lo-fi until the user asks for hi-fi polish.

## Git status

Initialized 2026-10-08 as its own repo (branch `main`); remote `origin` = **github.com/avnik-18/RRR.git**, first push landed (27d7c25). Deploy target: **Vercel, git-integration style** — the user imports the repo at vercel.com/new, and every push to `main` redeploys. Git runs from WSL: `wsl git -C /mnt/d/dashboard/RR …`. Do not push without the user's explicit go-ahead; `index.html` exists purely as the demo landing page (links to the three deliverables) and may be excluded from "single-file deliverable" expectations.
