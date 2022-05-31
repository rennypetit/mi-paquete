import Image from 'next/image';
import styles from './Modal.module.scss';
const Modal = ({ data, handleCloseModal }) => {
	if (!data) return null;
	return (
		<div className={`${styles.container}}`}>
			<div id='modal-quoter' className={styles.modal}>
				<div className={styles.modalBackground}>
					<button className={styles.exit} onClick={handleCloseModal}>
						<Image
							src={'/images/icons/arrow-slider-left.svg'}
							alt='exit'
							width={29}
							height={29}
							onClick={handleCloseModal}
							layout='fixed'
						/>
						Volver
					</button>
				</div>
				<div className={`${styles.modalContent} modal-content`}>
					<div className={styles.top}>
						<h2 className={styles.title}>
							Seguimiento de <span>envíos</span>
						</h2>
						<p className={styles.description}>
							Conoce en tiempo real el estado del envío que realizaste a través
							de
							<strong>Mi Paquete.</strong>
						</p>
					</div>
					<div className={styles.track}>
						<div className={styles.trackSerial}>
							<p>{data.mpCode}</p>
						</div>
						<div className={styles.trackDescription}>
							<ul>
								<li>
									<strong>Origen: </strong>
									{data.origin}
								</li>
								<li>
									<strong>Destino: </strong>
									{data.destiny}
								</li>
								<li>
									<strong># de guía:</strong> {data.guideNumber}
								</li>
							</ul>
						</div>
						<div className={styles.trackTransport}>
							<p>
								<strong>Transportadora:</strong>
							</p>
							<div className={styles.trackImage}>
								<Image
									src={`/images/allies/${data.deliveryCompany}.png`}
									alt={'transport'}
									quality={100}
									width={225}
									height={90}
									layout='fixed'
								/>
							</div>
						</div>
					</div>
					<div className={styles.stateSubmit}>
						<p className={styles.stateSubmitTitle}>Estado del envío</p>
						<div className={styles.containerSubItems}>
							{/* one  */}
							{data.tracking.map((item, index) => (
								<div className={styles.stateSubmitItems} key={index}>
									<div className={styles.submitImageContainer}>
										{index === 0 ? (
											<div className={`${styles.submitImageLine}`}></div>
										) : (
											<div
												className={`${styles.submitImageLine} ${styles.lineOrange}`}
											></div>
										)}
										<div className={styles.submitItemsImage}>
											<Image
												src={'/images/icons/submit-orange.svg'}
												alt='check'
												width={25}
												height={25}
												layout='fixed'
											/>
										</div>
										{data.tracking.length === index + 1 ? (
											<div className={`${styles.submitImageLine}`}></div>
										) : (
											<div
												className={`${styles.submitImageLine} ${styles.lineOrange}`}
											></div>
										)}
									</div>
									<p className={styles.submitItemsTitle}>{item.updateState}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
