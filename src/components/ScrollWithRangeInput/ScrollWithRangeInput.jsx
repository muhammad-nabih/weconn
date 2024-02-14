"use client";
import React, { useState, useEffect } from "react";
// Import CSS styles
import styles from "./ScrollWithRangeInput.module.css";

const ScrollWithRangeInput = () => {
  // Current scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  // Maximum scroll value
  const [maxScroll, setMaxScroll] = useState(0);
  // Flag indicating if scrolling has occurred
  const [isScroll, setIsScroll] = useState(false);
  // Size of the scroll
  const [sizeScroll, setSizeScroll] = useState(0);

  // Effect to handle scroll and resize events
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      // Set isScroll to true when scrolling occurs
      setIsScroll(true);
      setSizeScroll(currentPosition);
    };

    // Function to handle resize events
    const handleResize = () => {
      // Update maxScroll value
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    };

    // Add event listeners for scroll and resize events
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Update maxScroll initially

    // Cleanup: remove event listeners when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to handle input change from range input
  const handleInputChange = (e) => {
    // Get new scroll position from input value
    const newPosition = parseInt(e.target.value);
    // Scroll the window to the new position
    window.scrollTo(0, newPosition);
    // Update the scroll position state
    setScrollPosition(newPosition);
  };

  return (
    <div
      className={styles.container} // Apply container styles
      style={{
        backgroundColor:
          isScroll && sizeScroll > 89 ? "#14224d" : "transparent", // Change background color based on scrolling
      }}
    >
      <div className={styles.containProgress}>
        {" "}
        {/* Container for the progress bar */}
        <input
          type="range" // Range input to control scroll position
          min="0" // Minimum value
          max={maxScroll} // Maximum value (dynamic based on page height)
          value={scrollPosition} // Current scroll position
          onChange={handleInputChange} // Handle input change
          className={styles.rangeInput} // Apply range input styles
        />
        <div
          className={styles.progress}
          // Set width of progress bar based on scroll position
          style={{ width: (scrollPosition / maxScroll) * 100 + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollWithRangeInput;
