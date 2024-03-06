import styles from "./Main.module.css";
import { ChevronForwardOutline } from "react-ionicons";
function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.link_group}>
        <p> Save 90% </p>
        <a href="#" className={styles.main_link}>
          Get account of $59{" "}
          <ChevronForwardOutline width={"12px"} height={"12px"} />
        </a>
      </div>
      <div className={styles.text_field}>
        <h1>Manage the team everyone wants to be on</h1>
        <h2>
          Simple platform that lets you master what great managers do best, as
          develop trust, collaborate, and drive team performance.
        </h2>
      </div>
      <div className={styles.input_group}>
        <input type="text" placeholder="name@yourcompany.com" />
        <button> Try it free </button>
      </div>
    </section>
  );
}

export default Main;
