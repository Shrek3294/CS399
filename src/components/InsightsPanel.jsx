const insights = [
  {
    title: "High Priority",
    text: "3 students showing signs of disengagement in multiple courses",
    icon: "!",
  },
  {
    title: "Recommendation",
    text: "Schedule check-ins with students who missed 2+ assignments",
    icon: "Tip",
  },
  {
    title: "Positive Trend",
    text: "12 at-risk students improved engagement after interventions",
    icon: "OK",
  },
];

function InsightsPanel() {
  return (
    <article className="card insights-panel">
      <div className="panel-header">
        <h2>AI Insights</h2>
        <span aria-hidden="true">AI</span>
      </div>

      <ul className="insight-list">
        {/* TODO: Connect insights to model outputs with source explanations */}
        {insights.map((insight) => (
          <li key={insight.title} className="insight-item">
            <h3>
              <span aria-hidden="true">{insight.icon}</span> {insight.title}
            </h3>
            <p>{insight.text}</p>
          </li>
        ))}
      </ul>

      <button type="button" className="primary-btn">
        View All Insights
      </button>
    </article>
  );
}

export default InsightsPanel;
