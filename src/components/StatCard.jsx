function StatCard({ title, value, subtitle, icon }) {
  return (
    <article className="card stat-card">
      <div className="card-top">
        <h2>{title}</h2>
        <span aria-hidden="true">{icon}</span>
      </div>
      <p className="stat-value">{value}</p>
      <p className="stat-subtitle">{subtitle}</p>
    </article>
  );
}

export default StatCard;
