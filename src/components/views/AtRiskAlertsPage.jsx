const escalatedAlerts = [
  {
    name: "Sarah Mitchell",
    priority: "Critical",
    reason: "No class attendance for 9 days and 4 missed advising sessions",
    owner: "Dr. Martinez",
    due: "Today",
  },
  {
    name: "Noah Patel",
    priority: "High",
    reason: "Failed two quizzes and no LMS logins this week",
    owner: "Jennifer Taylor",
    due: "Feb 12",
  },
  {
    name: "James Chen",
    priority: "Medium",
    reason: "Sustained engagement decline across two core classes",
    owner: "Robert Park",
    due: "Feb 14",
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
                  <th>Reason</th>
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
                    <td>{item.reason}</td>
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
          <h2>Intervention SLA Rules</h2>
          <ul className="simple-list">
            {interventionSla.map((item) => (
              <li key={item}>{item}</li>
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
