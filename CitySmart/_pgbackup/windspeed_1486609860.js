
  $(document).ready(function () {    
$( "#kw_button" ).click(function() {




    var myJSON = 0;
    var URL = '/wwdev/gaugetest/WindData/kilowatthours.json';
    var oReq = new XMLHttpRequest();
    var result = [];
	var data = [];
    var title = "Kilowatt Hours";
    
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", URL);
    oReq.send();

    setInterval(function() { 
        oReq.open("GET", URL);
        oReq.send();
        KilowattHours.updateOptions( { 'file': data } ); 
    },10000);
    
    

        var KilowattHours= new Dygraph(document.getElementById("GRAPH"), data,
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
        



}

});

    
    
    
    
    
    
    $( "#ws_button" ).click(function() {




    var myJSON = 0;
    var URL = '/wwdev/gaugetest/WindData/windspeed.json';
    var oReq = new XMLHttpRequest();
    var result = [];
    var data = [];
    var title = "Windspeed";
    

    oReq.addEventListener("load", reqListener);
    oReq.open("GET", URL);
    oReq.send();
    
    setInterval(function() { 
        oReq.open("GET", URL);
        oReq.send();
        windSpeed.updateOptions( { 'file': data } ); 
    },10000);
    
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
    


}



});
      
    
    $( "#rpm_button" ).click(function() {
  



    var myJSON = 0;
    var URL = '/wwdev/gaugetest/WindData/rpm.json';
    var oReq = new XMLHttpRequest();
    var result = [];
	var data = [];
    var title = "RPM";
    
    
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", URL);
    oReq.send();

    setInterval(function() { 
        oReq.open("GET", URL);
        oReq.send();
        rpm.updateOptions( { 'file': data } ); 
    },10000);
    
     var rpm = new Dygraph(document.getElementById("GRAPH"), data,
            {
                drawPoints: true,
                showRoller: true,
                title: title,
                labels: ['TimeStamp', 'RPM'],
                showRangeSelector: true,
                rangeSelectorPlotStrokeColor: 'black',
                rangeSelectorPlotFillColor: 'lightblue'
            });

    
function reqListener () {

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
      

}


    
});
   
        
        
        





//



    $( "#com_button" ).click(function() {



    $(document).ready(function () {



        var myJSON = 0;
        var URL = '../WindData/rpm.json';
        var oReq = new XMLHttpRequest();
        var result = [];

        oReq.addEventListener("load", reqListener);
        oReq.open("GET", URL);
        oReq.send();

//

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


            var rpm = new Dygraph(document.getElementById("GRAPH3"), data,
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


        }})});
/*
    $(document).ready(function () {



        var myJSON = 0;
        var URL = '../WindData/kilowatthours.json';
        var oReq = new XMLHttpRequest();
        var result = [];

        oReq.addEventListener("load", reqListener);
        oReq.open("GET", URL);
        oReq.send();

//

        var data = [];

        function reqListener () {
            //console.log(this.responseText);
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
                //console.log(data);
                //console.log(time_stamp);
                //console.log(wind_speed);


                //result.push(myObj.results[0].series[0].values[i][j]);

            }

            //var xmin = 0;
            //var xmax = 0;
            var path = URL;
            var title = "Kilowatt Hours";


            var KilowattHours= new Dygraph(document.getElementById("GRAPH1"), data,
                {
                    drawPoints: true,
                    showRoller: true,
                    title: title,
                    labels: ['TimeStamp', 'Kilowatt Hours'],
                    showRangeSelector: true,
                    //rangeSelectorHeight: 100,
                    //valueRange: [xmin, xmax],
                    rangeSelectorPlotStrokeColor: 'black',
                    rangeSelectorPlotFillColor: 'lightblue'
                });




            setInterval(function() { oReq.addEventListener("load", reqListener);oReq.open("GET", URL);oReq.send(); KilowattHours.updateOptions( { 'file': data } ); },10000);


        }});
    $(document).ready(function () {



        var myJSON = 0;
        var URL = '../WindData/windspeed.json';
        var oReq = new XMLHttpRequest();
        var result = [];

        oReq.addEventListener("load", reqListener);
        oReq.open("GET", URL);
        oReq.send();

//

        var data = [];

        function reqListener () {
            //console.log(this.responseText);
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
                //console.log(data);
                //console.log(time_stamp);
                //console.log(wind_speed);


                //result.push(myObj.results[0].series[0].values[i][j]);

            }

            //var xmin = 0;
            //var xmax = 0;
            var path = URL;
            var title = "Windspeed";


            var windSpeed = new Dygraph(document.getElementById("GRAPH2"), data,
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




            setInterval(function() { oReq.addEventListener("load", reqListener);oReq.open("GET", URL);oReq.send(); windSpeed.updateOptions( { 'file': data } ); },10000);


        }});

//

*/
    });
        
        
        
        
        
    
  



/*$( "#kw_button" ).click(function() {
  $("#GRAPH").load("Killowatt_graph.js");
});
    
    $( "#ws_button" ).click(function() {
  $("#GRAPH").load("Windspeed_graph.js");
});
    
    $( "#rpm_button" ).click(function() {
  $("#GRAPH").load("RPM_graph.js");
});
    
    $( "#com_button" ).click(function() {
  $("#GRAPH").load("Combined_graph.js");
});
*/