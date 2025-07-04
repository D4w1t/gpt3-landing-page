import styles from "./article.module.css";

const Article = ({ artImag, imgAlt, date, title }) => {
  return (
    <div className={styles["gpt3__blog-container_article"]}>
      <div className={styles["gpt3__blog-container_article-image"]}>
        <img src={artImag} alt={imgAlt} />
      </div>
      <div className={styles["gpt3__blog-container_article-content"]}>
        <div>
          <p> {date} </p>
          <h3> {title} </h3>
        </div>
        <p> Read Full Article </p>
      </div>
    </div>
  );
};

export default Article;
