import { Link } from 'react-router-dom';

const features = [
  {
    glyph: '⇄',
    title: 'Digital transaction processing',
    body: 'Payments are received, validated and routed through one pipeline before settlement.',
  },
  {
    glyph: '◆',
    title: 'Fraud detection using Machine Learning',
    body: 'Trained models flag fraudulent behaviour instead of relying on static rule lists.',
  },
  {
    glyph: '◎',
    title: 'Anomaly detection',
    body: 'Transactions that break an account’s normal pattern are surfaced for scoring.',
  },
  {
    glyph: '▰',
    title: 'Fraud risk scoring',
    body: 'Every transaction gets a 0–100 risk score that drives approve, review or hold.',
  },
  {
    glyph: '⚑',
    title: 'Suspicious transaction alerts',
    body: 'High-risk activity raises an alert that is routed to an analyst’s queue.',
  },
  {
    glyph: '▤',
    title: 'Financial monitoring dashboard',
    body: 'Live view of volume, risk distribution, alerts and channel performance.',
  },
];

const steps = [
  {
    step: '01',
    title: 'Transaction submitted',
    body: 'A digital payment is created and validated by the Java / Spring Boot backend.',
  },
  {
    step: '02',
    title: 'Scored by the ML service',
    body: 'The FastAPI service returns a fraud probability, which becomes a 0–100 risk score.',
  },
  {
    step: '03',
    title: 'Approved, reviewed or held',
    body: 'Low scores settle automatically; elevated and high scores raise alerts for analysts.',
  },
];

const stack = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'PostgreSQL / Supabase'] },
  { group: 'Machine learning', items: ['Python', 'Scikit-learn', 'FastAPI'] },
  { group: 'Frontend', items: ['JavaScript', 'React'] },
  { group: 'Platform', items: ['Docker'] },
];

const structure = [
  { dir: 'backend/', body: 'Java Spring Boot application' },
  { dir: 'ml-service/', body: 'ML model training and prediction' },
  { dir: 'frontend/', body: 'User interface and dashboard' },
  { dir: 'database/', body: 'Database documentation and SQL scripts' },
  { dir: 'docs/', body: 'Project documentation and architecture' },
];

export default function Landing() {
  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="brand">
          <span className="brand-mark">DF</span>
          <span className="brand-text">
            <strong>Digital Financial System</strong>
            <small>Fraud-aware payments platform</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Sections">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#stack">Tech stack</a>
          <a href="#structure">Structure</a>
        </nav>

        <Link to="/dashboard" className="btn btn-primary">
          Open dashboard
        </Link>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Java · Spring Boot · Python · React</span>
            <h2>
              A digital payments system that <span>scores every transaction</span> for
              fraud risk.
            </h2>
            <p>
              The Digital Financial System processes digital transactions and monitors them
              with machine-learning fraud detection, anomaly detection and risk scoring, so
              suspicious activity is caught before money moves.
            </p>
            <div className="hero-actions">
              <Link to="/dashboard" className="btn btn-primary">
                Open dashboard
              </Link>
              <a href="#how-it-works" className="btn btn-ghost">
                See how it works
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>0–100</dt>
                <dd>risk score per transaction</dd>
              </div>
              <div>
                <dt>6</dt>
                <dd>core monitoring features</dd>
              </div>
              <div>
                <dt>3</dt>
                <dd>services: backend, ML, frontend</dd>
              </div>
            </dl>
          </div>

          <div className="hero-card" aria-hidden="true">
            <div className="hero-card-head">
              <span>Live risk scoring</span>
              <span className="hero-live">Streaming</span>
            </div>

            <div className="hero-score">
              <span className="hero-score-value">87</span>
              <span className="hero-score-meta">
                <strong>High risk</strong>
                70–100 band · hold &amp; investigate
              </span>
            </div>

            <ul className="hero-signals">
              <li>
                <span>Velocity spike</span>
                <em>+6 txns / 4 min</em>
              </li>
              <li>
                <span>New beneficiary</span>
                <em>created 11 min ago</em>
              </li>
              <li>
                <span>Amount anomaly</span>
                <em>3.8× average</em>
              </li>
            </ul>

            <div className="hero-card-foot">
              <span>ALT-2093</span>
              <span className="status status-blocked">Held</span>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-head">
            <span className="eyebrow">Core features</span>
            <h2>What the system does</h2>
            <p>
              Transaction processing and fraud analytics in a single monitored pipeline.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature" key={feature.title}>
                <span className="glyph" aria-hidden="true">
                  {feature.glyph}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>From payment to decision</h2>
          </div>

          <ol className="steps">
            {steps.map((item) => (
              <li className="step" key={item.step}>
                <span className="step-index">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="stack" className="section">
          <div className="section-head">
            <span className="eyebrow">Technology stack</span>
            <h2>Built with</h2>
          </div>

          <div className="stack-grid">
            {stack.map((group) => (
              <article className="stack-group" key={group.group}>
                <h3>{group.group}</h3>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="structure" className="section">
          <div className="section-head">
            <span className="eyebrow">Project structure</span>
            <h2>One repository, four services</h2>
          </div>

          <ul className="structure-list">
            {structure.map((item) => (
              <li className="structure-item" key={item.dir}>
                <code>{item.dir}</code>
                <span>{item.body}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="cta-band">
          <div>
            <h2>See the monitoring dashboard</h2>
            <p>
              Transaction stream, risk distribution, anomaly signals and the alert queue.
            </p>
          </div>
          <Link to="/dashboard" className="btn btn-primary">
            Open dashboard
          </Link>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Digital Financial System</strong>
          <p>
            A Java-based digital financial monitoring system with ML-powered fraud
            detection, anomaly detection and financial risk scoring.
          </p>
        </div>
        <div className="footer-meta">
          <span>
            Java · Spring Boot · PostgreSQL · Python · Scikit-learn · FastAPI · React
          </span>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </footer>
    </div>
  );
}
