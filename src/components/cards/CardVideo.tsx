import Image from 'next/image';
import React from 'react';
import styles from './CardVideo.module.scss';
const CardVideo = ({ items }) => {
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
						<Image src={item.video} alt='a' width={336} height={239} />
						<div
							className={styles.title}
							dangerouslySetInnerHTML={{ __html: item.title }}
						></div>
						<p className={styles.url}>Ver video</p>
					</a>
				))}
			</div>
		</div>
	);
};

export default CardVideo;
