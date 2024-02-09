"use client";
import { useEffect } from "react";
// Import necessary modules
import styles from "./NavItem.module.css";
import Link from "next/link";

const NavItem = ({
  itemContent,
  url,
  catchLinkById,
  isActive,
  handleChangeActive,
}) => {
  // Function to handle click on the item
  const handleClick = () => {
    // Calling the provided function to change the active item
    handleChangeActive(catchLinkById);
    //add link active to local storage
    localStorage.setItem("linkId", catchLinkById);
  };

  useEffect(() => {
    const storedLinkId = localStorage.getItem("linkId");
    if (storedLinkId) {
      handleChangeActive(parseInt(storedLinkId));
    } else {
      handleChangeActive(1);
    }
  }, [handleChangeActive]);

  return (
    <li
      onClick={handleClick}
      className={`${styles.item} ${isActive ? styles.active : ""}`}
    >
      <Link href={url}>{itemContent}</Link>
    </li>
  );
};

export default NavItem;
