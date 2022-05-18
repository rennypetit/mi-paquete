import Image from 'next/image';
import Select from 'react-select';

import styles from './Quoter.module.scss';
import { useState, useEffect } from 'react';
import { getLocations } from '../../services/api';
export default function Place({ selectOrigin, selectDestiny }) {
	const [dataLocations, setDataLocations] = useState({});
	useEffect(async () => {
		const response = await getLocations();
		const result = response.map((value) => ({
			['value']: `${value.locationName}-${value.departmentOrStateName}`,
			['label']: `${value.locationName}-${value.departmentOrStateName}`,
		}));
		setDataLocations(result);
	}, []);

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
					<div className={styles.marginTop}>
						<div className={styles.group}>
							<Select
								options={dataLocations}
								ref={selectOrigin}
								placeholder='Bogotá D.C'
							/>
						</div>
					</div>
					<div className={styles.errors}></div>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<label htmlFor='destino'>¿Cuál es la ciudad de destino?</label>
					<div className={styles.group}>
						<Select
							options={dataLocations}
							ref={selectDestiny}
							required
							placeholder='Medellín'
						/>
					</div>
					<div className={styles.errors}></div>
				</div>
			</div>
			<p className={styles.terms}>
				*Selecciona desde qué ciudad saldrá tu paquete y a qué ciudad lo
				enviarás
			</p>
		</div>
	);
}
