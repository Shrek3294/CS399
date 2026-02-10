const students = [
  {
    id: 1,
    name: "Ethan Brooks",
    risk: "High",
    signal: "Declining attendance, missed assignments",
    contact: "2 days ago",
    action: "Schedule meeting",
  },
  {
    id: 2,
    name: "Mia Johnson",
    risk: "Medium",
    signal: "Low platform activity",
    contact: "1 week ago",
    action: "Send resources",
  },
  {
    id: 3,
    name: "Noah Patel",
    risk: "High",
    signal: "No tutoring check-ins, absent in lab",
    contact: "4 days ago",
    action: "Call student",
  },
];

function StudentsTable() {
  return (
    <article className="card students-panel">
      <div className="students-topbar">
        <h2>Students Requiring Attention</h2>
        <div className="students-controls">
          <label className="search-wrap">
            <span aria-hidden="true">Q</span>
            <input type="search" placeholder="Search students..." />
          </label>
          <button type="button" className="ghost-pill">
            v Filter
          </button>
          <button type="button" className="ghost-pill">
            Up/Down Sort by Risk
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Risk Level</th>
              <th>Key Signals</th>
              <th>Last Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Replace static rows with API-driven student records */}
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>
                  <span
                    className={`risk-chip ${student.risk.toLowerCase()}`}
                    aria-label={`${student.risk} risk`}
                  >
                    {student.risk}
                  </span>
                </td>
                <td>{student.signal}</td>
                <td>{student.contact}</td>
                <td>
                  <button type="button" className="table-action">
                    {student.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default StudentsTable;
