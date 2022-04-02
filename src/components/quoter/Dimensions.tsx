import Image from 'next/image';

import styles from './Quoter.module.scss';
export default function Dimensions() {
	return (
		<div className={styles.dimensions}>
			<div className={styles.items}>
				<div className={styles.itemsIcon}>
					<Image
						src='/images/icons/dimensions.svg'
						alt='icon dimensions'
						height={50}
						width={50}
					/>
					<p>DIMENSIONES</p>
				</div>
			</div>
			{/* row one */}
			<div className={styles.row}>
				{/* high */}
				<div className={styles.column}>
					<div className={styles.labelIcons}>
						<label htmlFor='alto'>Alto</label>
						<Image
							src='/images/icons/box-high.svg'
							alt='icon box high'
							height={20}
							width={20}
						/>
					</div>
					<div className={styles.group}>
						<input
							type='number'
							id='ancho'
							placeholder='45'
							className={styles.formInput}
						/>
						<div className={styles.formIcon}>
							<span>CM</span>
						</div>
					</div>
				</div>
				{/* end high */}
				{/* wide */}
				<div className={`${styles.column} ${styles.columnTwo}`}>
					<div className={styles.labelIcons}>
						<label htmlFor='ancho'>Ancho</label>
						<Image
							src='/images/icons/box-wide.svg'
							alt='icon box wide'
							height={20}
							width={20}
						/>
					</div>
					<div className={styles.group}>
						<input
							type='number'
							id='alto'
							placeholder='45'
							className={styles.formInput}
						/>
						<div className={styles.formIcon}>
							<span>CM</span>
						</div>
					</div>
				</div>
				{/* end wide */}
			</div>
			{/* end row one */}
			{/* row two */}
			<div className={styles.row}>
				{/* long */}
				<div className={styles.column}>
					<div className={styles.labelIcons}>
						<label htmlFor='largo'>Largo</label>
						<Image
							src='/images/icons/box-long.svg'
							alt='icon box long'
							height={20}
							width={20}
						/>
					</div>
					<div className={styles.group}>
						<input
							type='number'
							id='alto'
							placeholder='45'
							className={styles.formInput}
						/>
						<div className={styles.formIcon}>
							<span>CM</span>
						</div>
					</div>
				</div>
				{/* end long */}
				{/* weight */}
				<div className={`${styles.column} ${styles.columnTwo}`}>
					<div className={styles.labelIcons}>
						<label htmlFor='peso'>¿Cuánto pesa?</label>
						<Image
							src='/images/icons/weight.svg'
							alt='icon weight'
							height={20}
							width={20}
						/>
					</div>
					<div className={styles.group}>
						<input
							type='number'
							id='alto'
							placeholder='45'
							className={styles.formInput}
						/>
						<div className={styles.formIcon}>
							<select name='peso' id='' className={styles.formSelect}>
								<option value='KG'>KG</option>
								<option value='GR'>GR</option>
							</select>
						</div>
					</div>
				</div>
				{/* end wide */}
			</div>
			{/* end row two */}
			<p className={styles.terms}>
				*Selecciona cuánto mide el paquete que enviarás para darte un precio
				preciso de envío.
			</p>
			<hr className={styles.separator} />
		</div>
	);
}
