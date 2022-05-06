export interface Inputs {
	name: string;
	surname: string;
	email: string;
	phone: string;
	averageShipments?: string;
	city?: string;
	check?: boolean;
	listId: string;
	fieldValues?: Array<{
		field: string;
		value: string;
	}>;
}
