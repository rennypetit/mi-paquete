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
												quality={100}
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
						<Image
							src={media.image}
							alt={media.alt}
							quality={100}
							width={281}
							height={379}
						/>
					</div>
				</div>
			) : (
				<>
					<div className={styles.imageMap}>
						<Image
							src={media.imageDesktop}
							alt={media.altDesktop}
							quality={100}
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
							href='https://youtu.be/_6tjajW7bdw'
						/>
						<area
							shape='rect'
							coords='215,420,240,430'
							alt='caracol'
							target='_blank'
							href='https://www.youtube.com/watch?v=4LxrsbFfLSk'
						/>
						<area
							shape='rect'
							coords='295,240,325,260'
							alt='enter.co'
							target='_blank'
							href='https://www.enter.co/especiales/emprende/mipaquete-com-democratiza-envios/'
						/>
						<area
							shape='rect'
							coords='545,180,575,200'
							alt='elespectador'
							target='_blank'
							href='https://www.elespectador.com/economia/emprendimiento-y-liderazgo/mipaquetecom-y-la-emprendedora-que-hace-mas-facil-la-logistica-para-miles-de-personas-en-el-pais/'
						/>
						<area
							shape='rect'
							coords='800,245,830,260'
							alt='wradio'
							target='_blank'
							href='https://www.wradio.com.co/noticias/tecnologia/envios-faciles-y-rapidos-en-mipaquetecom/20191125/nota/3983562.aspx'
						/>
						<area
							shape='rect'
							coords='880,420,915,430'
							alt='paisa'
							target='_blank'
							href='https://www.elcolombiano.com/negocios/la-plataforma-que-llego-a-mejorar-la-logistica-de-envios-KC16145960'
						/>
						<area
							shape='rect'
							coords='950,590,980,605'
							alt='Telemedellín'
							target='_blank'
							href='https://www.youtube.com/watch?v=MeWESyMb6u4'
						/>
					</map>
				</>
			)}
		</div>
	);
}
