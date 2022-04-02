import { Items } from '../interfaceNavbar';
import { items } from '../data'; // solo se encuentran items que tengas subitem, Agencias y blog no se encuentran aquí
import styles from './NavbarTwo.module.scss';

export default function NavbarTwo() {
	return (
		<div className={styles.container}>
			<ul className={styles.ul}>
				{items.map((item: object, index: number) => (
					<li key={index}>
						<button className={styles.items}>{item.title}</button>
						<ul className={styles.ulChildren} id={`subItems-${index}`}>
							{item.subItems.map((subItem: Items, index: number) => (
								<li key={index}>
									<div className={styles.arrowRight}></div>
									<a href='#'>{subItem.title}</a>
								</li>
							))}
						</ul>
					</li>
				))}
				<li>
					<button className={styles.items}>AGENCIAS</button>
				</li>
				<li>
					<button className={styles.items}>BLOG</button>
				</li>
				<li>
					<a className={`${styles.items} ${styles.itemBlue}`}>
						CREAR UNA CUENTA
					</a>
				</li>
			</ul>
		</div>
	);
}
