const tutoringPrograms = [
  { program: "Peer Tutoring", active: 168, waitlist: 21, utilization: "91%" },
  { program: "Writing Lab", active: 109, waitlist: 7, utilization: "84%" },
  { program: "STEM Clinic", active: 143, waitlist: 16, utilization: "88%" },
  { program: "Supplemental Instruction", active: 94, waitlist: 5, utilization: "79%" },
];

const tutoringRecommendations = [
  "Expand STEM Clinic capacity for Wednesday evenings",
  "Prioritize peer tutoring outreach for first-year students on watch list",
  "Offer writing lab slots aligned with major assignment deadlines",
];

const tutoringKpis = [
  { title: "Students in Tutoring", value: "514", note: "Active this week", trend: "up", delta: "+8%" },
  { title: "Tutor Coverage", value: "92%", note: "Across all subjects", trend: "up", delta: "+3%" },
  { title: "Waitlist Students", value: "49", note: "Needs capacity planning", trend: "down", delta: "+6" },
  { title: "Avg Weekly Sessions", value: "2.7", note: "Per active student", trend: "up", delta: "+0.4" },
];

const courseDemand = [
  { course: "Calculus I / II", demand: "High", requests: "82 requests" },
  { course: "General Chemistry", demand: "High", requests: "71 requests" },
  { course: "Intro Programming", demand: "Medium", requests: "54 requests" },
  { course: "Academic Writing", demand: "Medium", requests: "43 requests" },
];

const coverageGaps = [
  "STEM Clinic lacks 2 tutors for evening blocks",
  "Writing Lab has 1-day delay for assignment-week requests",
  "Biology tutoring demand spikes before lab report deadlines",
  "Need bilingual tutors for first-year support cohort",
];

function TutoringPage() {
  return (
    <section className="quickview-page">
      <header className="cc-header">
        <div>
          <h1>Tutoring</h1>
          <p>Monitor tutoring demand, capacity, and targeted support opportunities</p>
        </div>
        <button type="button" className="ghost-pill">
          Resource Allocation
        </button>
      </header>

      <section className="cc-metrics">
        {tutoringKpis.map((card) => (
          <article key={card.title} className="card cc-card">
            <p className="cc-card-title">{card.title}</p>
            <p className="cc-card-value">{card.value}</p>
            <p className="cc-card-note">{card.note}</p>
            <p className={`cc-card-delta ${card.trend}`}>{card.delta}</p>
          </article>
        ))}
      </section>

      <section className="detail-grid">
        <article className="card detail-panel">
          <h2>Program Capacity</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Active Students</th>
                  <th>Waitlist</th>
                  <th>Utilization</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Feed tutoring attendance and capacity from service systems */}
                {tutoringPrograms.map((item) => (
                  <tr key={item.program}>
                    <td>{item.program}</td>
                    <td>{item.active}</td>
                    <td>{item.waitlist}</td>
                    <td>{item.utilization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="card detail-panel">
          <h2>AI Recommendations</h2>
          <ul className="simple-list">
            {tutoringRecommendations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="detail-grid">
        <article className="card detail-panel">
          <h2>Demand by Course Cluster</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Course Cluster</th>
                  <th>Demand</th>
                  <th>Requests</th>
                </tr>
              </thead>
              <tbody>
                {courseDemand.map((item) => (
                  <tr key={item.course}>
                    <td>{item.course}</td>
                    <td>{item.demand}</td>
                    <td>{item.requests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="card detail-panel">
          <h2>Coverage Gaps</h2>
          <ul className="timeline-list">
            {coverageGaps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
}

export default TutoringPage;
