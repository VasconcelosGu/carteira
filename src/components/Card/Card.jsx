import styles from "./styles.module.css";

export function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <h1 className={styles.title}>{props.title}</h1>
          <img src={props.icon} alt="" />
        </div>
        <p>{props.value}</p>
      </div>
    </div>
  );
}
