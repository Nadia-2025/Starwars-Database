import { useGlobalReducer } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const { state } = useGlobalReducer();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.length > 1) {
      const items = [
        ...state.characters.map((character) => ({
          ...character,
          type: "characters",
        })),
        ...state.planets.map((planet) => ({ ...planet, type: "planets" })),
        ...state.vehicles.map((vehicle) => ({ ...vehicle, type: "vehicles" })),
      ];

      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(value)
      );

      setResults(filtered.slice(0, 5));
    } else {
      setResults([]);
    }
  };

  const navigateToDetail = (item) => {
    switch (item.type) {
      case "characters":
        navigate(`/people/${item.uid}`);
        break;
      case "planets":
        navigate(`/planet/${item.uid}`);
        break;
      case "vehicles":
        navigate(`/vehicle/${item.uid}`);
        break;
      default:
    }
    setQuery("");
    setResults([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;

    const items = [
      ...state.characters.map((c) => ({ ...c, type: "characters" })),
      ...state.planets.map((p) => ({ ...p, type: "planets" })),
      ...state.vehicles.map((v) => ({ ...v, type: "vehicles" })),
    ];

    const found = items.find(
      (item) => item.name.toLowerCase() === query.toLowerCase()
    );

    if (found) {
      navigateToDetail(found);
    } else {
      alert("No results found!");
    }
  };

  return (
    <div className="d-flex justify-content-center position-relative w-50">
      <form
        className="d-flex flex-grow-1"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-2 flex-grow-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-light me-2 d-flex align-items-center"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass me-3"></i>
          SEARCH
        </button>
      </form>

      {/* Dropdown de autocompletado */}
      {results.length > 0 && (
        <ul
          className="list-group position-absolute w-100"
          style={{ top: "100%", zIndex: 1000 }}
        >
          {results.map((item) => (
            <li
              key={`${item.type}-${item.uid}`}
              className="list-group-item list-group-item-action text-start"
              style={{ cursor: "pointer" }}
              onClick={() => navigateToDetail(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
