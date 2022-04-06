import Image from 'next/image';
import Link from 'next/link';
import styles from './Ally.module.scss';
export default function Ally({ data, modal = false }) {
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
						{modal && (
							<div className={styles.url}>
								<Link href='/'>
									<a>CONOCER BENEFICIOS</a>
								</Link>
							</div>
						)}
					</div>
				))}
			</section>
			{modal && (
				<section className={styles.sectionTwo}>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: data.description }}
					></div>
					<div className={styles.buttons}>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							<span className={`button ${styles.buttonOne}`}>
								{data.buttonOne.title}
							</span>
						</a>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							<span className={`button ${styles.buttonTwo}`}>
								{data.buttonTwo.title}
							</span>
						</a>
					</div>
				</section>
			)}
		</>
	);
}
