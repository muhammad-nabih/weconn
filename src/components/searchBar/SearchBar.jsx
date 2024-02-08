"use client";
// Import the necessary modules
import Image from "next/image";
import styles from "./search.module.css";
import { useState } from "react";

// Define the Search component
const SearchBar = () => {
  // State to manage input display
  const [inputShow, setInputShow] = useState(false);

  // Function to toggle input display
  const toggleInput = () => {
    setInputShow((prevState) => !prevState); // Toggle inputShow state
  };

  return (
    <div className={styles.searchBox}>
      {/* Search input */}
      <input
        // Set display based on inputShow state
        style={{ display: inputShow ? "block" : "none" }}
        type="search"
        placeholder="What Do You Need"
        className={styles.input}
      />

      {/* Search icon */}
      <div
        // Set border color based on inputShow state
        style={{
          borderColor: inputShow
            ? "var(--link-hoverColor)"
            : "rgba(255, 255, 255, 0.08)",
        }}
        className={styles.searchIcon}
        onClick={toggleInput} 
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

// Export the Search component
export default SearchBar;
