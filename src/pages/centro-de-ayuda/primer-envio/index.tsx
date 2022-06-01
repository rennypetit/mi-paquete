import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Banner from '@components/banner/BannerSubmit';
import Feature from '@components/feature';
import Ally from '@components/ally';
import Commercial from '@components/commercial';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	features,
	featuresTwo,
	commercial,
	metaTags,
} from '@data/primer-envio';

import styles from './PrimerEnvio.module.scss';

const primerEnvio: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<Banner data={banner} />
				</main>
				<div className='container page-primer-envio'>
					<div className={`${styles.margin} features`}>
						<Feature items={features} icon={true} />
					</div>
					<h2 className='containerTitle'>
						<span>Debes tener en cuenta:</span>
					</h2>
					<p className='containerDescription'>
						Al realizar la cotización te aparecerán las diferentes opciones de
						<strong>empresas de envíos en Colombia</strong> con su calificación
						y costo del servicio.
					</p>
				</div>
				<div
					className={`${styles.containerAllies} container-background container`}
				>
					<Ally title={false} />
					{/* section  */}
					<div className={styles.Features}>
						<div className={styles.items}>
							<ul className={styles.icon}>
								<li>
									Después de seleccionar la mejor opción, lee cuidadosamente las
									observaciones según la transportadora elegida y confirmar tu
									envío.
								</li>
								<li>
									La guía y la recolección se generarán automáticamente en el
									sistema.
								</li>
								<li>
									La <strong>transportadora de envíos</strong> que elijas,
									<strong>recogerá sin costo adicional tu paquete.</strong>{' '}
									Recuerda que también puedes dejar los envíos en la oficina de
									la transportadora que seleccionaste con los documentos
									necesarios.
								</li>
								<li>
									Cuando pasen por tu paquete, es necesario que hagas firmar la
									guía con el nombre legible de las personas que recogieron el
									producto, más el sello de la transportadora.
								</li>
							</ul>
							<div className={styles.textAbsolute}>
								<p>
									<span>IMPORTANTE: </span>
									Tú debes descargar la guía desde la plataforma, imprimirla y
									pegarla al paquete.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='container'>
					<h3 className='containerTitle'>Cotiza tu envío tradicional</h3>
					<div className={styles.video}>
						<div className='video'>
							<iframe
								layout='fixed'
								width='560'
								height='315'
								src='https://www.youtube.com/embed/G6WRE4tvPFI'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div>
					</div>
					<div
						className={`${styles.margin} ${styles.featureTwo} featuresTwoPrimerEnvio`}
					>
						<Feature items={featuresTwo} icon={true} />
					</div>
					<h4 className='containerTitle'>
						<span>Servicio de envíos con pago contra entrega</span>
					</h4>
					<p className='containerDescription'>
						Al registrarte, la plataforma te solicitará inscribir una cuenta
						bancaria, en la cual te enviaremos los desembolsos de los recaudos
						en las fechas específicas de corte.
					</p>
					<p className='containerDescription'>
						<strong>El desembolso lo realizamos cada 10 días</strong> y se puede
						descontar el envío del valor recaudado, con algunas de nuestras
						<strong>
							transportadoras de envíos aliadas. La consignación se transfiere a
							tu cuenta los días 4, 14 y 24 de cada mes,
						</strong>{' '}
						este pago es automático y se ejecuta al finalizar el día.
					</p>
					{/* section  */}
					<div className={styles.Features}>
						<div className={styles.items}>
							<ul className={styles.icon}>
								<li>
									El pago corresponde a los envíos entregados a tu cliente
									final, es decir, el “Destinatario” así:
								</li>
								<div className={styles.videoItems}>
									<div className='video'>
										<iframe
											layout='fixed'
											width='560'
											height='315'
											src='https://www.youtube.com/embed/1iTKTafsKZY'
											title='YouTube video player'
											frameNorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										></iframe>
									</div>
								</div>
								<li>
									Según la entidad bancaria se puede generar o no un cobro de
									desembolso, es importante aclarar que este cobro es por
									transferencia del total de recaudo, no es un cobro que se
									genere por cada envío.
									<br />
									El cobro de desembolso corresponde a:
								</li>
								<ul className={styles.subIcon}>
									<li>Bancolombia: $0</li>
									<li>NEQUI: $2.000</li>
									<li>Daviplata u otros bancos: $7.400</li>
								</ul>
							</ul>
							{/* section  */}
							<p className={styles.itemsSubTitle}>
								¿Cuál es la diferencia de envío con recaudo y sin recaudo?
							</p>
							<ul className={styles.icon}>
								<li>
									En un <strong>envío con recaudo</strong> tu cliente puede
									pagar al momento de recibir el paquete, producto más envío o
									solo producto.
								</li>
								<li>
									Un <strong>envío sin recaudo,</strong> es cuando el cliente te
									genera de manera anticipada el pago del producto más el envío.
									Para que puedas generar el despacho de tu paquete, es
									necesario que realices una recarga del saldo tipo "prepago" en
									nuestra plataforma, de allí se descontará el costo del envío y
									la transportadora le entregará el producto a tu destinatario
									sin generar cobro adicional.
								</li>
							</ul>

							{/* section  */}
							<p className={styles.itemsSubTitle}>
								¿Pagas una tarifa diferente con Mi Paquete?
							</p>
							<ul className={styles.icon}>
								<li>
									Cobramos la misma tarifa de las transportadoras.{' '}
									<strong>
										Las tarifas varían según la ruta, peso, volumen del paquete,
										valor asegurado y valor a recaudar que indiques,
									</strong>{' '}
									es por esto que se complica un poco manejar un cuadro de
									tarifas específico; sin embargo, al cotizar tu envío podrás
									comparar y elegir entre las diferentes empresas
									transportadoras de envíos la que mejor se adapte a tus
									necesidades.
								</li>
							</ul>

							{/* section  */}
							<p className={styles.itemsSubTitle}>
								¿Cómo funcionan nuestros recaudos?
							</p>
							<ul className={styles.icon}>
								<li>
									El porcentaje del recaudo varía según la transportadora, la
									cual se encuentra entre el 4% y 4.3% o tarifa mínima entre
									$4.900 y $5.700, estos costos se encuentran incluidos en la
									cotización de nuestra plataforma. La tarifa que te indica el
									sistema ya tiene incluido flete y porcentaje de recaudo,{' '}
									<strong>no necesitas pagar un valor adicional.</strong> <br />
									Podrás consultar la información sobre los recaudos liquidados
									a través de nuestro Centro de Novedades ingresando a:
									<a
										href='https://mipaquete.com/solucionesusuario/consulta_recaudos/'
										target='_blank'
										rel='noopener noreferrer'
									>
										https://mipaquete.com/solucionesusuario/consulta_recaudos/
									</a>
								</li>
							</ul>
							{/* section  */}
							<p className={styles.itemsSubTitle}>Indemnizaciones de envíos</p>
							<ul className={styles.icon}>
								<li>
									<strong>
										Indicar el valor declarado o valor de tu mercancía es
										esencial en caso de pérdida
									</strong>{' '}
									para que la transportadora lo pueda reconocer, así que
									recuerda que este aspecto hace parte del{' '}
									<strong>proceso de logística de envíos.</strong>
									Para iniciar un proceso en caso de pérdida, se debe soportar
									con el valor de factura de compra del producto, el cual
									certifica el valor del producto. Serán 15 días hábiles a
									partir del momento en el que se confirme el{' '}
									<strong>proceso de indemnización.</strong>
								</li>
							</ul>

							{/* section  */}
							<p className={styles.itemsSubTitle}>
								¿Dónde puedes gestionar inquietudes o inconvenientes?
							</p>
							<ul className={styles.icon}>
								<li>
									Puedes ingresar a nuestro{' '}
									<strong>Centro de Novedades,</strong> allí podrás reportar y
									gestionar cualquier inconveniente operacional sobre tus envíos
									o a través de nuestro chat vía WhatsApp, opción 4. En ningún
									momento es necesario que te contactes con la transportadora,
									ya que nosotros centralizamos la comunicación directa con
									ellos para una solución más rápida y efectiva.
								</li>
								<div className={styles.videoItems}>
									<div className='video'>
										<iframe
											layout='fixed'
											width='560'
											height='315'
											src='https://www.youtube.com/embed/Cbd_IchtWHE'
											title='YouTube video player'
											frameNorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										></iframe>
									</div>
								</div>
							</ul>
						</div>
					</div>
					<div className={styles.separator}></div>
					<div className={styles.commercial}>
						<Commercial data={commercial} />
					</div>
				</div>
				<Newsletter background={'primary'} />
				<Fixed />
			</Layout>
		</>
	);
};

export default primerEnvio;
