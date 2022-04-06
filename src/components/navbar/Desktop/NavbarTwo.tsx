import Link from 'next/link';
import { Items } from '@interface/interfaceNavbar';
import { items } from '@data/componentNavbar'; // solo se encuentran items que tengas subitem, Agencias y blog no se encuentran aquí
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
									<Link href={subItem.url}>
										<a>{subItem.title}</a>
									</Link>
								</li>
							))}
						</ul>
					</li>
				))}
				<li>
					<Link href='/agencias'>
						<a>
							<div className={styles.items}>AGENCIAS</div>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/blog'>
						<a>
							<div className={styles.items}>BLOG</div>
						</a>
					</Link>
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
