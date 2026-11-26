export default function AlertsPanel({ alerts, title = 'Suspicious transaction alerts', subtitle = 'Queued for analyst review' }) {
  return (
    <section className="card panel alert-panel">
      <header className="panel-head">
        <div>
          <h2>{title}</h2>
          <p className="panel-sub">{subtitle}</p>
        </div>
        <span className="count-tag">{alerts.length} open</span>
      </header>

      <ul className="alert-list">
        {alerts.map((alert) => (
          <li className={`alert alert-${alert.severity.toLowerCase()}`} key={alert.id}>
            <div className="alert-top">
              <span className="severity">{alert.severity}</span>
              <span className="alert-time">{alert.time}</span>
            </div>
            <p className="alert-title">{alert.title}</p>
            <p className="alert-detail">{alert.detail}</p>
            <div className="alert-foot">
              <span className="mono">{alert.id}</span>
              <span className="risk-inline">Risk {alert.riskScore}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
