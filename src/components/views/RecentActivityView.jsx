const activityItems = [
  {
    time: "Today, 10:45 AM",
    event: "Advisor note added",
    detail: "Laura added a note for Ethan Brooks after check-in",
  },
  {
    time: "Today, 9:20 AM",
    event: "Risk alert generated",
    detail: "Noah Patel moved from medium to high risk",
  },
  {
    time: "Yesterday, 4:05 PM",
    event: "Intervention logged",
    detail: "Support resources emailed to Mia Johnson",
  },
  {
    time: "Yesterday, 1:30 PM",
    event: "Positive update",
    detail: "Sophia Ramirez attendance improved by 12%",
  },
];

function RecentActivityView() {
  return (
    <section className="page-view" aria-label="Recent activity">
      <header className="content-header compact">
        <h1>Recent Activity</h1>
        <p>Latest advising actions and student engagement signal updates</p>
      </header>

      <article className="card page-card">
        <ul className="activity-list">
          {/* TODO: Replace with real activity feed from event stream */}
          {activityItems.map((item) => (
            <li key={`${item.time}-${item.event}`} className="activity-item">
              <p className="activity-time">{item.time}</p>
              <h3>{item.event}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default RecentActivityView;
