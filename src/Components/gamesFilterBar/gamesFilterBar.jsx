import { useState, useRef, useEffect } from "react";
import "./gamesFilterBar.css";

const FILTERS = ["All", "Action", "Adventure", "Sports", "Strategy"];

const SORT_OPTIONS = [
  "Newest First",
  "Oldest First",
  "Most Popular",
  "Top Rated",
  "A-Z",
];

export default function GamesFilterBar() {
  const [active, setActive] = useState("All");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("Newest First");
  const sortRef = useRef(null);

  // Close the sort dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="games-filter">
      <div className="games-filter-container">
        <div className="filter-buttons">
          {FILTERS.map((item) => (
            <button
              key={item}
              className={`filter-btn ${active === item ? "active" : ""}`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}

          <div className="sort-dropdown" ref={sortRef}>
            <button
              type="button"
              className={`sort-btn ${sortOpen ? "open" : ""}`}
              onClick={() => setSortOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
            >
              <span>{sortValue}</span>
              <svg
                className="sort-chevron"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5L7 9L11 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {sortOpen && (
              <ul className="sort-menu" role="listbox">
                {SORT_OPTIONS.map((option) => (
                  <li
                    key={option}
                    role="option"
                    aria-selected={sortValue === option}
                    className={`sort-option ${
                      sortValue === option ? "selected" : ""
                    }`}
                    onClick={() => {
                      setSortValue(option);
                      setSortOpen(false);
                    }}
                  >
                    {option}
                    {sortValue === option && (
                      <svg
                        className="sort-check"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 7.2L5.3 10L11.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}