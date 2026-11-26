import { transactions } from '../data/mockData.js';
import TransactionsTable from '../components/TransactionsTable.jsx';

const counts = transactions.reduce(
  (acc, transaction) => {
    acc.total += 1;
    acc[transaction.status.toLowerCase()] += 1;
    return acc;
  },
  { total: 0, approved: 0, flagged: 0, blocked: 0 },
);

export default function Transactions() {
  return (
    <main className="dashboard">
      <div className="page-head">
        <div>
          <span className="window-tag">Digital transaction processing</span>
          <h2>All transactions</h2>
          <p>Filter the processed stream by status and payment method.</p>
        </div>
        <ul className="page-facts">
          <li>
            <strong>{counts.total}</strong> processed
          </li>
          <li className="fact-approved">
            <strong>{counts.approved}</strong> approved
          </li>
          <li className="fact-flagged">
            <strong>{counts.flagged}</strong> flagged
          </li>
          <li className="fact-blocked">
            <strong>{counts.blocked}</strong> blocked
          </li>
        </ul>
      </div>

      <TransactionsTable
        transactions={transactions}
        title="Transaction stream"
        subtitle="Every transaction carries the model's fraud risk score"
        showMethodFilter
      />
    </main>
  );
}
