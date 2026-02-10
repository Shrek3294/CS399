const interventions = [
  {
    student: "Noah Patel",
    action: "Phone outreach",
    owner: "Laura Martinez",
    status: "In Progress",
  },
  {
    student: "Liam Carter",
    action: "Schedule advising meeting",
    owner: "Laura Martinez",
    status: "Pending",
  },
  {
    student: "Mia Johnson",
    action: "Resource referral",
    owner: "Laura Martinez",
    status: "Completed",
  },
];

function InterventionsView() {
  return (
    <section className="page-view" aria-label="Interventions">
      <header className="content-header compact">
        <h1>Interventions</h1>
        <p>Track outreach actions and progress by student</p>
      </header>

      <article className="card page-card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Action</th>
                <th>Owner</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: Replace mock intervention log with persistent records */}
              {interventions.map((item) => (
                <tr key={`${item.student}-${item.action}`}>
                  <td>{item.student}</td>
                  <td>{item.action}</td>
                  <td>{item.owner}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default InterventionsView;
