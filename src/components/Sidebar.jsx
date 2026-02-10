const primaryNav = [
  { key: "dashboard", name: "Dashboard", icon: "DB", view: "dashboard" },
  { key: "students", name: "Students", icon: "ST", view: "quickview" },
  {
    key: "alerts",
    name: "At-Risk Alerts",
    icon: "AR",
    badge: "23",
    view: "alerts",
  },
  {
    key: "sessions",
    name: "Advising Sessions",
    icon: "AS",
    view: "sessions",
  },
  {
    key: "tutoring",
    name: "Tutoring",
    icon: "TU",
    view: "tutoring",
  },
  {
    key: "reports",
    name: "Reports",
    icon: "RP",
    view: "reports",
  },
];

const resources = [
  { key: "programs", name: "Programs", view: "dashboard", navKey: "dashboard" },
  { key: "advisors", name: "Advisors", view: "dashboard", navKey: "dashboard" },
  { key: "settings", name: "Settings", view: "settings", navKey: "settings" },
];

function Sidebar({ activeNavKey, onNavigate, theme, onToggleTheme }) {
  return (
    <aside className="sidebar" aria-label="Navigation">
      <div className="sidebar-brand">
        <div className="sidebar-brand-main">
          <div className="sidebar-brand-mark">NV</div>
          <div>
            <p className="sidebar-brand-title">Northview</p>
            <p className="sidebar-brand-subtitle">Student Success</p>
          </div>
        </div>
        <button
          type="button"
          className="theme-toggle"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          onClick={onToggleTheme}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>

      <ul className="nav-list">
        {primaryNav.map((item) => (
          <li key={item.key}>
            <button
              type="button"
              className={`nav-item ${activeNavKey === item.key ? "active" : ""}`}
              onClick={() =>
                onNavigate({
                  view: item.view,
                  navKey: item.key,
                })
              }
            >
              <span className="icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.name}</span>
              {item.badge ? <span className="badge">{item.badge}</span> : null}
            </button>
          </li>
        ))}
      </ul>

      <section className="sidebar-section">
        <h2>Resources</h2>
        <ul>
          {resources.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                className={`nav-item ${activeNavKey === item.navKey ? "active" : ""}`}
                onClick={() => onNavigate({ view: item.view, navKey: item.navKey })}
              >
                <span className="icon" aria-hidden="true">
                  RS
                </span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className="sidebar-user">
        <div className="sidebar-user-avatar">LM</div>
        <div>
          <p className="sidebar-user-name">Dr. Martinez</p>
          <p className="sidebar-user-role">Advisor</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
