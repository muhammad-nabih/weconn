"use client";
import Image from "next/image";
import styles from "./ToggleIcon.module.css";
import { useAside } from "@/contexts/asideContext/AsideContext";
const ToggleIcon = () => {
  const { showAside, setShowAside } = useAside();
  return (
    <>
      <div
        className={styles.layoutImage}
        onClick={() => {
          setShowAside(true);
        }}
      >
        <Image
          src={"/images/toggleIcon.svg"}
          alt="Toggle Icon"
          width={24}
          height={24}
        />
      </div>
    </>
  );
};

export default ToggleIcon;
