import { useState, useMemo } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") setAmount(value);
    else if (name === "fromCurrency") setFromCurrency(value);
    else if (name === "toCurrency") setToCurrency(value);
  };

  const baseAmountInUSD = useMemo(() => {
    if (!amount) return 0;
    const amountNumber = Number(amount);
    const fromRate = rates[fromCurrency];
    return amountNumber / fromRate;
  }, [amount, fromCurrency]);

  const finalConvertedAmount = baseAmountInUSD * rates[toCurrency];

  return (
    <div>
      <h1>Currency Converter</h1>

      <label>Amount:</label>
      <br />
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={handleChange}
      />

      <br />
      <br />

      <label>Start Currency:</label>
      <br />
      <select name="fromCurrency" value={fromCurrency} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      <br />
      <br />

      <label>Target Currency:</label>
      <br />
      <select name="toCurrency" value={toCurrency} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      <br />
      <br />

      <p>
        <b>Converted Amount:</b>{" "}
        {amount
          ? `${finalConvertedAmount.toFixed(2)} ${toCurrency}`
          : `0.00 ${toCurrency}`}
      </p>
    </div>
  );
};
export default CurrencyConverter;
