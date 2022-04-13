import { Fragment } from 'react';
import Image from 'next/image';
import Button from '@components/button';

import styles from './Card.module.scss';
const Card = ({ items }) => {
	return (
		<div className={styles.container}>
			<div className={styles.items}>
				{items.map((item, index) => (
					<Fragment key={index}>
						{item.store ? (
							<div className={styles.item}>
								<div className={styles.image}>
									<Image
										src={item.image}
										alt={item.alt}
										title={item.title}
										width={200}
										height={118}
									/>
								</div>
								<p className={styles.description}>{item.description}</p>
								<div className={styles.button}>
									<Button data={item.button} />
								</div>
							</div>
						) : (
							<div className={`${styles.item} ${styles.asesoria}`}>
								<div className={styles.image}>
									<Image
										src={item.image}
										alt={item.alt}
										title={item.title}
										layout='fill'
									/>
								</div>
								<div className={styles.button}>
									<Button data={item.button} />
								</div>
							</div>
						)}
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default Card;
