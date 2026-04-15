import { useState } from "react";

export function UpdatingArry() {
  const [items, setItems] = useState([
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
  ]);
  const [nextId, setNextId] = useState(4); // unique counter

  const addItem = () => {
    const newItem = { id: nextId, name: `item${nextId}` };
    setItems((prev) => [...prev, newItem]);
    setNextId((prev) => prev + 1);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
