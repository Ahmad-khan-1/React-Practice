import { useState } from "react";

export default function Tool() {
  const greeting = "Hello, Prop Drilling!";
  const response = "I'm not here to play!";

  return <Parent greeting={greeting} response={response} />;
}

const Parent = ({ greeting, response }) => {
  return <Child greeting={greeting} response={response} />;
};

const Child = ({ greeting, response }) => {
  return <Grandchild greeting={greeting} response={response} />;
};

const Grandchild = ({ greeting, response }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  console.log(name);

  return (
    <>
      <h1>{greeting}</h1>
      <h2>{response}</h2>

      <input
        type="text"
        name={name}
        placeholder="Write something..."
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </>
  );
};
