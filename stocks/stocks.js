var stock = "uber_us_d.csv";
var sp500 = "spx_d.csv";
var period = 3;
var lookback = 200;
var stock_data;
var sp500_data;
var labels;
var chart_length;
const showAllBuys = true;

function init() {
	console.log("loaded");

	// const req = new XMLHttpRequest();
	// req.addEventListener("load", make_charts);
	// req.open("GET", stock);
	// req.send();

	Promise.all([
		fetch(stock),
		fetch(sp500)
	])
	.then(responses => {
		return Promise.all(responses.map(response => {
			return response.text();
		}));
	})
	.then(make_charts)
	.catch(error => {
		console.log(error);
	});

	// let sel = document.querySelector("#chart_length")
	// sel.addEventListener("change", chart)
}

function parseCSV(str) {
    const arr = [];
    let quote = false;  // 'true' means we're inside a quoted field

    // Iterate over each character, keep track of current row and column (of the returned array)
    for (let row = 0, col = 0, c = 0; c < str.length; c++) {
        let cc = str[c], nc = str[c+1];        // Current character, next character
        arr[row] = arr[row] || [];             // Create a new row if necessary
        arr[row][col] = arr[row][col] || '';   // Create a new column (start with empty string) if necessary

        // If the current character is a quotation mark, and we're inside a
        // quoted field, and the next character is also a quotation mark,
        // add a quotation mark to the current column and skip the next character
        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }

        // If it's just one quotation mark, begin/end quoted field
        if (cc == '"') { quote = !quote; continue; }

        // If it's a comma and we're not in a quoted field, move on to the next column
        if (cc == ',' && !quote) { ++col; continue; }

        // If it's a newline (CRLF) and we're not in a quoted field, skip the next character
        // and move on to the next row and move to column 0 of that new row
        if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }

        // If it's a newline (LF or CR) and we're not in a quoted field,
        // move on to the next row and move to column 0 of that new row
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }
        if (cc == '\r' && !quote) { ++row; col = 0; continue; }

        // Otherwise, append the current character to the current column
        arr[row][col] += cc;
    }
    return arr;
}

function parseCSVtoObjects(csvString, /* optional */ columnNames) {
    var csvRows = parseCSV(csvString);

    var firstDataRow = 0;
    if (!columnNames) {
        columnNames = csvRows[0];
        firstDataRow = 1;
    }

    var result = [];
    for (var i = firstDataRow, n = csvRows.length; i < n; i++) {
        var rowObject = {};
        var row = csvRows[i];
        for (var j = 0, m = Math.min(row.length, columnNames.length); j < m; j++) {
            var columnName = columnNames[j];
            var columnValue = row[j];
            rowObject[columnName] = columnValue;
        }
        result.push(rowObject);
    }
    return result;
}


function make_charts(response_data){
	// console.log(response_data)
	stock_data = stock_data || parseCSV(response_data[0])
	sp500_data = sp500_data || parseCSV(response_data[1])
	labels = stock_data.shift() // remove labels

	// period = document.getElementById('chart_length').value;
	chart_length = 252 * period; // trading days in a year

	let buys = chart_buys()
	chart_slope_buy_sell()
	chart_compare(buys)
}

function chart_compare(buys) {
	var compare_chart;
	// var lookback = 200;
	// console.log(parseCSV(this.responseText))
	let days_offset = stock_data.length - chart_length
	// stock_data = stock_data.slice(-chart_length);
	// console.log({stock_data})
	let close_index = labels.indexOf("Close")
	let date_index = labels.indexOf("Date")
	// console.log({close_index})
	// console.log({date_index})
	// let labels = stock_data[0];
	var stock_dates = [];
	var dips_value = [];
	var monthly_value = [];
	var sp500_value = [];
	var front_value = [];
	let stock_last200 = stock_data.slice(-chart_length);
	let sp500_last200 = sp500_data.slice(-chart_length);

	const stock_buy_per_point = 200;
	const budget = buys.length * stock_buy_per_point
	var portfolio = {
		dips: [],
		monthly: [],
		sp500: budget / sp500_last200[0][close_index],
		front: budget / stock_last200[0][close_index]
	}

	// console.log({buys})

	// let stock_buy_per_point = budget / buys.length
	let monthly_buy_amount = budget / (period * 12)
	// console.log({stock_buy_per_point})
	stock_last200.forEach((day, index) => {
		stock_dates.push(day[date_index])

		// buy the dips
		bought_dip = false;
		buys.forEach(buy => {
			if (buy.includes(day[date_index])) {
				// console.log("buy day", day[date_index])
				portfolio.dips.push(stock_buy_per_point / day[close_index])

			}
			// if(buy.includes(day[date_index]) && days_since_dip_buy < dip_rest_period) {
			// 	console.log("dont buy, too soon", "days_since_dip_buy", days_since_dip_buy, "dip_rest_period", dip_rest_period)
			// }
		})

		// buy monthly
		if (day[date_index].split("-")[2] == "01") {
			// console.log("monthly buy", day[date_index])
			portfolio.monthly.push(monthly_buy_amount / day[close_index])
		}

		// calculate portfolios
		const total_dip_shares = portfolio.dips.reduce(
			(accumulator, current_value) => accumulator + current_value,
			0,
		);
		const total_monthly_shares = portfolio.monthly.reduce(
			(accumulator, current_value) => accumulator + current_value,
			0,
		);

		front_value.push(stock_last200[index][close_index] * portfolio.front)
		sp500_value.push(sp500_last200[index][close_index] * portfolio.sp500)
		dips_value.push(stock_last200[index][close_index] * total_dip_shares)
		monthly_value.push(stock_last200[index][close_index] * total_monthly_shares)
	})
	var options = {};
	
	const config = {
		type: 'line',
		data: {
			labels: stock_dates,
			datasets: [
				{
					label: stock.split("_")[0] + " dips only",
					data: dips_value,
					fill: false,
					borderColor: 'rgb(89,190,192)',
					borderWidth: 1.5,
					tension: 0.1,
					pointStyle: false
				},	
				{
					label: `${stock.split("_")[0]} $${monthly_buy_amount.toFixed(2)} monthly for ${period * 12} months`,
					data: monthly_value,
					fill: false,
					borderColor: 'rgb(0, 30, 192)',
					borderWidth: 1.5,
					tension: 0.1,
					pointStyle: false
				},	
				{
					label: `${stock.split("_")[0]} all at beginning`,
					data: front_value,
					fill: false,
					borderColor: 'rgb(255, 165, 0)',
					borderWidth: 1.5,
					tension: 0.1,
					pointStyle: false
				},			
				{
					label: 'S&P 500 all at beginning',
					data: sp500_value,
					fill: false,
					borderColor: 'rgb(120, 40, 92)',
					borderWidth: 1.5,
					tension: 0.1,
					pointStyle: false
				}
			]
		},
		options: {
			plugins: {
				title: {
					display: true,
					text: `Total Value: Different Strategies Using Only $${budget}`,
				}
			}
		}
	};

	const ctx = document.getElementById('compare_chart');

	compare_chart = new Chart(ctx, config);
}

function chart_buys() {
	var stock_chart;
	
	// var lookback = 1;
	// console.log(parseCSV(this.responseText))
	let days_offset = stock_data.length - chart_length
	// stock_data = stock_data.slice(-chart_length);
	console.log({stock_data})
	let close_index = labels.indexOf("Close")
	let date_index = labels.indexOf("Date")
	console.log({close_index})
	console.log({date_index})
	// let labels = stock_data[0];
	var stock_dates = [];
	var stock_closes = [];
	var stock_lookback_avgs = [];
	let last200 = stock_data.slice(-chart_length);
	// let stock_data = stock_data;
	var total = 0;

	function check_against_avg(arr, index, lookback_window) {
		if (index <= 1 || arr[index] == undefined) return {avg: 0, did_beat_avg: false}
		let avg_window = arr.slice(index - lookback_window, index)
		var total = 0;
		avg_window.forEach(day => {
			total += parseInt(day[close_index]) || 0
		})
		let avg = total / lookback_window
		let today = parseInt(arr[index][close_index]);
		let yesterday = parseInt(arr[index-1][close_index]);
		let did_beat_avg = today < avg && yesterday > avg;

		// let did_beat = parseInt(arr[index][close_index]) < avg && parseInt(arr[index - 1][close_index]) > avg
		// console.log("dba", arr, index, win, avg, parseInt(arr[index][close_index]), parseInt(arr[index - 1][close_index]), did_beat)
		return {avg, did_beat_avg}
	}

	const options = { 
		plugins: { 
			annotation: { annotations: {} },
			title: {
				display: true,
				text: 'Identifying Dips',
			}
		},
		onClick: (e) => {

            const canvas_position = Chart.helpers.getRelativePosition(e, stock_chart);

            // Substitute the appropriate scale IDs
            const stock_dataX = stock_chart.scales.x.getValueForPixel(canvas_position.x);
            const stock_dataY = stock_chart.scales.y.getValueForPixel(canvas_position.y);
            console.log(stock_data[days_offset + stock_dataX][date_index], 
            	"close", parseInt(stock_data[days_offset + stock_dataX][close_index]), 
            	"avg", (check_against_avg(stock_data, days_offset + stock_dataX, lookback)).avg);
        }

	};

	var buy_points = [];
	var days_since_dip_buy = 0;
	var dip_rest_period = 14;
	var bought_dip = false;
	last200.forEach((day, index) => {
		// console.log(day[date_index], day[close_index])
		// if(check_against_avg(stock_data, index, lookback)) {
		let check_buy_point = check_against_avg(stock_data, days_offset + index, lookback)
		bought_dip = false;
		if(check_buy_point.did_beat_avg && days_since_dip_buy > dip_rest_period) {
			console.log("did beat avg", day[date_index], index)
			buy_points.push(day)
			options.plugins.annotation.annotations[day[date_index]] = {
	          type: 'point',
	          xValue: index,
	          yValue: day[close_index],
	          backgroundColor: 'rgba(0, 212, 20, 0.5)',
	          borderWidth: 0,
	        }
			days_since_dip_buy = 0;
			bought_dip = true;
		}
		if (!bought_dip) {
			days_since_dip_buy++;
		}

		stock_lookback_avgs.push(check_buy_point.avg)
		stock_dates.push(day[date_index])
		stock_closes.push(day[close_index])
	})

	
	const config = {
		type: 'line',
		data: {
			labels: stock_dates,
			datasets: [
				{
					label: stock.split("_")[0],
					data: stock_closes,
					fill: false,
					borderColor: 'rgb(90,90,120)',
					borderWidth: 1.5,
					tension: 0.1,
					pointStyle: false
				},				
				{
					label: `${lookback} Day Avg`,
					data: stock_lookback_avgs,
					fill: false,
					borderColor: 'rgb(220, 220, 0)',
					borderWidth: 1.5,
					tension: 0.1,
					pointStyle: false
				}
			]
		},
		options
	};

	const ctx = document.getElementById('stock_chart');

	stock_chart = new Chart(ctx, config);

	return buy_points
}

function chart_slope_buy_sell() {
	var stock_chart;
	
	// var lookback = 1;
	let days_offset = stock_data.length - chart_length
	let close_index = labels.indexOf("Close")
	let date_index = labels.indexOf("Date")
	var stock_dates = [];
	var stock_closes = [];
	var stock_lookback_avgs = [];
	let last200 = stock_data.slice(-chart_length);
	var total = 0;

	function check_against_avg(arr, index, lookback_window) {
		if (index <= 1 || arr[index] == undefined) return {avg: 0, did_beat_avg: false}
		let avg_window = arr.slice(index - lookback_window, index)
		var total = 0;
		avg_window.forEach(day => {
			total += parseInt(day[close_index]) || 0
		})
		let avg = total / lookback_window
		let today = parseInt(arr[index][close_index]);
		let yesterday = parseInt(arr[index-1][close_index]);
		let did_beat_avg = today < avg && yesterday > avg;

		return {avg, did_beat_avg}
	}

	const options = { 
		plugins: { 
			annotation: { 
				drawTime: 'afterDatasetsDraw',
				annotations: {} 
			},
			title: {
				display: true,
				text: 'Identifying Dips with Slope Consideration',
			}
		},
		onClick: (e) => {

            const canvas_position = Chart.helpers.getRelativePosition(e, stock_chart);

            // Substitute the appropriate scale IDs
            const stock_dataX = stock_chart.scales.x.getValueForPixel(canvas_position.x);
            const stock_dataY = stock_chart.scales.y.getValueForPixel(canvas_position.y);
            console.log(stock_data[days_offset + stock_dataX][date_index], 
            	"close", parseInt(stock_data[days_offset + stock_dataX][close_index]), 
            	"avg", (check_against_avg(stock_data, days_offset + stock_dataX, lookback)).avg);
        }

	};

	var buy_points = [];
	var sell_points = [];
	var days_since_dip_buy = 0;
	var days_since_dip_sell = 0;
	var dip_buy_rest_period = 14;
	var dip_sell_rest_period = 14;
	var bought_dip = false;
	var sold_dip = false;
	var last_action;
	var prev_slope_negative = false;
	last200.forEach((day, index) => {
		// console.log(day[date_index], day[close_index])
		// if(check_against_avg(stock_data, index, lookback)) {
		let check_buy_point = check_against_avg(stock_data, days_offset + index, lookback)
		let is_slope_negative = stock_lookback_avgs[stock_lookback_avgs.length - 5] - check_buy_point.avg > 0
		if (is_slope_negative) {
			// options.plugins.annotation.annotations[day[date_index]] = {
			// 	type: 'line',
			// 	xMin: index - 0.5,
			// 	xMax: index + 0.5,
			// 	yMin: 0,
			// 	yMax: 160,
			// 	adjustScaleRange: true,
			// 	backgroundColor: 'rgba(255, 32, 0, 0.2)',
			// 	borderWidth: 0,
			// }
			options.plugins.annotation.annotations[day[date_index]] = {
				type: 'line',
			    scaleID: 'x',
			    // scaleID: 'x-axis-0',
			    value: index,
			    borderColor: 'rgba(255, 32, 0, 0.05)',
			    borderWidth: 2,
			}
		}
		console.log("is_slope_negative", is_slope_negative)

		bought_dip = false;
		sold_dip = false;

		if(
			days_since_dip_buy > dip_buy_rest_period
			&& days_since_dip_sell > dip_sell_rest_period
		) {
			if (check_buy_point.did_beat_avg) {
				console.log("did beat avg", day[date_index], index)
				if(!is_slope_negative){
					// on the upswing
					buy_points.push(day)
					options.plugins.annotation.annotations[day[date_index]] = {
			          type: 'point',
			          xValue: index,
			          yValue: day[close_index],
			          backgroundColor: 'rgba(0, 212, 20, 0.5)',
			          borderWidth: 0,
			        }
					days_since_dip_buy = 0;
					bought_dip = true;
					last_action = "buy"
				}
			} else {
				// didnt dip below avg but we can check for change in slope
				if (!is_slope_negative && prev_slope_negative) {
					buy_points.push(day)
					options.plugins.annotation.annotations[day[date_index]] = {
			          type: 'point',
			          xValue: index,
			          yValue: day[close_index],
			          backgroundColor: 'rgba(0, 100, 250, 0.5)',
			          borderWidth: 0,
			        }
			        days_since_dip_buy = 0;
					bought_dip = true;
					last_action = "buy"
				} else if(last_action != "sell" && is_slope_negative && prev_slope_negative){
					// downswing sell
					sell_points.push(day)
					options.plugins.annotation.annotations[day[date_index]] = {
			          type: 'point',
			          xValue: index,
			          yValue: day[close_index],
			          backgroundColor: 'rgba(255, 32, 0, 0.5)',
			          borderWidth: 0,
			        }
					days_since_dip_sell = 0;
					sold_dip = true;
					last_action = "sell"
				}
			}
		}

		prev_slope_negative = is_slope_negative;

		if (!bought_dip) {
			days_since_dip_buy++;
		}
		if (!sold_dip) {
			days_since_dip_sell++;
		}

		stock_lookback_avgs.push(check_buy_point.avg)
		stock_dates.push(day[date_index])
		stock_closes.push(day[close_index])
	})

	
	const config = {
		type: 'line',
		data: {
			labels: stock_dates,
			datasets: [
				{
					label: stock.split("_")[0],
					data: stock_closes,
					fill: false,
					borderColor: 'rgb(90,90,90)',
					borderWidth: 1.5,
					tension: 0.1,
					pointStyle: false
				},				
				{
					label: `${lookback} Day Avg`,
					data: stock_lookback_avgs,
					fill: false,
					borderColor: 'rgb(220, 220, 0)',
					borderWidth: 1.5,
					tension: 0.1,
					pointStyle: false
				}
			]
		},
		options
	};

	const ctx = document.getElementById('slope_chart');

	stock_chart = new Chart(ctx, config);

	return buy_points
}

function toConsole() {
	console.log(this.responseText);
	// console.log(parseCSV(this.responseText));
	// console.log((parseCSVtoObjects(this.responseText)).slice(-200));
	// var lookback = 200;
	let last200 = (parseCSVtoObjects(this.responseText)).slice(-lookback);
	var total = 0;
	last200.forEach(day => {
		// console.log(day);
		total += parseInt(day["Close"]);
	})
	let last_close = parseInt((last200.slice(-1))[0]["Close"]);
	let avg_200 = total / lookback;

	console.log("stock", stock.split("_")[0]);
	console.log("avg_200", avg_200);
	console.log("last_close", last_close);
	console.log("last_close < avg_200?", last_close < avg_200);
}
init();


