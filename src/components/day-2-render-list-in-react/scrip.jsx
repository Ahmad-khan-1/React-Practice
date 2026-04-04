

export function ListRendering() {
    const fruits = ["apple","banana","mango"]
    return (
        <ul>
            {fruits.map((fruit, index) => <li key={`${fruit}-${index}`} >{fruit}</li>)}
        </ul>
    )
}
export function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={`${fruit}-${index}`}>{fruit}</li>
      ))}
    </ul>
  );
}