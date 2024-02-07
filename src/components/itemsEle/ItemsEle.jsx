import styles from "./ItemsEle.module.css";
import Link from "next/link";
const ItemsEle = ({ itemContent, url, isActive }) => {
  return (
    <>
      <Link href={url}>
        <li className={`${styles.item} ${isActive}`}>{itemContent}</li>
      </Link>
    </>
  );
};

export default ItemsEle;
