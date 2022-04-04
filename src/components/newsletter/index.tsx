import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import styles from './Newsletter.module.scss';

export default function Newsletter() {
	const { widthViewport } = useContext(WidthContext);
	return (
		<section className={styles.container}>
			{widthViewport < 1024 ? (
				<Image
					src='/images/background-orange.png'
					alt='background newsletter'
					layout='fill'
				/>
			) : (
				<Image
					src='/images/background-orange.png'
					alt='background newsletter'
					layout='fill'
				/>
			)}
			<div className={styles.content}>
				<h2 className={styles.title}>
					Recibe novedades y consejos para{' '}
					<strong>ecommerce en nuestro Newsletter</strong>
				</h2>
				<form action='#' className={styles.form}>
					<input
						type='email'
						className={`form-input ${styles.input}`}
						placeholder='Correo electrónico'
					/>
					<div className={styles.check}>
						<label>
							<input type='checkbox' id='check' />
							Al enviar su correo usted confirma que acepta nuestros Términos y
							Políticas de Tratamiento de Datos
						</label>
					</div>
					<div className={styles.containerbutton}>
						<button className={`${styles.button} button`}>
							SUSCRIBIRSE
							<div className={styles.icon}>
								<Image
									src='/images/icons/search-dark.svg'
									alt='icon search'
									height={16}
									width={16}
								/>
							</div>
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
