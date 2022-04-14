import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceItems.module.scss';

export default function ServiceItems({
	item: { image, alt, title, description, url },
}) {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.image}>
					<Image src={image} alt={alt} width={95} height={95} />
				</div>
				<h5 className={styles.title}>{title}</h5>
				<p className={styles.description}>{description}</p>
				<div className={styles.buttonContainer}>
					<Link href={url}>
						<a>
							<div className={`${styles.button} button`}>
								<Image
									src='/images/icons/search.svg'
									alt='icon search'
									height={17}
									width={17}
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
