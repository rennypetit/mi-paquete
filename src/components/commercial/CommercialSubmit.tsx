import { useState, useContext } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { postForm } from '@services/api';
import newsletter from '@hooks/newsletter';
import WidthContext from '@contexts/width';
import Modal from '@components/form/Modal';
import styles from './Commercial.module.scss';

type Input = {
	email: string;
};

const CommercialSubmit = ({ data }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { widthViewport } = useContext(WidthContext);
	const { register, handleSubmit, resetField } = useForm<Input>();

	const onSubmit: SubmitHandler<Input> = async (dataSubmit) => {
		const body = newsletter(dataSubmit);
		const response = await postForm(body);
		if (response.contacts) {
			document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
			setIsOpenModal(true);
			resetField('email');
			resetField('check');
		} else {
			alert('Ocurrió un error, intente más tarde');
		}
	};
	const handleCloseModal = () => {
		setIsOpenModal(false);
		document.getElementsByTagName('html')[0].style.overflowY = 'auto';
	};
	return (
		<section className={styles.container}>
			{widthViewport < 1024 ? (
				<Image src={data.image} alt={data.alt} layout='fill' quality={100} />
			) : (
				<Image
					src={data.imageDesktop}
					alt={data.alt}
					quality={100}
					layout='fill'
				/>
			)}
			<div className={`${styles.content} ${styles[data.colorText]}`}>
				<p className={styles.title}>{data.title}</p>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<input
						type='email'
						className={`form-input ${styles.input}`}
						placeholder='Correo electrónico'
						{...register('email', {
							required: true,
							pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
						})}
						required
					/>
					<div className={styles.containerButton}>
						<button className={`${styles.button} button`}>
							Descubre más
							<div className={styles.icon}>
								<Image
									src='/images/icons/search-dark.svg'
									alt='icon search'
									height={16}
									width={16}
									layout='fixed'
								/>
							</div>
						</button>
					</div>
				</form>
			</div>
			{isOpenModal && (
				<Modal handleCloseModal={handleCloseModal} newsletter={true} />
			)}
		</section>
	);
};

export default CommercialSubmit;
