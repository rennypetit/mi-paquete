import styles from './Shared.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Shared = () => {
	const router = useRouter();
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
				<a
					href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						src={'/images/icons/linkedin-blue.svg'}
						width={27}
						height={27}
						alt={'icon-share'}
					/>
				</a>
				<a
					href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_HOST}${router.asPath}`}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						src={'/images/icons/facebook-blue.svg'}
						width={27}
						height={27}
						alt={'icon-share'}
					/>
				</a>
			</div>
		</div>
	);
};

export default Shared;
