import React, { useState } from "react";

const ColorPickerApp = () => {
  const [color, setColor] = useState("red");
  return (
    <div style={{ backgroundColor: color }}>
      Color: {color}
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPickerApp;
