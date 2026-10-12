import { useState, type ReactNode } from "react";

type IconName =
  | "home"
  | "spark"
  | "award"
  | "jury"
  | "rules"
  | "wallet"
  | "market"
  | "people"
  | "search"
  | "bell"
  | "arrow"
  | "close"
  | "chevron";

const iconPaths: Record<IconName, ReactNode> = {
  home: <><path d="M3 10.8 12 3l9 7.8"/><path d="M5.5 9.5V21h13V9.5M9.5 21v-6h5v6"/></>,
  spark: <><path d="m12 2 1.5 5.2L19 9l-5.5 1.8L12 16l-1.5-5.2L5 9l5.5-1.8L12 2Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></>,
  award: <><circle cx="12" cy="9" r="5"/><path d="m8.5 13-1 8 4.5-2 4.5 2-1-8"/></>,
  jury: <><path d="M4 20h16M7 17h10M12 4v10M6 7h12"/><path d="m6 7-3 5h6L6 7Zm12 0-3 5h6l-3-5Z"/></>,
  rules: <><path d="M6 3h12v18H6z"/><path d="M9 8h6M9 12h6M9 16h4"/></>,
  wallet: <><path d="M3 6.5h15a3 3 0 0 1 3 3V19H3V6.5Z"/><path d="M3 7V5a2 2 0 0 1 2-2h12v3.5M16 12h5"/></>,
  market: <><path d="M4 9v12h16V9M3 9l2-6h14l2 6"/><path d="M3 9a3 3 0 0 0 5 2 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 5-2M9 21v-6h6v6"/></>,
  people: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 2.5-6 6-6s6 2 6 6M15 15c3.5-.5 6 1 6 4"/></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
  bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></>,
  arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  chevron: <path d="m9 6 6 6-6 6"/>,
};

function Icon({ name, size = 19 }: { name: IconName; size?: number }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

const personas = [
  { name: "Nikhilesh", role: "Employee", detail: "receives awards, spends points", initials: "NK", color: "teal" },
  { name: "Shourya", role: "Employee", detail: "second employee view", initials: "SH", color: "mauve" },
  { name: "Syed", role: "Peer", detail: "peer kudos, ≤100-pt attach", initials: "SY", color: "yellow" },
  { name: "Prateesh", role: "Manager L1", detail: "three interns, Manager boost quota", initials: "PT", color: "green" },
  { name: "Shan", role: "Manager L2", detail: "senior manager, Quarterly Excellence quota", initials: "SN", color: "blue" },
  { name: "Prastina", role: "Manager L3", detail: "org head, Annual Pride quota", initials: "PR", color: "mauve" },
  { name: "Awards office", role: "Admin / HR", detail: "rules, budgets, ballot, jury", initials: "AO", color: "black" },
];

const navItems: { label: string; icon: IconName }[] = [
  { label: "Home", icon: "home" },
  { label: "Recognize", icon: "spark" },
  { label: "Awards", icon: "award" },
  { label: "Jury", icon: "jury" },
  { label: "Award rules", icon: "rules" },
  { label: "My wallet", icon: "wallet" },
  { label: "Marketplace", icon: "market" },
  { label: "People", icon: "people" },
];

function Avatar({ initials, color, large = false }: { initials: string; color: string; large?: boolean }) {
  return <span className={`avatar avatar-${color} ${large ? "avatar-large" : ""}`}>{initials}</span>;
}

function RewardsChart() {
  return (
    <div className="rewards-chart">
      <svg viewBox="0 0 900 190" preserveAspectRatio="none" role="img" aria-label="Rewards progress compared with team average">
        <defs>
          <linearGradient id="rewards-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#47A2B0" stopOpacity=".2"/>
            <stop offset="100%" stopColor="#47A2B0" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path className="grid" d="M0 35H900M0 95H900M0 155H900"/>
        <path className="compare" d="M0 143C95 130 123 139 225 113S351 124 450 96 590 104 675 73 795 69 900 44"/>
        <path fill="url(#rewards-area)" d="M0 151C87 139 137 122 225 127S367 91 450 102 578 62 675 72 803 31 900 28V180H0Z"/>
        <path className="current" d="M0 151C87 139 137 122 225 127S367 91 450 102 578 62 675 72 803 31 900 28"/>
        {[0, 112, 225, 337, 450, 562, 675, 787, 900].map((x, index) => {
          const y = [151, 137, 127, 101, 102, 75, 72, 42, 28][index];
          return <circle key={x} cx={x} cy={y} r="5" fill="#F2F2F0" stroke="#47A2B0" strokeWidth="3"/>;
        })}
      </svg>
      <div className="chart-pin pin-jul"><span>↗</span><strong>+5%</strong><small>Jul</small></div>
      <div className="chart-pin pin-sep negative"><span>↘</span><strong>−3%</strong><small>Sep</small></div>
      <div className="rewards-months">{["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(month => <span key={month}>{month}</span>)}</div>
    </div>
  );
}

function FeedCard({ featured, boost, liked, onLike }: { featured?: boolean; boost?: boolean; liked: boolean; onLike: () => void }) {
  return (
    <article className={`feed-card ${featured ? "featured" : ""}`}>
      {featured && <p className="featured-label"><Icon name="spark" size={13}/> KUDOS OF THE WEEK</p>}
      <div className="feed-author">
        <Avatar initials={boost ? "PT" : "SY"} color={boost ? "green" : "yellow"} large/>
        <div><strong>{boost ? "Prateesh" : "Syed"} <span>→</span> Nikhilesh</strong><small>{boost ? "2 hours ago" : "Yesterday at 3:42 PM"}</small></div>
        <span className="category-chip">{boost ? "Above & beyond" : "Team player"}</span>
      </div>
      <p className="feed-message">{boost ? "Your calm ownership during the client release made all the difference. You raised the bar for the whole team." : "Thank you for jumping in and helping untangle the data migration. That’s collaboration in action!"}</p>
      <div className="value-chips"><span>Customer champion</span><span>Engineering collaborated</span>{boost && <span className="boost-chip">+500 boost pts</span>}</div>
      <div className="feed-actions">
        <button className={liked ? "liked" : ""} onClick={onLike}>♥ <span>Celebrate{liked ? "d" : ""}</span></button>
        <button>Comment</button><button>Share</button>
      </div>
    </article>
  );
}

const recognitionDirectory = [
  { name: "Syed", title: "Software Engineer · HealthTech", initials: "SY", color: "yellow" },
  { name: "Shourya", title: "Associate Engineer · HealthTech", initials: "SH", color: "mauve" },
  { name: "Prateesh", title: "Engineering Manager · HealthTech", initials: "PT", color: "green" },
];

function RecognitionWizard({ open, sender, onClose, onSent }: { open: boolean; sender: string; onClose: () => void; onSent: () => void }) {
  const [step, setStep] = useState(1);
  const [recipientQuery, setRecipientQuery] = useState("Syed");
  const [award, setAward] = useState("Customer Champion");
  const [points, setPoints] = useState(50);
  const [message, setMessage] = useState("");
  const recipient = recognitionDirectory.find((person) => person.name.toLowerCase() === recipientQuery.trim().toLowerCase());
  const messageValid = message.trim().length >= 30;
  const canSend = Boolean(recipient) && messageValid;

  const sendRecognition = () => {
    if (!canSend) return;
    setStep(1);
    setRecipientQuery("Syed");
    setAward("Customer Champion");
    setPoints(50);
    setMessage("");
    onSent();
  };

  return (
    <div className={`wizard-layer ${open ? "visible" : ""}`} aria-hidden={!open}>
      <div className="wizard-scrim" onClick={onClose}/>
      <section className="recognition-wizard" role="dialog" aria-modal="true" aria-label="Give recognition">
        <header className="wizard-header">
          <div className="step-chips">
            {["Category", "Message", "Preview"].map((label, index) => {
              const number = index + 1;
              return <button key={label} className={`${step === number ? "active" : ""} ${step > number ? "done" : ""}`} onClick={() => number < step && setStep(number)}><i>{step > number ? "✓" : number}</i>{label}</button>;
            })}
          </div>
          <button className="wizard-close" onClick={onClose} aria-label="Close and save draft"><Icon name="close"/></button>
        </header>

        <div className="wizard-body">
          {step === 1 && <>
            <div className="wizard-title"><p className="eyebrow dark">STEP 1 OF 3</p><h2>Who are you recognizing?</h2><span>Choose a teammate and the kind of impact they made.</span></div>
            <div className="recipient-search">
              <label><Icon name="search" size={17}/><input value={recipientQuery} onChange={(event) => setRecipientQuery(event.target.value)} placeholder="Search by name or team" aria-label="Search recipient"/></label>
              {recipient ? <div className="recipient-result"><Avatar initials={recipient.initials} color={recipient.color} large/><span><strong>{recipient.name}</strong><small>{recipient.title}</small></span><button>Select</button></div>
              : <div className="recipient-missing"><span>!</span><p><strong>No directory match</strong>Choose a teammate from the HR directory.</p></div>}
              {recipientQuery && <div className="directory-suggestions">
                {recognitionDirectory.filter(person => person.name.toLowerCase().includes(recipientQuery.toLowerCase()) && person.name !== recipient?.name).map(person => <button key={person.name} onClick={() => setRecipientQuery(person.name)}><Avatar initials={person.initials} color={person.color}/><span>{person.name}<small>{person.title}</small></span></button>)}
              </div>}
            </div>
            <div className="wizard-fields">
              <label className="award-field"><span>Award type</span><select value={award} onChange={(event) => setAward(event.target.value)}><option>Customer Champion</option><option>Quick Thanks</option><option>Collaboration Star</option></select></label>
              <fieldset><legend>Optional points</legend><div className="point-presets">{[25, 50, 100].map(value => <button type="button" className={points === value ? "selected" : ""} key={value} onClick={() => setPoints(value)}>{value}</button>)}</div></fieldset>
            </div>
            <p className="kudos-helper"><Icon name="spark" size={14}/> Kudos stays free — points are optional. Peer awards are capped at 100 points.</p>
          </>}

          {step === 2 && <>
            <div className="wizard-title"><p className="eyebrow dark">STEP 2 OF 3</p><h2>Make it meaningful</h2><span>Share what stood out and why it mattered.</span></div>
            <label className="message-field"><textarea value={message} maxLength={400} onChange={(event) => setMessage(event.target.value)} placeholder="Talk about what they did and the impact"/><span>{message.length}/400</span></label>
            <div className="ai-review">
              <div className="ai-review-title"><span><Icon name="spark" size={16}/></span><div><strong>AI message check</strong><small>Helpful guidance before you send</small></div></div>
              {recipient ? <>
                <p className={messageValid ? "pass" : "fail"}>{messageValid ? "✓ Names a real contribution" : "⚠ Say WHAT they did and the impact"}</p>
                <p className={message.length >= 10 ? "pass" : "neutral"}>{message.length >= 10 ? "✓ Positive tone" : "○ Positive tone"}</p>
                <p className="pass">✓ Recipient matches the directory</p>
              </> : <p className="fail">⚠ Not found in the HR directory — pick from the list</p>}
            </div>
          </>}

          {step === 3 && <>
            <div className="wizard-title"><p className="eyebrow dark">STEP 3 OF 3</p><h2>Ready to make their day?</h2><span>Review the details before sending your recognition.</span></div>
            <article className="recognition-preview">
              <div className="preview-people"><div><Avatar initials={sender.slice(0, 2).toUpperCase()} color="teal"/><span><small>FROM</small><strong>{sender}</strong></span></div><Icon name="arrow"/><div><Avatar initials={recipient?.initials ?? "?"} color={recipient?.color ?? "black"}/><span><small>TO</small><strong>{recipient?.name ?? recipientQuery}</strong></span></div></div>
              <p>“{message}”</p>
              <div className="preview-meta"><span>{award}</span><span>{points} points</span><time>26 May 2025</time></div>
            </article>
            <div className="routing-strip"><p>Per Award rules, this award’s budget is carried by <strong>Prateesh (Manager L1)</strong></p><div><span>You</span><Icon name="arrow" size={14}/><span>Prateesh</span><Icon name="arrow" size={14}/><span>Pool deduct</span></div></div>
          </>}
        </div>

        <footer className="wizard-footer">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <span className="draft-note">Draft saved</span>
          {step > 1 && <button className="back-button" onClick={() => setStep(step - 1)}>Back</button>}
          {step < 3 ? <button className="next-button" onClick={() => setStep(step + 1)} disabled={step === 1 && !recipient}>Continue <Icon name="arrow" size={16}/></button>
          : <button className="next-button" onClick={sendRecognition} disabled={!canSend}><Icon name="spark" size={15}/> Send recognition</button>}
        </footer>
      </section>
    </div>
  );
}

const awardCandidates = [
  { name: "Nikhilesh", initials: "NK", color: "teal", count: "18 recognitions · 6 manager", note: "Twice rebuilt the failing test suite overnight; kept the module demo on track." },
  { name: "Syed", initials: "SY", color: "mauve", count: "16 recognitions · 4 manager", note: "Turned fragmented release notes into a clear customer plan and unblocked two teams." },
  { name: "Shourya", initials: "SH", color: "yellow", count: "14 recognitions · 5 manager", note: "Built a reusable accessibility audit that caught critical issues before launch." },
];

const approvalSteps = [
  { name: "Submission", role: "Nominee", detail: "received · AI-reviewed" },
  { name: "Prateesh", role: "Manager L1", detail: "routing from the company tree — intern nomination" },
  { name: "Shan", role: "Manager L2", detail: "tree-routed escalation" },
  { name: "Prastina", role: "Manager L3", detail: "org head approval" },
  { name: "Awards office", role: "Admin / HR", detail: "ballot opens after sign-off" },
];

function ApprovalTracking({ persona, onBack }: { persona: string; onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [notice, setNotice] = useState("");
  const [endorsed, setEndorsed] = useState(false);
  const [ballotLive, setBallotLive] = useState(false);
  const owner = approvalSteps[currentStep]?.name;
  const isOwner = !ballotLive && persona === owner;

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3200);
  };

  const approve = () => {
    if (currentStep === approvalSteps.length - 1) {
      setBallotLive(true);
      showNotice("Q3 ballot is live");
      return;
    }
    setCurrentStep((step) => step + 1);
    setNotice("");
  };

  return (
    <section className="approval-tracking">
      <button className="nominate-back" onClick={onBack}>← Back to awards</button>
      <div className="approval-heading">
        <div><p className="eyebrow dark">EMPLOYEE OF THE QUARTER · Q3 2026</p><h1>Track approval</h1><p>Follow this nomination from submission to ballot.</p></div>
        <span className="tracking-id">NOM-0284</span>
      </div>
      <div className="approval-layout">
        <div className="chain-column">
          <span className="payout-chip">Payout: <strong>5,000 pts</strong> from the awards office pool</span>
          <article className="approval-chain">
            <div className="chain-title"><div><p className="eyebrow dark">APPROVAL CHAIN</p><h2>One clear route to the ballot</h2></div><span>{ballotLive ? "Complete" : `${currentStep} of 4 approvals`}</span></div>
            <div className="timeline">
              {approvalSteps.map((step, index) => {
                const done = ballotLive || index < currentStep;
                const current = !ballotLive && index === currentStep;
                return (
                  <div className={`timeline-step ${done ? "done" : current ? "current" : "waiting"}`} key={step.name}>
                    <span className="timeline-marker">{done ? "✓" : index + 1}</span>
                    <div className="timeline-copy">
                      <div><strong>{step.name}</strong><span>{step.role}</span>{index === approvalSteps.length - 1 && ballotLive && <i>ballot live</i>}</div>
                      <p>{step.detail}</p>
                    </div>
                    <span className="step-state">{done ? index === 0 ? "received" : "approved" : current ? "in progress" : "waiting"}</span>
                  </div>
                );
              })}
            </div>
            <div className="variant-note"><span>↳</span><p><strong>Routing variant</strong>If a manager nominates, the chain starts at Shan (L2).</p></div>
          </article>
        </div>
        <aside className="approval-sidebar">
          <article className="tracking-candidate">
            <p className="eyebrow dark">CANDIDATE</p>
            <div className="tracking-person"><Avatar initials="SY" color="yellow" large/><div><h2>Syed</h2><p>Intern · reports to Prateesh</p></div></div>
            <blockquote>“Syed turned fragmented release notes into a clear customer plan, unblocking two delivery teams ahead of the quarterly launch.”</blockquote>
            <div className="candidate-meta"><span>Customer impact</span><span>Collaboration</span></div>
          </article>
          <article className="endorsement-card">
            <div className="endorsement-title"><div><p className="eyebrow dark">ENDORSEMENTS</p><h2>Support from the team</h2></div><span>+6 peers</span></div>
            <p>An intern is already nominated; Prateesh can endorse instead of duplicating paperwork.</p>
            <button className={endorsed ? "endorsed" : ""} onClick={() => setEndorsed(!endorsed)}>{endorsed ? "✓ Endorsed" : "Endorse"}</button>
          </article>
          {isOwner && <div className="approval-actions">
            <p>You’re the current owner</p>
            <button className="approve-button" onClick={approve}>Approve (as {persona}) <Icon name="arrow" size={15}/></button>
            <button className="change-button" onClick={() => showNotice("Changes requested — Syed got a notice ✏️")}>Request changes</button>
            {currentStep === 1 && <button className="reject-button" onClick={() => showNotice("Slot reusable this cycle ✖")}>Reject</button>}
          </div>}
          {!isOwner && !ballotLive && <div className="owner-note"><span>i</span><p><strong>Waiting on {owner}</strong>Only the current step owner can take action.</p></div>}
        </aside>
      </div>
      {notice && <div className={`toast approval-toast ${notice.includes("reusable") ? "danger" : ""}`}><span>{notice.includes("ballot") ? "✓" : "i"}</span>{notice}</div>}
    </section>
  );
}

const juryCandidates = [
  { name: "Nikhilesh", initials: "NK", color: "teal", recognitions: 18, impact: 5, endorsed: 6, new: false, summary: "Nikhilesh consistently turned complex delivery risks into clear action, protecting launch quality while helping peers build confidence." },
  { name: "Syed", initials: "SY", color: "yellow", recognitions: 16, impact: 5, endorsed: 6, new: true, summary: "Syed connected detailed release work to customer outcomes, unblocking two teams and protecting a high-value healthcare launch." },
  { name: "Shourya", initials: "SH", color: "mauve", recognitions: 14, impact: 4, endorsed: 6, new: false, summary: "Shourya created a reusable accessibility audit that raised delivery quality and helped the wider team catch critical issues earlier." },
];

const scoreCriteria = ["Reported uplift to leadership", "Value demonstration", "Culture of inclusion"];

function JuryDashboard({ onOpenWallet }: { onOpenWallet: () => void }) {
  const [selected, setSelected] = useState(juryCandidates[1]);
  const [votedFor, setVotedFor] = useState("");
  const [scores, setScores] = useState([0, 0, 0]);
  const [note, setNote] = useState("");
  const [recorded, setRecorded] = useState(false);
  const [winner, setWinner] = useState<typeof juryCandidates[number] | null>(null);
  const baseVotes = [4, 4, 3];
  const finalVotes = juryCandidates.map((candidate, index) => baseVotes[index] + (votedFor === candidate.name ? 1 : 0));
  const topVote = Math.max(...finalVotes);
  const tied = finalVotes.filter((votes) => votes === topVote).length > 1;
  const allScored = scores.every((score) => score > 0);

  const selectCandidate = (candidate: typeof juryCandidates[number]) => {
    setSelected(candidate);
    setScores([0, 0, 0]);
    setNote("");
    setRecorded(false);
  };

  const declareWinner = () => {
    if (tied) return;
    setWinner(juryCandidates[finalVotes.indexOf(topVote)]);
  };

  return (
    <section className="jury-dashboard">
      <div className="jury-heading">
        <div><p className="eyebrow dark">AWARDS COMMITTEE · Q3 2026</p><h1>Jury · Q3 ballot</h1><p>AI informs the vote; it never casts it.</p></div>
        {votedFor && <div className="declare-block"><button onClick={declareWinner}>Declare winner <Icon name="award" size={15}/></button>{tied && <span>One vote decides — invite the committee</span>}</div>}
      </div>
      <div className="qualifying-bar"><span><Icon name="spark" size={16}/></span><p><strong>Qualified ballot</strong>Voting opens when the awards office clears a nomination — all files below are AI-annotated.</p></div>
      <div className="ballot-table-wrap">
        <table className="ballot-table">
          <thead><tr><th>Candidate</th><th>Recognitions</th><th>Impact</th><th>AI check</th><th>Endorsed</th><th>Vote</th></tr></thead>
          <tbody>
            {juryCandidates.map((candidate) => (
              <tr className={selected.name === candidate.name ? "selected" : ""} key={candidate.name} onClick={() => selectCandidate(candidate)}>
                <td><div className="ballot-person"><Avatar initials={candidate.initials} color={candidate.color}/><strong>{candidate.name}</strong>{candidate.new && <span>new</span>}</div></td>
                <td><strong>{candidate.recognitions}</strong><small>verified</small></td>
                <td><div className="impact-stars" aria-label={`${candidate.impact} out of 5 impact stars`}>{[1,2,3,4,5].map(star => <i className={star <= candidate.impact ? "filled" : ""} key={star}>★</i>)}</div></td>
                <td><span className="ai-check">✓ Passed</span></td>
                <td><span className="endorsed-count">+{candidate.endorsed}</span></td>
                <td><button className={votedFor === candidate.name ? "voted" : ""} onClick={(event) => { event.stopPropagation(); setVotedFor(candidate.name); }}>{votedFor === candidate.name ? "voted ✓" : "Vote"}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <article className="scoresheet">
        <div className="scoresheet-label">SCORESHEET</div>
        <header className="scoresheet-header">
          <Avatar initials={selected.initials} color={selected.color} large/>
          <div><h2>{selected.name}</h2><p><span><Icon name="spark" size={12}/> AI summary</span>{selected.summary} <small>Drafted from recognition history.</small></p></div>
          {recorded && <span className="recorded-chip">scorecard recorded</span>}
        </header>
        <div className="score-stats">
          <span><i>i</i><strong>Innovation</strong>9</span>
          <span><i>i</i><strong>Leadership impact</strong>4</span>
          <span><i>i</i><strong>Revenue protected</strong>$1.2M</span>
        </div>
        <div className="scorecard-title"><div><p className="eyebrow dark">YOUR SCORECARD</p><h3>Evaluate this nomination</h3></div><span>Score each criterion from 1–10</span></div>
        <div className="criteria-list">
          {scoreCriteria.map((criterion, criterionIndex) => (
            <div className="criterion-row" key={criterion}>
              <strong>{criterion}</strong>
              <div className="dot-selector">
                {[1,2,3,4,5,6,7,8,9,10].map(value => <button key={value} className={value <= scores[criterionIndex] ? "filled" : ""} aria-label={`${value} out of 10 for ${criterion}`} onClick={() => { setScores(current => current.map((score, index) => index === criterionIndex ? value : score)); setRecorded(false); }}/>)}
              </div>
              <span>{scores[criterionIndex] ? `${scores[criterionIndex]} / 10 — ${scores[criterionIndex] >= 9 ? "exceptional" : scores[criterionIndex] >= 7 ? "strong" : scores[criterionIndex] >= 4 ? "developing" : "limited"}` : "Not scored"}</span>
            </div>
          ))}
        </div>
        <div className="scorecard-footer">
          <label><span>Optional note for the committee</span><textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Add context for your scores…"/></label>
          <button disabled={!allScored || recorded} onClick={() => setRecorded(true)}>{recorded ? "Scorecard recorded ✓" : "Submit scorecard"}</button>
        </div>
      </article>
      {winner && <div className="winner-layer">
        <div className="winner-scrim" onClick={() => setWinner(null)}/>
        <article className="winner-card" role="dialog" aria-modal="true" aria-label="Award winner">
          <span className="winner-medal"><Icon name="award" size={30}/></span>
          <p className="eyebrow dark">EMPLOYEE OF THE QUARTER</p>
          <h2>{winner.name}</h2>
          <p>+5,000 points posted to the wallet ledger</p>
          <div className="ledger-line"><span>+5,000</span><strong>EoQ award</strong><small>carrier: awards office pool</small></div>
          <div className="winner-actions"><button className="wallet-open" onClick={onOpenWallet}>Open wallet</button><button onClick={() => setWinner(null)}>Close</button></div>
        </article>
      </div>}
    </section>
  );
}

const awardRules = [
  { id: "kudos", icon: "spark" as IconName, name: "Kudos thanks", points: "free", givenBy: "Anyone (Employee, Peer)", route: ["No approval — always free"], carrier: "none", pool: [0, 0] },
  { id: "peer", icon: "people" as IconName, name: "Peer reward", points: "≤100", givenBy: "Peer / Employee", route: ["cap check (auto)"], carrier: "Awards office", pool: [28000, 40000] },
  { id: "boost", icon: "wallet" as IconName, name: "Manager boost", points: "100–1,000", givenBy: "Manager L1", route: ["pool guard 10,000/mo"], carrier: "Prateesh", pool: [3500, 10000] },
  { id: "quarterly", icon: "award" as IconName, name: "Quarterly Excellence", points: "2,500", givenBy: "L1 above boost", route: ["L1 draft", "L2 approval", "deduct"], carrier: "Shan", pool: [16000, 25000] },
  { id: "annual", icon: "award" as IconName, name: "Annual Pride", points: "10,000", givenBy: "L2 / L3", route: ["L2 review", "L3 approval", "deduct"], carrier: "Prastina", pool: [30000, 50000] },
  { id: "eoq", icon: "jury" as IconName, name: "Employee of the Quarter", points: "5,000", givenBy: "Nomination", route: ["AI review", "L1", "L2", "L3", "office", "jury"], carrier: "Awards office", pool: [5000, 20000] },
];

const carrierPools: Record<string, [number, number]> = {
  "Awards office": [5000, 20000],
  Prateesh: [3500, 10000],
  Shan: [16000, 25000],
  Prastina: [30000, 50000],
};

function AwardRules() {
  const [carriers, setCarriers] = useState<Record<string, string>>(() => Object.fromEntries(awardRules.map((rule) => [rule.id, rule.carrier])));
  const [rulesToast, setRulesToast] = useState("");

  const changeCarrier = (ruleId: string, nextCarrier: string) => {
    const rule = awardRules.find((item) => item.id === ruleId);
    const previous = carriers[ruleId];
    setCarriers((current) => ({ ...current, [ruleId]: nextCarrier }));
    setRulesToast(`${rule?.name}: carrier changed ${previous} → ${nextCarrier} · flows re-routed ⚖`);
    window.setTimeout(() => setRulesToast(""), 3200);
  };

  return (
    <section className="rules-dashboard">
      <div className="rules-heading">
        <div><p className="eyebrow dark">ADMIN / HR · POLICY ENGINE</p><h1>Award rules — the quota registry</h1><p>Every award declares who gives it, its approval route, and which manager carries the quota. Flip one — the whole flow follows.</p></div>
        <span><Icon name="rules" size={15}/> Live rules</span>
      </div>
      <div className="rules-table-wrap">
        <table className="rules-table">
          <thead><tr><th>Award</th><th>Given by</th><th>Approval route</th><th>Quota carrier</th><th>Carrier pool remaining</th></tr></thead>
          <tbody>
            {awardRules.map((rule, index) => {
              const carrier = carriers[rule.id];
              const pool = carrier === rule.carrier ? rule.pool : carrierPools[carrier];
              const percentage = pool[1] ? (pool[0] / pool[1]) * 100 : 0;
              return (
                <tr key={rule.id}>
                  <td><div className="rule-award"><span><Icon name={rule.icon} size={16}/></span><div><small>0{index + 1}</small><strong>{rule.name}</strong></div><i>{rule.points}</i></div></td>
                  <td><span className="given-by">{rule.givenBy}</span></td>
                  <td><div className={`route-sequence ${rule.route.length > 3 ? "compact" : ""}`}>{rule.route.map((step, stepIndex) => <span key={step}>{step}{stepIndex < rule.route.length - 1 && <b>→</b>}</span>)}</div></td>
                  <td>
                    {carrier === "none" ? <span className="no-carrier">none</span> : <label className="carrier-select"><select value={carrier} onChange={(event) => changeCarrier(rule.id, event.target.value)} aria-label={`Quota carrier for ${rule.name}`}><option>Awards office</option><option>Prateesh</option><option>Shan</option><option>Prastina</option></select><Icon name="chevron" size={12}/></label>}
                  </td>
                  <td>{pool[1] ? <div className="pool-cell"><div><strong>{pool[0].toLocaleString()} / {pool[1].toLocaleString()}</strong><span>{Math.round(percentage)}%</span></div><div className="pool-bar"><i style={{ width: `${percentage}%` }}/></div></div> : <span className="pool-empty">—</span>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <article className="carrier-note"><span><Icon name="arrow" size={18}/></span><p><strong>The quota-carrying manager is not one fixed person — each award type names its own.</strong>Change a carrier and every give/approval flow re-routes instantly.</p></article>
      <p className="rules-footnote"><span>✓</span> Rules sync to every persona&apos;s view that uses them.</p>
      {rulesToast && <div className="toast rules-toast"><span>✓</span>{rulesToast}</div>}
    </section>
  );
}

const vouchers = [
  { name: "Digital gift card", value: "₹2,000", cost: 2000, detail: "₹200 credit", color: "teal" },
  { name: "Travel credit", value: "₹2,250", cost: 2250, detail: "₹225 credit", color: "blue" },
  { name: "3-Month Premium", value: "Premium", cost: 1650, detail: "membership", color: "mauve" },
  { name: "Annual membership", value: "₹2,600", cost: 3000, detail: "₹260 credit", color: "yellow" },
];

function WalletDashboard({ onMarketplace }: { onMarketplace: () => void }) {
  return (
    <section className="wallet-dashboard">
      <div className="wallet-heading"><div><p className="eyebrow dark">MY WALLET</p><h1>Points with a paper trail.</h1></div><p>Earned through recognition. Carried by the right award pool.</p></div>
      <article className="wallet-balance">
        <div><p>Available</p><strong>2,450 <small>pts</small></strong></div>
        <div className="wallet-totals"><span className="earned">+4,350 <small>earned</small></span><span className="redeemed">−3,000 <small>redeemed</small></span></div>
        <button onClick={onMarketplace}>Redeem in marketplace <Icon name="chevron" size={14}/></button>
      </article>
      <div className="points-arrive"><strong>How points arrive</strong><div><span>Peer <b>0–100</b></span><span>Manager boost <b>100–1,000</b></span><span>Quarterly <b>2,500</b></span><span className="eoq-arrival"><i/>EoQ <b>5,000</b><small>awards office pool</small></span><span>Annual <b>10,000</b></span></div></div>
      <article className="ledger-card">
        <div className="ledger-heading"><div><p className="eyebrow dark">AUDITABLE BY DESIGN</p><h2>Ledger — every point in and out</h2></div><span>4 entries</span></div>
        <div className="ledger-table">
          <div className="ledger-head"><span>Change</span><span>Why</span><span>When</span><span>Balance</span></div>
          {[
            ["+500", "Welcome bonus", "04 Apr", "2,600"],
            ["+350", "Spot award · FixIt Friday", "18 Apr", "2,950"],
            ["+100", "Peer reward · Syed", "02 May", "3,050"],
            ["−600", "Swiggy order", "12 May", "2,450"],
          ].map((row) => <div className="ledger-row" key={row[1]}><strong className={row[0].startsWith("+") ? "credit" : "debit"}>{row[0]}</strong><span>{row[1]}</span><time>{row[2]}</time><b>{row[3]} pts</b></div>)}
        </div>
      </article>
    </section>
  );
}

function Marketplace({ onWallet }: { onWallet: () => void }) {
  const [tab, setTab] = useState("All cards");
  const [saved, setSaved] = useState<string[]>([]);
  const [marketToast, setMarketToast] = useState("");
  const [redeeming, setRedeeming] = useState<typeof vouchers[number] | null>(null);
  const [success, setSuccess] = useState(false);
  const balance = 2450;

  const toggleSaved = (name: string) => {
    setSaved((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
    if (!saved.includes(name)) {
      setMarketToast("Added to wishlist");
      window.setTimeout(() => setMarketToast(""), 2200);
    }
  };

  return (
    <section className="marketplace-dashboard">
      <article className="market-hero">
        <div><p className="eyebrow">THRIVE REWARDS</p><h1>Use your points</h1><p>Choose something that makes the good work feel even better.</p></div>
        <div className="hero-wallet"><span>Available balance</span><strong>2,450 pts</strong><button onClick={onWallet}>View wallet <Icon name="arrow" size={14}/></button></div>
      </article>
      <nav className="market-tabs" aria-label="Marketplace categories">{["All cards", "Experiences", "Memberships", "Gifting"].map((item) => <button className={tab === item ? "active" : ""} key={item} onClick={() => setTab(item)}>{item}</button>)}</nav>
      <article className="featured-reward"><div><p className="eyebrow">FEATURED EXPERIENCE</p><h2>A weekend to remember</h2><span>Cabins, trails, and time away — from 2,200 pts.</span></div><button>Browse <Icon name="arrow" size={15}/></button></article>
      <div className="voucher-heading"><div><p className="eyebrow dark">CURATED FOR YOU</p><h2>{tab}</h2></div><span>10 points = ₹1</span></div>
      <div className="voucher-grid">
        {vouchers.map((voucher) => {
          const insufficient = voucher.cost > balance;
          return <article className="voucher-card" key={voucher.name}>
            <div className={`voucher-art voucher-${voucher.color}`}><span>{voucher.value}</span><button className={saved.includes(voucher.name) ? "saved" : ""} onClick={() => toggleSaved(voucher.name)} aria-label={`Save ${voucher.name}`}>♥</button><small>APPLAUSE SELECT</small></div>
            <h3>{voucher.name}</h3><p>{voucher.cost.toLocaleString()} pts · {voucher.detail}</p>
            <button className={`redeem-voucher ${insufficient ? "insufficient" : ""}`} onClick={() => !insufficient && setRedeeming(voucher)}>{insufficient ? `Need ${(voucher.cost - balance).toLocaleString()} more` : "Redeem"}</button>
          </article>;
        })}
      </div>
      {marketToast && <div className="toast"><span>♥</span>{marketToast}</div>}
      {redeeming && <div className="redeem-layer"><div className="winner-scrim" onClick={() => { setRedeeming(null); setSuccess(false); }}/><article className="redeem-modal" role="dialog" aria-modal="true" aria-label="Confirm reward redemption">
        {!success ? <>
          <p className="eyebrow dark">CONFIRM REDEMPTION</p><h2>{redeeming.name}</h2><p>Your voucher will be sent to your work email and saved here.</p>
          <div className="redemption-math"><span>Balance now <strong>{balance.toLocaleString()}</strong></span><span>Reward cost <strong>−{redeeming.cost.toLocaleString()}</strong></span><span>After redemption <strong>{(balance - redeeming.cost).toLocaleString()} pts</strong></span></div>
          <div className="redeem-actions"><button onClick={() => setRedeeming(null)}>Cancel</button><button onClick={() => setSuccess(true)}>Redeem</button></div>
        </> : <>
          <span className="success-glyph"><Icon name="award" size={28}/></span><p className="eyebrow dark">REDEMPTION COMPLETE</p><h2>Voucher on its way</h2><p>Use this code when you’re ready.</p>
          <div className="voucher-code"><span>APPL-8F3K-26Q</span><small>10 points = ₹1 · codes by email &amp; wallet</small></div>
          <button className="success-close" onClick={() => { setRedeeming(null); setSuccess(false); }}>Done</button>
        </>}
      </article></div>}
    </section>
  );
}

const peopleNodes = [
  { name: "Prastina", initials: "PR", color: "mauve", detail: "Higher title · org head" },
  { name: "Shan", initials: "SN", color: "blue", detail: "Senior manager · L2 · quarterly quota" },
  { name: "Prateesh", initials: "PT", color: "green", detail: "Manager · L1 · budget owner" },
  { name: "Nikhilesh", initials: "NK", color: "teal", detail: "Intern · delivery systems" },
  { name: "Syed", initials: "SY", color: "yellow", detail: "Intern · customer release" },
  { name: "Shourya", initials: "SH", color: "mauve", detail: "Intern · accessibility" },
];

function PeopleDashboard({ persona, onNominate }: { persona: { name: string; role: string }; onNominate: () => void }) {
  const [view, setView] = useState("Matrix");
  const [selectedPerson, setSelectedPerson] = useState("Prateesh");
  const [managerTab, setManagerTab] = useState("Team");
  const [pointsFor, setPointsFor] = useState("");
  const [peopleToast, setPeopleToast] = useState("");
  const [approvalCount, setApprovalCount] = useState(2);
  const isManager = persona.role.startsWith("Manager");

  const sendPoints = (name: string, points: number) => {
    setPointsFor("");
    setPeopleToast(`${points} points queued for ${name}`);
    window.setTimeout(() => setPeopleToast(""), 2400);
  };

  const Node = ({ name }: { name: string }) => {
    const person = peopleNodes.find((item) => item.name === name)!;
    return <button className={`org-node ${selectedPerson === name ? "selected" : ""}`} onClick={() => setSelectedPerson(name)}><Avatar initials={person.initials} color={person.color}/><span><strong>{person.name}</strong><small>{person.detail}</small>{selectedPerson === name && name !== "Prastina" && <i>reports to {["Shan","Prateesh"].includes(name) ? "Prastina" : "Prateesh"}</i>}</span></button>;
  };

  return (
    <section className="people-dashboard">
      {isManager && <div className="manager-space">
        <div className="manager-tabs"><strong>🧭 Manager space</strong>{["Team", "Approvals", "Budget"].map((item) => <button className={managerTab === item ? "active" : ""} onClick={() => setManagerTab(item)} key={item}>{item}{item === "Approvals" && ` ${approvalCount}`}</button>)}</div>
        {managerTab === "Team" && <div className="manager-team">{peopleNodes.slice(3).map((member) => <article className={member.name === "Syed" ? "kudos-recipient" : ""} key={member.name}><div><Avatar initials={member.initials} color={member.color}/><span><strong>{member.name}</strong><small>Last kudos · {member.name === "Syed" ? "2 days ago" : member.name === "Nikhilesh" ? "Today" : "8 days ago"}</small></span></div><div className="member-actions"><button onClick={() => setPointsFor(pointsFor === member.name ? "" : member.name)}>＋ points</button><button onClick={onNominate}>Nominate</button></div>{pointsFor === member.name && <div className="point-menu">{[100,500,1000].map((points) => <button onClick={() => sendPoints(member.name, points)} key={points}>{points.toLocaleString()}</button>)}</div>}</article>)}</div>}
        {managerTab === "Approvals" && <div className="manager-approvals">{approvalCount ? [["Syed","L1 · current step"],["Nikhilesh","L1 · awaiting review"]].slice(0, approvalCount).map((row) => <div key={row[0]}><Avatar initials={row[0].slice(0,2).toUpperCase()} color="teal"/><span><strong>{row[0]}</strong><small>{row[1]}</small></span><button onClick={() => setApprovalCount((count) => Math.max(0, count - 1))}>Approve</button><button onClick={() => setPeopleToast(`Changes requested from ${row[0]}`)}>Request changes</button></div>) : <p>All approvals are clear.</p>}</div>}
        {managerTab === "Budget" && <div className="manager-budget"><div><p>Prateesh · L1 pool</p><strong>3,500 <small>remaining</small></strong><div><i/></div><span>⚡ boost</span></div><p>Award wallets follow the registry.</p><button data-tooltip="Escalates to Shan (L2), then Prastina (L3) — the tree decides" onClick={() => setPeopleToast("Budget request routed to Shan")}>Request more budget</button></div>}
      </div>}
      <div className="people-heading"><div><p className="eyebrow dark">PEOPLE · LIVE FROM HR</p><h1>See how we’re connected.</h1></div><div className="people-tools"><label><Icon name="search" size={15}/><input placeholder="Search & add people"/><kbd>⌘K</kbd></label><div>{["Matrix","List"].map((item) => <button className={view === item ? "active" : ""} onClick={() => setView(item)} key={item}>{item}</button>)}</div></div></div>
      <div className="people-layout">
        <div className={`org-canvas ${view === "List" ? "list-view" : ""}`}>
          <div className="org-top"><Node name="Prastina"/></div>
          <div className="org-managers"><Node name="Shan"/><Node name="Prateesh"/></div>
          <div className="org-interns"><Node name="Nikhilesh"/><Node name="Syed"/><Node name="Shourya"/></div>
        </div>
        <aside className="tree-notes"><article><span><Icon name="people" size={17}/></span><p><strong>The tree decides routing</strong>Kudos notifies the manager of record; nominations start at the right manager.</p></article><article><span><Icon name="spark" size={17}/></span><p><strong>Fresh from HR</strong>Joins, exits, transfers re-route notifications and approvals the next morning — no manual admin.</p></article></aside>
      </div>
      {peopleToast && <div className="toast"><span>✓</span>{peopleToast}</div>}
    </section>
  );
}

function AwardsHub({ persona }: { persona: string }) {
  const [view, setView] = useState<"hub" | "nominate" | "approval">("hub");
  const [candidate, setCandidate] = useState("Nikhilesh");
  const [coverage, setCoverage] = useState<string[]>([]);
  const [evidence, setEvidence] = useState("");
  const [reviewProgress, setReviewProgress] = useState(-1);
  const [reviewing, setReviewing] = useState(false);
  const [submitted, setSubmitted] = useState("");
  const [routeToast, setRouteToast] = useState(false);
  const duplicate = candidate === "Syed";
  const reviewRows = ["Eligible employee · reporting tree", "Names work + impact", "Supporting evidence found", "No duplicate this cycle", "Policy compliance"];
  const summaryReady = reviewProgress === reviewRows.length && !duplicate;

  const toggleCoverage = (item: string) => setCoverage((current) => current.includes(item) ? current.filter(value => value !== item) : [...current, item]);
  const beginNomination = (name: string) => {
    setCandidate(name);
    setReviewProgress(-1);
    setView("nominate");
  };
  const runReview = () => {
    setReviewing(true);
    setReviewProgress(0);
    let progress = 0;
    const interval = window.setInterval(() => {
      progress += 1;
      setReviewProgress(progress);
      if (progress === reviewRows.length) {
        window.clearInterval(interval);
        setReviewing(false);
      }
    }, 450);
  };
  const submit = () => {
    setSubmitted(candidate);
    setView("hub");
    setRouteToast(true);
    window.setTimeout(() => setRouteToast(false), 3200);
  };

  if (view === "approval") {
    return <ApprovalTracking persona={persona} onBack={() => setView("hub")}/>;
  }

  return (
    <section className="awards-hub">
      {view === "hub" ? <>
        <div className="awards-header">
          <div><p className="eyebrow dark">AWARDS · Q3 2026</p><h1>Employee of the Quarter</h1><p>Q3 2026 · submissions close 30 Sep</p></div>
          <span className="ai-assisted"><Icon name="spark" size={15}/> AI-assisted intake</span>
        </div>
        <div className={`nomination-status ${submitted ? "complete" : ""}`}>
          <span className="status-icon">{submitted ? "✓" : "i"}</span>
          <p><strong>{submitted ? `${submitted} was submitted for this quarter` : "No nomination submitted this quarter"}</strong><small>{submitted ? "Your nomination is now routing for review." : "One thoughtful nomination can surface work others may have missed."}</small></p>
          <button onClick={() => setView("approval")}>Track <Icon name="chevron" size={13}/></button>
        </div>
        <div className="candidate-section-heading"><div><p className="eyebrow dark">SUGGESTED CANDIDATES</p><h2>Evidence worth recognizing</h2></div><p>AI surfaced from verified recognition activity</p></div>
        <div className="candidate-grid">
          {awardCandidates.map((person) => (
            <article className="candidate-card" key={person.name}>
              <div className="candidate-top"><Avatar initials={person.initials} color={person.color} large/><div><h3>{person.name}</h3><p>{person.count}</p></div>{submitted === person.name && <span className="submitted-chip">submitted ✓</span>}</div>
              <div className="evidence-note"><span><Icon name="spark" size={14}/></span><p><strong>AI evidence note</strong>{person.note}</p></div>
              <button onClick={() => beginNomination(person.name)}>Nominate <Icon name="arrow" size={15}/></button>
            </article>
          ))}
        </div>
        <div className="award-principle"><span>01</span><p><strong>Recognition should be specific.</strong> The strongest nominations connect visible work to a meaningful impact.</p></div>
      </> : <>
        <button className="nominate-back" onClick={() => setView("hub")}>← Back to awards</button>
        <div className="nominate-heading"><div><p className="eyebrow dark">EMPLOYEE OF THE QUARTER</p><h1>Build your nomination</h1><p>Ground your nomination in the work and its impact.</p></div><span>Q3 2026</span></div>
        <div className="nominate-layout">
          <div className="nominate-form">
            <div className="form-block"><label>Candidate</label><div className="candidate-select">
              {awardCandidates.map((person) => <button className={candidate === person.name ? "selected" : ""} key={person.name} onClick={() => { setCandidate(person.name); setReviewProgress(-1); }}><Avatar initials={person.initials} color={person.color}/><span><strong>{person.name}</strong><small>{person.count}</small></span><i>{candidate === person.name ? "✓" : ""}</i></button>)}
            </div></div>
            <div className="form-block"><label>Evidence coverage <small>Select all that apply</small></label><div className="coverage-chips">{["Delivery", "Customer impact", "Collaboration", "Innovation"].map(item => <button className={coverage.includes(item) ? "selected" : ""} key={item} onClick={() => toggleCoverage(item)}>{coverage.includes(item) && "✓ "}{item}</button>)}</div></div>
            <div className="form-block"><label htmlFor="nomination-evidence">Nomination evidence</label><textarea id="nomination-evidence" value={evidence} onChange={(event) => { setEvidence(event.target.value); setReviewProgress(-1); }} placeholder="Name the work and its impact…"/><small className="field-count">{evidence.length}/600</small></div>
          </div>
          <aside className="workflow-review">
            <div className="workflow-title"><span><Icon name="spark"/></span><div><h2>AI workflow review</h2><p>Evidence and policy checks</p></div></div>
            <button className="run-review" onClick={runReview} disabled={reviewing || evidence.trim().length < 20}>{reviewing ? "Reviewing nomination…" : reviewProgress >= 0 ? "Run AI review again" : "Run AI review"}</button>
            <div className="review-rows">
              {reviewRows.map((row, index) => {
                const isDuplicateRow = duplicate && index === 3 && reviewProgress > index;
                const complete = reviewProgress > index;
                const spinning = reviewProgress === index && reviewing;
                return <div className={isDuplicateRow ? "duplicate" : complete ? "passed" : ""} key={row}><i className={spinning ? "spinner" : ""}>{isDuplicateRow ? "!" : complete ? "✓" : index + 1}</i><span>{isDuplicateRow ? "Already nominated this cycle — endorsement suggested instead" : row}</span></div>;
              })}
            </div>
          </aside>
        </div>
        {summaryReady && <article className="jury-summary"><div className="summary-icon"><Icon name="spark"/></div><div><p className="eyebrow dark">AI SUMMARY FOR THE JURY</p><h3>{candidate} demonstrated sustained impact across {coverage.length ? coverage.join(", ").toLowerCase() : "delivery and collaboration"}, turning complex work into measurable team progress. The supporting recognition history shows consistent ownership and peer trust.</h3><small>Drafted for jury review — the committee votes independently.</small></div></article>}
        <footer className="nominate-footer"><button className="ghost-back" onClick={() => setView("hub")}>Back</button><p>{summaryReady ? "All checks passed. Ready to route." : "Complete the AI review to generate a jury summary."}</p><button className="submit-nomination" disabled={!summaryReady} onClick={submit}>Submit nomination <Icon name="arrow" size={15}/></button></footer>
      </>}
      {routeToast && <div className="toast award-toast"><span>✓</span>Routing to Prateesh (Manager L1) via the tree</div>}
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [currentPersona, setCurrentPersona] = useState(personas[0]);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [palette, setPalette] = useState<"emids" | "amber">(() => (localStorage.getItem("applause-palette") === "amber" ? "amber" : "emids"));

  const flipPalette = () => {
    setPalette((current) => {
      const next = current === "emids" ? "amber" : "emids";
      localStorage.setItem("applause-palette", next);
      return next;
    });
  };

  const toggleLike = (post: number) => {
    setLikedPosts((current) => current.includes(post) ? current.filter((item) => item !== post) : [...current, post]);
  };

  const openRecognition = () => {
    setActive("Recognize");
    setWizardOpen(true);
    setToast("");
  };

  const closeRecognition = () => {
    setWizardOpen(false);
    setToast("Draft saved");
    window.setTimeout(() => setToast(""), 2200);
  };

  return (
    <main className={`stage theme-${palette}`}>
      <section className="app-shell">
        <header className="topbar">
          <div className="brand-mark" aria-label="Applause by emids"><span className="brand-spark">✦</span><span>applause</span></div>
          <label className="search-box">
            <Icon name="search" size={17} />
            <input placeholder="Search people, awards..." aria-label="Search"/>
            <kbd>⌘ K</kbd>
          </label>
          <div className="top-actions">
            <button className="palette-toggle" onClick={flipPalette} aria-label="Switch colorway" title="Palette: emids teal ↔ amber warm">
              <span className="palette-dot"/><span>{palette === "emids" ? "emids" : "amber"}</span>
            </button>
            <button className="icon-button notification" aria-label="Notifications"><Icon name="bell"/><span className="badge">3</span></button>
            <button className="ai-button" onClick={() => setAiOpen(!aiOpen)}><Icon name="spark" size={16}/> Ask AI</button>
            <button className="persona-trigger" onClick={() => setDrawerOpen(true)} aria-label="Switch persona">
              <Avatar initials={currentPersona.initials} color={currentPersona.color}/>
              <span className="persona-short"><strong>{currentPersona.name}</strong><small>{currentPersona.role}</small></span>
              <Icon name="chevron" size={15}/>
            </button>
          </div>
        </header>

        <nav className="topnav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.label} className={`topnav-item ${active === item.label ? "active" : ""}`} onClick={() => item.label === "Recognize" ? openRecognition() : setActive(item.label)}>
              <Icon name={item.icon}/><span>{item.label}</span>
            </button>
          ))}
          <span className="topnav-end"><span className="emids-dot"/><span>{palette === "emids" ? "emids · teal weather" : "presets · amber warm"}</span></span>
        </nav>

        <div className="workspace">
          <div className="content">
            {active === "Awards" ? <AwardsHub persona={currentPersona.name}/> : active === "Jury" ? <JuryDashboard onOpenWallet={() => setActive("My wallet")}/> : active === "Award rules" ? <AwardRules/> : active === "My wallet" ? <WalletDashboard onMarketplace={() => setActive("Marketplace")}/> : active === "Marketplace" ? <Marketplace onWallet={() => setActive("My wallet")}/> : active === "People" ? <PeopleDashboard persona={currentPersona} onNominate={() => setActive("Awards")}/> : <section className="employee-dashboard">
              <div className="employee-heading">
                <div><p className="eyebrow dark">YOUR HOME</p><h1>Rise and shine, {currentPersona.name}! <span>👋</span></h1></div>
                <button className="give-button" onClick={openRecognition}>＋ Give recognition</button>
              </div>

              <div className="employee-kpis">
                <article className="employee-kpi"><div className="kpi-title">Rewards <span className="info-dot">i</span></div><strong>2,450 <small>pts</small></strong><p className="delta teal">+180/month</p><div className="mini-progress"><i style={{ width: "80%" }}/></div></article>
                <article className="employee-kpi"><div className="kpi-title">Nominations <span className="info-dot">i</span></div><strong>2 <small>pending</small></strong><p className="delta blue"><i/>+1 this week</p></article>
                <article className="employee-kpi"><div className="kpi-title">Score <span className="info-dot">i</span></div><strong>64<small>%</small></strong><p className="delta red"><i/>−3%</p></article>
              </div>

              <div className="balance-buddies">
                <article className="balance-card"><p>Your total rewards balance:</p><strong>2,450 <small>pts</small></strong><button>Redeem now <Icon name="arrow" size={16}/></button><div className="balance-orbit"/></article>
                <article className="buddies-card">
                  <div className="card-heading"><div><p className="eyebrow dark">TOP BUDDIES</p><h2>Who you appreciate the most</h2></div><span className="growth-pill">↗ +18%</span></div>
                  <div className="buddy-details"><Avatar initials="SY" color="mauve" large/><div><strong>Syed</strong><small>12 kudos exchanged</small></div><button>View details</button></div>
                  <div className="buddy-chart"><svg viewBox="0 0 500 55" preserveAspectRatio="none"><path className="buddy-base" d="M0 39H500"/><path className="buddy-line" d="M0 46C57 42 73 23 126 32s80 2 119-10 72 24 116 6 73-13 139-24"/><circle cx="500" cy="4" r="6"/></svg></div>
                </article>
              </div>

              <article className="rewards-progress-card">
                <div className="card-heading"><div><p className="eyebrow dark">REWARDS PROGRESS</p><h2>Keep your momentum going</h2></div><div className="chart-controls"><span className="chart-legend"><i/>you <i/>team average</span><button>All time <Icon name="chevron" size={12}/></button></div></div>
                <RewardsChart/>
              </article>

              <div className="feed-layout">
                <section className="feed">
                  <div className="card-heading"><div><p className="eyebrow dark">RECOGNITION FEED</p><h2>Celebrate great work</h2></div><button className="text-link">View all <Icon name="arrow" size={14}/></button></div>
                  {currentPersona.name === "Shourya" ? (
                    <div className="feed-empty"><span><Icon name="spark" size={25}/></span><h3>No feed yet</h3><p>Give the first recognition and start something good.</p><button onClick={openRecognition}>Give recognition</button></div>
                  ) : <>
                    <FeedCard featured liked={likedPosts.includes(1)} onLike={() => toggleLike(1)}/>
                    <FeedCard boost liked={likedPosts.includes(2)} onLike={() => toggleLike(2)}/>
                  </>}
                </section>
                <aside className="upcoming">
                  <div className="card-heading"><div><p className="eyebrow dark">UPCOMING</p><h2>Don’t miss a moment</h2></div></div>
                  <div className="upcoming-item"><span className="date-block"><strong>28</strong><small>MAY</small></span><div><strong>Syed’s work anniversary</strong><small>3 years at emids</small></div></div>
                  <div className="upcoming-item"><span className="date-block mauve"><strong>02</strong><small>JUN</small></span><div><strong>Shourya’s birthday</strong><small>Wish them well</small></div></div>
                  <div className="upcoming-item"><span className="date-block yellow"><strong>06</strong><small>JUN</small></span><div><strong>Quarterly nominations</strong><small>Closes in 12 days</small></div></div>
                  <button className="calendar-button">View team calendar <Icon name="arrow" size={15}/></button>
                </aside>
              </div>
            </section>}
          </div>
        </div>

        {aiOpen && <div className="ai-popover"><button className="popover-close" onClick={() => setAiOpen(false)}><Icon name="close" size={16}/></button><span className="ai-glyph"><Icon name="spark"/></span><strong>How can I help?</strong><p>Try “Who haven’t I recognized this quarter?”</p><div className="ai-input">Ask about recognition... <Icon name="arrow" size={16}/></div></div>}

        {drawerOpen && <div className="drawer-scrim" onClick={() => setDrawerOpen(false)}/>}
        <aside className={`persona-drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
          <div className="drawer-header"><div><p className="eyebrow dark">VIEW PORTAL AS</p><h2>Switch persona</h2></div><button className="icon-button" onClick={() => setDrawerOpen(false)} aria-label="Close drawer"><Icon name="close"/></button></div>
          <p className="drawer-intro">Explore the recognition experience from every role in the organization.</p>
          <div className="persona-list">
            {personas.map((persona) => (
              <button className={`persona-row ${currentPersona.name === persona.name ? "selected" : ""}`} key={persona.name} onClick={() => { setCurrentPersona(persona); setDrawerOpen(false); }}>
                <Avatar initials={persona.initials} color={persona.color} large/>
                <span><strong>{persona.role} — {persona.name}</strong><small>{persona.detail}</small></span>
                {currentPersona.name === persona.name ? <i className="check">✓</i> : <Icon name="chevron" size={17}/>}
              </button>
            ))}
          </div>
          <div className="org-note"><span className="org-icon"><Icon name="people"/></span><p><strong>Reporting structure</strong>Prastina leads the org. Shan and Prateesh report at the same level; Nikhilesh, Syed and Shourya are Prateesh’s interns.</p></div>
        </aside>
        <RecognitionWizard open={wizardOpen} sender={currentPersona.name} onClose={closeRecognition} onSent={() => { setWizardOpen(false); setActive("Home"); setToast("Recognition sent to Syed"); window.setTimeout(() => setToast(""), 2600); }}/>
        {toast && <div className="toast"><span>✓</span>{toast}</div>}
      </section>
    </main>
  );
}
