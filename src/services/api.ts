import { Inputs } from '@components/form/types';

export const getLocations = async (): Promise<Object> => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_URL_LOCATION}` || '', {
			headers: {
				'session-tracker':
					process.env.NEXT_PUBLIC_SESSION_TRACKER_LOCATION || '',
				apikey: process.env.NEXT_PUBLIC_API_KEY_LOCATION || '',
				'Content-Type': 'application/json',
			},
		});
		return await res.json();
	} catch (error) {
		alert('Ocurrió un error, intente más tarde');
		console.error(error);
		return {};
	}
};

export const getSendingTracking = async (tracking: number): Promise<Object> => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_TRACKING}?mpCode=${tracking}` || '',
			{
				headers: {
					'session-tracker':
						process.env.NEXT_PUBLIC_SESSION_TRACKER_TRACKING || '',
					apikey: process.env.NEXT_PUBLIC_API_KEY_TRACKING || '',
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

export const postForm = async (data: Inputs): Promise<Object> => {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_URL_FORM || '', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'session-tracker': process.env.NEXT_PUBLIC_SESSION_TRACKER_FORM || '',
				'customer-key': process.env.NEXT_PUBLIC_CUSTOMER_KEY_FORM || '',
				'Content-Type': 'application/json',
			},
		});
		return await res.json();
	} catch (error) {
		alert('Ocurrió un error, intente más tarde');
		console.error(error);
		return {};
	}
};
