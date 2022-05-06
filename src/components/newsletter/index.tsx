import { useContext, useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import WidthContext from '@contexts/width';
import Modal from '@components/form/Modal';
import styles from './Newsletter.module.scss';
import { postForm } from '@services/api';

type Inputs = {
	email: string;
	check?: boolean;
	fieldValues?: Array<{
		field: string;
		value: string;
	}>;
};

export default function Newsletter({ background }) {
	const { widthViewport }: any = useContext(WidthContext);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (dataSubmit) => {
		if (!dataSubmit.check) return alert('Faltan por completar');
		dataSubmit.fieldValues = [
			{
				field: '98', // Número de envíos realizados
				value: '120',
			},
		];
		// remove data
		const { check, ...body } = dataSubmit;
		const response = await postForm(body);
		console.log(response);
		if (response.contacts) {
			document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
			setIsOpenModal(true);
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
					layout='fill'
				/>
			) : (
				<Image
					src={`/images/footer/background-${background}.png`}
					alt='background newsletter'
					layout='fill'
				/>
			)}
			<div className={styles.content}>
				<h2 className={styles.title}>
					Recibe novedades y consejos para{' '}
					<strong>ecommerce en nuestro Newsletter</strong>
				</h2>
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
							Al enviar su correo usted confirma que acepta nuestros Términos y
							Políticas de Tratamiento de Datos
						</label>
					</div>
					<div className={styles.containerButton}>
						<button className={`${styles.button} button`}>
							SUSCRIBIRSE
							<div className={styles.icon}>
								<Image
									src='/images/icons/search-dark.svg'
									alt='icon search'
									height={16}
									width={16}
								/>
							</div>
						</button>
					</div>
				</form>
			</div>
			{isOpenModal && <Modal handleCloseModal={handleCloseModal} />}
		</section>
	);
}
