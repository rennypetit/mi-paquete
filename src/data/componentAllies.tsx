import { TypeButton } from '@types/global';

export const allies = {
	description:
		'<p>Este servicio lo brindamos a través de algunas de nuestras transportadoras integradas con las cuales facilitamos el proceso de recaudo y la transferencia del dinero de tus ventas online. La transportadora recauda el valor que indiques en la plataforma y desde <strong><mark>Mi Paquete,</mark> </strong>nos encargamos de relizar la transferencia o desembolso en los cortes de pago.</p>',
	items: [
		{
			title: 'Servientrega',
			image: '/images/allies/servientrega.png',
			alt: 'logo servientrega',
			modal: {
				id: 'Servientrega',
				title: 'ENTREGAMOS TUS ENVÍOS CON SERVIENTREGA',
				description:
					'<p>Costo del servicio de recaudo: 4% del valor a recaudar, con un mínimo de $3.650 para envíos urbanos y nacionales.</p><p>Al imprimir la guía verifica que esta tenga el logo de Servientrega y que el valor a recaudar sea el correcto. Recaudo solo en efectivo en caso de envíos con pago contra entrega.</p> <p> En caso de que el Envío con Pago Contra Entrega no se logre concretar luego de 3 intentos, este se devuelve automáticamente a la dirección de origen. Esta devolución no tiene costo.</p>',
				image: '/images/allies/servientrega.png',
				alt: 'logo servientrega',
				orientation: 'transform',
				buttonOne: {
					color: 'buttonOrange',
					title: 'COTIZA TU ENVÍO',
					url: 'https://app.mipaquete.com/',
					type: TypeButton.blank,
				},
			},
		},
		{
			title: 'Envia',
			image: '/images/allies/envia.png',
			alt: 'logo envia',
			modal: {
				id: 'Envia',
				title: 'ENTREGAMOS TUS ENVÍOS CON ENVIA',
				description:
					'<p>Costo del servicio de recaudo: 4,3% del valor a recaudar, con un mínimo de $5.400 para envíos urbanos y nacionales.</p><p>Al imprimir la guía verifica que esta tenga el logo de ENVIA y que el valor a recaudar sea el correcto. Recaudo solo en efectivo.</p><p>En caso de que el Envío con Pago Contra Entrega no se logre concretar luego de 3 intentos de entrega, este se devuelve automáticamente a la dirección de origen. Esta devolución tiene un costo del 60% del valor del envío.</p>',
				image: '/images/allies/envia.png',
				alt: 'logo envia',
				orientation: 'transform',
				buttonOne: {
					color: 'buttonOrange',
					title: 'COTIZA TU ENVÍO',
					url: 'https://app.mipaquete.com/',
					type: TypeButton.blank,
				},
			},
		},
		{
			title: 'Coordinadora',
			image: '/images/allies/coordinadora.png',
			alt: 'logo coordinadora',
			modal: {
				id: 'Coordinadora',
				title: 'ENTREGAMOS TUS ENVÍOS CON COORDINADORA',
				description:
					'<p>Costo del servicio de recaudo: 4.3% del valor a recaudar, con un mínimo de $5.400 para envíos urbanos y $5.700 para envíos nacionales.</p><p>Incluye la opción de recaudo en Efectivo, Tarjeta Débito o Tarjeta Crédito (VISA, MasterCard y American Express) Nota: el pago con tarjeta es a través de código QR, que genera el mensajero desde su terminal electrónica al momento de la entrega.</p><p> Al imprimir la guía verifica que esta tenga el logo de Coordinadora y que el valor a recaudar sea el correcto. En caso de que el Envío con Pago Contra Entrega no se logre concretar, luego de 3 intentos de entrega este se debe devolver a la dirección de origen. El costo de esta devolución es el mismo costo del envío de ida (solo el flete, sin costos de recaudo)</p>',
				image: '/images/allies/coordinadora.png',
				alt: 'logo coordinadora',
				orientation: 'transform',
				buttonOne: {
					color: 'buttonOrange',
					title: 'COTIZA TU ENVÍO',
					url: 'https://app.mipaquete.com/',
					type: TypeButton.blank,
				},
			},
		},
		{
			title: 'TE',
			image: '/images/allies/tempoexpress.png',
			alt: 'logo te',
			modal: {
				id: 'TE',
				title: 'ENTREGAMOS TUS ENVÍOS CON TEMPO EXPRESS',
				description:
					'<p>Costo del servicio de recaudo: 4% del valor a recaudar, con un mínimo de $4.900 para envíos urbanos y nacionales.</p><p>Al imprimir la guía esta no saldrá con el logo de la transportadora sino con el logo de mi paquete.com. Verifica que el valor a recaudar sea el correcto.</p><p>En caso de que el Envío con Pago Contra Entrega no se logre concretar, luego de 3 intentos de entrega este se debe devolver a la dirección de origen. El costo de esta devolución es el mismo costo del envío de ida (solo el flete, sin costos de recaudo)</p>',
				image: '/images/allies/tempoexpress.png',
				alt: 'logo te',
				orientation: 'transform',
				buttonOne: {
					color: 'buttonOrange',
					title: 'COTIZA TU ENVÍO',
					url: 'https://app.mipaquete.com/',
					type: TypeButton.blank,
				},
			},
		},
		{
			title: 'TCC',
			image: '/images/allies/tcc.png',
			alt: 'logo tcc',
			modal: {
				id: 'TCC',
				title: 'ENTREGAMOS TUS ENVÍOS CON TCC',
				description: `<p>Costo del servicio de recaudo: 4.3% del valor a recaudar, con un mínimo de $5.200 para envíos urbanos y $5.500 para envíos nacionales.</p><p> Al imprimir la guía verifica que esta tenga el logo de TCC y que el valor a recaudar sea el correcto.</p><p> En caso de que el Envío con Pago Contra Entrega no se logre concretar, luego de 3 intentos de entrega este se debe devolver a la dirección de origen. Esta devolución no tiene costo.</p><p>Importante: Al momento de descargar la guía asegúrate de que se descarguen dos archivos (la relación del envío y el rótulo), si esto no ocurre verifica que tu computador tenga habilitada la opción de permitir pop up o ventanas emergentes, imprime los dos documentos. En caso de ser necesario Ingresa a la siguiente ruta y configura la habilitación de ventanas emergentes. chrome://settings/content/popups allí añades <a href='https://app.mipaquete.com/home' target='_blank' rel='noopener noreferrer'>https://app.mipaquete.com/home</a></p>`,
				image: '/images/allies/tcc.png',
				alt: 'logo tcc',
				orientation: 'transform',
				buttonOne: {
					color: 'buttonOrange',
					title: 'COTIZA TU ENVÍO',
					url: 'https://app.mipaquete.com/',
					type: TypeButton.blank,
				},
			},
		},
		{
			title: 'Entregalo',
			image: '/images/allies/entregalo.png',
			alt: 'logo entregalo',
		},
	],
	buttonOne: {
		title: 'CONOCE PASO A PASO CÓMO REALIZAR ENVÍOS CONTRA ENTREGA',
		url: 'https://app.mipaquete.com/',
		type: TypeButton.href,
		modal: {
			id: 'buttonOne',
			title: 'PASO A PASO:',
			description: `<p>Regístrate en <strong>mipaquete.com</strong>, en este paso te solicitaremos lo datos bancarios a donde haremos la transferencia de los recaudos. (La cuenta no necesariamente debe estar a tu nombre). <br /> Una vez estés cotizando el envío el sistema te preguntará si deseas el servicio de pago contra entrega, selecciona esta opción indicando el valor de tu venta, y si deseas o no, sumarle el costo del envío al valor a recaudar. Escribe los datos del destinatario y paga tu envío. </p><p>Una vez generes tu envío DEBES descargar la guía en nuestra plataforma (en el menú “Tus Envíos”) y entregar tu paquete con la guía respectiva a la transportadora. Recuerda que ella recoge en tu domicilio. Sugerencia: Realiza la solicitud del envío antes de las 10:30m para que la transportadora alcance a recoger el mismo día.</p>
				<p><strong>Fechas de transferencia o desembolso:</strong> Transferimos los recaudos los días 04, 14 y 24 de cada mes (o al día siguiente hábil).</p>
				<p><span>Transferencia de recaudos:</span></p>
				<p><strong>Envíos entregados y recaudados</strong> entre el 21 y el 30 o 31 del mes: Se pagan el día 04 (del mes siguiente)</p>
				<p><strong>Envíos entregados y recaudados</strong> entre el 01 y el 10 del mes: Se pagan el día 14</p>
				<p>* Para destinos especiales (poblaciones lejanas), el tiempo de pago puede ser superior.</p>
				<p>¿Sabías que hemos transferido más de 20.000 millones de pesos en recaudos a nuestros más de 3.000 clientes en todo el país?</p>
				`,
			buttonOne: {
				color: 'buttonOrange',
				title: 'COTIZA TU ENVÍO',
				url: 'https://app.mipaquete.com/',
				type: TypeButton.blank,
			},
		},
	},
	buttonTwo: {
		title: 'CONOCE LAS TARIFAS PARA TRANSFERENCIAS O DESEMBOLSOS',
		modal: {
			id: 'buttonTwo',
			title: 'TARIFAS PARA TRANSFERENCIAS DE LOS RECAUDOS',
			description: `<p>Ten presente que hacemos transferencias o desembolsos de los recaudos 3 veces al mes. Los 04, 14 y 24 de cada mes (o al día siguiente hábil). Dependiendo del Banco al que se realice la transferencia, esta puede, o no, tener un costo que se descuenta automáticamente del valor recaudado, así:</p>
				<ul>
					<li><strong>BANCOLOMBIA </strong>(Desembolso: $0)</li>
					<li><strong>DAVIPLATA </strong>(Desembolso: $7.400)</li>
					<li><strong>BANCO AV VILLAS </strong>(Desembolso: $7.400)</li>
					<li><strong>BANCO CAJA SOCIAL </strong>(Desembolso: $7.400)</li>
					<li><strong>BANCO DAVIVIENDA </strong>(Desembolso: $7.400)</li>
					<li><strong>BANCO DE OCCIDENTE </strong> (Desembolso: $7.400)</li>
					<li><strong>BANCO FINANDINA </strong>(Desembolso: $7.400)</li>
					<li><strong>BANCO GNB SUDAMERIS </strong>(Desembolso: $7.400)</li>
					<li><strong>BANCO MULTIBANK </strong>(Desembolso: $7.400)</li>
					<li><strong>BANCO POPULAR </strong>(Desembolso: $7.400)</li>
					<li><strong>BANCO SANTANDER </strong>(Desembolso: $7.400)</li>
					<li><strong>BANCOOMEVA </strong>(Desembolso: $7.400)</li>
					<li><strong>BBVA </strong>(Desembolso: $7.400)</li>
					<li><strong>CITIBANK </strong>(Desembolso: $7.400)</li>
					<li><strong>COLPATRIA </strong>(Desembolso: $7.400)</li>
					<li><strong>COLTEFINANCIERA </strong>(Desembolso: $7.400)</li>
					<li><strong>FALLABELLA </strong>(Desembolso: $7.400)</li>
					<li><strong>ITAU </strong>(Desembolso: $7.400)</li>
				</ul>
				`,
			buttonOne: {
				color: 'buttonBlue',
				title: 'COTIZA TUS ENVÍOS',
				url: 'https://app.mipaquete.com/',
				type: TypeButton.blank,
			},
		},
	},
	// description,buttonOne, buttonTwo: Only page: pago-contra entrega
};

export default allies;
