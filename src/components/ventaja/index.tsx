import Image from 'next/image';
import styles from './Ventaja.module.scss';
import Button from '@components/button';
export const Ventajas = ({ data }) => {
	return (
		<section className={styles.container}>
			<div className={styles.container_div}>
					<div className={styles.container_div_div_image}>
						<Image src={data.image} width={440} height={332}/>
					</div>
					<div className={styles.container_div_div_description}>
						<h2>{data.title} <span>{data.titleSpan}</span></h2>
						<div dangerouslySetInnerHTML={{ __html: data.description }}></div>
					</div>
			</div>
			<div className={styles.container_div_list}>
				<ul>
				{data.items.map((item, index) => (
						<li key={index}>
							{item.point}
						</li>
					))}
					
				</ul>
			</div>
			<div className={styles.container_div_btn}>
				<p>{data.descriptionTwo}</p>
				<div className={styles.buttons}>
					<Button data={data.buttonOne} />
					{/* si el botón 2 no viene no se mostrará */}
					{data.buttonTwo && <Button data={data.buttonTwo} />}
				</div>
			</div>
		</section>
	);
};

export default Ventajas;
