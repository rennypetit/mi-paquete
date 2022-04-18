import React from 'react';
import Image from 'next/image';
import styles from './CardHelp.module.scss';
const CardHelp = ({ items }) => {
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{items.map((item, index) => (
					<a
						className={styles.card}
						href='http://'
						target='_blank'
						rel='noopener noreferrer'
						key={index}
					>
						<Image src={item.image} alt={items.alt} width={118} height={118} />
						<p className={styles.title}>{item.title}</p>
					</a>
				))}
			</div>
		</div>
	);
};

export default CardHelp;
