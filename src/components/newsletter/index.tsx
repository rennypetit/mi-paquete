import { useContext, useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import WidthContext from '@contexts/width';
import Modal from '@components/form/Modal';
import { postForm } from '@services/api';
import newsletter from '@hooks/newsletter';
import styles from './Newsletter.module.scss';

type Inputs = {
	email: string;
};

export default function Newsletter({ background }) {
	const { widthViewport }: any = useContext(WidthContext);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const { register, handleSubmit, resetField } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (dataSubmit) => {
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
		<section className={`${styles.container} ${styles[background]}`}>
			{widthViewport < 1024 ? (
				<Image
					src={`/images/footer/background-${background}.png`}
					alt='background newsletter'
					quality={100}
					layout='fill'
				/>
			) : (
				<Image
					src={`/images/footer/background-${background}.png`}
					alt='background newsletter'
					quality={100}
					layout='fill'
				/>
			)}
			<div className={styles.content}>
				<h6 className={styles.title}>
					Recibe novedades y consejos para{' '}
					<strong>ecommerce en nuestro Newsletter</strong>
				</h6>
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
							SUSCRÍBETE
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
}
