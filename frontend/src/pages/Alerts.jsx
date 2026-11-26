import { useMemo, useState } from 'react';
import { alertSummary, alerts } from '../data/mockData.js';

const severities = ['All', 'Critical', 'High', 'Medium', 'Low'];

export default function Alerts() {
  const [severity, setSeverity] = useState('All');

  const visible = useMemo(
    () =>
      severity === 'All'
        ? alerts
        : alerts.filter((alert) => alert.severity === severity),
    [severity],
  );

  const total = alertSummary.reduce((sum, item) => sum + item.count, 0);

  return (
    <main className="dashboard">
      <div className="page-head">
        <div>
          <span className="window-tag">Last 24 hours</span>
          <h2>Alert queue</h2>
          <p>{total} alerts raised, grouped by severity for review.</p>
        </div>
      </div>

      <section className="severity-grid" aria-label="Alerts by severity">
        {alertSummary.map((item) => (
          <article
            className={`card severity-card severity-${item.severity.toLowerCase()}`}
            key={item.severity}
          >
            <p className="stat-label">{item.severity}</p>
            <p className="stat-value">{item.count}</p>
            <p className="stat-hint">
              {Math.round((item.count / total) * 100)}% of alerts
            </p>
          </article>
        ))}
      </section>

      <section className="card panel">
        <header className="panel-head">
          <div>
            <h2>Recent alerts</h2>
            <p className="panel-sub">
              Showing {visible.length} of {alerts.length} latest alerts
            </p>
          </div>
          <div className="filter-group" role="group" aria-label="Filter by severity">
            {severities.map((option) => (
              <button
                key={option}
                type="button"
                className={`filter${severity === option ? ' is-active' : ''}`}
                onClick={() => setSeverity(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </header>

        <ul className="alert-list alert-list-page">
          {visible.map((alert) => (
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
          {visible.length === 0 && (
            <li className="empty">No {severity.toLowerCase()} alerts in this window.</li>
          )}
        </ul>
      </section>
    </main>
  );
}
