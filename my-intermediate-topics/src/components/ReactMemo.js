import React, { useState } from "react";

const Child = React.memo(({ name }) => {
  console.log("Child component rendered");
  return <div>Hello, {name}!</div>;
});

// const Child = ({ name }) => {
//   console.log("Child component rendered");
//   return <div>Hello, {name}!</div>;
// };

export default function ReactMemo() {
  const [count, setCount] = useState(0);
  return (
    <>
      console.log("dfkjd");
      <h1>This is React Memo</h1>
      <Child name="Ali" />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
}
