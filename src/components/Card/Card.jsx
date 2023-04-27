import styles from "./styles.module.css";

export function Card({ type = "", value = 0 }) {
  const acceptedType = ["income", "outcome", "total"];

  const componentType = acceptedType.includes(type) ? type : "total";

  const cardTypeIcon = {
    income: "/img/verde.svg",
    outcome: "/img/vermelho.svg",
    total: "/img/sifrao.svg",
  };

  const cardTypeTitle = {
    income: "Entradas",
    outcome: "Saídas",
    total: "Total",
  };

  const isTotal = componentType === "total";

  return (
    <div className={`${styles.card} ${isTotal && styles.total}`}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <h1 className={styles.title}>{cardTypeTitle[componentType]}</h1>
          <img src={cardTypeIcon[componentType]} alt="" />
        </div>
        <p>
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </div>
  );
}