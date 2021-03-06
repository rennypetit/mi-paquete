import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import styles from './Recognition.module.scss';
const Recognition = ({ data }) => {
	const { widthViewport } = useContext(WidthContext);
	return (
		<section className={styles.container}>
			<div className={styles.background}>
				<Image
					src={data.imageBackgroundDesktop}
					alt={data.altBackground}
					quality={100}
					layout='fill'
				/>
				<div className={styles.row}>
					{widthViewport > 1024 && (
						<div className={styles.containerPerson}>
							<div className={styles.person}>
								<Image
									src={data.image}
									alt={data.alt}
									blurDataURL={data.image}
									placeholder='blur'
									quality={100}
									width={413}
									height={284}
									layout='fixed'
								/>
							</div>
						</div>
					)}
					<div className={styles.description}>
						<h6 className={styles.title}>
							{data.title} <strong>{data.titleStrong}</strong>
						</h6>
						<p>{data.description}</p>
						<hr className={styles.separator} />
					</div>
					<div className={styles.items}>
						{data.items.map((item, index) => (
							<div className={styles.item} key={index}>
								<Image
									src={item.image}
									alt={item.alt}
									blurDataURL={data.image}
									placeholder='blur'
									quality={100}
									title={item.title}
									width={292}
									height={136}
									layout='responsive'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Recognition;
