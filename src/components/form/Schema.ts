import * as yup from 'yup';

export const schema = yup
	.object({
		name: yup.string().required(),
		email: yup.string().email().required(),
		phone: yup.number().required().positive().integer().min(999999999),
		averageShipments: yup.string(),
		check: yup.boolean().required(),
		city: yup.string(),
	})
	.required();
