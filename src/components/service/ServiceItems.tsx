import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceItems.module.scss';

export default function ServiceItems({
	item: { image, alt, title, description, url },
}) {
	return (
		<div className={styles.container} tabIndex='-1'>
			<div className={styles.card}>
				<div className={styles.image}>
					<Image
						src={image}
						alt={alt}
						blurDataURL={image}
						placeholder='blur'
						quality={100}
						width={95}
						height={95}
						layout='fixed'
					/>
				</div>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.description}>{description}</p>
				<div className={styles.buttonContainer}>
					<Link href={url}>
						<a>
							<div className={`${styles.button} button`}>
								<Image
									src='/images/icons/search.svg'
									alt='icon search'
									blurDataURL='/images/icons/search.svg'
									placeholder='blur'
									quality={100}
									height={17}
									width={17}
									layout='fixed'
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
