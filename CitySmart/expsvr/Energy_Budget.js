/**
 * Created by imacbig04 on 7/21/17.
 */
/**
 * Created by imacbig04 on 7/18/17.
 */
var express = require('express');
var app = express();
var Influx = require('influx');

// Connect to a single host with a full set of config details and
// a custom schema
var client;
var value;
var startDateTime;
var endDateTime;

app.get('/graph', function (req, res) {
    value = req.query.keywords;
    startDateTime = req.query.startDateTime;
    endDateTime = req.query.endDateTime;
    //console.log(value);
    //console.log(startDateTime);
    //console.log(endDateTime);

    if (value === "budget") {
        client = new Influx.InfluxDB({
            database: 'FTAA_Energy',
            host: 'aworldbridgelabs.com',
            port: 8086,
            username: 'trueman',
            password: 'TruemanWu!04',
            schema: [
                {
                    measurement: 'Energy_Budget',
                    fields: {
                        Electricity_Usage: Influx.FieldType.FLOAT,
                        Machine_Name: Influx.FieldType.STRING
                    },
                    tags: [
                        'Machine_ID'
                    ]
                }
            ]
        });
        client.query('SELECT sum(Electricity_Usage) as Electricity_Usage FROM "FTAA_Energy"."autogen"."Energy_Budget" WHERE time >= 1473120000000000000 and time <= 1504652400000000000 GROUP BY time(1h)').then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            //console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    } else if (value === "actual") {
        client = new Influx.InfluxDB({
            database: 'FTAA_Energy',
            host: 'aworldbridgelabs.com',
            port: 8086,
            username: 'trueman',
            password: 'TruemanWu!04',
            schema: [
                {
                    measurement: 'Actual_vs_Prediction',
                    fields: {
                        Actual_Electricity_Usage: Influx.FieldType.FLOAT,
                        Predict_Electricity_Usage: Influx.FieldType.FLOAT
                    },
                    tags: [

                    ]
                }
            ]
        });
        client.query('SELECT * FROM "FTAA_Energy"."autogen"."Actual_vs_Prediction"').then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            //console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    } else {
        client = new Influx.InfluxDB({
            database: 'FTAA_Energy',
            host: 'aworldbridgelabs.com',
            port: 8086,
            username: 'trueman',
            password: 'TruemanWu!04',
            schema: [
                {
                    measurement: 'Energy_Budget',
                    fields: {
                        Electricity_Usage: Influx.FieldType.FLOAT,
                        Machine_Name: Influx.FieldType.STRING
                    },
                    tags: [
                        'Machine_ID'
                    ]
                }
            ]
        });

        var queryDate = 'SELECT Electricity_Usage, Machine_ID, Machine_Name FROM "FTAA_Energy"."autogen"."Energy_Budget" WHERE time >= ' + "'" + startDateTime + "'" + 'AND time <= ' + "'" + endDateTime + "'" + " GROUP BY Machine_ID";
        //console.log(queryDate);
        client.query(queryDate).then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            //console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    }

});

var server = app.listen(9085, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});