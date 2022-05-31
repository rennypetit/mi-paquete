import { useRef, useState } from 'react';
import Image from 'next/image';
import Button from '@components/button';
import Menu from './Menu';
import { buttonTwo } from '@data/componentNavbar'; // solo se encuentran items que tengas subitem, Agencias y blog no se encuentran aquí
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
	const subItems = useRef(null);
	const [openMenu, setOpenMenu] = useState(false);
	const handleButtonMenu = () => {
		setOpenMenu(!openMenu);
		if (openMenu) {
			document.getElementById('menu-fixed')?.style.display = 'block';
			subItems.current.style.display = 'none';
		} else {
			document.getElementById('menu-fixed')?.style.display = 'none';
			subItems.current.style.display = 'block';
		}
	};
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link href='/'>
						<a>
							<Image
								src='/images/logo.svg'
								alt='logo'
								quality={100}
								width={142}
								height={86}
								layout='fixed'
							/>
						</a>
					</Link>
				</div>
				{/* si el menu aun no est abierto */}
				{!openMenu ? (
					<div className={`${styles.icon} ${styles.iconOpen}`}>
						<button onClick={handleButtonMenu}>
							<Image
								src='/images/icons/menu.svg'
								alt='icon menu'
								width={20}
								height={20}
								layout='fixed'
							/>
						</button>
					</div>
				) : (
					<>
						<div className={styles.containerButtonTop}>
							<Button data={buttonTwo} />
						</div>
						<div className={`${styles.icon} ${styles.iconClose}`}>
							<button onClick={handleButtonMenu}>
								<Image
									src='/images/icons/close.svg'
									alt='icon close'
									width={20}
									height={20}
									layout='fixed'
								/>
							</button>
						</div>
					</>
				)}
			</div>
			{/* se realiza con display none ya que si se hace con el state los item no los leerá el buscador */}
			<section ref={subItems} className={styles.sectionMain}>
				<Menu />
			</section>
		</nav>
	);
}
