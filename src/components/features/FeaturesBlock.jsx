/* eslint-disable react/prop-types */
import styles from "./FeaturesBlock.module.css";
function FeaturesBlock({ srcImg, title, children }) {
  return (
    <div className={styles.container}>
      <img src={srcImg} alt="icn" />
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default FeaturesBlock;
