const flaggedStudents = [
  {
    name: "Noah Patel",
    level: "High",
    reason: "Absent from 2 labs and no LMS activity for 8 days",
    recommendation: "Urgent advisor outreach",
  },
  {
    name: "Liam Carter",
    level: "High",
    reason: "Two failed quizzes and missing assignment submissions",
    recommendation: "Schedule intervention meeting",
  },
  {
    name: "Mia Johnson",
    level: "Medium",
    reason: "Falling attendance trend in core courses",
    recommendation: "Send support resources",
  },
];

function AtRiskView() {
  return (
    <section className="page-view" aria-label="At risk students">
      <header className="content-header compact">
        <h1>At Risk</h1>
        <p>Prioritized students requiring timely intervention</p>
      </header>

      <article className="card page-card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Risk Level</th>
                <th>Signals</th>
                <th>Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: Connect risk rows to live model and attendance signals */}
              {flaggedStudents.map((student) => (
                <tr key={student.name}>
                  <td>{student.name}</td>
                  <td>
                    <span className={`risk-chip ${student.level.toLowerCase()}`}>
                      {student.level}
                    </span>
                  </td>
                  <td>{student.reason}</td>
                  <td>{student.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default AtRiskView;
