const newsletter = (dataSubmit) => {
	dataSubmit.name = 'N/A';
	dataSubmit.surname = 'N/A';
	dataSubmit.phone = 'N/A';
	dataSubmit.listId = '98';
	dataSubmit.fieldValues = [
		{
			field: '98', // Número de envíos realizados
			value: '1 a 30',
		},
	];
	// remove data
	const { check, ...body } = dataSubmit;
	return body;
};

export default newsletter;
