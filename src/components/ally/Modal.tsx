import Image from 'next/image';
import React from 'react';
import Button from '@components/button';
import styles from './Modal.module.scss';
const Modal = ({ dataModal, handleCloseModal }) => {
	if (!dataModal) return '';
	return (
		<div className={`${styles.container} ${styles[dataModal.orientation]}`}>
			<div id={`modal-${dataModal?.id}`} className={styles.modal}>
				<button
					className={styles.exit}
					id={`exit-${dataModal?.id}`}
					onClick={(e) => handleCloseModal(e)}
				>
					<Image
						src={'/images/icons/arrow-slider-left.svg'}
						alt='exit'
						width={29}
						height={29}
					/>
					Volver
				</button>
				<div className={styles.modalBackground}></div>
				<div className={styles.modalContent}>
					{dataModal.image && (
						<div className={styles.image}>
							<Image
								src={dataModal.image}
								alt={dataModal.alt}
								width={225}
								height={100}
							/>
						</div>
					)}
					<p className={styles.title}>{dataModal.title}</p>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{
							__html: dataModal.description,
						}}
					></div>
					<div className={styles.button}>
						<Button data={dataModal.buttonOne} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;