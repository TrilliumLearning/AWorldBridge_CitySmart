$(document).ready(function () {



    var myJSON = 0;
    var URL = '../rpm.json';
    var oReq = new XMLHttpRequest();
    var result = [];
	var data = [];
    
    
    
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", URL);
    oReq.send();

    setInterval(function() { 
        oReq.open("GET", URL);
        oReq.send();
        rpm.updateOptions( { 'file': data } ); 
    },10000);
    
     var rpm = new Dygraph(document.getElementById("GRAPH")s, data,
            {
                drawPoints: true,
                showRoller: true,
                title: title,
                labels: ['TimeStamp', 'RPM'],
                showRangeSelector: true,
                //rangeSelectorHeight: 100,
                //valueRange: [xmin, xmax],
                rangeSelectorPlotStrokeColor: 'black',
                rangeSelectorPlotFillColor: 'lightblue'
            });

    
function reqListener () {
    //console.log(this.responseText);
    myJSON = this.responseText;

    var myObj = JSON.parse(myJSON);

    var i = 0;
    var time_stamp = [];
    var rpm = [];
	data = [];

    for (i = 0; i < myObj.results[0].series[0].values.length ; i++)
    {
        time_stamp = (myObj.results[0].series[0].values[i][0]);
        rpm = (myObj.results[0].series[0].values[i][1]);
        data.push([new Date(time_stamp),rpm]);

    }

        var path = URL;
        var title = "RPM";

}


    
});