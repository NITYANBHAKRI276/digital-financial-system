import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '▤' },
  { to: '/transactions', label: 'Transactions', icon: '⇄' },
  { to: '/alerts', label: 'Fraud alerts', icon: '⚑', badge: 127 },
  { to: '/risk-scoring', label: 'Risk scoring', icon: '◎' },
  { to: '/analytics', label: 'Analytics', icon: '◔' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/" className="brand">
        <span className="brand-mark">DF</span>
        <span className="brand-text">
          <strong>Digital Financial</strong>
          <small>Monitoring system</small>
        </span>
      </Link>

      <nav className="nav" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}`}
          >
            <span className="nav-icon" aria-hidden="true">
              {item.icon}
            </span>
            {item.label}
            {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-foot">
        <span className="pulse-dot" aria-hidden="true" />
        ML service connected
        <small>Streaming transaction scores</small>
        <Link to="/" className="footer-link">
          ← Project website
        </Link>
      </div>
    </aside>
  );
}
