import React from 'react';
import Link from 'next/link';
import styles from './SubItems.module.scss';
export default function SubItems({ item }: any) {
	return (
		<div className={styles.container}>
			<ul className={styles.ulTitle}>
				<li>
					<Link href={item.url}>
						<a>{item.title}</a>
					</Link>
				</li>
			</ul>
			<ul className={styles.ulChildren}>
				{item.subItems.map((subItem: object, index: number) => (
					<li key={index}>
						<Link href={subItem.url}>
							<a>{subItem.title}</a>
						</Link>
						<div className={styles.arrowLeft}></div>
					</li>
				))}
			</ul>
		</div>
	);
}
