import styles from './Shared.module.scss';
import Image from 'next/image';
import Link from 'next/link';
const Shared = () => {
	return (
		<div className={styles.component_shared}>
			<div className={styles.component_shared__left}>
				<Image
					src={'/images/icons/icon-share.svg'}
					width={27}
					height={27}
					alt={'icon-share'}
				/>
				<p>Compártelo en tus redes sociales</p>
			</div>
			<div className={styles.component_shared__right}>
				<Link href='#'>
					<Image
						src={'/images/icons/instagram-blue.svg'}
						width={27}
						height={27}
						alt={'icon-share'}
					/>
				</Link>
				<Link href='#'>
					<Image
						src={'/images/icons/linkedin-blue.svg'}
						width={27}
						height={27}
						alt={'icon-share'}
					/>
				</Link>
				<Link href='#'>
					<Image
						src={'/images/icons/facebook-blue.svg'}
						width={27}
						height={27}
						alt={'icon-share'}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Shared;
