const escalatedAlerts = [
  {
    name: "Sarah Mitchell",
    priority: "Critical",
    reason: "No class attendance for 9 days and 4 missed advising sessions",
    owner: "Dr. Martinez",
    due: "Today",
    momentum: "Worsening",
    momentumTrend: "down",
    lastContact: "No successful contact in 7 days",
    nextStep: "Same-day phone call and emergency advising slot",
    whyFlagged: [
      "Attendance dropped from 82% to 49% this month",
      "Four missed advising appointments",
      "No LMS activity for over a week",
    ],
  },
  {
    name: "Noah Patel",
    priority: "High",
    reason: "Failed two quizzes and no LMS logins this week",
    owner: "Jennifer Taylor",
    due: "Feb 12",
    momentum: "Worsening",
    momentumTrend: "down",
    lastContact: "Phone outreach 2 days ago",
    nextStep: "Assign tutoring referral and follow up within 24h",
    whyFlagged: [
      "Two failed quizzes in core classes",
      "No LMS logins for 6 days",
      "Missed one scheduled lab support session",
    ],
  },
  {
    name: "James Chen",
    priority: "Medium",
    reason: "Sustained engagement decline across two core classes",
    owner: "Robert Park",
    due: "Feb 14",
    momentum: "Stable",
    momentumTrend: "stable",
    lastContact: "Advisor email yesterday",
    nextStep: "Confirm scheduled intervention and monitor attendance",
    whyFlagged: [
      "Attendance down 14% across two courses",
      "Reduced discussion board participation",
      "Assignment completion trend below baseline",
    ],
  },
];

const modelSignals = [
  { label: "Attendance Change", value: "-18%" },
  { label: "Assignment Miss Rate", value: "24%" },
  { label: "LMS Inactivity", value: "6.3 days avg" },
  { label: "No-Show Advising", value: "31 students" },
];

const alertKpis = [
  { title: "Open Alerts", value: "127", note: "23 critical, 41 high", trend: "up", delta: "+9" },
  { title: "Resolved (7d)", value: "54", note: "Actions completed", trend: "up", delta: "+12%" },
  { title: "Avg Time To First Action", value: "18h", note: "Goal < 24h", trend: "up", delta: "-4h" },
  { title: "Overdue Follow-Ups", value: "11", note: "Needs reassignment", trend: "down", delta: "+3" },
];

const interventionSla = [
  "Critical alerts: outreach within 6 hours",
  "High risk alerts: outreach within 24 hours",
  "Medium risk alerts: action plan within 72 hours",
  "Escalate no-response cases after 2 attempts",
];

const alertTimeline = [
  "08:45 AM - Sarah Mitchell escalated to critical risk",
  "10:10 AM - Advisor outreach sent to Noah Patel",
  "11:30 AM - James Chen moved from high to medium risk",
  "01:20 PM - Two new watch list students auto-flagged",
];

const communicationLog = [
  {
    student: "Sarah Mitchell",
    when: "Today, 9:10 AM",
    channel: "SMS + voicemail",
    owner: "Dr. Martinez",
    note: "No response, second attempt due by 2:00 PM",
  },
  {
    student: "Noah Patel",
    when: "Yesterday, 4:25 PM",
    channel: "Phone call",
    owner: "Jennifer Taylor",
    note: "Student asked for tutoring referral details",
  },
  {
    student: "James Chen",
    when: "Yesterday, 11:50 AM",
    channel: "Advisor email",
    owner: "Robert Park",
    note: "Meeting confirmed for Feb 13 at 1:00 PM",
  },
];

function AtRiskAlertsPage() {
  return (
    <section className="quickview-page">
      <header className="cc-header">
        <div>
          <h1>At-Risk Alerts</h1>
          <p>Prioritize urgent cases and act before disengagement worsens</p>
        </div>
        <button type="button" className="primary-btn small">
          Export Alerts
        </button>
      </header>

      <section className="cc-metrics">
        {alertKpis.map((card) => (
          <article key={card.title} className="card cc-card">
            <p className="cc-card-title">{card.title}</p>
            <p className="cc-card-value">{card.value}</p>
            <p className="cc-card-note">{card.note}</p>
            <p className={`cc-card-delta ${card.trend}`}>{card.delta}</p>
          </article>
        ))}
      </section>

      <section className="detail-grid">
        <article className="card detail-panel">
          <h2>Escalated This Week</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Priority</th>
                  <th>Risk Momentum</th>
                  <th>Reason</th>
                  <th>Last Contact</th>
                  <th>Owner</th>
                  <th>Due</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Replace with live risk case queue from backend */}
                {escalatedAlerts.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.priority}</td>
                    <td>
                      <span className={`momentum-badge ${item.momentumTrend}`}>{item.momentum}</span>
                    </td>
                    <td>{item.reason}</td>
                    <td>{item.lastContact}</td>
                    <td>{item.owner}</td>
                    <td>{item.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="card detail-panel">
          <h2>Top Risk Signals</h2>
          <ul className="metric-list tight">
            {modelSignals.map((signal) => (
              <li key={signal.label}>
                <p>{signal.label}</p>
                <div className="metric-right">
                  <strong>{signal.value}</strong>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="detail-grid">
        <article className="card detail-panel">
          <h2>Why Flagged & Next Best Action</h2>
          <ul className="flagged-list">
            {escalatedAlerts.map((item) => (
              <li key={`${item.name}-explanation`}>
                <p className="flagged-title">{item.name}</p>
                <p className="flagged-summary">{item.priority} priority case</p>
                <ul className="flagged-reasons">
                  {item.whyFlagged.map((reason) => (
                    <li key={`${item.name}-${reason}`}>{reason}</li>
                  ))}
                </ul>
                <p className="flagged-next">
                  <strong>Recommended next step:</strong> {item.nextStep}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <article className="card detail-panel">
          <h2>Intervention SLA Rules</h2>
          <ul className="simple-list">
            {interventionSla.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="detail-grid">
        <article className="card detail-panel">
          <h2>Last Contact & Communication History</h2>
          <ul className="timeline-list">
            {communicationLog.map((item) => (
              <li key={`${item.student}-${item.when}`}>
                <strong>{item.student}</strong>: {item.when} - {item.channel} ({item.owner}) -{" "}
                {item.note}
              </li>
            ))}
          </ul>
        </article>

        <article className="card detail-panel">
          <h2>Alert Activity Timeline</h2>
          <ul className="timeline-list">
            {alertTimeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
}

export default AtRiskAlertsPage;
