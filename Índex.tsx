import { useState } from “react”;

const goals = [
{
id: 1,
emoji: “🔌”,
category: “API Fluency”,
color: “#00C9A7”,
title: “Build Hands-On API Fluency”,
timeline: “Weeks 1–3”,
pillars: {
S: “Build and document 3 REST API integrations using Postman and Fetch/Axios with at least one third-party API (e.g. Twilio, Stripe, or OpenAI). Write a clear README for each.”,
M: “3 completed integrations pushed to GitHub with READMEs. Successfully make authenticated requests, handle errors, and parse responses.”,
A: “1–2 hrs of focused daily practice using free API tiers, building on existing bootcamp knowledge.”,
R: “TSEs troubleshoot API issues daily — this directly mirrors real job tasks like debugging webhooks, reading logs, and guiding customers through API errors.”,
T: “All 3 integrations complete and documented by end of Week 3.”,
},
},
{
id: 2,
emoji: “🏗️”,
category: “Fullstack Project”,
color: “#6C63FF”,
title: “Ship a Polished Fullstack App”,
timeline: “Weeks 1–5”,
pillars: {
S: “Complete and deploy a fullstack project (frontend + backend + database) that solves a real problem. Must include one external API integration, user auth, and a live public URL.”,
M: “Live deployed app (Vercel/Railway/Render), clean GitHub repo, and a 2-minute Loom walkthrough video ready to send to employers.”,
A: “Build on an existing WIP or start a scoped MVP — done beats perfect. Target 8–10 hrs/week of build time.”,
R: “A polished project is the #1 portfolio signal for bootcamp grads. It proves full ownership — critical for TSE roles at SaaS companies.”,
T: “Live and shareable by end of Week 5.”,
},
},
{
id: 3,
emoji: “🚀”,
category: “Land the Job”,
color: “#FF6B6B”,
title: “Apply, Network & Land a TSE Role”,
timeline: “Weeks 1–8”,
pillars: {
S: “Rewrite resume and LinkedIn for TSE roles in Week 1, then apply to 8–10 roles per week while sending 3 warm LinkedIn outreach messages weekly to people in TSE or Customer Success roles.”,
M: “TSE-targeted resume live by Day 3. 8–10 applications/week tracked in a spreadsheet. Goal: 3–5 recruiter replies and 2 first-round interviews by Week 6.”,
A: “Use LinkedIn, Wellfound, and Greenhouse. Prioritize companies under 500 employees where bootcamp grads break in more easily. Personalized outreach converts — keep messages to 3 sentences.”,
R: “A 1–2 month timeline demands volume and warmth in parallel. Most TSE hires happen through referrals or hiring manager DMs, not job boards alone.”,
T: “Resume done Week 1. First offer or active negotiation by end of Week 8.”,
},
},
];

const pillarLabels = {
S: { label: “Specific”, desc: “What exactly will be done” },
M: { label: “Measurable”, desc: “How success is tracked” },
A: { label: “Achievable”, desc: “Why this is realistic” },
R: { label: “Relevant”, desc: “Why this matters” },
T: { label: “Time-bound”, desc: “The deadline” },
};

const pillarColors = {
S: “#00C9A7”,
M: “#6C63FF”,
A: “#FF6B6B”,
R: “#FFB347”,
T: “#38BDF8”,
};

export default function SmartGoals() {
const [activeGoal, setActiveGoal] = useState(0);
const [activePillar, setActivePillar] = useState(“S”);

const goal = goals[activeGoal];

return (
<div style={{
minHeight: “100vh”,
background: “#0A0A0F”,
fontFamily: “‘Georgia’, ‘Times New Roman’, serif”,
color: “#E8E4DC”,
padding: “40px 20px”,
}}>
{/* Header */}
<div style={{ textAlign: “center”, marginBottom: “48px” }}>
<div style={{
fontFamily: “‘Courier New’, monospace”,
fontSize: “11px”,
letterSpacing: “4px”,
color: “#555”,
textTransform: “uppercase”,
marginBottom: “12px”,
}}>
Technical Support Engineer Roadmap
</div>
<h1 style={{
fontSize: “clamp(28px, 5vw, 46px)”,
fontWeight: “normal”,
margin: 0,
letterSpacing: “-1px”,
}}>
S.M.A.R.T. Goals
</h1>
<div style={{
marginTop: “14px”,
display: “flex”,
justifyContent: “center”,
gap: “8px”,
flexWrap: “wrap”,
}}>
{Object.entries(pillarLabels).map(([key, val]) => (
<span key={key} style={{
background: `${pillarColors[key]}15`,
border: `1px solid ${pillarColors[key]}35`,
color: pillarColors[key],
padding: “3px 11px”,
borderRadius: “20px”,
fontSize: “11px”,
fontFamily: “‘Courier New’, monospace”,
}}>{val.label}</span>
))}
</div>
</div>

```
  {/* Goal Selector */}
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "12px",
    maxWidth: "760px",
    margin: "0 auto 32px",
  }}>
    {goals.map((g, i) => (
      <button
        key={g.id}
        onClick={() => { setActiveGoal(i); setActivePillar("S"); }}
        style={{
          background: activeGoal === i ? `${g.color}15` : "#10101A",
          border: `1px solid ${activeGoal === i ? g.color : "#1E1E2E"}`,
          color: activeGoal === i ? g.color : "#666",
          padding: "18px",
          borderRadius: "12px",
          cursor: "pointer",
          textAlign: "left",
          transition: "all 0.2s ease",
          boxShadow: activeGoal === i ? `0 0 24px ${g.color}15` : "none",
        }}
      >
        <div style={{ fontSize: "24px", marginBottom: "8px" }}>{g.emoji}</div>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "10px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "4px",
          color: activeGoal === i ? g.color : "#444",
        }}>
          Goal {i + 1}
        </div>
        <div style={{
          fontSize: "14px",
          color: activeGoal === i ? "#E8E4DC" : "#777",
          lineHeight: 1.3,
        }}>
          {g.category}
        </div>
      </button>
    ))}
  </div>

  {/* Main Card */}
  <div style={{
    maxWidth: "760px",
    margin: "0 auto",
    background: "#10101A",
    border: `1px solid ${goal.color}30`,
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: `0 0 60px ${goal.color}08`,
  }}>
    {/* Card Header */}
    <div style={{
      padding: "24px 32px",
      borderBottom: "1px solid #1E1E2E",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
    }}>
      <h2 style={{ fontSize: "20px", fontWeight: "normal", margin: 0 }}>
        {goal.emoji} {goal.title}
      </h2>
      <div style={{
        background: `${goal.color}15`,
        border: `1px solid ${goal.color}30`,
        color: goal.color,
        padding: "5px 13px",
        borderRadius: "20px",
        fontSize: "12px",
        fontFamily: "'Courier New', monospace",
        whiteSpace: "nowrap",
      }}>
        ⏱ {goal.timeline}
      </div>
    </div>

    {/* Pillar Tabs */}
    <div style={{ display: "flex", borderBottom: "1px solid #1E1E2E" }}>
      {Object.entries(pillarLabels).map(([key]) => (
        <button
          key={key}
          onClick={() => setActivePillar(key)}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            borderBottom: activePillar === key
              ? `2px solid ${pillarColors[key]}`
              : "2px solid transparent",
            color: activePillar === key ? pillarColors[key] : "#444",
            padding: "14px 4px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "bold",
            fontFamily: "'Courier New', monospace",
            transition: "all 0.18s ease",
          }}
        >
          {key}
        </button>
      ))}
    </div>

    {/* Pillar Content */}
    <div style={{ padding: "28px 32px" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "16px",
      }}>
        <div style={{
          width: "34px",
          height: "34px",
          borderRadius: "8px",
          background: `${pillarColors[activePillar]}18`,
          border: `1px solid ${pillarColors[activePillar]}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "bold",
          color: pillarColors[activePillar],
          fontFamily: "'Courier New', monospace",
        }}>
          {activePillar}
        </div>
        <div>
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>
            {pillarLabels[activePillar].label}
          </div>
          <div style={{ fontSize: "11px", color: "#555", fontFamily: "'Courier New', monospace" }}>
            {pillarLabels[activePillar].desc}
          </div>
        </div>
      </div>

      <p style={{
        fontSize: "15px",
        lineHeight: "1.8",
        color: "#C0BDB5",
        margin: 0,
        padding: "20px",
        background: "#0A0A0F",
        borderRadius: "10px",
        border: "1px solid #1A1A25",
      }}>
        {goal.pillars[activePillar]}
      </p>

      {/* Prev / Next */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}>
        {["S","M","A","R","T"].map((k, i, arr) => (
          activePillar === k && i > 0 ? (
            <button key="prev" onClick={() => setActivePillar(arr[i - 1])} style={{
              background: "transparent", border: "1px solid #2A2A35",
              color: "#777", padding: "7px 14px", borderRadius: "6px",
              cursor: "pointer", fontSize: "12px", fontFamily: "'Courier New', monospace",
            }}>← {pillarLabels[arr[i-1]].label}</button>
          ) : <span key={`prev-${k}`} />
        ))}
        {["S","M","A","R","T"].map((k, i, arr) => (
          activePillar === k && i < arr.length - 1 ? (
            <button key="next" onClick={() => setActivePillar(arr[i + 1])} style={{
              background: "transparent", border: "1px solid #2A2A35",
              color: "#777", padding: "7px 14px", borderRadius: "6px",
              cursor: "pointer", fontSize: "12px", fontFamily: "'Courier New', monospace",
            }}>{pillarLabels[arr[i+1]].label} →</button>
          ) : <span key={`next-${k}`} />
        ))}
      </div>
    </div>
  </div>

  {/* Timeline */}
  <div style={{
    maxWidth: "760px",
    margin: "24px auto 0",
    padding: "20px 24px",
    background: "#10101A",
    border: "1px solid #1E1E2E",
    borderRadius: "12px",
  }}>
    <div style={{
      fontSize: "10px",
      fontFamily: "'Courier New', monospace",
      letterSpacing: "3px",
      color: "#444",
      textTransform: "uppercase",
      marginBottom: "14px",
    }}>8-Week Snapshot</div>
    <div style={{ display: "flex" }}>
      {[
        { week: "Wk 1", label: "Resume & Outreach", color: "#FF6B6B" },
        { week: "Wk 1–3", label: "API Integrations", color: "#00C9A7" },
        { week: "Wk 2–5", label: "Ship Project", color: "#6C63FF" },
        { week: "Wk 2–8", label: "Apply + Network", color: "#FFB347" },
        { week: "Wk 6–8", label: "Interviews 🎯", color: "#38BDF8" },
      ].map((item, i) => (
        <div key={i} style={{
          flex: 1,
          borderLeft: i === 0 ? "none" : "1px solid #1E1E2E",
          padding: i === 0 ? "0 10px 0 0" : "0 10px",
        }}>
          <div style={{ fontSize: "10px", fontFamily: "'Courier New', monospace", color: item.color, marginBottom: "4px" }}>
            {item.week}
          </div>
          <div style={{ fontSize: "11px", color: "#666", lineHeight: 1.4 }}>{item.label}</div>
        </div>
      ))}
    </div>
  </div>

  <div style={{
    textAlign: "center", marginTop: "28px",
    fontSize: "11px", color: "#383838",
    fontFamily: "'Courier New', monospace",
  }}>
    Drop his LinkedIn to personalize further ↗
  </div>
</div>
```

);
}
