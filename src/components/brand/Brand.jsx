import styles from "./brand.module.css";

import { atlassian, dropbox, google, shopify, slack } from "./imports";

const Brand = () => {
  return (
    <div className={`${styles["gpt3__brand"]} section__padding`}>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
