import styles from "./feature.module.css";

const Feature = ({ title, text }) => {
  return (
    <div className={styles["gpt3__features-container__feature"]}>
      <div className={styles["gpt3__features-container__feature-title"]}>
        <div />
        <h1> {title} </h1>
      </div>

      <div className={styles["gpt3__features-container_feature-text"]}>
        <p> {text} </p>
      </div>
    </div>
  );
};

export default Feature;
