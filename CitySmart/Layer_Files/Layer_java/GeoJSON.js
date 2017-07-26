/**
 * Created by docto on 7/2/2017.
 */



function Geo() {



    requirejs(['./src/WorldWind', './LayerManager'],
        function (ww,
                  LayerManager) {
            "use strict";



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

                    transmissionLayer.enabled = false
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

                    utilityLayer.enabled = false
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
                    if ((xobj.readyState === 4) && (xobj.status === 200)) {
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

                    wireLayer.enabled = false;

                    console.log(actual_JSON);
                });
            }

            init();

})}
