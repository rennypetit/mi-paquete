import { Inputs } from '@components/form/types';

export const getLocations = async (): Promise<Object> => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_MI_PAQUETE}/getLocations` || '',
			{
				headers: {
					'session-tracker': process.env.NEXT_PUBLIC_SESSION_MI_PAQUETE || '',
					apikey: process.env.NEXT_PUBLIC_API_KEY_MI_PAQUETE || '',
					'Content-Type': 'application/json',
				},
			}
		);
		return await res.json();
	} catch (error) {
		// alert('Ocurrió un error, intente más tarde');
		console.error(error);
		return {};
	}
};

export const getSendingTracking = async (tracking: number): Promise<Object> => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_MI_PAQUETE}/getSendingTracking?mpCode=${tracking}` ||
				'',
			{
				headers: {
					'session-tracker': process.env.NEXT_PUBLIC_SESSION_MI_PAQUETE || '',
					apikey: process.env.NEXT_PUBLIC_API_KEY_MI_PAQUETE || '',
				},
			}
		);
		return await res.json();
	} catch (error) {
		alert('Ocurrió un error, intente más tarde');
		console.error(error);
		return {};
	}
};

export const postForm = async (data: Inputs): Promise<Object> => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_FORM_MI_PAQUETE}/users/createUserAC` || '',
			{
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'session-tracker':
						process.env.NEXT_PUBLIC_FORM_SESSION_KEY_MI_PAQUETE || '',
					'customer-key':
						process.env.NEXT_PUBLIC_FORM_SESSION_KEY_MI_PAQUETE || '',
					'Content-Type': 'application/json',
				},
			}
		);
		return await res.json();
	} catch (error) {
		alert('Ocurrió un error, intente más tarde');
		console.error(error);
		return {};
	}
};
