import { useState } from "react";
import styles from "./Footer.module.css";
import { ChevronDownOutline } from "react-ionicons";
function Footer() {
  const [isOpen, setIsOpen] = useState(null);

  const handleIsOpen = (tabNumber) => {
    setIsOpen(tabNumber === isOpen ? null : tabNumber);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.grid_container}>
        <ul>
          <p className={styles.footer_title} onClick={() => handleIsOpen(1)}>
            Company
            <ChevronDownOutline
              width={"20px"}
              height={"20px"}
              color={"#fff"}
              cssClasses={styles.arrow}
            />
          </p>
          <ul
            className={
              isOpen === 1
                ? styles.footer_dropdown_open
                : styles.footer_dropdown
            }
          >
            <li>
              <a href="#"> About us </a>
            </li>
            <li>
              <a href="#"> Blog </a>
            </li>
            <li>
              <a href="#"> Careers </a>
            </li>
            <li>
              <a href="#"> Contact Us</a>
            </li>
          </ul>
        </ul>
        <ul>
          <p className={styles.footer_title} onClick={() => handleIsOpen(2)}>
            Support
            <ChevronDownOutline
              width={"20px"}
              height={"20px"}
              color={"#fff"}
              cssClasses={styles.arrow}
            />
          </p>
          <ul
            className={
              isOpen === 2
                ? styles.footer_dropdown_open
                : styles.footer_dropdown
            }
          >
            <li>
              <a href="#"> Help Center </a>
            </li>
            <li>
              <a href="#"> Safety Center </a>
            </li>
            <li>
              <a href="#"> Community </a>
            </li>
          </ul>
        </ul>
        <ul>
          <p className={styles.footer_title} onClick={() => handleIsOpen(3)}>
            Legal
            <ChevronDownOutline
              width={"20px"}
              height={"20px"}
              color={"#fff"}
              cssClasses={styles.arrow}
            ></ChevronDownOutline>
          </p>
          <ul
            className={
              isOpen === 3
                ? styles.footer_dropdown_open
                : styles.footer_dropdown
            }
          >
            <li>
              <a href="#">Cookies Policy</a>
            </li>
            <li>
              <a href="#"> Privacy Policy</a>
            </li>
            <li>
              <a href="#"> Terms of Service </a>
            </li>
          </ul>
        </ul>
        <div className={styles.download_footer}>
          <p>Install App</p>
          <div className={styles.group_button_dark}>
            <img src="/googlebdark.png" alt="google play" />
            <img src="/applebdark.png" alt="apple store" />
          </div>
        </div>
      </div>

      <div className={styles.downfooter}>
        <p>&copy; - All rights reserved </p>{" "}
        <div className={styles.icon_group}>
          <img src="/insta.png" alt="inst" />
          <img src="/ball.png" alt="ball" />
          <img src="/x.png" alt="twitter" />
          <img src="/youtube.png" alt="youtube" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
