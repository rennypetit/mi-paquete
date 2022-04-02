import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import Button from '@components/buttons/Orange';
import styles from './Track.module.scss';

export default function Track() {
	const { widthViewport } = useContext(WidthContext);
	const data = {
		title: 'INGRESA',
		url: '#',
	};
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				{widthViewport < 768 ? (
					<Image
						src='/images/track-background-mobile.png'
						alt='background mobile'
						layout='responsive'
						width={600}
						height={638}
					/>
				) : (
					<Image
						src='/images/track-background.png'
						alt='background desktop'
						layout='responsive'
						width={1041}
						height={453}
					/>
				)}

				<p>
					Te ayudamos con la <span>logística de envío de productos</span> para
					tu tienda virtual de manera sencilla, crea una cuenta y descubre cómo
					aumentar tus ventas
				</p>
				<div className={styles.contentButton}>
					<Button data={data} />
				</div>
			</div>
			<div className={styles.top}>
				<p className={styles.topTitle}>
					¿Usaste nuestro{' '}
					<strong>servicio de envíos? Rastrea tu envío aquí</strong>
				</p>
				<form className={styles.form}>
					<div className={styles.group}>
						<label htmlFor='rastrear'>Número de guía</label>
						<input id='rastrear' type='text' placeholder='Ejemplo: 123 - 32' />
					</div>
					<div className={`${styles.button} button`}>
						RASTREAR
						<div className={styles.icon}>
							<Image
								src='/images/icons/search-dark.svg'
								alt='icon search'
								height={13}
								width={13}
							/>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}
