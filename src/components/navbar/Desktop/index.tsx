import Image from 'next/image';
import ButtonWhite from '@components/buttons/White';
import ButtonBlue from '@components/buttons/Blue';
import NavbarTwo from './NavbarTwo';
import { buttonOne, buttonTwo } from '../data';
// styles
import styles from './Navbar.module.scss';

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Image src='/images/logo.svg' alt='logo' width={142} height={86} />
				</div>
				<div className={styles.buttons}>
					<ButtonWhite data={buttonOne} />
					<ButtonBlue data={buttonTwo} />
				</div>
			</div>
			<NavbarTwo />
		</nav>
	);
}
