import Image from 'next/image';
import React from 'react';
import styles from './automation.module.scss';
const Automation = ({ data }) => {
	const itemDesktopBlue = data.items.filter(
		(element) => element.color === 'blue'
	);
	const itemDesktopOrange = data.items.filter(
		(element) => element.color === 'orange'
	);

	return (
		<div className={styles.container}>
			<div
				className={styles.title}
				dangerouslySetInnerHTML={{ __html: data.title }}
			></div>
			<div className={styles.row}>
				<div className={styles.itemDesktopLeft}>
					{itemDesktopBlue.map((item, index) => (
						<div className={`${styles.item} ${styles[item.color]}`} key={index}>
							<div className={styles.top}>
								<Image
									src={item.image}
									alt={item.title}
									quality={100}
									width={30}
									height={30}
									layout='fixed'
								/>
								<span className={styles.titleItem}>{item.title}</span>
							</div>
							<p className={styles.descriptionItem}>{item.description}</p>
						</div>
					))}
				</div>
				<div className={styles.image}>
					<Image
						src={data.image}
						alt={data.title}
						width={616}
						height={441}
						quality={100}
						layout='responsive'
					/>
				</div>
				<div className={styles.itemDesktopRight}>
					{itemDesktopOrange.map((item, index) => (
						<div className={`${styles.item} ${styles[item.color]}`} key={index}>
							<div className={styles.top}>
								<Image
									src={item.image}
									alt={item.title}
									quality={100}
									width={30}
									height={30}
									layout='fixed'
								/>
								<span className={styles.titleItem}>{item.title}</span>
							</div>
							<p className={styles.descriptionItem}>{item.description}</p>
						</div>
					))}
				</div>
				<div className={styles.itemsMobile}>
					{data.items.map((item, index) => (
						<div className={`${styles.item} ${styles[item.color]}`} key={index}>
							<div className={styles.top}>
								<Image
									src={item.image}
									alt={item.title}
									quality={100}
									width={30}
									height={30}
									layout='fixed'
								/>
								<span className={styles.titleItem}>{item.title}</span>
							</div>
							<p className={styles.descriptionItem}>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Automation;
