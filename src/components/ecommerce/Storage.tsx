import Image from 'next/image';
import Slider from 'react-slick';
import Button from '@components/button';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Storage.module.scss';
const Storage = ({ data }) => {
	// configuration slider banner
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
		],
	};
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<Image src={data.image} alt={data.alt} quality={100} layout='fill' />
			</div>
			<div className={styles.data}>
				<div className={`${styles.top} ${styles[data.colorText]}`}>
					<h2 className={styles.title}>
						{data.title} <strong>{data.titleStrong}</strong>
					</h2>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: data.description }}
					></div>
				</div>
				<div className={styles.items}>
					<Slider {...settings}>
						{data.items.map((item, index) => (
							<div
								className={`${styles.item} ${styles[data.colorItem]}`}
								key={index}
							>
								<div className={styles.itemImage}>
									<Image
										src={item.image}
										alt={item.alt}
										quality={100}
										width={95}
										height={95}
										layout='fixed'
									/>
								</div>
								<p className={styles.itemTitle}>{item.title}</p>
								<p className={styles.itemDescription}>{item.description}</p>
							</div>
						))}
					</Slider>
				</div>
				<div className={styles.buttons}>
					{data.buttonOne && <Button data={data.buttonOne} />}
					{data.buttonTwo && <Button data={data.buttonTwo} />}
				</div>
			</div>
		</div>
	);
};

export default Storage;
