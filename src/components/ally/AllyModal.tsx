import Image from 'next/image';
import styles from './Ally.module.scss';
import Modal from './Modal';
import { useState } from 'react';
export default function AllyModal({ data }) {
	const [dataModal, setDataModal] = useState(data.items[0].modal);

	const handleOpenModal = ({ target }) => {
		const info = data.items.find((element) => element.modal.id === target.id);
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
			info = data.buttonOne.modal;
		} else {
			info = data.buttonTwo.modal;
		}
		setDataModal(info);
		document.getElementById(`modal-${id}`)?.style.display = 'flex';
		console.log(info);
	};
	return (
		<>
			<section className={styles.container}>
				{data.items.map((item, index) => (
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
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				<div className={styles.buttons}>
					<button
						className='open'
						onClick={() => handleOpenModalButton('buttonOne')}
					>
						<span className={`button ${styles.buttonOne}`}>
							{data.buttonOne.title}
						</span>
					</button>
					<button
						className='open'
						onClick={() => handleOpenModalButton('buttonTwo')}
					>
						<span className={`button ${styles.buttonTwo}`}>
							{data.buttonTwo.title}
						</span>
					</button>
				</div>
			</section>
			<Modal dataModal={dataModal} handleCloseModal={handleCloseModal} />
		</>
	);
}
