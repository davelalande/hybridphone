

// Variable declarations and purpose //
// --------------------------------- //
// defaultKey: 		the spreadsheet key provided from the spreadsheet provided by D. Lalande
// testKey: 		the spreadsheet key provided by D. McFarland for testing
// sheetData: 		variable used to store the returned TableTop models
// categorySheet: 	variable used to store the array of data returned from the 'categories' worksheet
// providersSheet: 	variable used to store the array of data returned from the 'providers' worksheet
var defaultKey 	= '1Aa5eaVV76XKbLfyFMZq-M4VMxrHLbM3YbCpav_ZsMvs',
	testKey		= '1XHtczAZrfV5jOi_fuDLy_29eAp7I1gjPWwhPMG5STkM',
	sheetData, 
	categorySheet, 
	providersSheet;

// This function initializes the TableTop library object and requests the worksheet
// data from the Google Spreadsheet API. 
// 
// It accepts a single argument, "key", that represents the key of the spreadsheet 
// you would like to retrieve data from.
function initialize (key) {
	Tabletop.init({ 
		key: 		key,
		callback: 	storeData,
	})
};

// This function is the callback used by the initialize function and stores the
// returned data from the TableTop initialization call. 
// 
// It accepts two arguments: "data", which is the data object returned by the AJAX
// request made to the Google Spreadsheet API, and "tabletop", which is the object
// that contains the reformatted JSON data from the spreadsheet that is stored in
// the tabletop variable as a TableTop model.
//
// If you would like to store additional data (from other worksheets), simply
// add another line under "providersSheet" to do so.
function storeData(data, tabletop) {

	// Some logging just for confirmation. These lines can be removed or
	// commented out if desired. I left them in because this app is a
	// prototype.
	console.log('Sheet data fetched!');
	console.log(data);

	sheetData 		= tabletop;

	// The string passed to the "sheets" method should be
	// the name of the worksheet you want to access.
	categorySheet 	= sheetData.sheets('Categories').all();
	providersSheet  = sheetData.sheets('Providers').all();
};

// The function call to set up and store the data for use in the application.
// 
// Pass another key to this function to change the spreadsheet, and resulting
// data, used by the app.
initialize(testKey);

