import styles from "./Info.module.css";

function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.textfield}>
        <h2> We work how you work everyday </h2>
        <p>
          Since the easiest things to use actually get used, we adapts to the
          way your team works – not the other way around.
        </p>
        <button> Get started free </button>
      </div>
      <img src="../../../src/img/Graphics.png" alt="img" />
    </div>
  );
}

export default Info;
