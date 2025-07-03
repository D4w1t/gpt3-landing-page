import styles from "./possibility.module.css";

import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div
      className={`${styles["gpt3__possibility"]}`}
      id="possibilities"
    >
      <div className={styles["gpt3__possibility-image"]}>
        <img src={possibilityImage} alt="possibility image" />
      </div>

      <div className={styles["gpt3__possibility-content"]}>
        <h4>Request Early Access To Get Started</h4>
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
