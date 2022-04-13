import Image from 'next/image';
import React from 'react';
import styles from './Form.module.scss';
const Form = ({ data, background }) => {
	return (
		<div className={`${styles.container} ${styles[background]}`}>
			<div className={styles.background}>
				<div className={styles.image}>
					<Image
						src={`/images/form/background-${background}.svg`}
						alt={'background'}
						layout='fill'
					/>
				</div>
				<div className={styles.backgroundContent}>
					<h4 className={styles.title}>
						{data.title} <strong>{data.titleStrong}</strong>
					</h4>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: data.description }}
					></div>
					<form className={styles.form}>
						<p className={styles.formTitle}>
							{data.titleForm} <span>{data.titleFormSpan}</span>
						</p>
						<p className={styles.formDescription}>{data.formDescription}</p>
						<div className={styles.formContent}>
							<div className={styles.row}>
								<label htmlFor='name'>
									Nombre completo
									<input type='text' id='name' className={styles.formInput} />
								</label>
							</div>
							<div className={styles.row}>
								<label htmlFor='email'>
									Correo electrónico
									<input type='text' id='email' className={styles.formInput} />
								</label>
							</div>
							<div className={styles.row}>
								<label htmlFor='phone'>
									Teléfono celular
									<div className={styles.containerIcon}>
										<div className={`${styles.icon} icon`} id='icon'>
											<Image
												src={'/images/icons/bandera.png'}
												alt='Bandera'
												width={24}
												height={23}
											/>
											<p>+57</p>
										</div>
										<input
											type='number'
											id='phone'
											className={`${styles.formInput} ${styles.formInputNumber}`}
										/>
									</div>
								</label>
							</div>
							<div className={styles.row}>
								<label htmlFor='envios'>
									¿Cuántos envíos realiza al mes?
									<select
										name='envios'
										id=''
										className={`${styles.formInput} ${styles.formInputSelect}`}
									>
										<option value='a'>a</option>
										<option value='a'>a</option>
										<option value='a'>a</option>
									</select>
								</label>
							</div>
						</div>
						<div className={styles.check}>
							<label>
								<input type='checkbox' id='check' />
								Acepto los{' '}
								<a href='http://' target='_blank' rel='noopener noreferrer'>
									Términos y condiciones.
								</a>
							</label>
						</div>
						<div className={styles.row}>
							<button className={`${styles.button} button`}>
								SOLICITA UNA ASESORÍA
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
