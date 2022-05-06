import { useContext, useState, useEffect } from 'react';
// import Image from 'next/image';
import Map from './Map';
import WidthContext from '@contexts/width';
import styles from './CardState.module.scss';

const CardStateMaps = ({ data }) => {
	const { widthViewport } = useContext(WidthContext); // width viewport
	const [card, setCard] = useState(data.items[0]); // items card

	const handleChange = (id: number) => {
		// remove active
		const buttons = document.getElementsByClassName('button-card-state');
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove(styles.inputActive);
		}

		// add active
		document.getElementById(id)?.classList.add(styles.inputActive);
		// update state
		const dataCard = data.items[id];
		setCard(dataCard);
	};

	useEffect(() => {
		document.getElementById(0)?.classList.add(styles.inputActive);
		document.querySelector('span#Cali')?.classList.add(styles.activeSpan);
		document.getElementById('Cali')?.setAttribute('checked', 'checked');
		document.getElementById(0)?.addEventListener('click', () => {
			if (document.getElementById('Cali')) {
				document.getElementById('Cali')?.setAttribute('checked', 'checked');
				document.getElementById('Medellín')?.removeAttribute('checked');
				document.getElementById('Bogotá')?.removeAttribute('checked');
				document.querySelector('span#Cali')?.classList.add(styles.activeSpan);
				document
					.querySelector('span#Bogotá')
					?.classList.remove(styles.activeSpan);
				document
					.querySelector('span#Medellín')
					?.classList.remove(styles.activeSpan);
			} else {
				return false;
			}
		});
		document.getElementById(1)?.addEventListener('click', () => {
			if (document.getElementById('Bogotá')) {
				document.getElementById('Bogotá')?.setAttribute('checked', 'checked');
				document.getElementById('Cali')?.removeAttribute('checked');
				document.getElementById('Medellín')?.removeAttribute('checked');
				document
					.querySelector('span#Cali')
					?.classList.remove(styles.activeSpan);
				document.querySelector('span#Bogotá')?.classList.add(styles.activeSpan);
				document
					.querySelector('span#Medellín')
					?.classList.remove(styles.activeSpan);
			} else {
				return false;
			}
		});
		document.getElementById(2)?.addEventListener('click', () => {
			if (document.getElementById('Medellín')) {
				document.getElementById('Medellín')?.setAttribute('checked', 'checked');
				document.getElementById('Bogotá')?.removeAttribute('checked');
				document.getElementById('Cali')?.removeAttribute('checked');
				document
					.querySelector('span#Cali')
					?.classList.remove(styles.activeSpan);
				document
					.querySelector('span#Bogotá')
					?.classList.remove(styles.activeSpan);
				document
					.querySelector('span#Medellín')
					?.classList.add(styles.activeSpan);
			} else {
				return false;
			}
		});
	}, []);

	return (
		<div className={styles.containerMaps}>
			<div className={styles.containerMaps_div}>
				<h2 className='containerTitle'>
					{data.title} <span>{data.titleSpan}</span>
				</h2>
				<p className={styles.containerMaps_div_p}>{data.description}</p>
			</div>
			<div className={styles.contentMaps}>
				<div className={styles.itemsMaps}>
					<div className={styles.itemsMaps_description}>
						<h2>
							{data.titleCard} <span>{data.titleCardSpan}</span>
						</h2>
						<p>{data.descriptionCard}</p>
						<h3>{data.titleCity}</h3>
					</div>
					{data.items.map((item, index) => (
						<label
							htmlFor={item.id}
							id={item.id}
							key={index}
							className={`${styles.buttonMaps} button-card-state`}
							onClick={() => handleChange(item.id)}
						>
							<input type='radio' id={item.city} value={item.city} />
							<span className={`${styles.check} bgcheck`} id={item.city}></span>
							<span>{item.city}</span>
						</label>
					))}
				</div>
				<div className={styles.cardMaps}>
					<Map coords={card.center} pointsShops={data.pointsShops} />
				</div>
			</div>
		</div>
	);
};

export default CardStateMaps;
