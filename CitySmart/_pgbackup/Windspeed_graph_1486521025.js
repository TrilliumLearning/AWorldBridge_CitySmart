$(document).ready(function () {



    var myJSON = 0;
    var URL = 'windspeed.json';
    var oReq = new XMLHttpRequest();
    var result = [];
    var data = [];

    oReq.addEventListener("load", reqListener);
    oReq.open("GET", URL);
    oReq.send();

function reqListener () {

    myJSON = this.responseText;

    var myObj = JSON.parse(myJSON);

    var i = 0;
    var time_stamp = [];
    var wind_speed = [];
	data = [];
    
    for (i = 0; i < myObj.results[0].series[0].values.length ; i++) {
        time_stamp = (myObj.results[0].series[0].values[i][0]);
        wind_speed = (myObj.results[0].series[0].values[i][1]);
        data.push([new Date(time_stamp),wind_speed]);
    }
        
    var path = URL;
    var title = "Windspeed";


        var windSpeed = new Dygraph(document.getElementById("GRAPH"), data,
            {
                drawPoints: true,
                showRoller: true,
                title: title,
                labels: ['TimeStamp', 'Windspeed'],
                showRangeSelector: true,
                //rangeSelectorHeight: 100,
                //valueRange: [xmin, xmax],
                rangeSelectorPlotStrokeColor: 'black',
                rangeSelectorPlotFillColor: 'lightblue'
            });


		setInterval(function() { oReq.addEventListener("load", reqListener);oReq.open("GET", URL);oReq.send(); 			windSpeed.updateOptions( { 'file': data } ); },10000);

}



});