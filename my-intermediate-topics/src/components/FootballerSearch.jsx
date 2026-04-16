import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import footballers from "../data/footballers";

const FootballerSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (debouncedQuery) {
      const filtered = footballers.filter((f) =>
        f.toLowerCase().includes(debouncedQuery.toLowerCase()),
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Footballer Search App</h1>

      <input
        style={{ padding: "0.5rem", width: "300px" }}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a footballer..."
      />

      <ul style={{ listStyle: "none", marginTop: "20px" }}>
        {results.length > 0
          ? results.map((player, index) => (
              <li key={index} style={{ padding: "5px" }}>
                {player}
              </li>
            ))
          : query && <p>No results found</p>}
      </ul>
    </div>
  );
};

export default FootballerSearch;
