import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import Button from '@components/button';
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
						<h2>{data.titleCard} <span>{data.titleCardSpan}</span></h2>
						<p>{data.descriptionCard}</p>
						<h3>{data.titleCity}</h3>
					</div>
					{data.items.map((item, index) => (
					<label for={item.id}
						id={item.id}
						key={index}
						className={`${styles.buttonMaps} button-card-state`}
						onClick={() => handleChange(item.id)}
					>
						<input
							type="radio"
							// className={`${styles.button} button-card-state`}
							id={item.id}
						/>
							{/* {widthViewport > 1024 && (
								<div className={styles.image}>
									<Image
										src={card.id === index ? data.imageActive : data.image}
										alt={item.alt}
										width={76}
										height={76}
									/>
								</div>
							)} */}
							<span>{item.city}</span>
						</label>
					))}
				</div>
				<div className={styles.cardMaps}>
					<div className={styles.cardImage}>
						<Image src={card.image} alt={card.alt} width={588} height={429} />
					</div>
					<div className={styles.cardContent}>
						<h3 className={styles.cardTitle}>{card.title}</h3>
						<div className={styles.cardDescription}>{card.description}</div>
						<div className={styles.cardButton}>
							<Button data={card.buttonOne} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardStateMaps;
