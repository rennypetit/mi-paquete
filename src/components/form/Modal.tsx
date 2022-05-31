import Image from 'next/image';
import styles from './Modal.module.scss';
const Modal = ({ handleCloseModal, newsletter = false }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modalBackground}></div>
			<div className={`${styles.modalContent} modal-content`}>
				<div className={styles.topAndImage}>
					<div className={styles.modalTop}>
						<div className={styles.image}>
							<Image
								src={'/images/form/thank-you.png'}
								alt='thank you'
								quality={100}
								width={107}
								height={170}
								layout='fixed'
							/>
						</div>
					</div>
				</div>
				<h3 className={styles.title}>
					{newsletter
						? '¡Te has suscrito exitosamente!'
						: 'Tus datos fueron enviados'}
				</h3>
				<div className={styles.description}>
					{newsletter
						? 'Ahora que haces parte de nuestra comunidad recibirás información exclusiva sobre el mundo del ecommerce, tips de logística de envíos, noticias en tendencia en el sector, promociones especiales y más.'
						: 'Pronto nuestro equipo estará comunicándose contigo para asesorarte y darte más información sobre nuestras soluciones ecommerce.'}
				</div>
				<div className='modal-button'>
					<button
						className={`${styles.button} button`}
						onClick={handleCloseModal}
					>
						VOLVER
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
