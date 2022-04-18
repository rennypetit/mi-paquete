import Image from 'next/image';

//types
import { Props } from './types';
import styles from './BannerSubmit.module.scss';
const BannerSubmit = ({ data }: Props) => {
	return (
		<div className={styles.container}>
			{data.image && <Image src={data.image} alt={data.alt} layout='fill' />}
			<div className={styles.row}>
				<div className={styles.containerIcon}>
					<hr className={styles.rowLine} />
					<Image
						src='/images/icons/truck.png'
						alt='icon truck'
						width={117}
						height={40}
					/>
					<hr className={styles.rowLine} />
				</div>
				<h1 className={styles.title}>{data.title}</h1>
				<p className={styles.description}>{data.description}</p>
			</div>
		</div>
	);
};

export default BannerSubmit;
