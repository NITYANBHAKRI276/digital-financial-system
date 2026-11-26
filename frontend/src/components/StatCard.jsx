export default function StatCard({ label, value, change, trend, hint }) {
  return (
    <article className="card stat-card">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      <p className="stat-meta">
        <span className={`change change-${trend}`}>{change}</span>
        <span className="stat-hint">{hint}</span>
      </p>
    </article>
  );
}
