import StatCard from '../components/StatCard.jsx';
import RiskDistribution from '../components/RiskDistribution.jsx';
import AnomalyPanel from '../components/AnomalyPanel.jsx';
import TransactionsTable from '../components/TransactionsTable.jsx';
import AlertsPanel from '../components/AlertsPanel.jsx';
import {
  alerts,
  anomalyBreakdown,
  modelStatus,
  riskDistribution,
  summary,
  transactions,
} from '../data/mockData.js';

export default function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard-head">
        <span className="window-tag">{summary.window}</span>
        <span className="dashboard-note">Updated just now</span>
      </div>

      <section className="kpi-grid" aria-label="Key metrics">
        {summary.kpis.map((kpi) => (
          <StatCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <section className="two-col">
        <RiskDistribution buckets={riskDistribution} />
        <AnomalyPanel signals={anomalyBreakdown} model={modelStatus} />
      </section>

      <section className="two-col wide-left">
        <TransactionsTable transactions={transactions.slice(0, 10)} />
        <AlertsPanel alerts={alerts} />
      </section>

      <p className="demo-note">
        Sample data for layout · metrics will stream from the Spring Boot API and the
        FastAPI ML service once those endpoints are implemented.
      </p>
    </main>
  );
}
