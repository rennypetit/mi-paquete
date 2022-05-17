import styles from './NavCategories.module.scss';
import { useEffect } from 'react';

const NavCategories = ({ handleChangeFilter }) => {
	const allCategories = [
		{
			title: 'TODAS LAS CATEGORÍAS',
			value: 'all',
		},
		{
			title: 'CONSEJOS PARA EMPRENDEDORES',
			value: 'consejos-para-emprendedores',
		},
		{
			title: 'ENVÍOS',
			value: 'envios',
		},
		{
			title: 'NOTICIAS',
			value: 'noticias',
		},
	];
	useEffect(() => {
		document.getElementById('all')?.style.background = '#E6EFF5';
	}, []);

	return (
		<div className={styles.component_categories}>
			<ul className={styles.component_categories__categories}>
				{allCategories.map((category, index) => (
					<li
						className={'filters'}
						id={category.value}
						key={index}
						onClick={() => handleChangeFilter(category.value)}
					>
						{category.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavCategories;
