MyApp.home = function (params) {
    var viewModel = {
		goToSorted: function() {
			MyApp.app.navigate("sorted");
		}
    };

    return viewModel;
};