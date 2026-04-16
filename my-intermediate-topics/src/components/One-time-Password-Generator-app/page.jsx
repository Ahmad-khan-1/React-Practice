import React, { useState, useEffect, useRef } from "react";

function OTPGenerator() {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (time > 0) {
      timerRef.current = setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0 && otp) {
      clearTimeout(timerRef.current);
    }

    return () => clearTimeout(timerRef.current);
  }, [time, otp]);

  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    setTime(5);
  };

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="assertive">
        {time > 0
          ? `Expires in: ${time} seconds`
          : otp
            ? "OTP expired. Click the button to generate a new OTP."
            : ""}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={time > 0}
      >
        Generate OTP
      </button>
    </div>
  );
}

export default OTPGenerator;
