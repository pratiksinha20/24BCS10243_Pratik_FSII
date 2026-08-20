import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState("");

  // Simple fixed exchange rates
  const rates = {
    USD: 1,
    INR: 83,
    EUR: 0.92,
    GBP: 0.79,
  };

  const convert = () => {
    if (amount === "") return;

    // Convert amount to USD first
    const usdAmount = Number(amount) / rates[from];

    // Convert USD to target currency
    const convertedAmount = usdAmount * rates[to];

    setResult(convertedAmount.toFixed(2));
  };

  return (
    <div>
      <h1>Currency Converter</h1>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      <span> → </span>

      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
      >
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      <br /><br />

      <button onClick={convert}>
        Convert
      </button>

      <h2>
        Result: {result} {to}
      </h2>
    </div>
  );
}

export default App;