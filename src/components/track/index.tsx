import { useContext, useState } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import Button from '@components/button';
import styles from './Track.module.scss';
import { TypeButton } from '@types/global';
import { useForm, SubmitHandler } from 'react-hook-form';
import Modal from './Modal';
import { getSendingTracking } from '@services/api';

interface Input {
	tracking: number;
}
export default function Track() {
	const { widthViewport }: any = useContext(WidthContext);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [dataTracking, setDataTracking] = useState({});

	const data = {
		color: 'buttonOrange',
		title: 'INGRESA',
		url: 'https://app.mipaquete.com/ingreso',
		type: TypeButton.blank,
	};

	const { register, handleSubmit, resetField } = useForm<Input>();
	const onSubmit: SubmitHandler<Input> = async (data) => {
		if (data.tracking.trim().length !== 6)
			return alert('El campo tracking debe tener 6 dígitos');
		document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
		const response = await getSendingTracking(data.tracking);
		if (!response || response.message) {
			setDataTracking({});
			document.getElementsByTagName('html')[0].style.overflowY = 'auto';
			return alert('Información no encontrada');
		}
		setDataTracking(response);
		setIsOpenModal(true);
		resetField('tracking');
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
		document.getElementsByTagName('html')[0].style.overflowY = 'auto';
	};
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				{widthViewport < 768 ? (
					<Image
						src='/images/track-background-mobile.png'
						alt='background mobile'
						layout='responsive'
						quality={100}
						width={600}
						height={638}
					/>
				) : (
					<Image
						src='/images/track-background.png'
						alt='background desktop'
						layout='responsive'
						quality={100}
						width={1041}
						height={453}
					/>
				)}

				<p>
					Te ayudamos con la <span>logística de envío de productos</span> para
					tu tienda virtual de manera sencilla, crea una cuenta y descubre cómo
					aumentar tus ventas
				</p>
				<div className={styles.contentButton}>
					<Button data={data} />
				</div>
			</div>
			<div className={styles.top}>
				<p className={styles.topTitle}>
					¿Usaste nuestro{' '}
					<strong>servicio de envíos? Rastrea tu envío aquí</strong>
				</p>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.group}>
						<label htmlFor='rastrear'>Código MP</label>
						<input
							id='rastrear'
							type='number'
							placeholder='Ejemplo: 123456'
							max={999999}
							{...register('tracking', {
								required: true,
								max: 999999,
							})}
							required
						/>
					</div>
					<button className={`${styles.button} button`}>
						RASTREAR
						<div className={styles.icon}>
							<Image
								src='/images/icons/search-dark.svg'
								alt='icon search'
								height={13}
								width={13}
								layout='fixed'
								s
							/>
						</div>
					</button>
				</form>
				{/* <div className={`${styles.error} form-error`}>
					{errors.tracking && (
						<span>El campo tracking debe tener 6 digitos</span>
					)}
				</div> */}
			</div>
			{isOpenModal && (
				<Modal handleCloseModal={handleCloseModal} data={dataTracking} />
			)}
		</section>
	);
}
