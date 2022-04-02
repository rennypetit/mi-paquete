import Image from 'next/image';

import styles from './Quoter.module.scss';
export default function Amounts() {
	return (
		<div className={styles.amounts}>
			<div className={styles.items}>
				<div className={styles.itemsIcon}>
					<Image
						src='/images/icons/amounts.svg'
						alt='icon amounts'
						height={50}
						width={50}
					/>
					<p>CANTIDADES</p>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<label htmlFor='paquetes'>
						¿Cuántos paquetes son del mismo peso y medida?
					</label>
					<div className={styles.group}>
						<input
							type='number'
							id='paquetes'
							placeholder='12'
							className={styles.formInput}
						/>
						<div className={styles.formIcon}>
							<Image
								src='/images/icons/search.svg'
								alt='icon search'
								height={20}
								width={20}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<label htmlFor='valor'>Valor declarado del paquete</label>
					<div className={styles.group}>
						<input
							type='text'
							id='valor'
							placeholder='$10.000'
							className={styles.formInput}
						/>
						<div className={styles.formIcon}>
							<Image
								src='/images/icons/question.svg'
								alt='icon question'
								height={20}
								width={20}
							/>
						</div>
					</div>
				</div>
			</div>
			<p className={styles.terms}>
				*Recuerda que el valor mínimo declarado del paquete debe ser de $10.000
			</p>
			<hr className={styles.separator} />
		</div>
	);
}
