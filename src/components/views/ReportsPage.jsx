const reportCards = [
  {
    title: "Weekly Engagement Summary",
    description: "Program participation, attendance, and risk movement by cohort",
    updated: "Updated today at 8:40 AM",
  },
  {
    title: "Intervention Outcomes",
    description: "Impact of advisor outreach actions over the last 30 days",
    updated: "Updated today at 8:10 AM",
  },
  {
    title: "Equity and Access Snapshot",
    description: "Utilization and outcomes by student groups and support channels",
    updated: "Updated yesterday at 5:20 PM",
  },
];

const scheduledReports = [
  { name: "Advisor Weekly Digest", cadence: "Every Monday", recipients: "Advising Team" },
  { name: "Dean Risk Briefing", cadence: "Every Friday", recipients: "Student Success Leadership" },
  { name: "Program Utilization Pulse", cadence: "1st of Month", recipients: "Program Directors" },
];

function ReportsPage() {
  return (
    <section className="quickview-page">
      <header className="cc-header">
        <div>
          <h1>Reports</h1>
          <p>Generate, schedule, and export operational and outcome reports</p>
        </div>
        <button type="button" className="primary-btn small">
          + New Report
        </button>
      </header>

      <section className="detail-grid">
        <article className="card detail-panel">
          <h2>Available Reports</h2>
          <div className="report-cards">
            {reportCards.map((item) => (
              <div key={item.title} className="report-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.updated}</span>
                <div className="report-actions">
                  <button type="button" className="ghost-pill">
                    Preview
                  </button>
                  <button type="button" className="primary-btn small">
                    Export PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="card detail-panel">
          <h2>Scheduled Reports</h2>
          <ul className="metric-list tight">
            {/* TODO: Load scheduled report jobs from backend */}
            {scheduledReports.map((item) => (
              <li key={item.name}>
                <div>
                  <p>{item.name}</p>
                  <span>{item.cadence}</span>
                </div>
                <div className="metric-right">
                  <strong>{item.recipients}</strong>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
}

export default ReportsPage;
