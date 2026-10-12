# Figma Make prompt pack — v5 · prompts 2–9 at max detail (≈ the 2000-char cap, >1.25× Prompt 1)

MESSAGE 1 = Prompt 1 block only. Then one prompt per message: 2 → 9, always waiting between them.

---

## PROMPT 1

"Applause · emids R&R" portal prototype.
BRAND RULES (exact hexes): Emids Teal #47A2B0 = only primary accent, on every surface ≥20% (buttons, links, active rail chip, chart strokes). Emids Black #0E0E0E = ink on light surfaces and dark panels/heroes. Warm White #F2F2F0 = cards, sheets, the app card. Signals only, never decor: Surgeon Green #45BDA0 success, Sterile Blue #00B9F9 info, Signal Red #E04F4F alert. Human accents: Mauve #B89DCB + Yellow #F2C94C — one per photo, max two per chart.
STAGE: full-bleed soft gradient Teal→Black (top-left→bottom-right). The entire app floats as ONE Warm White card, 24px radius, soft shadow, centered.
SHELL: slim top strip — search (⌘K), bell with badge, teal "Ask AI" pill, avatar chip opening a right drawer. Left rail: Home, Recognize, Awards, Jury, Award rules, My wallet, Marketplace, People; active item = teal chip. Borders #E4E4E2 1px; radius 14–16px; numerals big and tight.
PERSONA DRAWER (7 rows, avatar + one line):
1 Employee — Nikhilesh · receives awards, spends points
2 Employee — Shourya · second employee view
3 Peer — Syed · peer kudos, ≤100-pt attach
4 Manager L1 — Prateesh · three interns, Manager boost quota
5 Manager L2 — Shan · senior manager, Quarterly Excellence quota
6 Manager L3 — Prastina · org head, Annual Pride quota
7 Admin/HR — awards office · rules, budgets, ballot, jury
ORG: Prastina is org head; Shan and Prateesh same level below; interns Nikhilesh, Syed, Shourya under Prateesh.

## PROMPT 2

Employee home inside the floating card. Layout: row 1 = GREETING + KPI trio; row 2 = balance card (40%) + Top buddies (60%); row 3 = rewards progress full width; row 4 = feed (65%) + upcoming rail (35%).
Header: "Rise and shine, Nikhilesh! 👋" (Emids Black, 40px) + teal "＋ Give recognition" button.
KPI cards ×3: title + info dot, 32px number, delta line — Rewards 2,450 pts (+180/month, teal mini bar 80%), Nominations 2 pending (+1 this week, Sterile Blue tick), Score 64% (−3%, Signal Red tick).
Balance card: "Your total rewards balance:", 44px "2,450 pts", teal "Redeem now"; hover = teal ring.
Top buddies: label "who you appreciate the most"; row Syed (Mauve ring, "12 kudos exchanged") + teal "View details"; sparkline teal with one Yellow dot + dashed grey baseline + "+18%" pill (Surgeon Green).
Rewards progress: "All time ▸" chip; Apr..Dec; confident teal line + dashed grey comparison; ring markers; pinned hover cards Jul "+5%" (green tick), Sep "−3%" (red tick); legend "you vs team average".
Feed: cards (author → recipient, category chip, message, values chips "Customer champion · Engineering collaborated", Celebrate ♥ / Comment / Share; like hearts turn Mauve). Include one "Kudos of the week" featured card (teal left edge) and one manager boost post with yellow "+500 boost pts" chip. Empty state (Shourya view): "No feed yet — give the first recognition" with ghost CTA.

## PROMPT 3

Give recognition wizard — modal 560px, warm-white, header 3 step chips (1 Category · 2 Message · 3 Preview; active teal, done = Surgeon Green tick), ✕ close.
Step 1: "Who are you recognizing?" — search card (avatar, name, title, teal Select). Row: award type select (Customer Champion / Quick Thanks / Collaboration Star) + points preset chips 25/50/100 (peer cap 100; selected = teal fill). Helper: "Kudos stays free — points are optional."
Step 2: textarea placeholder "Talk about what they did and the impact", char counter 0/400. AI panel (dashed insert): rows "Names a real contribution ✓", "Positive tone ✓", "Recipient matches the directory ✓" (Surgeon Green); if recipient not in directory → Signal Red "⚠ not found in the HR directory — pick from the list"; vague draft → red line "Say WHAT and the impact".
Send disabled until ≥30 chars + valid directory name.
Step 3: preview card (from → to, award chip, points chip, date) + routing strip: "Per Award rules, this award's budget is carried by Prateesh (Manager L1)" — teal path chips You → Prateesh → pool deduct. Primary "Send recognition". Cancel keeps draft in memory ("Draft saved").

## PROMPT 4

Awards hub: header "Employee of the Quarter", sub "Q3 2026 · submissions close 30 Sep", chip "AI-assisted intake".
Candidate grid ×3: avatar, name, "18 recognitions · 6 manager" line, AI evidence note ("Twice rebuilt the failing test suite overnight; kept the module demo on track"), ghost "Nominate". Status strip: "No nomination submitted this quarter — Track ▸"; after submit: submitted candidate card gets teal "submitted ✓" chip.
Nominate view: back link; candidate select (Nikhilesh / Syed / Shourya with counts); coverage chips Delivery / Customer impact / Collaboration / Innovation (multi-select teal); textarea "Name the work and its impact…".
AI workflow review panel (dashed): "Run AI review"; five rows animate spinner→tick (Surgeon Green): Eligible employee · reporting tree / Names work + impact / Supporting evidence found / No duplicate this cycle / Policy compliance. Then "AI summary for the jury" card (2-line generated text + "Drafted for jury review — the committee votes independently").
Footer: ghost Back + primary "Submit nomination" disabled until the summary exists. On submit: toast "Routing to Prateesh (Manager L1) via the tree" and the status strip updates. Duplicate state: row 4 shows red "✓ already nominated this cycle — endorsement suggested instead".

## PROMPT 5

Approval tracking view. Left 60% "Approval chain": vertical timeline; intern-nomination steps: 1 Submission "received · AI-reviewed" (done), 2 Prateesh · Manager L1 "routing from the company tree — intern nomination", 3 Shan · Manager L2 "tree-routed escalation", 4 Prastina · Manager L3 "org head approval", 5 Awards office · Admin/HR "ballot opens after sign-off". States: done = Surgeon Green dot + "approved", current = teal ring pulse + "in progress", waiting = grey. Connector line grey.
Chip above card: "Payout: 5,000 pts from the awards office pool".
Right 40%: candidate card (40px avatar, name, "Intern · reports to Prateesh", justification text) + Endorsements card: "+6 peers" chip (Mauve), ghost "Endorse", note "An intern nominated; Prateesh can endorse instead of duplicating paperwork".
Action bar ONLY for the step's owner: primary "Approve (as Prateesh)" + ghost "Request changes" + "Reject" (L1 only). Request changes → notice "Changes requested — Syed got a notice ✏️". Reject → "Slot reusable this cycle ✖". Office signs off → last step chip "ballot live" + toast "Q3 ballot is live".
Variant note under the timeline: "If a manager nominates, the chain starts at Shan (L2)."

## PROMPT 6

Jury dashboard. Header "Jury · Q3 ballot" + note "AI informs the vote; it never casts it."
Table columns: Candidate (avatar+name) · Recognitions · Impact (stars) · AI check (✓ Surgeon Green) · Endorsed (+6) · Vote (teal ghost → "voted ✓" filled). Nominee row carries a teal "new" chip.
Qualifying bar: "Voting opens when the awards office clears a nomination — all files below are AI-annotated."
SCORESHEET on row select: header card (avatar, name, AI summary paragraph "drafted from recognition history"), stat chips: Innovation 9 · Leadership impact 4 · $1.2M revenue protected (Sterile Blue info dots).
"YOUR SCORECARD — evaluate this nomination": criteria rows Reported uplift to leadership / Value demonstration / Culture of inclusion, each a ten-dot 18px selector (filled = teal, hover ring), value label updates ("7 / 10 — strong"); optional note field "Optional note for the committee"; primary "Submit scorecard" disabled until every row scored; on submit → teal chip "scorecard recorded".
When votes exist: "Declare winner" teal button; tie case → hint "One vote decides — invite the committee". Winner overlay: medal with Yellow ring, name, "+5,000 points posted to the wallet ledger", buttons Open wallet / Close. Ledger line: "+5,000 · EoQ award · carrier: awards office pool".

## PROMPT 7

"Award rules — the quota registry" (Admin/HR). Header + sub: "Every award declares who gives it, its approval route, and which manager carries the quota. Flip one — the whole flow follows."
Table, 6 dense rows: Award (icon + name + points badge) · Given by · Approval route (grey chip sequence) · Quota carrier (dropdown) · Carrier pool remaining ("6,500 / 10,000" + thin bar).
1 Kudos thanks · free · Anyone (Employee, Peer) · "No approval — always free" · none · —
2 Peer reward ≤100 · Peer/Employee · "cap check (auto)" · Awards office · 28,000/40,000
3 Manager boost 100–1,000 · Manager L1 · "pool guard 10,000/mo" · Prateesh · 3,500/10,000
4 Quarterly Excellence 2,500 · L1 above boost · L1 draft → L2 approval → deduct · Shan · 16,000/25,000
5 Annual Pride 10,000 · L2/L3 · L2 review → L3 approval → deduct · Prastina · 30,000/50,000
6 Employee of the Quarter 5,000 · nomination · AI review → L1 → L2 → L3 → office → jury · Awards office · 5,000/20,000
Note card (teal border): "The quota-carrying manager is not one fixed person — each award type names its own. Change a carrier and every give/approval flow re-routes instantly."
Behavior sample: change Quarterly carrier to Shan → toast "Quarterly Excellence: carrier changed Shan → Prastina · flows re-routed ⚖"; pool cell updates in place.
Footnote: "Rules sync to every persona's view that uses them."

## PROMPT 8

My wallet: dark Emids Black panel (rounded 16): "Available", 44px "2,450 pts" in Warm White; right "+4,350 earned" (Surgeon Green) "−3,000 redeemed" (Signal Red); outlined teal "Redeem in marketplace ▸".
Middle strip on Warm White: "How points arrive" chips — Peer 0–100 · Manager boost 100–1,000 · Quarterly 2,500 · EoQ 5,000 (Yellow ring + "awards office pool") · Annual 10,000.
Ledger card "Ledger — every point in and out": Change / Why / When / Balance rows: +500 Welcome bonus · +350 Spot award · FixIt Friday · +100 Peer reward · Syed · −600 Swiggy order — value colors green/red, running balance right.
Marketplace: dark hero (photo-gradient) "THRIVE REWARDS" eyebrow, H1 "Use your points", balance chip 2,450 pts, "View wallet →". Tabs All cards / Experiences / Memberships / Gifting. Featured "A weekend to remember" banner + teal "Browse". Voucher grid ×4: ₹2,000 Digital gift card · ₹2,250 Travel credit · 3-Month Premium 1,650 · ₹2,600 Annual membership — Mauve heart (filled = saved, toast "Added to wishlist"), cost line "2,000 pts · ₹200 credit", teal Redeem; insufficient shows "Need 550 more" ghost. Confirm modal: balance now / −cost / after, primary "Redeem". Success: "Voucher on its way", code "APPL-8F3K-…", note "10 points = ₹1 · codes by email & wallet".

## PROMPT 9

People: header "See how we're connected." + search "Search & add people ⌘K" + Matrix/List toggles.
Dotted warm-white canvas, org tree with teal connective lines; node cards = avatar + name + one-liner; selected = solid teal border + "reports to" hint.
Tree: Prastina (Higher title · org head) top; SAME level: Shan (senior manager · L2 · quarterly quota) and Prateesh (manager · L1 · budget owner); from Prateesh a bracket to Nikhilesh / Syed / Shourya (Intern). Side note card: "The tree decides routing — kudos notifies the manager of record; nominations start at the right manager."
Second note: "Fresh from HR: joins, exits, transfers re-route notifications and approvals the next morning — no manual admin."
Manager space strip (when persona = manager) above content: "🧭 Manager space — Team · Approvals 2 · Budget".
Team: 3 member cards (avatar, last kudos line, "＋ points" ghost opening 100/500/1,000 chips, "Nominate" teal text; kudos recipients highlighted).
Approvals: rows with candidate + route position + Approve/Request changes.
Budget: quota card "Prateesh · L1 pool" — bar 3,500 remaining, chips "⚡ boost", caption "Award wallets follow the registry", button "Request more budget" (tooltip "Escalates to Shan (L2), then Prastina (L3) — the tree decides").
