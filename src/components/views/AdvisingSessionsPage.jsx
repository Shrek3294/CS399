const sessionPipeline = [
  {
    advisor: "Dr. Martinez",
    scheduled: 28,
    completed: 22,
    missed: 3,
    nextBlock: "Tomorrow 10:00-12:00",
  },
  {
    advisor: "Jennifer Taylor",
    scheduled: 25,
    completed: 21,
    missed: 1,
    nextBlock: "Tomorrow 1:00-3:00",
  },
  {
    advisor: "Robert Park",
    scheduled: 24,
    completed: 20,
    missed: 2,
    nextBlock: "Thu 9:00-11:00",
  },
];

const followUps = [
  "11 students require post-session check-ins within 48 hours",
  "7 high-risk students still missing session confirmations",
  "3 students requested rescheduling support this week",
];

const sessionKpis = [
  { title: "Sessions This Week", value: "214", note: "Across 8 advisors", trend: "up", delta: "+6%" },
  { title: "Completion Rate", value: "86%", note: "Scheduled vs attended", trend: "up", delta: "+2.4%" },
  { title: "No-Show Rate", value: "9%", note: "Down from last week", trend: "up", delta: "-1.2%" },
  { title: "Avg Session Length", value: "34m", note: "Advisor median", trend: "up", delta: "+3m" },
];

const todaysAgenda = [
  "9:00 AM - First-year cohort advising block (12 students)",
  "11:00 AM - Academic warning follow-up sessions",
  "1:00 PM - Transfer student onboarding check-ins",
  "3:30 PM - Escalated risk student intervention calls",
];

const sessionOutcomes = [
  { label: "Completed Action Plans", value: "67" },
  { label: "Referrals to Tutoring", value: "42" },
  { label: "Wellness Referrals", value: "18" },
  { label: "Escalated Cases", value: "9" },
];

function AdvisingSessionsPage() {
  return (
    <section className="quickview-page">
      <header className="cc-header">
        <div>
          <h1>Advising Sessions</h1>
          <p>Track workload, completion rates, and follow-up commitments</p>
        </div>
        <button type="button" className="primary-btn small">
          + Schedule Session
        </button>
      </header>

      <section className="cc-metrics">
        {sessionKpis.map((card) => (
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
          <h2>Session Pipeline</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Advisor</th>
                  <th>Scheduled</th>
                  <th>Completed</th>
                  <th>Missed</th>
                  <th>Next Block</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Integrate advisor calendars and attendance sync */}
                {sessionPipeline.map((item) => (
                  <tr key={item.advisor}>
                    <td>{item.advisor}</td>
                    <td>{item.scheduled}</td>
                    <td>{item.completed}</td>
                    <td>{item.missed}</td>
                    <td>{item.nextBlock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="card detail-panel">
          <h2>Immediate Follow-Ups</h2>
          <ul className="simple-list">
            {followUps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="detail-grid">
        <article className="card detail-panel">
          <h2>Today's Advising Agenda</h2>
          <ul className="timeline-list">
            {todaysAgenda.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card detail-panel">
          <h2>Session Outcomes (7 Days)</h2>
          <ul className="metric-list tight">
            {sessionOutcomes.map((item) => (
              <li key={item.label}>
                <p>{item.label}</p>
                <div className="metric-right">
                  <strong>{item.value}</strong>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
}

export default AdvisingSessionsPage;
