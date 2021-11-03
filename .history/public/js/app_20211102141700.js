.ajax({
	url: 'https://api.marketstack.com/v1/tickers/aapl/eod',
	data: {
	  access_key: '3c5551edf93625bedb2e3d2df1142d88'
	},
	dataType: 'json',
	success: function(apiResponse) {
	  if (Array.isArray(apiResponse['data'])) {
		apiResponse['data'].forEach(stockData => {
			  console.log(`Ticker ${stockData['symbol']}',
				  'has a day high of ${stockData['high']},
				  'on ${stockData['date']}`);
		});
	  }
	}
  });