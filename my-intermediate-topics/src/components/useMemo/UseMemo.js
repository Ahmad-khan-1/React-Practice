import { useEffect, useState } from "react";
import ExpensiveSquare from "../ExpensiveSqurare";
const UseMemo = () => {
  const [timer, setTimer] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      <h1>Timer: {timer} second gone</h1>
      <ExpensiveSquare n={num} />
      <button onClick={() => setNum((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default UseMemo;
