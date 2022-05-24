import Image from 'next/image';
import Shared from '@components/shared';
import styles from './Expansion.module.scss';
const Expansion = ({ data }) => {
	return (
		<div className={styles.background}>
			<div className='container'>
				<h2>{data.title}</h2>
				<div className={styles.content}>
					<div className={styles.iconOne}>
						<Image
							src='/images/quote.png'
							alt='icon'
							width={100}
							height={100}
						/>
					</div>
					<div className={styles.iconPersonMobile}>
						<Image
							src='/images/casos-de-exito/person.svg'
							alt='icon search'
							height={146}
							width={146}
						/>
					</div>
					<div className={styles.info}>
						<div className={styles.infoImage}>
							<div className={styles.iconPersonDesktop}>
								<Image
									src='/images/casos-de-exito/person.svg'
									alt='icon search'
									height={146}
									width={146}
								/>
							</div>
							<div className={styles.infoDescription}>
								<div
									className={styles.infoDescriptionTitle}
									dangerouslySetInnerHTML={{
										__html: data.name,
									}}
								></div>
								<div
									className={styles.descriptionP}
									dangerouslySetInnerHTML={{
										__html: data.description,
									}}
								></div>
							</div>
						</div>
					</div>
					<div className={styles.iconTwo}>
						<Image
							src='/images/quote.png'
							alt='icon'
							quality={100}
							width={100}
							height={100}
						/>
					</div>
				</div>
				<hr />
				<div className={styles.shared}>
					<Shared />
				</div>
				<hr />
			</div>
		</div>
	);
};

export default Expansion;
