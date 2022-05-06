const enum unitMeasurement {
	Kg = 'Kg',
	Gr = 'Gr',
}
export interface Inputs {
	origin: string;
	destiny: string;
	height: number;
	width: number;
	length: number;
	weight: number;
	unitOfMeasurement: unitMeasurement;
	quantity: number;
	declaredValue: number;
}
