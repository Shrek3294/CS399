const filterGroups = [
  { title: "Risk", options: ["All", "High", "Medium", "Watch List"] },
  { title: "Program", options: ["All", "Biology", "Computer Science", "Psychology"] },
  { title: "Engagement", options: ["Any", "Declining", "Stable", "Improving"] },
  { title: "Support", options: ["Any", "Tutoring", "Advising", "No Services"] },
];

const students = [
  {
    name: "Sarah Mitchell",
    id: "2024-8471",
    year: "Sophomore",
    major: "Biology",
    risk: "High",
    score: "61%",
  },
  {
    name: "James Chen",
    id: "2023-6239",
    year: "Junior",
    major: "Computer Science",
    risk: "Medium",
    score: "72%",
  },
  {
    name: "Emily Parker",
    id: "2024-9152",
    year: "Freshman",
    major: "Psychology",
    risk: "Watch",
    score: "78%",
  },
];

function StudentQuickView() {
  return (
    <section className="quickview-page">
      <header className="cc-header">
        <div>
          <h1>Student Profile QuickView</h1>
          <p>Use smart filters to find students and review complete context quickly</p>
        </div>
      </header>

      <article className="card filters-panel">
        <h2>Smart Filters</h2>
        <div className="filters-grid">
          {filterGroups.map((group) => (
            <label key={group.title}>
              <span>{group.title}</span>
              <select defaultValue={group.options[0]}>
                {group.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
        <div className="filter-actions">
          <button type="button" className="ghost-pill">
            Save Filter Set
          </button>
          <button type="button" className="primary-btn small">
            Apply Filters
          </button>
        </div>
      </article>

      <section className="quickview-grid">
        <article className="card quickview-list">
          <h2>Matching Students</h2>
          <ul>
            {/* TODO: Replace with filtered student results from backend */}
            {students.map((student) => (
              <li key={student.id}>
                <div>
                  <p>{student.name}</p>
                  <span>
                    {student.id} - {student.year} - {student.major}
                  </span>
                </div>
                <div className="metric-right">
                  <strong>{student.score}</strong>
                  <span>{student.risk} Risk</span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="card profile-panel">
          <h2>Selected Profile: Sarah Mitchell</h2>
          <p className="profile-subtitle">ID 2024-8471 - Biology - Sophomore</p>

          <div className="profile-stats">
            <div>
              <span>Engagement Score</span>
              <strong>61%</strong>
            </div>
            <div>
              <span>Risk Level</span>
              <strong>High</strong>
            </div>
            <div>
              <span>Last Contact</span>
              <strong>6 days ago</strong>
            </div>
          </div>

          <div className="profile-block">
            <h3>Signal Breakdown</h3>
            <ul>
              <li>Attendance dropped from 84% to 62% in 3 weeks</li>
              <li>Missed 4 advising sessions this term</li>
              <li>No tutoring participation this month</li>
            </ul>
          </div>

          <div className="profile-block">
            <h3>Intervention Timeline</h3>
            <ul>
              <li>Feb 2: Advisor outreach email sent</li>
              <li>Feb 4: Follow-up call attempted, no response</li>
              <li>Feb 8: Wellness check referral created</li>
            </ul>
          </div>
        </article>
      </section>
    </section>
  );
}

export default StudentQuickView;
