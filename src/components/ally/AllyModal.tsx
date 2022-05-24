import { Fragment, useState, useRef } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import allies from '@data/componentAllies';

import styles from './Ally.module.scss';
export default function AllyModal() {
	const [dataModal, setDataModal] = useState(allies.items[0].modal);
	const refModal = useRef(null);
	const handleOpenModal = ({ target }) => {
		const info = allies.items.find((element) => element.modal.id === target.id);
		setDataModal(info.modal);
		refModal.current.style.display = 'flex';
		document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
	};
	const handleCloseModal = () => {
		refModal.current.style.display = 'none';
		document.getElementsByTagName('html')[0].style.overflowY = 'auto';
		setDataModal(dataModal);
	};
	const handleOpenModalButton = (id) => {
		let info = '';
		if (id === 'buttonOne') {
			info = allies.buttonOne.modal;
		} else {
			info = allies.buttonTwo.modal;
		}
		setDataModal(info);
		document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
		refModal.current.style.display = 'flex';
	};
	return (
		<section className={styles.section}>
			<h2 className='containerTitle'>
				Transportadoras aliadas con las que podrás <span>enviar mercancía</span>
			</h2>
			<div className={styles.container}>
				{allies.items.map((item, index) => (
					<Fragment key={index}>
						<div className={styles.image}>
							<div className='image'>
								<Image
									src={item.image}
									alt={item.alt}
									title={item.title}
									width={225}
									height={100}
									quality={100}
								/>
							</div>
							<div className={styles.url}>
								<button
									className={styles.open}
									id={item.title}
									ref={refModal}
									onClick={(e) => handleOpenModal(e)}
								>
									CONOCER BENEFICIOS
								</button>
							</div>
						</div>
					</Fragment>
				))}
			</div>
			<div className={styles.sectionTwo}>
				<div
					className={`${styles.description}`}
					dangerouslySetInnerHTML={{ __html: allies.description }}
				></div>
				<div className={styles.buttons}>
					<button
						className={styles.open}
						onClick={() => handleOpenModalButton('buttonOne')}
					>
						<span className={`button ${styles.buttonOne}`}>
							{allies.buttonOne.title}
						</span>
					</button>
					<button
						className={styles.open}
						onClick={() => handleOpenModalButton('buttonTwo')}
					>
						<span className={`button ${styles.buttonTwo}`}>
							{allies.buttonTwo.title}
						</span>
					</button>
				</div>
			</div>
			<Modal
				dataModal={dataModal}
				handleCloseModal={handleCloseModal}
				refModal={refModal}
			/>
		</section>
	);
}
