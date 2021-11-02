fetch("https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote?symbols=AAPL%2CETH-USD", {
	"method": "GET",
	"headers": {
		'x-rapidapi-host': 'mboum-finance.p.rapidapi.com',
		'x-rapidapi-key': '9eea83f466msh30b3ced7b4f5f2ep18c940jsn8043641fb9c0'
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});