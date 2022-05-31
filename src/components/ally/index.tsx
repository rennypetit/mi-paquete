import Image from 'next/image';
import allies from '@data/componentAllies';
import styles from './Ally.module.scss';
export default function Ally() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				{allies.items.map((item, index) => (
					<div className={styles.image} key={index}>
						<div className='image'>
							<Image
								src={item.image}
								alt={item.alt}
								title={item.title}
								quality={100}
								width={225}
								height={100}
								layout='responsive'
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
