import Button from '@components/button';

import styles from './Description.module.scss';
const Description = ({ data }) => {
	return (
		<section className={styles.container}>
			<h3 className={styles.title}>
				{' '}
				{data.title} <span>{data.titleSpan}</span>
			</h3>
			<div
				className={styles.description}
				dangerouslySetInnerHTML={{ __html: data.description }}
			></div>
			<div className={styles.buttons}>
				{/* si el botón no viene no se mostrará */}
				{data.buttonOne && <Button data={data.buttonOne} />}
				{data.buttonTwo && <Button data={data.buttonTwo} />}
			</div>
		</section>
	);
};

export default Description;
