import styles from './Rate.module.scss';
const Rate = () => {
	return (
		<div className={styles.container}>
			<h2 className='containerTitle'>
				Conoce las tarifas por el uso de nuestra <br />
				<span>pasarela de envíos</span>
			</h2>

			<table className={styles.table}>
				<thead>
					<tr>
						<th>Número de envíos/mes</th>
						<th>
							<span>Valor por envío</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Hasta 500</td>
						<td>
							<strong>99 USD</strong> mensual
						</td>
					</tr>
					<tr>
						<td>501 - 1.500</td>
						<td>
							<strong>USD 0.18</strong>
						</td>
					</tr>
					<tr>
						<td>1.501 - 3.000</td>
						<td>
							<strong>USD 0.16</strong>
						</td>
					</tr>
					<tr>
						<td>3.001 - 5.000</td>
						<td>
							<strong>USD 0.12</strong>
						</td>
					</tr>
					<tr>
						<td>5.001 - 10.000</td>
						<td>
							<strong>USD 0.10</strong>
						</td>
					</tr>
					<tr>
						<td>10.001 - 35.000</td>
						<td>
							<strong>USD 0.08</strong>
						</td>
					</tr>
					<tr>
						<td>35.001 - 65.000</td>
						<td>
							<strong>USD 0.07</strong>
						</td>
					</tr>
					<tr>
						<td>65.0001 - 100.000</td>
						<td>
							<strong>USD 0.06</strong>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Rate;
