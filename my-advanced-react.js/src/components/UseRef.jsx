import React from "react";

export const UseRef = () => {
  const emailRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
