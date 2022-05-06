import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Inputs } from './types';
import { postForm } from '@services/api';
import { schema } from './Schema';
import Modal from './Modal';
import styles from './Form.module.scss';

const Form = ({ data, background, pageAgencias = false }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (dataSubmit: Inputs) => {
		if (!dataSubmit.check) return alert('Faltan por completar');

		dataSubmit.phone = '+57' + dataSubmit.phone;
		dataSubmit.listId = data.listId;
		if (!pageAgencias) {
			dataSubmit.fieldValues = [
				{
					field: '98', // Número de envíos realizados
					value: dataSubmit.averageShipments,
				},
			];
		}

		// remove data
		const { check, averageShipments, ...body } = dataSubmit;

		const response = await postForm(body);
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
		<div className={`${styles.container} ${styles[background]}`}>
			<div className={styles.background}>
				<div className={styles.image}>
					<Image
						src={`/images/form/background-${background}.svg`}
						alt={'background'}
						layout='fill'
					/>
				</div>
				<div className={styles.backgroundContent}>
					<div
						className={styles.title}
						dangerouslySetInnerHTML={{ __html: data.title }}
					></div>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: data.description }}
					></div>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<div
							id='asesoria'
							className={styles.formTitle}
							dangerouslySetInnerHTML={{ __html: data.titleForm }}
						></div>
						<div
							className={styles.formDescription}
							dangerouslySetInnerHTML={{ __html: data.formDescription }}
						></div>
						<div className={styles.formContent}>
							<div className={styles.row}>
								<label htmlFor='name'>
									Nombre
									<input
										type='text'
										id='name'
										className={styles.formInput}
										{...register('name')}
										required
									/>
								</label>
								<div className='form-error'>
									{errors.name && <span>El campo nombre es requerido</span>}
								</div>
							</div>
							<div className={styles.row}>
								<label htmlFor='surname'>
									Apellido
									<input
										type='text'
										id='surname'
										className={styles.formInput}
										{...register('surname')}
										required
									/>
								</label>
							</div>
							<div className='form-error'>
								{errors.surname && <span>El campo apellido es requerido.</span>}
							</div>
							<div className={styles.row}>
								<label htmlFor='email'>
									Correo electrónico
									<input
										type='email'
										id='email'
										className={styles.formInput}
										{...register('email')}
										required
									/>
								</label>
							</div>
							<div className='form-error'>
								{errors.email && <span>El campo email es requerido.</span>}
							</div>
							<div className={styles.row}>
								<label htmlFor='phone'>
									Teléfono celular
									<div className={styles.containerIcon}>
										<div className={`${styles.icon} icon`} id='icon'>
											<Image
												src={'/images/icons/bandera.png'}
												alt='Bandera'
												width={24}
												height={23}
											/>
											<p>+57</p>
										</div>
										<input
											type='number'
											id='phone'
											min='1'
											max='9999999999'
											className={`${styles.formInput} ${styles.formInputNumber}`}
											{...register('phone')}
											required
										/>
									</div>
								</label>
							</div>
							<div className='form-error'>
								{errors.phone && (
									<span>El campo celular debe tener 10 caracteres.</span>
								)}
							</div>
							<div className={styles.row}>
								{!pageAgencias ? (
									<label htmlFor='averageShipments'>
										¿Cuántos envíos realiza al mes?
										<select
											className={`${styles.formInput} ${styles.formInputSelect}`}
											{...register('averageShipments')}
											required
										>
											<option value='1 a 30'>1 a 30 envíos</option>
											<option value='30 a 200'>30 a 200 envíos</option>
											<option value='200 a 500'>200 a 500 envíos</option>
											<option value='500 a 5.000'>500 a 5.000 envíos</option>
											<option value='Más de 5.000'>Más de 5.000 envíos</option>
										</select>
									</label>
								) : (
									<label htmlFor='city'>
										¿Ciudad?
										<select
											className={`${styles.formInput} ${styles.formInputSelect}`}
											{...register('city')}
											required
										>
											<option value='Bogotá'>Bogotá</option>
											<option value='Cali'>Cali</option>
											<option value='Medellín'>Medellín</option>
										</select>
									</label>
								)}
							</div>
							<div className='form-error'>
								{errors.averageShipments && (
									<span>El campo envíos es requerido.</span>
								)}
							</div>
						</div>
						<div className={styles.check}>
							<label>
								<input
									type='checkbox'
									id='check'
									{...register('check')}
									required
								/>
								Acepto los{' '}
								<a href='http://' target='_blank' rel='noopener noreferrer'>
									Términos y condiciones.
								</a>
							</label>
							<div className='form-error'>
								{errors.check && (
									<span>El campo términos y condiciones es requerido</span>
								)}
							</div>
						</div>
						<div className={styles.row}>
							<button className={`${styles.button} button`}>
								{data.textSubmit}
							</button>
						</div>
					</form>
				</div>
			</div>
			{isOpenModal && <Modal handleCloseModal={handleCloseModal} />}
		</div>
	);
};

export default Form;
