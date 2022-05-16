import styles from './NavCategories.module.scss';

const NavCategories = ({ handleChangeFilter }) => {
	const allCategories = [
		'TODAS LAS CATEGORÍAS',
		'CONSEJOS PARA EMPRENDEDORES',
		'ENVÍOS',
		'NOTICIAS',
	];
	return (
		<div className={styles.component_categories}>
			<ul className={styles.component_categories__categories}>
				{allCategories.map((category, index) => (
					<li key={index} onClick={handleChangeFilter}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavCategories;
