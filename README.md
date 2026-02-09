# Brent Oil Price Change Point Analysis  
**10 Academy – Artificial Intelligence Mastery (Week 11 Challenge)**  
**Organization:** Birhan Energies  
**Date:** February 2026  

---

## Project Overview
This project analyzes how major geopolitical events, OPEC decisions, and global economic shocks affect Brent crude oil prices.  
We apply **Bayesian change point detection (PyMC)** to identify structural breaks in the time series and quantify regime shifts in price and volatility.  

The goal is to provide **data-driven insights** for:
- **Investors** → risk management and portfolio strategy  
- **Policymakers** → energy security and stability planning  
- **Energy companies** → operational cost forecasting and supply chain resilience  

---

##  Repository Structure
```bash
├── backend/
│   ├── app.py 
├── data/
│   ├── BrentOilPrices.csv    # Historical Brent oil prices (1987–2022)
│   └── events.csv             # Structured dataset of major events
├── frontend/
│   ├──  src/ 
│   ├──  public/
├── notebooks/
│   └── analysis.ipynb        # Main notebook with workflow, diagnostics, modeling
├── scripts/
│   └── preprocessing.py       
├── docs/
│   └── workflow.md          
├── README.md                 # Project overview and instructions
├── requirements.txt          # Python dependencies
└── .gitignore               # Excludes data files, envs, caches
```

---

##  Setup Instructions
1. **Clone the repository**  
```bash
   git clone <repo-url>
   cd brent-oil-analysis
```
2. **Create virtual environment**

```bash
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate  
```

3.**Install dependencies**

```bash
pip install -r requirements.txt
```

## Data Sources

**Brent Oil Prices:** Daily historical prices (1987–2022).

**Event Dataset:** Curated list of 10–15 major geopolitical, OPEC, and economic shocks (e.g., Gulf War, 2008 crisis, COVID-19).

## Analysis Workflow

1. **Data ingestion →** load and clean Brent oil dataset.

2. **Exploratory analysis →** summary stats, missing values, raw plots.

3. **Diagnostics →** trend visualization, ADF stationarity test, volatility patterns.

4. **Event overlay →** align major events with price timeline.

5. **Modeling →** Bayesian change point detection (PyMC).

6. **Interpretation →** quantify regime shifts, compare with events.

7. **Communication →** dashboard + executive summary report.

## Key Insights

**Change Point 1 (~2004):** Shift to high-price regime (~83 USD/barrel), linked to Iraq War aftermath and rising demand.

**Change Point 2 (~2014):** Shift to lower-price regime (~62 USD/barrel), aligned with OPEC’s refusal to cut production.

*Oil prices are non-stationary, with volatility clustering around major shocks.

## Communication Channels
**Investors:** Interactive dashboard with risk metrics.

**Policymakers:** Policy brief (PDF) highlighting energy security implications.

**Energy Companies:** Operational planning dashboard + executive summary.

## Requirements
- Python 3.9+

- pandas, numpy, matplotlib, seaborn

- statsmodels (ADF test)

- pymc, arviz (Bayesian modeling)

## Next Steps
- Extend to multi-change-point models for finer granularity.

- Integrate macroeconomic indicators (GDP, inflation).

- Deploy dashboard for stakeholder use.

## Project Overview

This project provides an interactive dashboard to explore Brent oil prices, Bayesian change point modeling results, and event correlations.

**Backend:** Flask API serving historical data, change point results, and event dataset.

**Frontend:** React app with interactive charts (Recharts) and event drill‑down functionality.

1. **Backend Setup (Flask)**
**Requirements**
- Python 3.9+

- Virtual environment recommended

**Installation**
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows

pip install -r requirements.txt
```
**Run Backend**
```bash
python app.py
```

**Backend runs at:**
http://127.0.0.1:5000

**API Endpoints**
- /api/prices → Historical Brent oil prices

- /api/change-points → Bayesian model results (change points, regime means)

- /api/events → Event dataset

2. **Frontend Setup (React)**

**Requirements**

- Node.js  18+
- npm or yarn

**Installation**

```bash
cd frontend
npm install
```
**Run Frontend**
```bash
npm start
```
**Frontend runs at:**
http://localhost:3000

3. **Connecting Frontend & Backend**

- Ensure Flask backend is running on port 5000.

- React frontend will fetch data from http://localhost:5000/api/....

- CORS is enabled in Flask (flask-cors package).

4. **Dashboard Features**

- **Historical Trends:** Line chart of Brent oil prices.

- **Change Points:** Red/green markers for detected breaks (2004, 2014).

- **Event Highlights:** Orange markers for geopolitical/economic events.

- **Drill‑Down:** Click an event → zoom into ±90 days around it.

- **Volatility Overlay:** Rolling 30‑day standard deviation plotted alongside prices.

- **Filters:** Date range selectors for custom exploration.

- **Responsive Design:** Works on desktop, tablet, and mobile.

