import { useEffect, useState } from "react";

const FetchingData = () => {
  const [data, setData] = useState([]);
  const [lodding, setLodding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLodding(false);
      })
      .catch((err) => {
        setError(err);
        setLodding(false);
      });
  }, []);
  if (lodding) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;
  return (
    <>
      <div>
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default FetchingData;
