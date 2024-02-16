"use client";
import React, { useState, useEffect } from "react";
import styles from "./ScrollWithRangeInput.module.css";

const ScrollWithRangeInput = () => {
  // State to keep track of the current scroll position
  const [scrollY, setScrollY] = useState(0);

  // State to keep track of the scroll percentage
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Function to handle the scroll event and update scrollY state
  const handleScrollY = () => {
    setScrollY(window.scrollY);
  };

  // Effect to add and remove scroll event listener for updating scrollY state
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  });

  // Effect to calculate scroll percentage and update scrollPercentage state
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      // Calculating the percentage of scrolled content
      const percentage =
        (scrollPosition /
          (document.documentElement.scrollHeight - windowHeight)) *
        100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle changes in the range input
  const handleChange = (event) => {
    const newValue = event.target.value;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrollTo = (newValue / 100) * (fullHeight - windowHeight);
    window.scrollTo(0, scrollTo);
  };

  return (
    <div
      className={styles.container}
      style={{
        // Changing background color based on scroll position
        backgroundColor: scrollY > 89 ? "#14224d" : "transparent",
      }}
    >
      <div className={styles.containProgress}>
        <input
          type="range"
          min="0"
          max={"100"}
          value={scrollPercentage}
          onChange={handleChange}
          className={styles.rangeInput}
        />
        {/* Progress bar indicating the scroll percentage */}
        <div
          className={styles.progress}
          style={{ width: scrollPercentage + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollWithRangeInput;
