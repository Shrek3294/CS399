import StatCard from "../StatCard";
import EngagementPanel from "../EngagementPanel";
import InsightsPanel from "../InsightsPanel";
import StudentsTable from "../StudentsTable";

const stats = [
  {
    title: "Total Students",
    value: "847",
    subtitle: "Active this semester",
    icon: "GRP",
  },
  {
    title: "At Risk",
    value: "23",
    subtitle: "Require immediate attention",
    icon: "!",
  },
  {
    title: "Interventions",
    value: "15",
    subtitle: "This week",
    icon: "CHK",
  },
  {
    title: "Avg Engagement",
    value: "78%",
    subtitle: "+ 5% from last month",
    icon: "TRD",
  },
];

function DashboardView() {
  return (
    <>
      <header className="content-header">
        <h1>Student Success Dashboard</h1>
        <p>Monitor engagement and provide proactive support to students</p>
      </header>

      <section className="stats-grid" aria-label="Top metrics">
        {stats.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </section>

      <section className="middle-grid" aria-label="Insights and trends">
        <EngagementPanel />
        <InsightsPanel />
      </section>

      <StudentsTable />
    </>
  );
}

export default DashboardView;
