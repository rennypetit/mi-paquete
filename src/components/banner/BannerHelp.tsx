import { useContext } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import WidthContext from '@contexts/width';
// only data of components
import { primerosPasos, aprendeMas } from '@data/centro-de-ayuda';
//types
import { PropsBackground } from './types';
import styles from './BannerSubmit.module.scss';

type Input = {
	search: string;
};
const BannerSubmit = ({ handleSearch, data }: PropsBackground) => {
	const { register, handleSubmit, resetField } = useForm<Input>();

	const { widthViewport }: any = useContext(WidthContext);
	if (!data?.title) return null; // sino tiene nada no retorna nada

	const onSubmit: SubmitHandler<Input> = async ({ search }) => {
		const data = search
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLocaleLowerCase();
		const searchOne = primerosPasos.includes(data);
		const searchTwo = aprendeMas.includes(data);
		handleSearch(searchOne, searchTwo);
	};

	return (
		<div className={`${styles.container} ${styles.BannerHelp}`}>
			{widthViewport < 1024 ? (
				<>
					{data.image && (
						<Image
							src={data.image}
							alt={data.alt}
							quality={100}
							width={1024}
							height={768}
							layout=''
						/>
					)}
				</>
			) : (
				<>
					{data.imageDesktop && (
						<Image
							src={data.imageDesktop}
							alt={data.alt}
							quality={100}
							width={1920}
							height={1080}
							layout=''
						/>
					)}
				</>
			)}
			<div className={styles.row}>
				<h1 className={styles.title}>{data.title}</h1>
				<p className={styles.description}>{data.description}</p>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						className={`form-input ${styles.input}`}
						placeholder='Escribe aquí lo que necesitas'
						{...register('search', {
							required: true,
						})}
						required
					/>
					<div className={styles.icon}>
						<button>
							<Image
								src='/images/icons/search-dark.svg'
								alt='icon search'
								height={13}
								width={13}
								layout='fixed'
							/>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default BannerSubmit;
