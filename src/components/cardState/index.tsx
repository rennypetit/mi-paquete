import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import Button from '@components/button';
import styles from './CardState.module.scss';

const CardState = ({ data }) => {
	const { widthViewport } = useContext(WidthContext); // width viewport
	const [card, setCard] = useState(data.items[0]); // items card

	const handleChange = (id: number) => {
		// remove active
		const buttons = document.getElementsByClassName('button-card-state');
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove(styles.buttonActive);
		}
		// add active
		document.getElementById(id)?.classList.add(styles.buttonActive);

		// update state
		const dataCard = data.items[id];
		setCard(dataCard);
	};
	useEffect(() => {
		document.getElementById(0)?.classList.add(styles.buttonActive);
	}, []);

	return (
		<div className={styles.container}>
			<h2 className='containerTitle'>
				{data.title} <span>{data.titleSpan}</span>
			</h2>
			<div className={styles.content}>
				<div className={styles.items}>
					{data.items.map((item, index) => (
						<button
							className={`${styles.button} button-card-state`}
							key={index}
							id={item.id}
							onClick={() => handleChange(item.id)}
						>
							{widthViewport > 1024 && (
								<div className={styles.image}>
									<Image
										src={card.id === index ? data.imageActive : data.image}
										alt={item.alt}
										width={76}
										height={76}
									/>
								</div>
							)}
							<span>{item.title}</span>
						</button>
					))}
				</div>
				<div className={styles.card}>
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

export default CardState;
