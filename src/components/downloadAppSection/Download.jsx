import styles from "./Download.module.css";

function Download() {
  return (
    <div className={styles.container}>
      <p>84% of employees who use trust their direct manager</p>
      <div className={styles.buttonGroup}>
        <img src="/googleb.png" alt="google market" />
        <img src="/appleb.png" alt="app store" />
      </div>
    </div>
  );
}

export default Download;
