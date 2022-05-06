import { useRef } from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import { useForm, SubmitHandler } from 'react-hook-form';
import Place from './Place';
import Dimensions from './Dimensions';
import Amounts from './Amounts';

import { settings } from './sliderConfig';
import { Inputs } from './types';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Quoter.module.scss';
export default function Quoter() {
	const selectOrigin = useRef(null);
	const selectDestiny = useRef(null);
	const refUnitOfMeasurement = useRef('Kg');
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		if (!selectOrigin.current?.props?.value?.value)
			return alert('Debe llenar la ciudad de origen');
		if (!selectDestiny.current?.props?.value?.value)
			return alert('Debe llenar la ciudad de destino');
		data.origin = selectOrigin.current.props.value.value;
		data.destiny = selectDestiny.current.props.value.value;
		router.push(
			`https://app.mipaquete.com/cotizacion?quoteShipping=${JSON.stringify(
				data
			)}`
		);
	};
	return (
		<section id='cotizar'>
			<form
				action='#'
				className={`${styles.container} quoter`}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className={styles.body}>
					<h2 className={styles.title}>
						Cotizar <span>envío de paquetes</span>
					</h2>
					<p className={styles.description}>
						Comprueba lo rápido y fácil que puedes realizar{' '}
						<strong>envíos de productos</strong> a través de{' '}
						<strong>Mi Paquete</strong>, eligiendo la mejor opción para ti.
					</p>
					<Slider {...settings}>
						<Place
							register={register}
							errors={errors}
							selectOrigin={selectOrigin}
							selectDestiny={selectDestiny}
						/>
						<Dimensions register={register} errors={errors} watch={watch} />
						<Amounts register={register} errors={errors} />
					</Slider>
				</div>
				<button className={`${styles.button} button`}>COTIZA TU ENVÍO</button>
			</form>
		</section>
	);
}
