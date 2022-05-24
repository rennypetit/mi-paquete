import Image from 'next/image';
import Button from '@components/button';
import styles from './Row.module.scss';
function Row({ data }) {
	return (
		<div
			className={`${styles.container} ${
				data.imagePerson && styles.imageContainer
			}`}
		>
			<div className={styles.background}>
				<Image src={data.image} alt={data.alt} quality={100} layout='fill' />
			</div>
			<div className={styles.content}>
				<div className={styles.rowPrincipal}>
					{data.imagePerson && (
						<div className={styles.image}>
							<Image
								src={data.imagePerson}
								alt={data.altPerson}
								quality={100}
								width={207}
								height={252}
							/>
						</div>
					)}
					<div
						className={styles.title}
						dangerouslySetInnerHTML={{ __html: data.title }}
					></div>
				</div>
				<div className={styles.separator}></div>
				<div className={styles.containerDescription}>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: data.description }}
					></div>
					{data.button && (
						<>
							{data.button.color === 'none' ? (
								<div className={styles.link}>
									<div className={styles.icon}>
										<Image
											src={data.button.icon}
											alt={data.button.alt}
											quality={100}
											width={20}
											height={20}
										/>
									</div>
									<a
										href={data.button.url}
										target='_blank'
										rel='noopener noreferrer'
									>
										{data.button.title}
									</a>
								</div>
							) : (
								<div className={styles.link}>
									<div className={styles.button}>
										<Button data={data.button} />
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
export default Row;
