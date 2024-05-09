import Link from "next/link";
import styles from "./Layout.module.css";

function layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/cars">
          <h2>CarShop</h2>
          <p>Choose a car to buy !</p>
        </Link>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>using Next.js | ilia moradi &copy;</footer>
    </>
  );
}

export default layout;
