import styles from './Buttons.module.scss';
export default function Blue({ data }) {
	return (
		<a href={data.url} target='_blank' rel='noopener noreferrer'>
			<div className={`${styles.blue} button`}>{data.title}</div>
		</a>
	);
}
