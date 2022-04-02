import { useState, useEffect } from 'react';
// components
import NavbarDesktop from '@components/navbar/Desktop';
import NavbarMobile from '@components/navbar/Mobile';
import WidthContext from '@contexts/width';

export default function Layout({ children }) {
	useEffect(() => {
		// verificar el tamaño de la pantalla
		setWidthViewport(window.innerWidth);
	}, []);
	const [widthViewport, setWidthViewport] = useState(0);
	return (
		<>
			<header>
				{widthViewport > 1024 ? <NavbarDesktop /> : <NavbarMobile />}
			</header>
			<WidthContext.Provider
				value={{
					widthViewport,
				}}
			>
				{children}
			</WidthContext.Provider>
		</>
	);
}

// se utiliza 2 menu ya que en desktop y mobile son muy distintos
