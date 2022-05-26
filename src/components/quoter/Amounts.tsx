import Image from 'next/image';

import styles from './Quoter.module.scss';
export default function Amounts({ register, errors }) {
	return (
		<div className={styles.amounts}>
			<div className={styles.items}>
				<div className={styles.itemsIcon}>
					<Image
						src='/images/icons/amounts.svg'
						alt='icon amounts'
						aria-hidden='true'
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
							{...register('quantity', { required: true, min: 1 })}
							required
						/>
						<div className={styles.formIcon}></div>
					</div>
					<div className={styles.errors}>
						{errors.quantity && <span>This field is required</span>}
					</div>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<label htmlFor='valor'>Valor declarado del paquete</label>
					<div className={styles.group}>
						<input
							type='number'
							id='valor'
							placeholder='$10.000'
							min={10000}
							className={styles.formInput}
							{...register('declaredValue', { required: true, min: 1 })}
							required
						/>
						<div className={`${styles.formIcon} ${styles.helpInputHover}`}>
							<Image
								src='/images/icons/question.svg'
								alt='icon question'
								height={20}
								width={20}
								className={styles.helpInputHover}
							/>
						</div>
						<div className={styles.helpInput}>
							<div className={styles.helpInputTop}>
								<p>Valor declarado</p>
								<div className={`${styles.formIcon}}`}>
									<Image
										src='/images/icons/question.svg'
										alt='icon question'
										height={20}
										width={20}
									/>
								</div>
							</div>
							<div className={styles.helpInputDescription}>
								Recuerda que en caso de pérdida o necesidad de indemnización, el
								proceso se realizará sobre el valor que haya indicado aquí
								además del soporte de tu factura.
							</div>
						</div>
					</div>
					<div className={styles.errors}>
						{errors.declaredValue && <span>*El valor mínimo es $10.000</span>}
					</div>
				</div>
			</div>
			<p className={styles.terms}>
				*Recuerda que el valor mínimo declarado del paquete debe ser de $10.000
			</p>
		</div>
	);
}
