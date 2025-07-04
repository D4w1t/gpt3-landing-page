import { Article } from "../../components";

import styles from "./blog.module.css";

import { Blog01, Blog02, Blog03, Blog04, Blog05 } from "./imports";

const Blog = () => {
  return (
    <div className={`${styles["gpt3__blog"]} section__padding`} id="blog">
      <div className={styles["gpt3__blog-heading"]}>
        <h1 className="gradient__text">
          A lot is happening We are blogging about it.
        </h1>
      </div>

      <div className={styles["gpt3__blog-container"]}>
        <div className={styles["gpt3__blog-container_groupA"]}>
          <Article
            artImag={Blog01}
            imgAlt="Blog 1"
            date="Jul 4, 2025"
            title="GPT-3 and Open AI is the Future. Let us Explore how it is."
          />
        </div>
        <div className={styles["gpt3__blog-container_groupB"]}>
          <Article
            artImag={Blog02}
            imgAlt="Blog 2"
            date="Jul 4, 2025"
            title="GPT-3 and Open AI is the Future. Let us Explore how it is."
          />
          <Article
            artImag={Blog03}
            imgAlt="Blog 3"
            date="Jul 4, 2025"
            title="GPT-3 and Open AI is the Future. Let us Explore how it is."
          />
          <Article
            artImag={Blog04}
            imgAlt="Blog 4"
            date="Jul 4, 2025"
            title="GPT-3 and Open AI is the Future. Let us Explore how it is."
          />
          <Article
            artImag={Blog05}
            imgAlt="Blog 5"
            date="Jul 4, 2025"
            title="GPT-3 and Open AI is the Future. Let us Explore how it is."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
