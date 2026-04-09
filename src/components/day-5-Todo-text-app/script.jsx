import { useState } from "react";

export function TodoTextApp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleButton = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={handleButton}>
        {isVisible ? "showmessage" : "Hide Message"}
      </button>
      {isVisible ? "" : <p>I love free code Camp</p>}
    </div>
  );
}
