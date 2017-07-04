$(document).ready(function () {



    var myJSON = 0;
    var URL = '../kilowatthours.json';
    var oReq = new XMLHttpRequest();
    var result = [];
	var data = [];
    
    
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", URL);
    oReq.send();

    setInterval(function() { 
        oReq.open("GET", URL);
        oReq.send();
        KilowattHours.updateOptions( { 'file': data } ); 
    },10000);
    
    

        var KilowattHours= new Dygraph(document.getElementById("kilowatt"), data,
            {
                drawPoints: true,
                showRoller: true,
                title: title,
                labels: ['TimeStamp', 'Kilowatt Hours'],
                showRangeSelector: true,
                rangeSelectorPlotStrokeColor: 'black',
                rangeSelectorPlotFillColor: 'lightblue'
            });


function reqListener () {
    
    myJSON = this.responseText;

    var myObj = JSON.parse(myJSON);

    var i = 0;
    var time_stamp = [];
    var kilowatt = [];
	data = [];
    
    for (i = 0; i < myObj.results[0].series[0].values.length ; i++) {
        time_stamp = (myObj.results[0].series[0].values[i][0]);
        kilowatt = (myObj.results[0].series[0].values[i][1]);
        data.push([new Date(time_stamp),kilowatt]);
   
    }

        var path = URL;
        var title = "Kilowatt Hours";



}

});

