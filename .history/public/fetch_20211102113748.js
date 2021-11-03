const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
		"x-rapidapi-key": "9eea83f466msh30b3ced7b4f5f2ep18c940jsn8043641fb9c0"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});