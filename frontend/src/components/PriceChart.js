import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, Legend } from 'recharts';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getPrices, getChangePoints, getEvents } from '../api';

function PriceChart() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [changePoints, setChangePoints] = useState([]);
  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState(new Date("1987-01-01"));
  const [endDate, setEndDate] = useState(new Date("2023-12-31"));

  useEffect(() => {
    getPrices().then(res => {
      // Compute rolling volatility (30-day window)
      const raw = res.data.map((d, i, arr) => {
        const window = arr.slice(Math.max(0, i - 30), i);
        const prices = window.map(w => w.Price);
        const mean = prices.reduce((a, b) => a + b, 0) / (prices.length || 1);
        const variance = prices.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (prices.length || 1);
        const std = Math.sqrt(variance);
        return { ...d, Volatility: std };
      });
      setData(raw);
    });
    getChangePoints().then(res => setChangePoints([res.data]));
    getEvents().then(res => setEvents(res.data));
  }, []);

  useEffect(() => {
    const filtered = data.filter(d => {
      const date = new Date(d.Date);
      return date >= startDate && date <= endDate;
    });
    setFilteredData(filtered);
  }, [data, startDate, endDate]);

  return (
    <div>
      <h2>Brent Oil Prices & Volatility</h2>
      <div style={{ marginBottom: "20px" }}>
        <span>Start Date: </span>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <span style={{ marginLeft: "20px" }}>End Date: </span>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
      </div>

      <LineChart width={1000} height={500} data={filteredData}>
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Price" stroke="#1f77b4" name="Price" />
        <Line type="monotone" dataKey="Volatility" stroke="#ff7f0e" name="Volatility (30d)" />

        {changePoints.map((cp, i) => (
          <ReferenceLine key={i} x={cp.tau1} stroke="red" label="Change Point 1" />
        ))}
        {changePoints.map((cp, i) => (
          <ReferenceLine key={i} x={cp.tau2} stroke="green" label="Change Point 2" />
        ))}

        {events.map((ev, i) => (
          <ReferenceLine
            key={i}
            x={ev.Date}
            stroke="orange"
            label={ev.Event}
            onClick={() => {
              const evDate = new Date(ev.Date);
              const start = new Date(evDate); start.setDate(start.getDate() - 90);
              const end = new Date(evDate); end.setDate(end.getDate() + 90);
              setStartDate(start); setEndDate(end);
            }}
          />
        ))}
      </LineChart>
    </div>
  );
}

export default PriceChart;
