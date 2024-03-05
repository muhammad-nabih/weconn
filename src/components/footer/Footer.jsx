import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const iconsData = [
  { src: "images/facebook.svg", alt: "Facebook Icon" },
  { src: "/images/instagram.svg", alt: "Instagram Icon" },
  { src: "images/twitter.svg", alt: "Twitter Icon" },
  { src: "images/telegram.svg", alt: "Telegram Icon" },
  { src: "images/discord.svg", alt: "Discord Icon" },
  { src: "/images/youtube.svg", alt: "Youtube Icon" },
];

const socialIcons = iconsData.map((icon, index) => (
  <li className={styles.iconContainer} key={index}>
    <Link href={"/"}>
      <Image width={20} height={20} src={icon.src} alt={icon.alt} />
    </Link>
  </li>
));

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <Image
              src={"/images/logoFooterDarkMode.svg"}
              width={80}
              height={80}
              alt="Footer Logo"
            />
          </div>
          <p className={styles.description}>
            You can write something here if you want.
          </p>
          <ul className={styles.icons}>{socialIcons}</ul>
        </div>

        {/* Keep other parts of the footer as it is */}
        <div className={styles.boxLists}>
          <div className={styles.listsContainer}>
            <h3 className={styles.h3}>Use Cases</h3>
            <ul className={styles.lists}>
              <li>
                <Link className={styles.link} href="/">
                  type
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  type
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  type
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  type
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.listsContainer}>
            <h3 className={styles.h3}>Company</h3>
            <ul className={styles.lists}>
              <li>
                <Link className={styles.link} href="/">
                  type
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  type
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  type
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  type
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.contactBox}>
          <h3 className={styles.h3}>Get News and Updates</h3>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email Address"
            />
            <button className={styles.subscribe}>Subscribe</button>
          </div>
        </div>
      </div>
      <p className={styles.p}>Copyright © 2023 YAL GAMERS</p>
    </footer>
  );
}

export default Footer;
