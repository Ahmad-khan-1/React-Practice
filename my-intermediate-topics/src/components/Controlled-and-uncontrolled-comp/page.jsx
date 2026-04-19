import { useState } from "react";
import { useRef } from "react";

//! Controlled components are those where form data is handled by the React component's state. The input's value is controlled by React, and any changes to the input are managed through event handlers that update the state. This allows for more predictable behavior and easier debugging.
export const ControlledComp = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Controlled Component</h1>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text..."
      />
      <p>
        You entered: <strong>{inputValue}</strong>
      </p>
    </div>
  );
};

//? Uncontrolled components are those where form data is handled by the DOM itself. The input's value is not controlled by React, and instead, you can access the value using refs. This approach can be simpler for certain use cases but may lead to less predictable behavior and more difficult debugging.
export const UncontrolledComp = () => {
  const inputRef = useRef();

  const handleiNput = () => {
    console.log(inputRef.current.value);
  };
  return (
    <>
      <h1>Uncontrolled Component</h1>
      <input
        ref={inputRef}
        onChange={handleiNput}
        placeholder="Enter text..."
      />
    </>
  );
};
