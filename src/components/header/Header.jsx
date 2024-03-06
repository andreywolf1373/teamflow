import NavBar from "../header/NavBar";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          team<span>.</span>flow
        </p>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
