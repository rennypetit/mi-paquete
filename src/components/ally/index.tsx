import Image from 'next/image';
import allies from '@data/componentAllies';
import styles from './Ally.module.scss';
export default function Ally() {
	return (
		<>
			<h2 className='containerTitle'>
				Transportadoras aliadas con las que podrás <span>enviar mercancía</span>
			</h2>
			<section className={styles.container}>
				{allies.items.map((item, index) => (
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
		</>
	);
}
