"use client";
import Image from "next/image";
import styles from "./SizeReadingText.module.css";
import { useState, useEffect } from "react";
import { useSizeReading } from "@/contexts/sizeContext/SizeContext";
export default function SizeReading() {
  const { textSize, setTextSize } = useSizeReading();
  // Array of sizes
  const sizes = [
    { size: "small", className: styles.smallContainer },
    { size: "medium", className: styles.mediumContainer },
    { size: "large", className: styles.largeContainer },
  ];

  // set text size to local Storage
  useEffect(() => {
    const textSize = localStorage.getItem("textSize");
    if (textSize) {
      setTextSize(textSize);
    }
  }, []);
  return (
    <section className={styles.reading}>
      {/* All Icon For Sizing Reading */}
      <div className={styles.sizeBox}>
        {sizes.map((item, index) => (
          <div
            key={index}
            className={`${item.className} ${
              textSize === item.size ? styles.active : ""
            }`}
            onClick={() => {
              setTextSize(item.size);
              localStorage.setItem("textSize", item.size);
            }}
          >
            <Image
              src={"/images/Tt.svg"}
              alt={`Reading ${item.size} Image`}
              objectFit="cover"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>

      {/* Share Icon */}
      <div className={styles.share}>
        <Image
          src={"/images/share.svg"}
          alt="share"
          objectFit="cover"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
