import styles from './NavCategories.module.scss';

const NavCategories = () => {
	const allCategories = [
		'TODAS LAS CATEGORÍAS',
		'CONSEJOS PARA EMPRENDEDORES',
		'ENVÍOS',
		'NOTICIAS',
	];
	return (
		<div className={styles.component_categories}>
			<ul className={styles.component_categories__categories}>
				{allCategories.map((categorie, index) => (
					<li key={index}>{categorie}</li>
				))}
			</ul>
		</div>
	);
};

export default NavCategories;
