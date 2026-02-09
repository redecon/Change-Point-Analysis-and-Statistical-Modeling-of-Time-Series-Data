from flask import Flask, jsonify
import pandas as pd

from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # enable CORS


# --- Load Data ---
df = pd.read_csv("../data/BrentOilPrices.csv", parse_dates=["Date"])
events = pd.read_csv("../data/events.csv")

# --- Endpoints ---

# 1. Historical price data
@app.route("/api/prices")
def get_prices():
    return jsonify(df.to_dict(orient="records"))

# 2. Change point results (hardcoded for now, can be updated dynamically)
@app.route("/api/change-points")
def get_change_points():
    results = {
        "tau1": "2004-03-16",
        "tau2": "2014-11-20",
        "mu1": 20.3,
        "mu2": 83.2,
        "mu3": 62.0
    }
    return jsonify(results)

# 3. Event dataset
@app.route("/api/events")
def get_events():
    return jsonify(events.to_dict(orient="records"))

# --- Run Server ---
if __name__ == "__main__":
    app.run(debug=True)
