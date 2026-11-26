import RiskDistribution from '../components/RiskDistribution.jsx';
import { modelStatus, riskBands, riskDistribution } from '../data/mockData.js';

export default function RiskScoring() {
  return (
    <main className="dashboard">
      <div className="page-head">
        <div>
          <span className="window-tag">Fraud risk scoring</span>
          <h2>Score bands and outcomes</h2>
          <p>
            The ML service returns a fraud probability per transaction; the risk score
            decides what happens next.
          </p>
        </div>
      </div>

      <section className="two-col">
        <RiskDistribution buckets={riskDistribution} />

        <section className="card panel">
          <header className="panel-head">
            <div>
              <h2>Recommended action</h2>
              <p className="panel-sub">Score threshold into decision</p>
            </div>
          </header>

          <ul className="band-list">
            {riskBands.map((item) => (
              <li className={`band band-${item.tone}`} key={item.band}>
                <div className="band-top">
                  <span className="band-range mono">{item.range}</span>
                  <span className={`risk risk-${item.tone === 'medium' ? 'elevated' : item.tone}`}>
                    {item.band}
                  </span>
                </div>
                <p className="band-action">{item.action}</p>
                <p className="band-detail">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section className="card panel">
        <header className="panel-head">
          <div>
            <h2>Detection model</h2>
            <p className="panel-sub">{modelStatus.name}</p>
          </div>
          <span className="pill">{modelStatus.status}</span>
        </header>

        <div className="metric-grid">
          <div className="metric">
            <small>Version</small>
            <strong>{modelStatus.version}</strong>
          </div>
          <div className="metric">
            <small>Last retrained</small>
            <strong>{modelStatus.retrained}</strong>
          </div>
          <div className="metric">
            <small>Precision</small>
            <strong>{(modelStatus.precision * 100).toFixed(0)}%</strong>
          </div>
          <div className="metric">
            <small>Recall</small>
            <strong>{(modelStatus.recall * 100).toFixed(0)}%</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
