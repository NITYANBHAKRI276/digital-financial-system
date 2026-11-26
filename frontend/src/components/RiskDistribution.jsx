export default function RiskDistribution({ buckets }) {
  const max = Math.max(...buckets.map((bucket) => bucket.count));

  return (
    <section className="card panel">
      <header className="panel-head">
        <div>
          <h2>Fraud risk score distribution</h2>
          <p className="panel-sub">Model-scored transactions, last 24 hours</p>
        </div>
        <span className="pill">0 – 100 scale</span>
      </header>

      <div className="bars">
        {buckets.map((bucket) => (
          <div className="bar-col" key={bucket.bucket}>
            <span className="bar-value">{bucket.count.toLocaleString('en-IN')}</span>
            <div className="bar-track">
              <div
                className={`bar-fill tone-${bucket.tone}`}
                style={{ height: `${Math.max((bucket.count / max) * 100, 4)}%` }}
              />
            </div>
            <span className="bar-label">{bucket.bucket}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
