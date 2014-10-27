MyApp.physicians = function (params) {
	var viewModel = {
		categoryId: 	params.id,

		dataSource: new DevExpress.data.DataSource({
			load: function (loadOpts) {
				return providersSheet;
			},

			map: function (item) {
				return {
					id: 	item.id,
					name: 	item.fullnameandcredentials
				}
			}
		})
		
	};

	return viewModel;
}