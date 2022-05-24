import { Fragment } from 'react';
import Image from 'next/image';
import Button from '@components/button';

import styles from './CardSoluciones.module.scss';
const Card = ({ items }) => {
	return (
		<div className={styles.container}>
			<div className={styles.items}>
				{items.map((item, index) => (
					<Fragment key={index}>
						<div className={styles.item}>
							<div className={styles.itemTitle}>{item.title}</div>
							<div className={styles.image}>
								<Image
									src={item.image}
									alt={item.alt}
									title={item.title}
									quality={100}
									width={120}
									height={183}
								/>
							</div>
							<p className={styles.description}>{item.description}</p>
							<div className={styles.button}>
								<Button data={item.button} />
							</div>
						</div>
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default Card;
