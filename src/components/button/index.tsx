import Image from 'next/image';
import Link from 'next/link';
import styles from './Button.module.scss';
import { TypeButton } from '../../types/global';
export default function Blue({ data }) {
	return (
		<>
			{/* link react */}
			{Symbol(data.type).toString() === `Symbol(${TypeButton.link})` ? (
				<Link href={data.url}>
					<a className={styles.container} tabIndex='-1'>
						<div className={`button ${styles[data.color]} ${styles.button}`}>
							{data.icon && (
								<div className={`${styles.icon} button-icon`} id='button-icon'>
									{' '}
									<Image
										src={data.icon}
										alt={data.alt}
										width={17}
										height={19}
										layout='fixed'
									/>
								</div>
							)}
							{data.title}
						</div>
					</a>
				</Link>
			) : Symbol(data.type).toString() === `Symbol(${TypeButton.blank})` ? (
				<>
					{/* a target blank */}
					<a
						href={data.url}
						target='_blank'
						rel='noopener noreferrer'
						className={styles.container}
						tabIndex='-1'
					>
						<div className={`button ${styles[data.color]} ${styles.button}`}>
							{data.icon && (
								<div className={`${styles.icon} button-icon`} id='button-icon'>
									{' '}
									<Image
										src={data.icon}
										alt={data.alt}
										width={17}
										height={19}
										layout='fixed'
									/>
								</div>
							)}
							{data.title}
						</div>
					</a>
				</>
			) : (
				<>
					{/* a */}
					<a href={data.url} className={styles.container} tabIndex='-1'>
						<div className={`button ${styles[data.color]} ${styles.button}`}>
							{data.icon && (
								<div className={`${styles.icon} button-icon`} id='button-icon'>
									{' '}
									<Image
										src={data.icon}
										alt={data.alt}
										width={17}
										height={19}
										layout='fixed'
									/>
								</div>
							)}
							{data.title}
						</div>
					</a>
				</>
			)}
		</>
	);
}
