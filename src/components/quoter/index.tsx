import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Place from './Place';
import Dimensions from './Dimensions';
import Amounts from './Amounts';
import { Inputs } from './types';
import styles from './Quoter.module.scss';
export default function Quoter() {
	const selectOrigin = useRef('');
	const selectDestiny = useRef('');
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		resetField,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		if (!selectOrigin.current?.props?.value?.value)
			return alert('Debe llenar la ciudad de origen');
		if (!selectDestiny.current?.props?.value?.value)
			return alert('Debe llenar la ciudad de destino');
		data.origin = selectOrigin.current.props.value.value;
		data.destiny = selectDestiny.current.props.value.value;

		resetField('height');
		resetField('width');
		resetField('length');
		resetField('weight');
		resetField('quantity');
		resetField('declaredValue');
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
						<strong>
							<mark>Mi Paquete</mark>
						</strong>
						, eligiendo la mejor opción para ti.
					</p>
					<div className={styles.containerPass}>
						<LazyLoadComponent>
							<Place
								register={register}
								errors={errors}
								selectOrigin={selectOrigin}
								selectDestiny={selectDestiny}
							/>
						</LazyLoadComponent>

						<Dimensions register={register} errors={errors} watch={watch} />
						<Amounts register={register} errors={errors} />
					</div>
				</div>
				<button className={`${styles.button} button`}>COTIZA TU ENVÍO</button>
			</form>
		</section>
	);
}
