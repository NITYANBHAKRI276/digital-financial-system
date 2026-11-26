import { Link, useLocation } from 'react-router-dom';

const pageMeta = {
  '/dashboard': {
    title: 'Financial monitoring dashboard',
    subtitle: 'Real-time transaction monitoring, fraud detection and risk scoring',
  },
  '/transactions': {
    title: 'Transactions',
    subtitle: 'Digital transaction processing with per-transaction fraud risk scores',
  },
  '/alerts': {
    title: 'Suspicious transaction alerts',
    subtitle: 'Flagged activity routed to analysts for review',
  },
  '/risk-scoring': {
    title: 'Fraud risk scoring',
    subtitle: 'Score bands, model status and recommended action per transaction',
  },
  '/analytics': {
    title: 'Financial analytics',
    subtitle: 'Volume, channel and category breakdown across the monitored window',
  },
};

export default function Topbar() {
  const { pathname } = useLocation();
  const meta = pageMeta[pathname] ?? pageMeta['/dashboard'];

  return (
    <header className="topbar">
      <div className="topbar-title">
        <h1>{meta.title}</h1>
        <p>{meta.subtitle}</p>
      </div>

      <div className="topbar-actions">
        <label className="search">
          <span aria-hidden="true">⌕</span>
          <input type="search" placeholder="Search transaction, customer, merchant" />
        </label>
        <Link to="/alerts" className="icon-button" aria-label="View alerts">
          ⚑<span className="dot" />
        </Link>
        <div className="user">
          <span className="avatar">NB</span>
          <span className="user-meta">
            <strong>Risk analyst</strong>
            <small>Operations</small>
          </span>
        </div>
      </div>
    </header>
  );
}
