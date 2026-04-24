import { useMemo } from "react";
function ExpensiveSquare({ n }) {
  function calculateSquare(num) {
    console.log("Calculating square...");
    return num * num;
  }

  const squared = useMemo(() => calculateSquare(n), [n]);
  return (
    <p>
      Square of {n} is {squared}
    </p>
  );
}

export default ExpensiveSquare;
