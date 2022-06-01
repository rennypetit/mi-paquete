import Image from 'next/image';
import styles from './Description.module.scss';
const Description = ({ data }) => {
	return (
		<section className={styles.container}>
			<div className={styles.image}>
				<Image
					src={data.image}
					alt={data.alt}
					quality={100}
					width={370}
					height={408}
					layout='fixed'
				/>
			</div>
			<div className={styles.descriptionMobile}>
				<div className='container'>
					<h2 className='containerTitle'>
						{data.title} <span>{data.titleSpan}</span>
					</h2>
				</div>
			</div>
			<div className={styles.items}>
				<ul>
					{data.items.map((item, index) => (
						<li key={index}>
							<Image
								src={item.image}
								alt={item.alt}
								quality={100}
								width={84}
								height={84}
								layout='fixed'
								objectFit='contain'
							/>
							<p>{item.description}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Description;
