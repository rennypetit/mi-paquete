import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeButton } from '../../types/global';
import styles from './CardHelp.module.scss';
const CardHelp = ({ items }) => {
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{items.map((item, index) => (
					<Fragment key={index}>
						{Symbol(item.type).toString() === `Symbol(${TypeButton.link})` ? (
							<Link href={item.url}>
								<a className={styles.card}>
									<Image
										src={item.image}
										alt={items.alt}
										width={118}
										height={118}
									/>
									<p className={styles.title}>{item.title}</p>
								</a>
							</Link>
						) : (
							<a
								className={styles.card}
								href={item.url}
								target='_blank'
								rel='noopener noreferrer'
							>
								<Image
									src={item.image}
									alt={items.alt}
									width={118}
									height={118}
								/>
								<p className={styles.title}>{item.title}</p>
							</a>
						)}
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default CardHelp;
