import Image from 'next/image';
import Link from 'next/link';
import styles from './Ally.module.scss';
export default function Ally({ items }) {
	return (
		<div className={styles.container}>
			{items.map((item, index) => (
				<div className={styles.image} key={index}>
					<Link href='/'>
						<a>
							<Image
								src={item.image}
								alt={item.alt}
								title={item.title}
								width={225}
								height={100}
							/>
						</a>
					</Link>
				</div>
			))}
		</div>
	);
}
