const notificationSettings = [
  { label: "High-risk alert notifications", value: "Enabled" },
  { label: "Daily advisor digest", value: "Enabled" },
  { label: "Weekly outcome summary", value: "Enabled" },
  { label: "System maintenance alerts", value: "Disabled" },
];

const dashboardPrefs = [
  { label: "Default landing view", value: "Dashboard" },
  { label: "Auto-refresh interval", value: "5 minutes" },
  { label: "Risk threshold sensitivity", value: "Standard" },
  { label: "Timezone", value: "America/New_York" },
];

function SettingsPage() {
  return (
    <section className="quickview-page">
      <header className="cc-header">
        <div>
          <h1>Settings</h1>
          <p>Configure dashboard behavior, alerts, and privacy controls</p>
        </div>
        <button type="button" className="primary-btn small">
          Save Changes
        </button>
      </header>

      <section className="detail-grid">
        <article className="card detail-panel">
          <h2>Dashboard Preferences</h2>
          <ul className="metric-list tight">
            {/* TODO: Persist dashboard preference settings in user profile */}
            {dashboardPrefs.map((item) => (
              <li key={item.label}>
                <div>
                  <p>{item.label}</p>
                  <span>{item.value}</span>
                </div>
                <button type="button" className="ghost-pill">
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </article>

        <article className="card detail-panel">
          <h2>Notification Rules</h2>
          <ul className="metric-list tight">
            {/* TODO: Hook notification rules to backend notification service */}
            {notificationSettings.map((item) => (
              <li key={item.label}>
                <div>
                  <p>{item.label}</p>
                  <span>{item.value}</span>
                </div>
                <button type="button" className="ghost-pill">
                  Toggle
                </button>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="detail-grid">
        <article className="card detail-panel">
          <h2>Data & Privacy</h2>
          <ul className="simple-list">
            <li>Explainability mode is enabled for all at-risk classifications</li>
            <li>Student-facing labels are hidden by default until advisor review</li>
            <li>Data retention policy set to 24 months for intervention logs</li>
            <li>Audit trail exports restricted to supervisor roles</li>
          </ul>
        </article>

        <article className="card detail-panel">
          <h2>Integrations</h2>
          <ul className="timeline-list">
            <li>SIS Connector: Healthy (last sync 4 minutes ago)</li>
            <li>LMS Activity Feed: Healthy (last sync 2 minutes ago)</li>
            <li>Advising Calendar API: Warning (2 delayed webhooks)</li>
            <li>Tutoring Service API: Healthy (last sync 6 minutes ago)</li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default SettingsPage;
