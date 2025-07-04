import styles from "./footer.module.css";

import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className={`${styles["gpt3__footer"]} section__padding`}>
      <div className={styles["gpt3__footer-heading"]}>
        <h1 className="gradient__text">
          Do you want to step in to the Future before others
        </h1>
      </div>

      <div className={styles["gpt3__footer-btn"]}>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className={styles["gpt3__footer-links"]}>
        <div className={styles["gpt3__footer-links_logo"]}>
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. All Rights
            Reserved
          </p>
        </div>

        <div className={styles["gpt3__footer-links_div"]}>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className={styles["gpt3__footer-links_div"]}>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className={styles["gpt3__footer-links_div"]}>
          <h4>Get In Touch</h4>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <p>086-131-1211-21</p>
          <p>info@gpt3.ai</p>
        </div>
      </div>

      <div className={styles["gpt3__footer-copyright"]}>
        <p> 2025 GPT-3. All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
