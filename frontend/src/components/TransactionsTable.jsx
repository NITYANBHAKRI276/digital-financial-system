import { useMemo, useState } from 'react';

const statusFilters = ['All', 'Approved', 'Flagged', 'Blocked'];

function riskTone(score) {
  if (score >= 70) return 'critical';
  if (score >= 40) return 'elevated';
  return 'low';
}

const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

export default function TransactionsTable({
  transactions,
  title = 'Transaction stream',
  subtitle = 'Latest processed transactions with ML fraud risk scores',
  showMethodFilter = false,
}) {
  const [status, setStatus] = useState('All');
  const [method, setMethod] = useState('All');

  const methods = useMemo(
    () => ['All', ...new Set(transactions.map((transaction) => transaction.method))],
    [transactions],
  );

  const rows = useMemo(
    () =>
      transactions.filter(
        (transaction) =>
          (status === 'All' || transaction.status === status) &&
          (method === 'All' || transaction.method === method),
      ),
    [transactions, status, method],
  );

  return (
    <section className="card panel">
      <header className="panel-head">
        <div>
          <h2>{title}</h2>
          <p className="panel-sub">{subtitle}</p>
        </div>
        <div className="toolbar">
          {showMethodFilter && (
            <select
              className="select"
              value={method}
              onChange={(event) => setMethod(event.target.value)}
              aria-label="Filter by payment method"
            >
              {methods.map((option) => (
                <option key={option} value={option}>
                  {option === 'All' ? 'All methods' : option}
                </option>
              ))}
            </select>
          )}
          <div className="filter-group" role="group" aria-label="Filter transactions">
            {statusFilters.map((option) => (
              <button
                key={option}
                type="button"
                className={`filter${status === option ? ' is-active' : ''}`}
                onClick={() => setStatus(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Customer</th>
              <th>Merchant / beneficiary</th>
              <th className="num">Amount</th>
              <th>Method</th>
              <th>Time</th>
              <th>Risk score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((transaction) => (
              <tr key={transaction.id}>
                <td className="mono">{transaction.id}</td>
                <td>{transaction.customer}</td>
                <td className="muted-cell">{transaction.merchant}</td>
                <td className="num">{currency.format(transaction.amount)}</td>
                <td>
                  <span className="method">{transaction.method}</span>
                </td>
                <td className="mono">{transaction.time}</td>
                <td>
                  <span className={`risk risk-${riskTone(transaction.riskScore)}`}>
                    {transaction.riskScore}
                  </span>
                </td>
                <td>
                  <span className={`status status-${transaction.status.toLowerCase()}`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={8} className="empty">
                  No transactions match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="table-foot">
        Showing {rows.length} of {transactions.length} transactions
      </p>
    </section>
  );
}
