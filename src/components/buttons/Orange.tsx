import styles from './Buttons.module.scss';
export default function Orange({ data }) {
	return (
		<a href={data.url} target='_blank' rel='noopener noreferrer'>
			<div className={`${styles.orange} button`}>{data.title}</div>
		</a>
	);
}
