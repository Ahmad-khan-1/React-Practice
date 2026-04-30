import React from "react";

export const ReactForm = () => {
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
