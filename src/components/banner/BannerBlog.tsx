import Image from 'next/image';
import styles from './BannerBlog.module.scss';

const BannerBlog = () => {
	return (
		<div className={`${styles.container} ${styles.container_margin_top}`}>
			<h1>
				Blog <span> Mi Paquete </span>
			</h1>
			<p>
				Conoce las novedades en el mundo del ecommerce, consejos para
				implementar en tu tienda, noticias, tips para realizar envíos y más.
			</p>
			<div className={styles.content}>
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
					<div className={styles.containerButton}>
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
		</div>
	);
};

export default BannerBlog;
