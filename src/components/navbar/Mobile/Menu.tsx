import { Fragment } from 'react';
import ButtonWhite from '@components/buttons/White';
import { items, buttonOne } from '../data'; // solo se encuentran items que tengas subitem, Agencias y blog no se encuentran aquí
import SubItems from './SubItems';
import styles from './Menu.module.scss';

export default function Menu() {
	return (
		<div className={styles.menu}>
			<div className={styles.container}>
				{/* se recorre los subitem que tengan items */}
				{items.map((item, index) => (
					<Fragment key={index}>
						<SubItems item={item} />
						<hr className={styles.separator} />
					</Fragment>
				))}
				<ul className={styles.ulTitle}>
					<li>AGENCIAS</li>
				</ul>
				<hr className={styles.separator} />
				<ul className={styles.ulTitle}>
					<li>BLOG</li>
				</ul>
				<hr className={styles.separator} />
				<div className={styles.containerButton}>
					<ButtonWhite data={buttonOne} />
				</div>
			</div>
		</div>
	);
}
