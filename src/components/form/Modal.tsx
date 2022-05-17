import Image from 'next/image';
import styles from './Modal.module.scss';
const Modal = ({ handleCloseModal }) => {
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
								width={107}
								height={170}
							/>
						</div>
					</div>
				</div>
				<h3 className={styles.title}>Tus datos fueron enviados</h3>
				<div className={styles.description}>
					Pronto nuestro equipo estará comunicándose contigo para asesorarte y
					darte más información sobre nuestras soluciones ecommerce.
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
