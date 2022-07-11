import React from "react";
import classes from "./search-form.module.css";
import SearchIcon from "../../icons/search";
import { useCallback, useRef, useState } from "react";
import List from "../shop/list";

const Search = () => {
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);
  //----------------------------------------

  const searchRef = useRef(null);
  const searchEndpoint = (query) => `/api/search?q=${query}`;
  const onChange = useCallback(async (event) => {
    const query = event.target.value;
    setQuery(query);

    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.searchRes);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setTimeout(() => {
      setActive(true);
      window.removeEventListener("click", onClick);
    }, 6000);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <section className={classes.container}>
      <h1 className={classes.label}>SEARCH</h1>
      <form className={classes.form}>
        <div className={classes.control}>
          <input
            value={query}
            type="text"
            id="search"
            placeholder="Search..."
            ref={searchRef}
            onChange={onChange}
            onFocus={onFocus}
          />
          <button className={classes.icon}>
            <SearchIcon />
          </button>
        </div>
      </form>
      {active && results && (
        <ul>
          <List items={results}></List>
        </ul>
      )}
      {active && !results.length && query && <p>No matches found!</p>}
    </section>
  );
};
export default Search;
