# Frontend

Website for the Digital Financial System: a public project landing page plus the
financial monitoring application (transaction processing, ML fraud detection,
anomaly detection, fraud risk scoring and suspicious transaction alerts).

## Stack

* JavaScript / React 18
* React Router
* Vite

## Routes

| Route | Page |
| --- | --- |
| `/` | Landing page: core features, how it works, tech stack, project structure |
| `/dashboard` | Financial monitoring dashboard |
| `/transactions` | Transaction stream with status and payment-method filters |
| `/alerts` | Suspicious transaction alerts, filtered by severity |
| `/risk-scoring` | Risk score bands, recommended action and model status |
| `/analytics` | Daily volume, payment channel mix and category share |

## Structure

```
frontend/
├── index.html
├── vite.config.js
└── src/
    ├── main.jsx                # React entry point (BrowserRouter)
    ├── App.jsx                 # Routes
    ├── index.css               # Theme, landing page and app styles
    ├── data/
    │   └── mockData.js         # Sample data (replace with API calls)
    ├── components/
    │   ├── AppLayout.jsx       # Sidebar + topbar shell for app routes
    │   ├── Sidebar.jsx
    │   ├── Topbar.jsx
    │   ├── StatCard.jsx
    │   ├── RiskDistribution.jsx
    │   ├── AnomalyPanel.jsx
    │   ├── TransactionsTable.jsx
    │   └── AlertsPanel.jsx
    └── pages/
        ├── Landing.jsx
        ├── Dashboard.jsx
        ├── Transactions.jsx
        ├── Alerts.jsx
        ├── RiskScoring.jsx
        └── Analytics.jsx
```

## Setup

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
npm run build      # production build in frontend/dist
```

## Backend integration

`src/data/mockData.js` holds the sample numbers used across the site. Each export
maps to a response from the Spring Boot backend (transactions, alerts, summary
metrics) and the FastAPI ML service (risk scores, anomaly signals); replace the
imports with API calls once those endpoints exist.
