<!DOCTYPE html>
<html>
    <script src="dygraph-combined.js"></script>
    <script src="jquery-1.12.1.min.js"></script>
    <div id="rpm" style="width:600px; height:300px;"></div>
    <body>
        <h2></h2>
        <p id="demo"></p>
        <script language='javascript' type="text/javascript">

//var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
//var myObj = JSON.parse(myJSON);
//document.getElementById("demo").innerHTML = myObj.name;
$(document).ready(function () {



    var myJSON = 0;
    var URL = '../rpm.json';
    var oReq = new XMLHttpRequest();
    var result = [];

    oReq.addEventListener("load", reqListener);
    oReq.open("GET", URL);
    oReq.send();


/*
    setInterval(function() { oReq.addEventListener("load", reqListener);

    oReq.open("GET", URL);
    oReq.send();
    },
        3000);
*/
    var data = [];

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
        //console.log(data);
        //console.log(time_stamp);
        //console.log(wind_speed);


        //result.push(myObj.results[0].series[0].values[i][j]);

    }

        //var xmin = 0;
        //var xmax = 0;
        var path = URL;
        var title = "RPM";


        var rpm = new Dygraph(document.getElementById("rpm"), data,
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




setInterval(function() { oReq.addEventListener("load", reqListener);oReq.open("GET", URL);oReq.send(); rpm.updateOptions( { 'file': data } ); },10000);
</script>

