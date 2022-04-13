import Image from 'next/image';
import styles from './Button.module.scss';
export default function Blue({ data }) {
	return (
		<a
			href={data.url}
			target='_blank'
			rel='noopener noreferrer'
			className={styles.container}
		>
			<div className={`button ${styles[data.color]} ${styles.button}`}>
				{data.icon && (
					<div className={styles.icon}>
						{' '}
						<Image src={data.icon} alt={data.alt} width={17} height={19} />
					</div>
				)}
				{data.title}
			</div>
		</a>
	);
}
