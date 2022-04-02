import styles from './Buttons.module.scss';
export default function White({ data }) {
	return (
		<a href={data.url} target='_blank' rel='noopener noreferrer'>
			<div className={`${styles.white} button`}>{data.title}</div>
		</a>
	);
}
