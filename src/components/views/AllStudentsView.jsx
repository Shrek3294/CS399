const students = [
  { name: "Ethan Brooks", major: "Computer Science", semester: "Fall 2026", score: "81%" },
  { name: "Mia Johnson", major: "Business Analytics", semester: "Fall 2026", score: "74%" },
  { name: "Noah Patel", major: "Biology", semester: "Fall 2026", score: "69%" },
  { name: "Sophia Ramirez", major: "Psychology", semester: "Fall 2026", score: "88%" },
];

function AllStudentsView() {
  return (
    <section className="page-view" aria-label="All students">
      <header className="content-header compact">
        <h1>All Students</h1>
        <p>Browse engagement summaries across the full advising caseload</p>
      </header>

      <article className="card page-card">
        <div className="students-topbar">
          <h2>Student Directory</h2>
          <div className="students-controls">
            <label className="search-wrap">
              <span aria-hidden="true">Q</span>
              <input type="search" placeholder="Search by name or major..." />
            </label>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Major</th>
                <th>Semester</th>
                <th>Engagement Score</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: Pull full student list from backend */}
              {students.map((student) => (
                <tr key={student.name}>
                  <td>{student.name}</td>
                  <td>{student.major}</td>
                  <td>{student.semester}</td>
                  <td>{student.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default AllStudentsView;
