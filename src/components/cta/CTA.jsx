import styles from './cta.module.css'

const Cta = () => {
  return (
    <div className={styles["gpt3__cta"]}>
      <div className={styles["gpt3__cta-content"]}>
        <p>Request Early Access to Get Started</p>
        <h3>Request Today & Start Exploring the Endless Possibilities</h3>
      </div>

      <div className={styles["gpt3__cta-btn"]}>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Cta