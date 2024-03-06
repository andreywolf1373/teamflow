import { ChevronDownOutline } from "react-ionicons";
import styles from "./NavBar.module.css";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Добавляем или удаляем класс для блокировки скролла
    document.body.classList.toggle("menu-open", !isOpen);
  };

  return (
    <div className={styles.header_container}>
      <nav
        className={
          isOpen ? [styles.navbar, styles.active].join(" ") : styles.navbar
        }
      >
        <div className={styles.dropdown}>
          <a href="#">
            How it Works <ChevronDownOutline width={"12px"} height={"12px"} />
          </a>

          <div className={styles.dropdown_content}>
            <a href="#">Placeholder</a>
            <a href="#">Placeholder</a>
            <a href="#">Placeholder</a>
          </div>
        </div>

        <div className={styles.dropdown}>
          <a href="#">
            Product <ChevronDownOutline width={"12px"} height={"12px"} />
          </a>
          <div className={styles.dropdown_content}>
            <a href="#">Placeholder</a>
            <a href="#">Placeholder</a>
            <a href="#">Placeholder</a>
          </div>
        </div>

        <div className={styles.dropdown}>
          <a href="#">Pricing</a>
        </div>

        <div className={styles.dropdown}>
          <a href="#">
            Resources <ChevronDownOutline width={"12px"} height={"12px"} />
          </a>
          <div className={styles.dropdown_content}>
            <a href="#">Placeholder</a>
            <a href="#">Placeholder</a>
            <a href="#">Placeholder</a>
          </div>
        </div>

        <div className={styles.button_container}>
          <a href="#"> Log in </a>
          <a href="#" className={styles.button_second}>
            Get started free
          </a>
        </div>
      </nav>
      <div onClick={() => toggleMenu()} className={styles.mobile_btn}>
        {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </div>
  );
}

export default NavBar;
