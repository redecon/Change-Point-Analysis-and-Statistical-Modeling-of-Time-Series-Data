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

