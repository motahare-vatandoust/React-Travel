import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const lastChange = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleSearch(e) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(e.target.value);
    }, 500);
  }
  return (
    <div className="searchable-list">
      <input type="search" placeholder="search..." onChange={handleSearch} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
