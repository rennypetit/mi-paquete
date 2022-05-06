import { Fragment } from 'react';
import Link from 'next/link';
import Button from '@components/button';
import { items, buttonOne } from '@data/componentNavbar'; // solo se encuentran items que tengas subitem, Agencias y blog no se encuentran aquí
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
					<Link href='/blog'>
						<a>BLOG</a>
					</Link>
				</ul>
				<hr className={styles.separator} />
				<div className={styles.containerButton}>
					<Button data={buttonOne} />
				</div>
			</div>
		</div>
	);
}
