import Image from 'next/image';
import styles from './Ally.module.scss';
export default function Ally({ data }) {
	return (
		<section className={styles.container}>
			{data.items.map((item, index) => (
				<div className={styles.image} key={index}>
					<div className='image'>
						<Image
							src={item.image}
							alt={item.alt}
							title={item.title}
							width={225}
							height={100}
						/>
					</div>
				</div>
			))}
		</section>
	);
}
