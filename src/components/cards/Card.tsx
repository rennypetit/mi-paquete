import styles from './Card.module.scss';
import Cards from './Cards';
export default function Card ({ data }) {
	return (
		<div className={styles.card_container}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div className={styles.card_container_cards}>
        {data.items.map((item, index) => (
          <Cards data={item} key={index} />
        ))}
      </div>
    </div>
	);
}