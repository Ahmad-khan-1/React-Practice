import { useState } from "react";

export function UpdatingState() {
  const [user, setUser] = useState({ name: "John Doe", age: 31, city: "LA" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "age" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <h2>Update User Age </h2>
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
      />

      <h2>Update User Name </h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />

      <h2>Update User City </h2>
      <input
        type="text"
        name="city"
        value={user.city}
        onChange={handleChange}
      />
    </div>
  );
}
