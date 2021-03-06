import { useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { postForm } from '@services/api';
import newsletter from '@hooks/newsletter';
import Modal from '@components/form/Modal';
import styles from './BannerBlog.module.scss';
type Input = {
	email: string;
};
const BannerBlog = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { register, handleSubmit, resetField } = useForm<Input>();
	const onSubmit: SubmitHandler<Input> = async (dataSubmit) => {
		if (!dataSubmit.check) return alert('Faltan por completar');

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
		<div className={`${styles.container} ${styles.container_margin_top}`}>
			<h1>
				Blog <span> Mi Paquete </span>
			</h1>
			<p>
				Conoce las novedades en el mundo del ecommerce, consejos para
				implementar en tu tienda, noticias, tips para realizar envíos y más.
			</p>
			<div className={styles.content}>
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
					<div className={styles.check}>
						<label>
							<input
								type='checkbox'
								id='check'
								{...register('check')}
								required
							/>
							<span>
								Al enviar tu correo confirmas que aceptas nuestros{' '}
								<a
									href='/politicas-privacidad-de-datos-terminos-y-condiciones'
									target='_blank'
									rel='noopener noreferrer'
								>
									Términos y Políticas de Tratamiento de Datos
								</a>
							</span>
						</label>
					</div>
					<div className={styles.containerButton}>
						<button className={`${styles.button} button`}>
							SUSCRIBIRSE
							<div className={styles.icon}>
								<Image
									src='/images/icons/search-dark.svg'
									alt='icon search'
									quality={100}
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
		</div>
	);
};

export default BannerBlog;
