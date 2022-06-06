import Image from 'next/image';

import styles from './Quoter.module.scss';
export default function Dimensions({ register, errors, watch }) {
	return (
		<div className={styles.dimensions}>
			<div className={styles.items}>
				<div className={styles.itemsIcon}>
					<Image
						src='/images/icons/dimensions.svg'
						alt='icon dimensions'
						blurDataURL='/images/icons/dimensions.svg'
						placeholder='blur'
						height={50}
						width={50}
						layout='fixed'
					/>
					<p>DIMENSIONES</p>
				</div>
			</div>
			{/* row one */}
			<div className={styles.row}>
				{/* high */}
				<div className={styles.column}>
					<div className={`${styles.labelIcons} ${styles.marginTop}`}>
						<label htmlFor='alto'>Alto</label>
						<Image
							src='/images/icons/box-high.svg'
							alt='icon box high'
							height={20}
							width={20}
							layout='fixed'
						/>
					</div>

					<div className={styles.group}>
						<input
							type='number'
							id='height'
							placeholder='45'
							className={styles.formInput}
							min={1}
							max={200}
							{...register('height', { required: true, min: 1, max: 200 })}
							required
						/>
						<div className={styles.formIcon}>
							<span>CM</span>
						</div>
					</div>
					<div className={styles.errors}>
						{errors.height && (
							<span>*Ingresa un valor entre 1 y 200 centímetros.</span>
						)}
					</div>
				</div>
				{/* end high */}
				{/* wide */}
				<div className={`${styles.column} ${styles.columnTwo}`}>
					<div className={`${styles.labelIcons} ${styles.marginTop}`}>
						<label htmlFor='ancho'>Ancho</label>
						<Image
							src='/images/icons/box-wide.svg'
							alt='icon box wide'
							height={20}
							width={20}
							layout='fixed'
						/>
					</div>
					<div className={styles.group}>
						<input
							type='number'
							id='width'
							placeholder='34'
							min={1}
							max={200}
							className={styles.formInput}
							{...register('width', { required: true, min: 1, max: 200 })}
							required
						/>
						<div className={styles.formIcon}>
							<span>CM</span>
						</div>
					</div>
					<div className={styles.errors}>
						{errors.width && (
							<span>*Ingresa un valor entre 1 y 200 centímetros.</span>
						)}
					</div>
				</div>
				{/* end wide */}
			</div>
			{/* end row one */}
			{/* row two */}
			<div className={styles.row}>
				{/* length */}
				<div className={styles.column}>
					<div className={styles.labelIcons}>
						<label htmlFor='largo'>Largo</label>
						<Image
							src='/images/icons/box-long.svg'
							alt='icon box long'
							height={20}
							width={20}
							layout='fixed'
						/>
					</div>
					<div className={styles.group}>
						<input
							type='number'
							id='alto'
							placeholder='24'
							min={1}
							max={200}
							className={styles.formInput}
							{...register('length', { required: true, min: 1, max: 200 })}
							required
						/>
						<div className={styles.formIcon}>
							<span>CM</span>
						</div>
					</div>
					<div className={styles.errors}>
						{errors.length && (
							<span>*Ingresa un valor entre 1 y 200 centímetros.</span>
						)}
					</div>
				</div>
				{/* end length */}
				{/* weight */}
				<div className={`${styles.column} ${styles.columnTwo}`}>
					<div className={styles.labelIcons}>
						<label htmlFor='peso'>¿Cuánto pesa?</label>
						<Image
							src='/images/icons/weight.svg'
							alt='icon weight'
							height={20}
							width={20}
							layout='fixed'
						/>
					</div>
					<div className={styles.group}>
						{watch('unitOfMeasurement') === 'Kg' ? (
							<input
								type='number'
								id='weight'
								min={1}
								max={150}
								placeholder='12'
								className={styles.formInput}
								{...register('weight', { required: true, min: 1, max: 150 })}
								required
							/>
						) : (
							<input
								type='number'
								id='weight'
								min={1}
								max={150000}
								placeholder='10'
								className={styles.formInput}
								{...register('weight', { required: true, min: 1, max: 250000 })}
								required
							/>
						)}

						<div className={styles.formIcon}>
							<select
								name='unitOfMeasurement'
								id='unitOfMeasurement'
								className={styles.formSelect}
								{...register('unitOfMeasurement', { required: true })}
							>
								<option value='kg'>KG</option>
								<option value='g'>GR</option>
							</select>
						</div>
					</div>
					<div className={styles.errors}>
						{errors.weight && (
							<span>
								*Ingresa un valor entre 1 y 150 kilos o 150.000 gramos.
							</span>
						)}
					</div>
				</div>
				{/* end wide */}
			</div>
			{/* end row two */}
			<p className={styles.terms}>
				*Selecciona cuánto mide el paquete que enviarás para darte un precio
				preciso de envío.
			</p>
		</div>
	);
}
