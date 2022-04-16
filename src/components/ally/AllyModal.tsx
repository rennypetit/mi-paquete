import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import allies from '@data/componentAllies';

import styles from './Ally.module.scss';
export default function AllyModal() {
	const [dataModal, setDataModal] = useState(allies.items[0].modal);

	const handleOpenModal = ({ target }) => {
		const info = allies.items.find((element) => element.modal.id === target.id);
		setDataModal(info.modal);
		document.getElementById(`modal-${target.id}`)?.style.display = 'flex';
	};
	const handleCloseModal = ({ target }) => {
		const id = target.id.split('-');
		document.getElementById(`modal-${id[1]}`)?.style.display = 'none';
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
		document.getElementById(`modal-${id}`)?.style.display = 'flex';
		console.log(info);
	};
	return (
		<>
			<h2 className='containerTitle'>
				Transportadoras aliadas con las que podrás <span>enviar mercancía</span>
			</h2>
			<section className={styles.container}>
				{allies.items.map((item, index) => (
					<div className={styles.image} key={index}>
						<div className='image'>
							<Image
								src={item.image}
								alt={item.alt}
								title={item.title}
								width={225}
								height={100}
							/>
						</div>
						<div className={styles.url}>
							<button
								className='open'
								id={item.title}
								onClick={(e) => handleOpenModal(e)}
							>
								CONOCER BENEFICIOS
							</button>
						</div>
					</div>
				))}
			</section>
			<section className={styles.sectionTwo}>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: allies.description }}
				></div>
				<div className={styles.buttons}>
					<button
						className='open'
						onClick={() => handleOpenModalButton('buttonOne')}
					>
						<span className={`button ${styles.buttonOne}`}>
							{allies.buttonOne.title}
						</span>
					</button>
					<button
						className='open'
						onClick={() => handleOpenModalButton('buttonTwo')}
					>
						<span className={`button ${styles.buttonTwo}`}>
							{allies.buttonTwo.title}
						</span>
					</button>
				</div>
			</section>
			<Modal dataModal={dataModal} handleCloseModal={handleCloseModal} />
		</>
	);
}
