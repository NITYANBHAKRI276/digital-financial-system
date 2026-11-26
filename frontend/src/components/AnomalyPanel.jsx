export default function AnomalyPanel({ signals, model }) {
  const max = Math.max(...signals.map((signal) => signal.count));

  return (
    <section className="card panel">
      <header className="panel-head">
        <div>
          <h2>Anomaly detection signals</h2>
          <p className="panel-sub">Alerts grouped by detected anomaly type</p>
        </div>
      </header>

      <ul className="signal-list">
        {signals.map((signal) => (
          <li key={signal.signal}>
            <div className="signal-row">
              <span>{signal.signal}</span>
              <span className="signal-count">{signal.count}</span>
            </div>
            <div className="signal-track">
              <div
                className="signal-fill"
                style={{ width: `${(signal.count / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="model-strip">
        <div>
          <span className="model-label">Detection model</span>
          <strong>{model.name}</strong>
        </div>
        <div className="model-metrics">
          <span>
            <small>Version</small>
            {model.version}
          </span>
          <span>
            <small>Precision</small>
            {(model.precision * 100).toFixed(0)}%
          </span>
          <span>
            <small>Recall</small>
            {(model.recall * 100).toFixed(0)}%
          </span>
        </div>
      </div>
    </section>
  );
}
