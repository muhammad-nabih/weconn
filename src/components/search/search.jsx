"use client";

import Image from "next/image";
import styles from "./search.module.css";
import { useState } from "react";

const Search = () => {
  // State to manage input display
  const [inputShow, setInputShow] = useState(false);

  return (
    <div className={styles.searchBox}>
      {/* Search input */}
      <input
        // Show input if inputShow is true
        style={{ display: inputShow ? "block" : "none" }}
        type="search"
        placeholder="What Do You Need"
        className={styles.input}
      />

      {/* Search icon */}
      <div
        style={{
          borderColor: inputShow
            ? "var(  --link-hoverColor)"
            : "rgba(255, 255, 255, 0.08)",
        }}
        className={styles.searchIcon}
        onClick={() => {
          setInputShow((inputShow) => !inputShow); // Toggle inputShow state on click
        }}
      >
        {/* Search Image */}
        <Image
          className={styles.img}
          src={"/images/search.svg"}
          alt="search Icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Search;
