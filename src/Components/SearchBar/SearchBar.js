import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import styles from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (evt) => {
    setValue(evt.target.value.toLowerCase());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (value.trim() === "") {
      toast.error("Введите поисковый запрос");
      return;
    }
    onSubmit(value);
    setValue("");
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles["SearchForm-button"]}>
          <span className={styles["SearchForm-button-label"]}>Search</span>
        </button>
        <input
          className={styles["SearchForm-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          value={value}
        />
      </form>
    </header>
  );
}

SearchBar.protoType = {
  onSubmit: PropTypes.func.isRequired,
};
