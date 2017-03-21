/**
 * Created by Daniel on 2/17/2017.
 */
$(document).ready(function (){

//$(document.getElementById("GRAPH1","GRAPH2","GRAPH3")).toggle();
//$(document.getElementById("GRAPH")).toggle();
//document.getElementById("GRAPH").style.visibility='visible';
//document.getElementById("GRAPH").style.visibility='hidden'
//$(document.getElementById("GRAPH")).toggle();
//$(document.getElementById("GRAPH1", "GRAPH2", "GRAPH3")).toggle();

    $("#kw_button").click(function () {




            var myJSON = 0;
            var URL = '/wwdev/gaugetest/WindData/kilowatthours.json';
            var oReq = new XMLHttpRequest();
            var result = [];
            var data = [];
            var title = "Kilowatt Hours";

            oReq.addEventListener("load", reqListener);
            oReq.open("GET", URL);
            oReq.send();

            setInterval(function () {
                oReq.open("GET", URL);
                oReq.send();
                KilowattHours.updateOptions({'file': data});
            }, 10000);


            KilowattHours = new Dygraph(document.getElementById("GRAPH"), data,
                {
                    drawPoints: true,
                    showRoller: true,
                    title: title,
                    labels: ['TimeStamp', 'Kilowatt Hours'],
                    showRangeSelector: true,
                    rangeSelectorPlotStrokeColor: 'black',
                    rangeSelectorPlotFillColor: 'lightblue'
                });


            function reqListener() {

                myJSON = this.responseText;

                var myObj = JSON.parse(myJSON);

                var i = 0;
                var time_stamp = [];
                var kilowatt = [];
                data = [];

                for (i = 0; i < myObj.results[0].series[0].values.length; i++) {
                    time_stamp = (myObj.results[0].series[0].values[i][0]);
                    kilowatt = (myObj.results[0].series[0].values[i][1]);
                    data.push([new Date(time_stamp), kilowatt]);

                }

                var path = URL;


            }

        }

    );
    $("#kw_button").click(function () {
        //
        var query = $('#GRAPH');
        var query1 = $('#GRAPH1');
        var query2 = $('#GRAPH2');
        var query3 = $('#GRAPH3');

        var isVisible = query.is(':visible');
        var isVisible1 = query1.is(':visible');
        var isVisible2 = query2.is(':visible');
        var isVisible3 = query3.is(':visible');


        if (isVisible === true) {}
        else {query.show()}

        if (isVisible1 === true) {query1.hide()}
        else {}

        if (isVisible2 === true) {query2.hide()}
        else {}

        if (isVisible3 === true) {query3.hide()}
        else {}

        //

    });
//

    $("#ws_button").click(function () {



            var myJSON = 0;
            var URL = '/wwdev/gaugetest/WindData/windspeed.json';
            var oReq = new XMLHttpRequest();
            var result = [];
            var data = [];
            var title = "Windspeed";


            oReq.addEventListener("load", reqListener);
            oReq.open("GET", URL);
            oReq.send();

            setInterval(function () {
                oReq.open("GET", URL);
                oReq.send();
                windSpeed.updateOptions({'file': data});
            }, 10000);

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

            function reqListener() {

                myJSON = this.responseText;

                var myObj = JSON.parse(myJSON);

                var i = 0;
                var time_stamp = [];
                var wind_speed = [];
                data = [];

                for (i = 0; i < myObj.results[0].series[0].values.length; i++) {
                    time_stamp = (myObj.results[0].series[0].values[i][0]);
                    wind_speed = (myObj.results[0].series[0].values[i][1]);
                    data.push([new Date(time_stamp), wind_speed]);
                }

                var path = URL;


            }


        }

    );
    $("#ws_button").click(function () {
        //
        var query = $('#GRAPH');
        var query1 = $('#GRAPH1');
        var query2 = $('#GRAPH2');
        var query3 = $('#GRAPH3');

        var isVisible = query.is(':visible');
        var isVisible1 = query1.is(':visible');
        var isVisible2 = query2.is(':visible');
        var isVisible3 = query3.is(':visible');


        if (isVisible === true) {}
        else {query.show()}

        if (isVisible1 === true) {query1.hide()}
        else {}

        if (isVisible2 === true) {query2.hide()}
        else {}

        if (isVisible3 === true) {query3.hide()}
        else {}

        //

    });
//

    $("#rpm_button").click(function () {




            var myJSON = 0;
            var URL = '/wwdev/gaugetest/WindData/rpm.json';
            var oReq = new XMLHttpRequest();
            var result = [];
            var data = [];
            var title = "RPM";


            oReq.addEventListener("load", reqListener);
            oReq.open("GET", URL);
            oReq.send();

            setInterval(function () {
                oReq.open("GET", URL);
                oReq.send();
                rpm.updateOptions({'file': data});
            }, 10000);

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


            function reqListener() {

                myJSON = this.responseText;

                var myObj = JSON.parse(myJSON);

                var i = 0;
                var time_stamp = [];
                var rpm = [];
                data = [];

                for (i = 0; i < myObj.results[0].series[0].values.length; i++) {
                    time_stamp = (myObj.results[0].series[0].values[i][0]);
                    rpm = (myObj.results[0].series[0].values[i][1]);
                    data.push([new Date(time_stamp), rpm]);

                }

                var path = URL;


            }
        }

    );
    $("#rpm_button").click(function () {
        //
        var query = $('#GRAPH');
        var query1 = $('#GRAPH1');
        var query2 = $('#GRAPH2');
        var query3 = $('#GRAPH3');

        var isVisible = query.is(':visible');
        var isVisible1 = query1.is(':visible');
        var isVisible2 = query2.is(':visible');
        var isVisible3 = query3.is(':visible');


        if (isVisible === true) {}
        else {query.show()}

        if (isVisible1 === true) {query1.hide()}
        else {}

        if (isVisible2 === true) {query2.hide()}
        else {}

        if (isVisible3 === true) {query3.hide()}
        else {}

        //

    });

//

    $("#com_button").click(function () {




            function kilowatt2() {

                //$(document.getElementById("GRAPH")).hide(),
                //$(document.getElementById("GRAPH1")).show(),


                var myJSON = 0;
                var URL = '/wwdev/gaugetest/WindData/kilowatthours.json';
                var oReq = new XMLHttpRequest();
                var result = [];
                var data = [];
                var title = "Kilowatt Hours";

                oReq.addEventListener("load", reqListener);
                oReq.open("GET", URL);
                oReq.send();

                setInterval(function () {
                    oReq.open("GET", URL);
                    oReq.send();
                    KilowattHours.updateOptions({'file': data});
                }, 10000);


                var KilowattHours = new Dygraph(document.getElementById("GRAPH1"), data,
                    {
                        drawPoints: true,
                        showRoller: true,
                        title: title,
                        labels: ['TimeStamp', 'Kilowatt Hours'],
                        showRangeSelector: true,
                        rangeSelectorPlotStrokeColor: 'black',
                        rangeSelectorPlotFillColor: 'lightblue'
                    });


                function reqListener() {

                    myJSON = this.responseText;

                    var myObj = JSON.parse(myJSON);

                    var i = 0;
                    var time_stamp = [];
                    var kilowatt = [];
                    data = [];

                    for (i = 0; i < myObj.results[0].series[0].values.length; i++) {
                        time_stamp = (myObj.results[0].series[0].values[i][0]);
                        kilowatt = (myObj.results[0].series[0].values[i][1]);
                        data.push([new Date(time_stamp), kilowatt]);

                    }

                    var path = URL;
                }


                if ( $( "#ws_button" ).click() || $( "#kw_button" ).click() || $( "#rpm_button" ).click()) { return; }
            }


//

            function windSpeed2() {



                //$(document.getElementById("GRAPH")).hide(),
                //$(document.getElementById("GRAPH2")).show(),


                var myJSON = 0;
                var URL = '/wwdev/gaugetest/WindData/windspeed.json';
                var oReq = new XMLHttpRequest();
                var result = [];
                var data = [];
                var title = "Windspeed";


                oReq.addEventListener("load", reqListener);
                oReq.open("GET", URL);
                oReq.send();

                setInterval(function () {
                    oReq.open("GET", URL);
                    oReq.send();
                    windSpeed.updateOptions({'file': data});
                }, 10000);

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

                function reqListener() {

                    myJSON = this.responseText;

                    var myObj = JSON.parse(myJSON);

                    var i = 0;
                    var time_stamp = [];
                    var wind_speed = [];
                    data = [];

                    for (i = 0; i < myObj.results[0].series[0].values.length; i++) {
                        time_stamp = (myObj.results[0].series[0].values[i][0]);
                        wind_speed = (myObj.results[0].series[0].values[i][1]);
                        data.push([new Date(time_stamp), wind_speed]);
                    }

                    var path = URL;


                }

                if ( $( "#ws_button" ).click() || $( "#kw_button" ).click() || $( "#rpm_button" ).click()) { return; }
            }


//

            function rpm2() {



                //$(document.getElementById("GRAPH")).hide(),
                //$(document.getElementById("GRAPH3")).show(),


                var myJSON = 0;
                var URL = '/wwdev/gaugetest/WindData/rpm.json';
                var oReq = new XMLHttpRequest();
                var result = [];
                var data = [];
                var title = "RPM";


                oReq.addEventListener("load", reqListener);
                oReq.open("GET", URL);
                oReq.send();

                setInterval(function () {
                    oReq.open("GET", URL);
                    oReq.send();
                    rpm.updateOptions({'file': data});
                }, 10000);

                var rpm = new Dygraph(document.getElementById("GRAPH3"), data,
                    {
                        drawPoints: true,
                        showRoller: true,
                        title: title,
                        labels: ['TimeStamp', 'RPM'],
                        showRangeSelector: true,
                        rangeSelectorPlotStrokeColor: 'black',
                        rangeSelectorPlotFillColor: 'lightblue'
                    });


                function reqListener() {

                    myJSON = this.responseText;

                    var myObj = JSON.parse(myJSON);

                    var i = 0;
                    var time_stamp = [];
                    var rpm = [];
                    data = [];

                    for (i = 0; i < myObj.results[0].series[0].values.length; i++) {
                        time_stamp = (myObj.results[0].series[0].values[i][0]);
                        rpm = (myObj.results[0].series[0].values[i][1]);
                        data.push([new Date(time_stamp), rpm]);

                    }

                    var path = URL;


                }

                //if ( $( "#ws_button" ).click() || $( "#kw_button" ).click() || $( "#rpm_button" ).click()) { return; }
            }

            kilowatt2();
            windSpeed2();
            rpm2();

        }

    );
    $("#com_button").click(function () {

        //
        var query = $('#GRAPH');
        var query1 = $('#GRAPH1');
        var query2 = $('#GRAPH2');
        var query3 = $('#GRAPH3');

        console.log(query);

        var isVisible = query.is(':visible');
        var isVisible1 = query1.is(':visible');
        var isVisible2 = query2.is(':visible');
        var isVisible3 = query3.is(':visible');


        if (isVisible === true) {query.hide()}
        else {}

        if (isVisible1 === true) {}
        else {query1.show()}

        if (isVisible2 === true) {}
        else {query2.show()}

        if (isVisible3 === true) {}
        else {query3.show()}

    });
    //
});



/*
 $("#kw_button").click(kilowatt1()),

 $("#ws_button").click(windSpeed1()),

 $("#rpm_button").click(Rpm1()),

 $("#com_button").click(kilowatt(), windSpeed(), Rpm())
 */
//);










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