"use client";
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
  };

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
