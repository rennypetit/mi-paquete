import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import styles from './Media.module.scss';
export default function Media() {
	const { widthViewport } = useContext(WidthContext);
	return (
		<div className={styles.container}>
			{widthViewport < 1024 ? (
				<Image
					src='/images/media.png'
					useMap='#media'
					alt='sobre nosotros'
					width={1024}
					height={700}
				/>
			) : (
				<>
					<div className={styles.imageMap}>
						<Image
							src='/images/media.png'
							useMap='#media'
							alt='sobre nosotros'
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
