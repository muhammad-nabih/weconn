"use client";
import styles from "./NavItem.module.css";
import Link from "next/link";
const NavItem = ({
  itemContent,
  url,
  catchLinkById,
  isActive,
  handleChangeActive,
}) => {
  const handleClick = () => {
    handleChangeActive(catchLinkById);
  };

  return (
    <Link
      href={url}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <li onClick={handleClick} className={`${styles.item} ${isActive}`}>
        {itemContent}
      </li>
    </Link>
  );
};

export default NavItem;
