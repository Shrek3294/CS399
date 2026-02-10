import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardCommandCenter from "./components/views/DashboardCommandCenter";
import StudentQuickView from "./components/views/StudentQuickView";
import AtRiskAlertsPage from "./components/views/AtRiskAlertsPage";
import AdvisingSessionsPage from "./components/views/AdvisingSessionsPage";
import TutoringPage from "./components/views/TutoringPage";
import ReportsPage from "./components/views/ReportsPage";
import SettingsPage from "./components/views/SettingsPage";

function App() {
  const [activeView, setActiveView] = useState("dashboard");
  const [activeNavKey, setActiveNavKey] = useState("dashboard");
  const [theme, setTheme] = useState("light");

  const handleNavigate = ({ view, navKey }) => {
    setActiveView(view);
    setActiveNavKey(navKey);
  };

  const renderedView = useMemo(() => {
    if (activeView === "alerts") {
      return <AtRiskAlertsPage />;
    }

    if (activeView === "sessions") {
      return <AdvisingSessionsPage />;
    }

    if (activeView === "tutoring") {
      return <TutoringPage />;
    }

    if (activeView === "reports") {
      return <ReportsPage />;
    }

    if (activeView === "settings") {
      return <SettingsPage />;
    }

    if (activeView === "quickview") {
      return <StudentQuickView />;
    }

    return <DashboardCommandCenter />;
  }, [activeView]);

  return (
    <div className={`page-shell ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <main className="dashboard-window" aria-label="Student success dashboard">
        <div className="dashboard-body">
          <Sidebar
            activeView={activeView}
            activeNavKey={activeNavKey}
            onNavigate={handleNavigate}
            theme={theme}
            onToggleTheme={() =>
              setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
            }
          />
          <section className="content-area">{renderedView}</section>
        </div>
        <button className="floating-assistant" aria-label="Open AI assistant">
          AI
        </button>
      </main>
    </div>
  );
}

export default App;
