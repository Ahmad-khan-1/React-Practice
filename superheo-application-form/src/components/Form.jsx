import React from "react";
import { useState } from "react";

const Form = () => {
  const powerSourceOptions = [
    "Bitten by a strange creature",
    "Radioactive exposure",
    "Science experiment",
    "Alien heritage",
    "Ancient artifact discovery",
    "Other",
  ];

  const powersOptions = [
    "Super Strength",
    "Super Speed",
    "Flight",
    "Invisibility",
    "Telekinesis",
    "Other",
  ];

  const [name, setName] = useState("");
  const [realName, setRealName] = useState("");
  const [powerSource, setPowerSource] = useState("");
  const [powers, setPowers] = useState([]);

  const handlePowersChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setPowers([...powers, value]);
    } else {
      setPowers(powers.filter((power) => power !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      realName,
      powerSource,
      powers,
    };
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <label>
        Hero Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <br />

      <label>
        Real Name:
        <input
          type="password"
          value={realName}
          onChange={(e) => setRealName(e.target.value)}
        />
      </label>
      <br />
      <br />

      <label>
        Power Source:
        <select
          value={powerSource}
          onChange={(e) => setPowerSource(e.target.value)}
        >
          <option value="">Select a power source</option>
          {powerSourceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />
      <label>
        List your powers (select all that apply):
        <br />
        {powersOptions.map((power) => (
          <label key={power}>
            <input
              type="checkbox"
              value={power}
              checked={powers.includes(power)}
              onChange={handlePowersChange}
            />
            <span>{power}</span>
          </label>
        ))}
      </label>
      <br />

      <button onClick={handleSubmit}>Submit Application</button>
    </div>
  );
};

export default Form;
