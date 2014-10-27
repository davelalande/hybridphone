MyApp.categories = function (params) {
	var viewModel = {
		// Prototype Data -- used for testing
		// categories: [
		// 	{ id: 1, 	name: 'Audiology' },
		// 	{ id: 2, 	name: 'Cardiology' },
		// 	{ id: 3, 	name: 'Family Practice' },d
		// 	{ id: 4, 	name: 'Internal Medicine' },
		// 	{ id: 5, 	name: 'Occupational Medicine' },
		// 	{ id: 6, 	name: 'Opthalmology' },
		// 	{ id: 7, 	name: 'Pain Management' },
		// 	{ id: 8, 	name: 'Pediatrics' },
		// 	{ id: 9, 	name: 'Plastic Surgery' },
		// 	{ id: 10, 	name: 'Podiatry' }
		// ],

		dataSource: new DevExpress.data.DataSource({
			load: function (loadOpts) {
				return categorySheet;
			},

			map: function (item) {
				return {
					id: 	item.id,
					name: 	item.name
				}
			}
		})
	};

	return viewModel;
};