import { useState } from "react";

export function ChangeState() {
  const [count, setCout] = useState(0);
  return (
    <div>
      <button
        style={{ margin: "10px", width: "100px", height: "100px" }}
        onClick={() => setCout(count + 1)}
      >
        Incremen
      </button>
      {count}
      <button
        style={{ margin: "10px", width: "100px", height: "100px" }}
        onClick={() => setCout(count - 1)}
      >
        Incremen
      </button>
    </div>
  );
}
