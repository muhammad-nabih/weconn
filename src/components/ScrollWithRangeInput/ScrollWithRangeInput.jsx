import React, { useState, useEffect } from "react";
import styles from "./ScrollWithRangeInput.module.css";

const ScrollWithRangeInput = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [sizeScroll, setSizeScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      setIsScroll(true);
      setSizeScroll(currentPosition);
    };

    const handleResize = () => {
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Update maxScroll initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInputChange = (e) => {
    const newPosition = parseInt(e.target.value);
    window.scrollTo(0, newPosition);
    setScrollPosition(newPosition);
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor:
          isScroll && sizeScroll > 89 ? "#14224d" : "transparent",
      }}
    >
      <div className={styles.containProgress}>
        <input
          type="range"
          min="0"
          max={maxScroll}
          value={scrollPosition}
          onChange={handleInputChange}
          className={styles.rangeInput}
        />
        <div
          className={styles.progress}
          style={{ width: (scrollPosition / maxScroll) * 100 + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollWithRangeInput;
