import Image from 'next/image';
import styles from './Description.module.scss';
const Description = ({ data }) => {
	return (
		<section className={styles.container}>
			<div className={styles.image}>
				<Image src={data.image} alt={data.alt} width={340} height={378} />
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
							<Image src={item.image} alt={item.alt} width={84} height={84} />
							<p>{item.description}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Description;
