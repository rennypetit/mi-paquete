import Link from 'next/link';
import Image from 'next/image';
import Button from '@components/button';
import NavbarTwo from './NavbarTwo';
import { buttonOne, buttonTwo } from '@data/componentNavbar';
// styles
import styles from './Navbar.module.scss';

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link href='/'>
						<a>
							<Image
								src='/images/logo.svg'
								alt='logo'
								width={142}
								height={86}
							/>
						</a>
					</Link>
				</div>
				<div className={styles.buttons}>
					<Button data={buttonOne} />
					<Button data={buttonTwo} />
				</div>
			</div>
			<NavbarTwo />
		</nav>
	);
}
