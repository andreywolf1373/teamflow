import styles from "./GraphFooter.module.css";

function GraphFooter() {
  return (
    <div className={styles.container}>
      <h3>
        TRUSTED BY OVER <span>10.000+</span> WORLDS BEST TEAM
      </h3>
      <div className={styles.copmanies}>
        <img src="../../../src/img/google.png" alt="google" />
        <img src="../../../src/img/airbnb.png" alt="bnb" />
        <img src="../../../src/img/facebook.png" alt="meta" />
        <img src="../../../src/img/hubspot.png" alt="hub" />
      </div>
    </div>
  );
}

export default GraphFooter;
