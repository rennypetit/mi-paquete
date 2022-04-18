import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
//types
import { PropsBackground } from './types';
import styles from './BannerSubmit.module.scss';
const BannerSubmit = ({ data }: PropsBackground) => {
	const { widthViewport }: any = useContext(WidthContext);
	if (!data?.title) return null; // sino tiene nada no retorna nada
	return (
		<div className={`${styles.container} ${styles.BannerHelp}`}>
			{widthViewport < 1024 ? (
				<>
					{data.image && (
						<Image src={data.image} alt={data.alt} width={1024} height={768} />
					)}
				</>
			) : (
				<>
					{data.imageDesktop && (
						<Image
							src={data.imageDesktop}
							alt={data.alt}
							width={1920}
							height={1080}
						/>
					)}
				</>
			)}
			<div className={styles.row}>
				<h1 className={styles.title}>{data.title}</h1>
				<p className={styles.description}>{data.description}</p>
				<form action='#' className={styles.form}>
					<input
						type='text'
						className={`form-input ${styles.input}`}
						placeholder='Escribe aquí lo que necesitas'
					/>
					<div className={styles.icon}>
						<button>
							<Image
								src='/images/icons/search-dark.svg'
								alt='icon search'
								height={13}
								width={13}
							/>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default BannerSubmit;
