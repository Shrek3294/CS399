const legend = ["Course Attendance", "Assignment Completion", "Platform Activity"];
const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

function EngagementPanel() {
  return (
    <article className="card trends-panel">
      <div className="panel-header">
        <h2>Engagement Trends</h2>
        <div className="range-controls" role="group" aria-label="Date range">
          <button type="button" className="range-btn active">
            7 Days
          </button>
          <button type="button" className="range-btn">
            30 Days
          </button>
          <button type="button" className="range-btn">
            90 Days
          </button>
        </div>
      </div>

      <div className="chart-shell" role="img" aria-label="Engagement trend visualization">
        <div className="y-axis">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>
        <div className="chart-area">
          {/* TODO: Replace placeholder with real chart rendering logic and backend data */}
          <p>Engagement trend visualization</p>
          <div className="x-axis">
            {weeks.map((week) => (
              <span key={week}>{week}</span>
            ))}
          </div>
        </div>
      </div>

      <ul className="legend">
        {legend.map((item) => (
          <li key={item}>
            <span className="dot" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default EngagementPanel;
