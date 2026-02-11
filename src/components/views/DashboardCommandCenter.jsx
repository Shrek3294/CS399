const metricCards = [
  {
    title: "Active Students",
    value: "4,287",
    note: "Updated 5 min ago",
    delta: "+3.2%",
    trend: "up",
  },
  {
    title: "Engagement Rate",
    value: "82%",
    note: "Weekly average",
    delta: "+8.1%",
    trend: "up",
  },
  {
    title: "At-Risk Students",
    value: "127",
    note: "Requires attention",
    delta: "-12%",
    trend: "down",
  },
  {
    title: "Sessions This Month",
    value: "1,843",
    note: "Advising + tutoring",
    delta: "+5.4%",
    trend: "up",
  },
];

const alerts = [
  {
    initials: "SM",
    name: "Sarah Mitchell",
    details: "ID: 2024-8471 - Sophomore - Biology",
    risk: "High Risk",
    signals: "Missed 4 advising sessions - No tutoring attendance",
    tint: "high",
    momentum: "Worsening",
    momentumTrend: "down",
    lastContact: "No outreach logged",
    whyFlagged: [
      "No class check-ins for 9 days",
      "4 missed advising sessions in 3 weeks",
      "Dropped below 60% in two core courses",
    ],
    nextStep: "Call today and reserve same-week advising slot",
  },
  {
    initials: "JC",
    name: "James Chen",
    details: "ID: 2023-6239 - Junior - Computer Science",
    risk: "Medium Risk",
    signals: "Declining attendance - 2 weeks inactive",
    tint: "medium",
    momentum: "Stable",
    momentumTrend: "stable",
    lastContact: "Email follow-up 2 days ago",
    whyFlagged: [
      "Attendance trend declined 14% in 2 weeks",
      "No tutoring visits since Jan 29",
      "Homework completion dropped to 72%",
    ],
    nextStep: "Send structured study plan and set check-in this week",
  },
  {
    initials: "EP",
    name: "Emily Parker",
    details: "ID: 2024-9152 - Freshman - Psychology",
    risk: "Watch List",
    signals: "Late assignment trend - Reduced campus engagement",
    tint: "watch",
    momentum: "Improving",
    momentumTrend: "up",
    lastContact: "Office-hours call 4 days ago",
    whyFlagged: [
      "3 late submissions in past 10 days",
      "Student club activity fell by half",
      "Risk score still above watch threshold",
    ],
    nextStep: "Keep weekly check-ins and monitor assignment timing",
  },
];

const programs = [
  { name: "Academic Advising", count: "847 students this month", rate: "94%", delta: "+5.2%" },
  { name: "Peer Tutoring", count: "623 students this month", rate: "88%", delta: "+3.1%" },
  { name: "Study Groups", count: "412 students this month", rate: "76%", delta: "-2.3%" },
  { name: "Career Workshops", count: "289 students this month", rate: "71%", delta: "+8.7%" },
];

const workload = [
  { initials: "AM", name: "Dr. Martinez", role: "Senior Advisor", count: "142" },
  { initials: "JT", name: "Jennifer Taylor", role: "Academic Advisor", count: "128" },
  { initials: "RP", name: "Robert Park", role: "Academic Advisor", count: "135" },
  { initials: "LC", name: "Lisa Chen", role: "Academic Advisor", count: "119" },
];

const communicationHistory = [
  {
    student: "Sarah Mitchell",
    when: "Today, 9:10 AM",
    channel: "SMS + voicemail",
    owner: "Dr. Martinez",
    outcome: "No response yet",
  },
  {
    student: "James Chen",
    when: "Yesterday, 3:40 PM",
    channel: "Advisor email",
    owner: "Robert Park",
    outcome: "Confirmed meeting for Feb 13",
  },
  {
    student: "Emily Parker",
    when: "Feb 10, 11:15 AM",
    channel: "Office-hours call",
    owner: "Lisa Chen",
    outcome: "Action plan agreed",
  },
];

function DashboardCommandCenter() {
  return (
    <section className="command-center">
      <div className="system-banner">
        Early intervention system active. <strong>127 students flagged</strong> for advisor
        review this week. <button type="button">View All Alerts</button>
      </div>

      <header className="cc-header">
        <div>
          <h1>Student Engagement Dashboard</h1>
          <p>Real-time monitoring and proactive support system</p>
        </div>
        <div className="cc-header-controls">
          <label className="search-wrap">
            <span aria-hidden="true">Q</span>
            <input type="search" placeholder="Search students, programs, activities..." />
          </label>
          <button type="button" className="primary-btn small">
            + New Alert
          </button>
        </div>
      </header>

      <section className="cc-metrics">
        {metricCards.map((card) => (
          <article key={card.title} className="card cc-card">
            <p className="cc-card-title">{card.title}</p>
            <p className="cc-card-value">{card.value}</p>
            <p className="cc-card-note">{card.note}</p>
            <p className={`cc-card-delta ${card.trend}`}>{card.delta}</p>
          </article>
        ))}
      </section>

      <section id="engagement-trends" className="cc-analytics">
        <article className="card chart-panel">
          <div className="panel-headline">
            <h2>Engagement Trends</h2>
            <p>Weekly student participation across all programs</p>
          </div>
          <div className="line-placeholder">
            <div className="line-path" />
            <div className="line-labels">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
              <span>Week 5</span>
              <span>Week 6</span>
              <span>Week 7</span>
              <span>Week 8</span>
            </div>
          </div>
        </article>

        <article className="card pie-panel">
          <div className="panel-headline">
            <h2>Risk Distribution</h2>
            <p>Current student status breakdown</p>
          </div>
          <div className="pie-wrap">
            <div className="fake-pie" aria-label="Risk distribution chart" />
            <ul>
              <li>
                <span className="legend-chip thriving" /> Thriving 55.4%
              </li>
              <li>
                <span className="legend-chip ontrack" /> On Track 25.5%
              </li>
              <li>
                <span className="legend-chip watch" /> Watch List 10.4%
              </li>
              <li>
                <span className="legend-chip risk" /> At Risk 6.2%
              </li>
              <li>
                <span className="legend-chip high" /> High Risk 2.5%
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section id="recent-alerts" className="card alerts-panel">
        <div className="panel-headline">
          <h2>Recent At-Risk Alerts</h2>
          <p>Students requiring immediate advisor attention</p>
        </div>
        <div className="alerts-list">
          {alerts.map((alert) => (
            <article key={alert.name} className={`alert-row ${alert.tint}`}>
              <div className="alert-avatar">{alert.initials}</div>
              <div className="alert-main">
                <h3>{alert.name}</h3>
                <p>{alert.details}</p>
                <p className="alert-meta">
                  <span>{alert.risk}</span> {alert.signals}
                </p>
                <p className="alert-context">
                  <span className={`momentum-badge ${alert.momentumTrend}`}>
                    {alert.momentum}
                  </span>
                  <strong>Last Contact:</strong> {alert.lastContact}
                </p>
              </div>
              <div className="alert-actions">
                <button type="button" className="ghost-pill">
                  Review
                </button>
                <button type="button" className="primary-btn small">
                  Contact
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="programs-workload" className="cc-bottom">
        <article className="card list-panel">
          <div className="panel-headline">
            <h2>Top Programs</h2>
            <p>Most utilized support resources</p>
          </div>
          <ul className="metric-list">
            {programs.map((item) => (
              <li key={item.name}>
                <div>
                  <p>{item.name}</p>
                  <span>{item.count}</span>
                </div>
                <div className="metric-right">
                  <strong>{item.rate}</strong>
                  <span>{item.delta}</span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="card list-panel">
          <div className="panel-headline">
            <h2>Advisor Workload</h2>
            <p>Current caseload distribution</p>
          </div>
          <ul className="metric-list">
            {workload.map((item) => (
              <li key={item.name}>
                <div className="advisor-left">
                  <span className="advisor-avatar">{item.initials}</span>
                  <div>
                    <p>{item.name}</p>
                    <span>{item.role}</span>
                  </div>
                </div>
                <div className="metric-right">
                  <strong>{item.count}</strong>
                  <span>students</span>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="cc-bottom">
        <article className="card detail-panel">
          <h2>Why Flagged</h2>
          <ul className="flagged-list">
            {alerts.map((alert) => (
              <li key={`${alert.name}-flagged`}>
                <p className="flagged-title">{alert.name}</p>
                <p className="flagged-summary">{alert.risk}</p>
                <ul className="flagged-reasons">
                  {alert.whyFlagged.map((reason) => (
                    <li key={`${alert.name}-${reason}`}>{reason}</li>
                  ))}
                </ul>
                <p className="flagged-next">
                  <strong>Recommended next step:</strong> {alert.nextStep}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <article className="card detail-panel">
          <h2>Last Contact & Communication History</h2>
          <ul className="timeline-list">
            {communicationHistory.map((item) => (
              <li key={`${item.student}-${item.when}`}>
                <strong>{item.student}</strong>: {item.when} - {item.channel} ({item.owner}) -{" "}
                {item.outcome}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
}

export default DashboardCommandCenter;
