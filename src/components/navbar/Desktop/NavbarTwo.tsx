import Link from 'next/link';
import { Items } from '@interface/interfaceNavbar';
import { items } from '@data/componentNavbar'; // solo se encuentran items que tengas subitem, Agencias y blog no se encuentran aquí
import styles from './NavbarTwo.module.scss';

export default function NavbarTwo() {
	return (
		<div className={styles.container}>
			<ul className={styles.ul}>
				{items.map((item: object, index: number) => (
					<li key={index} className='dropdown'>
						<button className={`${styles.items}`}>{item.title}</button>
						<div className={styles.marginSubItems}>
							<ul className={`dropdown-content ${styles.ulChildren}`}>
								{item.subItems.map((subItem: Items, index: number) => (
									<li
										key={index}
										className={`${
											subItem.title === 'Envíos Pago Contra Entrega'
												? styles.liBaseline
												: subItem.title === 'Integraciones'
												? styles.liStrong
												: 'li-menu'
										}`}
									>
										<div className={styles.arrowRight}></div>
										<Link href={subItem.url}>
											<a>{subItem.title}</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</li>
				))}
				<li>
					<Link href='/blog'>
						<a>
							<div className={styles.items}>BLOG</div>
						</a>
					</Link>
				</li>
				<li>
					<a
						href='https://app.mipaquete.com/registro'
						target='_blank'
						rel='noopener noreferrer'
						className={`${styles.items} ${styles.itemBlue}`}
					>
						CREAR UNA CUENTA
					</a>
				</li>
			</ul>
		</div>
	);
}
