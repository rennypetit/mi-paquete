import Image from 'next/image';
import React from 'react';
import styles from './Plan.module.scss';
const Plan = ({ items }) => {
	return (
		<section className={styles.container}>
			{items.map((item, index) => (
				<div className={styles.card} key={index}>
					<div className={styles.top}>
						<h4 className={styles.title}>{item.title}</h4>
						<Image
							src={item.image}
							alt={item.alt}
							quality={100}
							width={82}
							height={82}
						/>
					</div>
					<p className={styles.description}>{item.description}</p>
					<p className={styles.price}>
						{item.price} <span>Valor único por unidad</span>
					</p>
				</div>
			))}
		</section>
	);
};

export default Plan;
