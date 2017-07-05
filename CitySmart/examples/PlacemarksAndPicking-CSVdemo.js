/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */
/**
 * Illustrates how to display and pick Placemarks.
 *
 * @version $Id: PlacemarksAndPicking.js 3320 2015-07-15 20:53:05Z dcollins $
 */
//'./Globe_C'
//'./Layer_Files/Layer_java/KIBSD_Windturbine_Cat'
//wwd = new WorldWind.WorldWindow("canvasOne");

function Geo() {
    var wwd;
    var layerManager;

    requirejs(['./src/WorldWind', './LayerManager',],
        function (ww,
                  LayerManager,) {
            "use strict";


            //while(wwd === undefined){}
            // Tell World Wind to log only warnings.
            /*
             WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

             // Create the World Window.
             var wwd = new WorldWind.WorldWindow("canvasOne");

             /**
             * Added imagery layers.
             */
            /*
             var layers = [
             {layer: new WorldWind.BMNGLayer(), enabled: true},
             {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
             {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true},
             {layer: new WorldWind.CompassLayer(), enabled: true},
             {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
             {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
             ];

             for (var l = 0; l < layers.length; l++) {
             layers[l].layer.enabled = layers[l].enabled;
             wwd.addLayer(layers[l].layer);
             }
             */
            // Define the images we'll use for the placemarks.
            /*
             var images = [
             "plain-black.png",
             "plain-blue.png",
             "plain-brown.png",
             "plain-gray.png",
             "plain-green.png",
             "plain-orange.png",
             "plain-purple.png",
             "plain-red.png",
             "plain-teal.png",
             "plain-white.png",
             "plain-yellow.png",
             "castshadow-black.png",
             "castshadow-blue.png",
             "castshadow-brown.png",
             "castshadow-gray.png",
             "castshadow-green.png",
             "castshadow-orange.png",
             "castshadow-purple.png",
             "castshadow-red.png",
             "castshadow-teal.png",
             "castshadow-white.png"
             ];
             */

            //layerManager = new LayerManager(wwd);
            //var pinLibrary = WorldWind.configuration.baseUrl + "images/pushpins/", // location of the image files
            var placemark,
                placemarkAttributes = new WorldWind.PlacemarkAttributes(null),
                placemark2Attributes = new WorldWind.PlacemarkAttributes(null),
                highlightAttributes,
                utilityLayer = new WorldWind.RenderableLayer("Utility"),
                transmissionLayer = new WorldWind.RenderableLayer("Transmission"),
                wireLayer = new WorldWind.RenderableLayer("TR_Wire"),
                latitude = 47.684444,
                longitude = -121.129722;

            // Set up the common placemark attributes.
            placemarkAttributes.imageScale = 1;
            placemarkAttributes.imageOffset = new WorldWind.Offset(
                WorldWind.OFFSET_FRACTION, 0.3,
                WorldWind.OFFSET_FRACTION, 0.0);
            placemarkAttributes.imageColor = WorldWind.Color.WHITE;
            placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
                WorldWind.OFFSET_FRACTION, 0.5,
                WorldWind.OFFSET_FRACTION, 1.0);
            placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
            placemarkAttributes.drawLeaderLine = true;
            placemarkAttributes.leaderLineAttributes.outlineColor = WorldWind.Color.RED;

            placemark2Attributes.imageScale = 1;
            placemark2Attributes.imageOffset = new WorldWind.Offset(
                WorldWind.OFFSET_FRACTION, 0.3,
                WorldWind.OFFSET_FRACTION, 0.0);
            placemark2Attributes.imageColor = WorldWind.Color.WHITE;
            placemark2Attributes.labelAttributes.offset = new WorldWind.Offset(
                WorldWind.OFFSET_FRACTION, 0.5,
                WorldWind.OFFSET_FRACTION, 1.0);
            placemark2Attributes.labelAttributes.color = WorldWind.Color.YELLOW;
            placemark2Attributes.drawLeaderLine = true;
            placemark2Attributes.leaderLineAttributes.outlineColor = WorldWind.Color.RED;


            //var url = 'data/DPOLE.csv';
            var url = 'data/TRPOLE.csv';


            Papa.parse(url, {
                download: true,
                complete: function (results) {
                    // rest of config ...

                    for (var i = 1; i < results.data.length; i++) {
                        // Create the placemark and its label.

                        latitude = parseFloat(results.data[i][1]);
                        longitude = parseFloat(results.data[i][0]);

                        placemark = new WorldWind.Placemark(new WorldWind.Position(latitude, longitude, 1e2), true, null);

                        //placemark.label = results.data[i][6];
                        //placemark.label = "Placemark " + i.toString() + "\n"
                        //+ "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n"
                        //+ "Lon " + placemark.position.longitude.toPrecision(5).toString();


                        placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;

                        // Create the placemark attributes for this placemark. Note that the attributes differ only by their
                        // image URL.
                        placemarkAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
                        //placemarkAttributes.imageSource = pinLibrary + images[i];
                        placemarkAttributes.leaderLineAttributes.outlineColor = WorldWind.Color.MAGENTA;

                        placemark.attributes = placemarkAttributes;

                        // Create the highlight attributes for this placemark. Note that the normal attributes are specified as
                        // the default highlight attributes so that all properties are identical except the image scale. You could
                        // instead vary the color, image, or other property to control the highlight representation.
                        highlightAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
                        highlightAttributes.imageScale = 1.2;
                        placemark.highlightAttributes = highlightAttributes;

                        // Add the placemark to the layer.
                        transmissionLayer.addRenderable(placemark);
                    }
                    wwd.addLayer(transmissionLayer);
                    //var layerManger = new LayerManager(wwd);
                }
            });

            var url = 'data/DPOLE.csv';


            Papa.parse(url, {
                download: true,
                complete: function (results) {
                    // rest of config ...

                    for (var i = 1; i < results.data.length; i++) {
                        // Create the placemark and its label.

                        latitude = parseFloat(results.data[i][1]);
                        longitude = parseFloat(results.data[i][0]);

                        placemark = new WorldWind.Placemark(new WorldWind.Position(latitude, longitude, 50), true, null);

                        //placemark.label = results.data[i][6];
                        //placemark.label = "Placemark " + i.toString() + "\n"
                        //+ "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n"
                        //+ "Lon " + placemark.position.longitude.toPrecision(5).toString();


                        placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;

                        // Create the placemark attributes for this placemark. Note that the attributes differ only by their
                        // image URL.
                        placemark2Attributes = new WorldWind.PlacemarkAttributes(placemark2Attributes);
                        //placemarkAttributes.imageSource = pinLibrary + images[i];
                        placemark2Attributes.leaderLineAttributes.outlineColor = WorldWind.Color.BLUE;

                        placemark.attributes = placemark2Attributes;


                        // Create the highlight attributes for this placemark. Note that the normal attributes are specified as
                        // the default highlight attributes so that all properties are identical except the image scale. You could
                        // instead vary the color, image, or other property to control the highlight representation.
                        highlightAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
                        highlightAttributes.imageScale = 1.2;
                        placemark.highlightAttributes = highlightAttributes;

                        // Add the placemark to the layer.
                        utilityLayer.addRenderable(placemark);
                    }
                    wwd.addLayer(utilityLayer);

                }
            });

            //var url = 'data/TRMSWIRE.csv';

            var url = 'data/WIRE.geojson';
            var actual_JSON;

            function loadJSON(callback) {

                var xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");
                xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
                xobj.onreadystatechange = function () {
                    if (xobj.readyState === 4 && xobj.status === "200") {
                        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                        callback(xobj.responseText);
                    }
                };
                xobj.send(null);
            }

            function init() {
                loadJSON(function (response) {
                    // Parse JS  ON string into object
                    actual_JSON = JSON.parse(response);

                    var long1, lat1, long2, lat2, wire_array;

                    for (var i = 0; i < actual_JSON.features.length; i++) {

                        wire_array = [];

                        long1 = actual_JSON.features[i].geometry.coordinates[0][0];
                        lat1 = actual_JSON.features[i].geometry.coordinates[0][1];
                        long2 = actual_JSON.features[i].geometry.coordinates[1][0];
                        lat2 = actual_JSON.features[i].geometry.coordinates[1][1];

                        wire_array.push(new WorldWind.Position(lat1, long1, 80));
                        wire_array.push(new WorldWind.Position(lat2, long2, 80));

                        var shape = new WorldWind.ShapeAttributes();
                        shape.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
                        var wire_path = new WorldWind.Path(wire_array, shape);
                        wire_path.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
                        wire_path.pathType = WorldWind.LINEAR;

                        wireLayer.addRenderable(wire_path);
                    }

                    wwd.addLayer(wireLayer);


                    console.log(actual_JSON);
                });
            }

            init();

            var shapeConfigurationCallback = function (geometry, properties) {
                var configuration = {};

                if (geometry.isPointType() || geometry.isMultiPointType()) {
                    configuration.attributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);

                    if (properties && (properties.name || properties.Name || properties.NAME)) {
                        configuration.name = properties.name || properties.Name || properties.NAME;
                    }
                    if (properties && properties.POP_MAX) {
                        var population = properties.POP_MAX;
                        configuration.attributes.imageScale = 0.01 * Math.log(population);
                    }
                }
                else if (geometry.isLineStringType() || geometry.isMultiLineStringType()) {

                    configuration.attributes = new WorldWind.ShapeAttributes(null);
                    configuration.attributes.drawOutline = true;

                    configuration.attributes.interiorColor = new WorldWind.Color(
                        0.375 + 0.5 * Math.random(),
                        0.375 + 0.5 * Math.random(),
                        0.375 + 0.5 * Math.random(),
                        0.1);
                    // Paint the outline in a darker variant of the interior color.
                    configuration.attributes.outlineColor = new WorldWind.Color(
                        0.5 * configuration.attributes.interiorColor.red,
                        0.5 * configuration.attributes.interiorColor.green,
                        0.5 * configuration.attributes.interiorColor.blue,
                        1.0);

                    configuration.attributes.imageScale = 10;
                    /*
                     configuration.attributes =  new WorldWind.ShapeAttributes(null);
                     configuration.attributes.drawOutline = true;
                     configuration.attributes.outlineColor = new WorldWind.Color(
                     0.1 * configuration.attributes.interiorColor.red,
                     0.3 * configuration.attributes.interiorColor.green,
                     0.3 * configuration.attributes.interiorColor.blue,
                     1.0);
                     */
                    configuration.attributes.outlineWidth = 1.0;
                }
                else if (geometry.isPolygonType() || geometry.isMultiPolygonType()) {
                    configuration.attributes = new WorldWind.ShapeAttributes(null);

                    // Fill the polygon with a random pastel color.
                    configuration.attributes.interiorColor = new WorldWind.Color(
                        0.375 + 0.5 * Math.random(),
                        0.375 + 0.5 * Math.random(),
                        0.375 + 0.5 * Math.random(),
                        0.1);
                    // Paint the outline in a darker variant of the interior color.
                    configuration.attributes.outlineColor = new WorldWind.Color(
                        0.5 * configuration.attributes.interiorColor.red,
                        0.5 * configuration.attributes.interiorColor.green,
                        0.5 * configuration.attributes.interiorColor.blue,
                        1.0);
                }

                return configuration;
            };

            var url = 'data/ogrtest.geojson';

            var filelist = [
                //"KEA_electrical_grid_map__0-1Phase.geojson",
                //"KEA_electrical_grid_map__0-DoubleCheckQuestions.geojson",
                //"KEA_electrical_grid_map__0-DrewCallout.geojson",
                //"KEA_electrical_grid_map__0-MarkUp.geojson",
                //"KEA_electrical_grid_map__0-MarkUpImportant.geojson",
                //"KEA_electrical_grid_map__0-PoleMarker.geojson",
                //"KEA_electrical_grid_map__0-Subs.geojson",
                //"KEA_electrical_grid_map__0-WorkOrderText.geojson",
                //"KEA_electrical_grid_map__0Base-Coast_Guard_Buildings.geojson",
                //"KEA_electrical_grid_map__0Base-Coast_Guard_Roads.geojson",
                //"KEA_electrical_grid_map__0Base-ParcelLabel(2).geojson",
                //"KEA_electrical_grid_map__0Base-ParcelLabel_User_Added.geojson",
                //"KEA_electrical_grid_map__0Base-Parcels.geojson",
                //"KEA_electrical_grid_map__0Base-Parcels_User_Added.geojson",
                //"KEA_electrical_grid_map__0Base-RoadNames.geojson",
                //"KEA_electrical_grid_map__13AA.geojson",
                //"KEA_electrical_grid_map__1_614998630_1877.sv$.geojson",
                //"KEA_electrical_grid_map__ABSW.geojson",
                //"KEA_electrical_grid_map__AIRPORT_SUB.geojson",
                //"KEA_electrical_grid_map__BOTTOMA.geojson",
                //"KEA_electrical_grid_map__Bells_Flats_AK83-5F$0$BFA.geojson",
                //"KEA_electrical_grid_map__Bells_Flats_AK83-5F$0$CPA.geojson",
                //"KEA_electrical_grid_map__Bells_Flats_AK83-5F$0$RC.geojson",
                //"KEA_electrical_grid_map__Bells_Flats_AK83-5F$0$RCA.geojson",
                //"KEA_electrical_grid_map__C-ROAD-ASPH-EDGE-N-SOURCE_DOT.geojson",
                //"KEA_electrical_grid_map__CIRCUIT_ARROW.geojson",
                //"KEA_electrical_grid_map__CNDTPL_PRI.geojson",
                //"KEA_electrical_grid_map__DCSW.geojson",
                //"KEA_electrical_grid_map__DEVICES.geojson",
                //"KEA_electrical_grid_map__DPOLE.geojson",
                //"KEA_electrical_grid_map__FEEDERBAY.geojson",
                //"KEA_electrical_grid_map__FUSE.geojson",
                //"KEA_electrical_grid_map__FuseSize.geojson",
                //"KEA_electrical_grid_map__GUY.geojson",
                //"KEA_electrical_grid_map__ILA.geojson",
                //"KEA_electrical_grid_map__Kodiak_Town_AK83-5F$0$BOTTOMA.geojson",
                //"KEA_electrical_grid_map__Kodiak_Town_AK83-5F$0$SHIP.geojson",
                //"KEA_electrical_grid_map__MANHOLE.geojson",
                //"KEA_electrical_grid_map__MCA.geojson",
                //"KEA_electrical_grid_map__MISSA.geojson",
                //"KEA_electrical_grid_map__NC.geojson",
                //"KEA_electrical_grid_map__OBARS.geojson",
                //"KEA_electrical_grid_map__OCR.geojson",
                "KEA_electrical_grid_map__OHC1.geojson",
                "KEA_electrical_grid_map__OHC2.geojson",
                "KEA_electrical_grid_map__OHC3.geojson",
                //"KEA_electrical_grid_map__OHSC.geojson",
                //"KEA_electrical_grid_map__OHTFMR.geojson",
                //"KEA_electrical_grid_map__OLD_FAULTED_CABLE.geojson",
                //"KEA_electrical_grid_map__PHASE_ARROW.geojson",
                //"KEA_electrical_grid_map__PORT.geojson",
                //"KEA_electrical_grid_map__PRIGUY.geojson",
                //"KEA_electrical_grid_map__PRI_UG.geojson",
                //"KEA_electrical_grid_map__RD.geojson",
                //"KEA_electrical_grid_map__SA_SUBSTATION.geojson",
                //"KEA_electrical_grid_map__SPOLE.geojson",
                //"KEA_electrical_grid_map__STLT.geojson",
                //"KEA_electrical_grid_map__SUBSTATION.geojson",
                //"KEA_electrical_grid_map__TRACE.geojson",
                //"KEA_electrical_grid_map__TRNSMSMWIRE.geojson",
                //"KEA_electrical_grid_map__TRPOLE.geojson",
                "KEA_electrical_grid_map__UGC1.geojson",
                "KEA_electrical_grid_map__UGC2.geojson",
                "KEA_electrical_grid_map__UGC3.geojson"
                //"KEA_electrical_grid_map__UGPRVNUM.geojson",
                //"KEA_electrical_grid_map__UGSC.geojson",
                //"KEA_electrical_grid_map__UGTFP.geojson",
                //"KEA_electrical_grid_map__WIRE_LABEL.geojson",
                //"KEA_electrical_grid_map__Work_Order_Number.geojson" //,
                //"TEST.geojson",
                //"WIRE.geojson"
            ];

            //filelist = ["KEA_electrical_grid_map__DPOLE.geojson"];

            // Conversion command: ogr2ogr -f GeoJSON -s_srs EPSG:102635 -t_srs crs:84 ogrtest.geojson KEA\ electrical\ grid\ map\ _UGC1.dxf


            for (var i = 0; i < filelist.length; i++) {

                url = 'data/geojson/' + filelist[i];
                var geoLayer = new WorldWind.RenderableLayer(filelist[i]);
                var keaGeoJSON = new WorldWind.GeoJSONParser(url);
                //keaGeoJSON.load(null, shapeConfigurationCallback, geoLayer);
                keaGeoJSON.load(shapeConfigurationCallback, geoLayer); //Takes two arguments, should be three, version issue?
                //geoLayer.displayName = geoLayer + filelist[i].split('_')[6];
                wwd.addLayer(geoLayer);
            }

            //var layerManager = new LayerManager(wwd);

            layerManager.goToAnimator.goTo(new WorldWind.Position(57.79000, -152.4072, 1000));

        });
};