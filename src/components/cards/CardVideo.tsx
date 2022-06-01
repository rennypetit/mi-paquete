import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import styles from './CardVideo.module.scss';
const CardVideo = ({ items }) => {
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				{items.map((item, index) => (
					<>
						<LazyLoadComponent>
							<a
								className={`${styles.card} video`}
								href={item.video}
								target='_blank'
								rel='noopener noreferrer'
								key={index}
							>
								<iframe
									src={item.video}
									layout='fixed'
									width='336'
									height='239'
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								/>
								<div
									className={styles.title}
									dangerouslySetInnerHTML={{ __html: item.title }}
								></div>
								<p className={styles.url}>Ver video</p>
							</a>
						</LazyLoadComponent>
					</>
				))}
			</div>
		</div>
	);
};

export default CardVideo;
