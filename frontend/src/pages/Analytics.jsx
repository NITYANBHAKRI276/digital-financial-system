import {
  categoryBreakdown,
  channelBreakdown,
  volumeTrend,
} from '../data/mockData.js';

const maxVolume = Math.max(...volumeTrend.map((day) => day.value));
const channelTotal = channelBreakdown.reduce((sum, item) => sum + item.count, 0);
const maxChannel = Math.max(...channelBreakdown.map((item) => item.count));

export default function Analytics() {
  return (
    <main className="dashboard">
      <div className="page-head">
        <div>
          <span className="window-tag">Last 7 days</span>
          <h2>Financial analytics</h2>
          <p>Volume trend, channel mix and merchant category share.</p>
        </div>
      </div>

      <section className="card panel">
        <header className="panel-head">
          <div>
            <h2>Daily processed volume</h2>
            <p className="panel-sub">Value processed per day</p>
          </div>
          <span className="pill">₹ crore</span>
        </header>

        <div className="trend">
          {volumeTrend.map((day) => (
            <div className="trend-col" key={day.label}>
              <span className="trend-value">₹{day.value.toFixed(2)}</span>
              <div className="trend-track">
                <div
                  className="trend-fill"
                  style={{ height: `${(day.value / maxVolume) * 100}%` }}
                />
              </div>
              <span className="trend-label">{day.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="two-col">
        <section className="card panel">
          <header className="panel-head">
            <div>
              <h2>Payment channel mix</h2>
              <p className="panel-sub">
                {channelTotal.toLocaleString('en-IN')} transactions monitored
              </p>
            </div>
          </header>

          <ul className="breakdown">
            {channelBreakdown.map((item) => (
              <li key={item.channel}>
                <div className="breakdown-row">
                  <span>{item.channel}</span>
                  <span className="muted-cell">
                    {item.count.toLocaleString('en-IN')} ·{' '}
                    {Math.round((item.count / channelTotal) * 100)}%
                  </span>
                </div>
                <div className="breakdown-track">
                  <div
                    className="breakdown-fill"
                    style={{ width: `${(item.count / maxChannel) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="card panel">
          <header className="panel-head">
            <div>
              <h2>Merchant category share</h2>
              <p className="panel-sub">Share of processed volume</p>
            </div>
          </header>

          <ul className="breakdown">
            {categoryBreakdown.map((item) => (
              <li key={item.category}>
                <div className="breakdown-row">
                  <span>{item.category}</span>
                  <span className="muted-cell">{item.share}%</span>
                </div>
                <div className="breakdown-track">
                  <div
                    className="breakdown-fill breakdown-alt"
                    style={{ width: `${item.share * 3}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <p className="demo-note">
        Sample data · figures will come from the Spring Boot analytics endpoints.
      </p>
    </main>
  );
}
