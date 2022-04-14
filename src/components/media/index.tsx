import { useContext } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import WidthContext from '@contexts/width';

import media from '@data/componentMedia';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Media.module.scss';
export default function Media() {
	// configuration slider banner
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const { widthViewport } = useContext(WidthContext);
	return (
		<div className={styles.container}>
			{widthViewport < 1024 ? (
				<div className={styles.mobile}>
					<div className={styles.items}>
						<Slider {...settings}>
							{media.items.map((item, index) => (
								<a
									href={item.url}
									target='_blank'
									rel='noopener noreferrer'
									key={index}
								>
									<div className={styles.item}>
										<div className={styles.itemImage}>
											<Image
												src={item.image}
												alt={item.alt}
												width={192}
												height={50}
											/>
										</div>
										<h4 className={styles.itemTitle}>{item.title}</h4>
										<div className={styles.itemUrl}>VER MAS</div>
									</div>
								</a>
							))}
						</Slider>
					</div>
					<div className={styles.person}>
						<Image src={media.image} alt={media.alt} width={281} height={379} />
					</div>
				</div>
			) : (
				<>
					<div className={styles.imageMap}>
						<Image
							src={media.imageDesktop}
							alt={media.altDesktop}
							useMap='#media'
							width={1024}
							height={700}
						/>
					</div>
					<map name='media'>
						<area
							shape='rect'
							coords='140,590,180,600'
							alt='semana'
							target='_blank'
							href='semana.html'
						/>
						<area
							shape='rect'
							coords='215,420,240,430'
							alt='caracol'
							target='_blank'
							href='caracol.html'
						/>
						<area
							shape='rect'
							coords='295,240,325,260'
							alt='enter'
							target='_blank'
							href='enter.html'
						/>
						<area
							shape='rect'
							coords='545,180,575,200'
							alt='espectador'
							target='_blank'
							href='espectador.html'
						/>
						<area
							shape='rect'
							coords='800,245,830,260'
							alt='radio'
							target='_blank'
							href='radio.html'
						/>
						<area
							shape='rect'
							coords='880,420,915,430'
							alt='paisa'
							target='_blank'
							href='paisa.html'
						/>
						<area
							shape='rect'
							coords='950,590,980,605'
							alt='medellin'
							target='_blank'
							href='medellin.html'
						/>
					</map>
				</>
			)}
		</div>
	);
}
