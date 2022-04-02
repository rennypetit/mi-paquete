import Image from 'next/image';

import styles from './Quoter.module.scss';
export default function Place() {
	return (
		<div className={styles.place}>
			<div className={styles.items}>
				<div className={styles.itemsIcon}>
					<Image
						src='/images/icons/place.svg'
						alt='icon place'
						height={50}
						width={50}
					/>
					<p>LUGAR</p>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<label htmlFor='origen'>¿Cuál es la ciudad de origen?</label>
					<div className={styles.group}>
						<input
							type='text'
							id='origen'
							placeholder='Etiam luctus'
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
					<label htmlFor='destino'>¿Cuál es la ciudad de destino?</label>
					<div className={styles.group}>
						<input
							type='text'
							id='destino'
							placeholder='Etiam luctus'
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
			<p className={styles.terms}>
				*Selecciona desde que ciudad saldrá tu paquete y a qué ciudad lo
				enviarás
			</p>
			<hr className={styles.separator} />
		</div>
	);
}
