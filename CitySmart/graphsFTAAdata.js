/**
 * Created by user on 2017/7/23.
 */
var express = require('express');
var app = express();
var Influx = require('influx');

// Connect to a single host with a full set of config details and
// a custom schema
var client = new Influx.InfluxDB({
    database: 'FTAA_Water',
    host: 'aworldbridgelabs.com',
    port: 8086,
    username: 'trueman',
    password: 'TruemanWu!04',
    schema: [
        {
            measurement: 'Water_Experiment',
            fields: {
                Benchmark: Influx.FieldType.STRING,
                Building_1_Drinking_Water: Influx.FieldType.FLOAT,
                Building_2_Drinking_Water: Influx.FieldType.FLOAT,
                Remark: Influx.FieldType.STRING,
                Unit: Influx.FieldType.STRING
            },
            tags: [
                'Element'
            ]
        }
    ]
});

var value;
var query1 = 'SELECT * FROM "FTAA_Water"."autogen"."Water_Experiment" WHERE "Element" = ' + "'Calcium_Ion-Selective_Electrode'";
var query2 = 'SELECT * FROM "FTAA_Water"."autogen"."Water_Experiment" WHERE "Element" = ' + "'Ammonium_Ion-Selective_Electrode'";
var query3 = 'SELECT * FROM "FTAA_Water"."autogen"."Water_Experiment" WHERE "Element" = ' + "'Potassium_ion-Selective_Electrode'";
var query4 = 'SELECT * FROM "FTAA_Water"."autogen"."Water_Experiment" WHERE "Element" = ' + "'Chloride_Probe'";
var query5 = 'SELECT * FROM "FTAA_Water"."autogen"."Water_Experiment" WHERE "Element" = ' + "'Colorimeter'";
var query6 = 'SELECT * FROM "FTAA_Water"."autogen"."Water_Experiment" WHERE "Element" = ' + "'Turbidity_Sensor'";
var query7 = 'SELECT * FROM "FTAA_Water"."autogen"."Water_Experiment" WHERE "Element" = ' + "'PH_Sensor'";
var query8 = 'SELECT * FROM "FTAA_Water"."autogen"."Water_Experiment" WHERE "Element" = ' + "'Temperature_Probe_(C)'";

//console.log(query1);

app.get('/graph', function (req, res) {
    value = req.query.keywords;
    console.log(value);
    if (value === "Calcium") {
        client.query(query1).then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    }

    if (value === "Ammonium") {
        client.query(query2).then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    }

    if (value === "Potassium") {
        client.query(query3).then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    }

    if (value === "Chloride") {
        client.query(query4).then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    }

    if (value === "Colorimeter") {
        client.query(query5).then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    }

    if (value === "Turbidity") {
        client.query(query6).then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    }

    if (value === "pH") {
        client.query(query7).then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    }

    if (value === "Temperature") {
        client.query(query8).then(results => {
            var origin = req.headers.origin;
            res.setHeader("Access-Control-Allow-Origin", origin);

            var JSONresult = JSON.stringify(results, null, "\t");
            console.log(JSONresult);

            res.send(JSONresult);
            res.end();
        });
    }
});

var server = app.listen(9084, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});