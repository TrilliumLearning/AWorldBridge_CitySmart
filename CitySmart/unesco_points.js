/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */
/*
 * Illustrates how to create a placemark with a dynamically created image.
 *
 * @version $Id: CustomPlacemark.js 3320 2015-07-15 20:53:05Z dcollins $
 */
var index_num = 0;

function changeHTML(id) {

    var e = document.getElementsByClassName(id);

    e[0].innerHTML =
        `\<h3 color="black">  Site Name: ` + siteName[index_num] + `\</h3>
        <img src=".\\Pics\\` + pictureLocation[index_num] + `"/>
        \<h6 color="black">Copyright: ` + copyright[index_num] + `\</h6>
		<br>
		<br>
        <h6 color="black">` + siteDescription[index_num] + `\</h6>
		<br>
        <h6 color="black">Latitude and Longitude: ` + latitude_longitude[index_num] + `\</h6>
		<br>
		<h6 color="black">Site Link: <a style="color: rgb(0, 136, 234)" href="` + linkToSiteLocation[index_num] + `">` + linkToSiteLocation[index_num] + ` </a>\</h6>
        <h6 >Click <a style="color: rgb(0, 136, 234)" href="javascript:void(0)" onclick="toggle_visibility('PopupBoxPosition');" >here</a> to close popup box.</h6>`
}

var latitude = [];
var longitude = [];

var location2 = [];
var copyright = [];
var linkToSiteLocation = [];
var pictureLocation = [];
var latitude_longitude = [];
var latitudeAndLongitudeDMS = [];
var siteDescription = [];
var siteName = [];
var i = 0;

var myArray = [];

url = "http://24.237.235.227/wwdev/CitySmart/Compiled_UNESCO1.csv";

//url = "http://10.194.40.100/wwdev/CitySmart/Compiled_UNESCO1.csv";

Papa.parse(url, {
    header: true,
    skipEmptyLines: true,
    download: true,

    complete: function (results) {
        myArray = results.data;

        parseCsv();
        //showMe();
        //console.log(myArray);
    }

});

/*
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
 var a = fruits.indexOf("Apple");
 */


function parseCsv(){

    for (i = 0; i < myArray.length; i++) {
        location1 = myArray[i]['Location'];
        copyright1 = myArray[i]['Copyright'];
        linkToSiteLocation1 = myArray[i]['Link to site location'];
        pictureLocation1 = myArray[i]['Picture Location'];
        latitude_longitude1 = myArray[i]['Latitude and Longitude(Decimal)'];
        latitudeAndLongitudeDMS1 = myArray[i]['Latitude and Longitude(Deg Min Sec)'];
        siteDescription1 = myArray[i]['Site Description'];
        siteName1 = myArray[i]['Site Name'];


        location2.push(location1);
        copyright.push(copyright1);
        linkToSiteLocation.push(linkToSiteLocation1);
        pictureLocation.push(pictureLocation1);
        latitude_longitude.push(latitude_longitude1.replace(/\s+/g, '').split(','));
        latitudeAndLongitudeDMS.push(latitudeAndLongitudeDMS1);
        siteDescription.push(siteDescription1);
        siteName.push(siteName1);

    }

    for (i = 0; i < myArray.length; i++) {
        latitude1 = latitude_longitude[i][0];
        longitude1 = latitude_longitude[i][1];

        latitude.push(latitude1);
        longitude.push(longitude1)

    }
    //console.log(myArray)
}

new_list = [];
var wwd;

requirejs(['./src/WorldWind',
        './LayerManager'],
    function (ww,
              LayerManager) {
        "use strict";

        // Tell World Wind to log only warnings.
        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        // Create the World Window.
        wwd = new WorldWind.WorldWindow("canvasOne");

        var server = addWMSServer("http://24.237.235.227/geoserver/");
        //var server = addWMSServer("http://24.237.235.227:8080/geoserver/gwc/service/wms");
        //var server = addWMSServer("http://10.194.40.100:8080/geoserver/gwc/service/wms");
        //var server = addWMSServer("http://10.194.40.100/geoserver/");
        // Add imagery layers.
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

        var placemark,
            placemarkAttributes = new WorldWind.PlacemarkAttributes(null),
            highlightAttributes,
            placemarkLayer = new WorldWind.RenderableLayer("Placemarks"),

            //PLacemark location are defined lower down!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! (placeholders right below and on top)


            latitude_3 = 0,
            longitude_3 = 0;


        // Set up the common placemark attributes.
        placemarkAttributes.imageScale = 0.75; //placemark size!!!!!!
        placemarkAttributes.imageOffset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 0.5);
        placemarkAttributes.imageColor = WorldWind.Color.WHITE;

        // Create the custom image for the placemark.

        var canvas = document.createElement("canvas"),
            ctx2d = canvas.getContext("2d"),
            size = 45, c = size / 2  - 0.5, innerRadius = 3, outerRadius = 10;

        canvas.width = size;
        canvas.height = size;

        var gradient = ctx2d.createRadialGradient(c, c, innerRadius, c, c, outerRadius);
        gradient.addColorStop(0, 'rgb(187, 0, 255)');
        gradient.addColorStop(0.5, 'rgb(0, 255, 0)');
        gradient.addColorStop(1, 'rgb(187, 0, 255)');

        ctx2d.fillStyle = gradient;
        ctx2d.arc(c, c, outerRadius, 0, 2 * Math.PI, false);
        ctx2d.fill();

        /*Place latitudes and longitudes in here to create multiple points on the globe*/


        /**/
        wwd.addLayer(placemarkLayer);

        var arrayLength = latitude_longitude.length;
        for (var i = 0; i < arrayLength; i++) {
            //console.log(i);
            //alert(latitude_longitude[i]);


            new_list = latitude_longitude[i];

            // I renamed these as they were writing over your array of lats and longs. SM

            latitude_3 = new_list[0];
            longitude_3 = new_list[1];

            console.log(latitude_3);
            console.log(longitude_3);

            // Create the placemark.
            placemark = new WorldWind.Placemark(new WorldWind.Position(latitude_3, longitude_3, 15), false, null);
            placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;

            // Create the placemark attributes for the placemark.
            placemarkAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
            // Wrap the canvas created above in an ImageSource object to specify it as the placemark image source.
            placemarkAttributes.imageSource = new WorldWind.ImageSource(canvas);
            placemark.attributes = placemarkAttributes;

            // Create the highlight attributes for this placemark. Note that the normal attributes are specified as
            // the default highlight attributes so that all properties are identical except the image scale. You could
            // instead vary the color, image, or other property to control the highlight representation.
            highlightAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
            highlightAttributes.imageScale = 1.2;
            placemark.highlightAttributes = highlightAttributes;

            // Add the placemark to the layer.
            placemarkLayer.addRenderable(placemark);

            // Add the placemarks layer to the World Window's layer list.
            //wwd.addLayer(placemarkLayer);
        }
        // Create a layer manager for controlling layer visibility.
        var layerManger = new LayerManager(wwd);

        // Now set up to handle highlighting.
        var highlightController = new WorldWind.HighlightController(wwd);

        var highlightedItems = [];

        // The common pick-handling function.
        var handlePick = function (o) {
            // The input argument is either an Event or a TapRecognizer. Both have the same properties for determining
            // the mouse or tap location.
            var x = o.clientX,
                y = o.clientY;

            var redrawRequired = highlightedItems.length > 0; // must redraw if we de-highlight previously picked items

            // De-highlight any previously highlighted placemarks.
            for (var h = 0; h < highlightedItems.length; h++) {
                highlightedItems[h].highlighted = false;
            }
            highlightedItems = [];

            // Perform the pick. Must first convert from window coordinates to canvas coordinates, which are
            // relative to the upper left corner of the canvas rather than the upper left corner of the page.
            var pickList = wwd.pick(wwd.canvasCoordinates(x, y));
            if (pickList.objects.length > 0) {
                redrawRequired = true;
            }

            // Highlight the items picked by simply setting their highlight flag to true.
            if (pickList.objects.length > 0) {
                for (var p = 0; p < pickList.objects.length; p++) {
                    pickList.objects[p].userObject.highlighted = true;

                    // Keep track of highlighted items in order to de-highlight them later.
                    highlightedItems.push(pickList.objects[p].userObject);

                    // Detect whether the placemark's label was picked. If so, the "labelPicked" property is true.
                    // If instead the user picked the placemark's image, the "labelPicked" property is false.
                    // Applications might use this information to determine whether the user wants to edit the label
                    // or is merely picking the placemark as a whole.

                    /*
                     if (true) {

                     var index_num = latitude.indexOf(pickList.objects[p].position.latitude);


                     changeHTML('PopupBoxPosition');
                     toggle_visibility('PopupBoxPosition');

                     }
                     */


                    // This logic is not fool proof. There needs to be a comparision to insure that
                    // The indexes are equal to each other. SM

                    if ((latitude.indexOf(pickList.objects[p].position.latitude > -1)) && (longitude.indexOf(pickList.objects[p].position.longitude) > -1))
                    {
                        // index_num was being defined in this scope instead of setting the global variable SM

                        index_num = latitude.indexOf(pickList.objects[p].position.latitude);

                        changeHTML('popupBoxContent');
                        toggle_visibility('PopupBoxPosition');
                        console.log("Label picked");

                    }

                }
            }

            // Update the window if we changed anything.
            if (redrawRequired) {
                wwd.redraw(); // redraw to make the highlighting changes take effect on the screen
            }
        };

        // Listen for mouse moves and highlight the placemarks that the cursor rolls over.
        wwd.addEventListener("click", handlePick);

        // Listen for taps on mobile devices and highlight the placemarks that the user taps.
        var tapRecognizer = new WorldWind.TapRecognizer(wwd, handlePick);

    });

var servers = [];

function addWMSServer(serverAddress) {
    if (!serverAddress) {
        return;
    }

    serverAddress = serverAddress.trim();
    serverAddress = serverAddress.replace("Http", "http");
    if (serverAddress.lastIndexOf("http", 0) != 0) {
        serverAddress = "http://" + serverAddress;
    }

    var self = this,
        request = new XMLHttpRequest(),
        url = WorldWind.WmsUrlBuilder.fixGetMapString(serverAddress);

    url += "service=WMS&request=GetCapabilities&vers";

    request.open("GET", url, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var xmlDom = request.responseXML,
                wmsCapsDoc;

            if (!xmlDom && request.responseText.indexOf("<?xml") === 0) {
                xmlDom = new window.DOMParser().parseFromString(request.responseText, "text/xml");
            }

            if (!xmlDom) {
                alert(serverAddress + " retrieval failed. It is probably not a WMS server.");
                return;
            }

            wmsCapsDoc = new WorldWind.WmsCapabilities(xmlDom);

            if (wmsCapsDoc.version) { // if no version, then the URL doesn't point to a caps doc.

                // Process the servers's capabilities document
                servers.push(loadServerCapabilites(serverAddress, wmsCapsDoc));

            } else {
                alert(serverAddress +
                    " WMS capabilities document invalid. The server is probably not a WMS server.");
            }
        } else if (request.readyState === 4) {
            if (request.statusText) {
                alert(request.responseURL + " " + request.status + " (" + request.statusText + ")");
            } else {
                alert("Failed to retrieve WMS capabilities from " + serverAddress + ".");
            }
        }
    };

    request.send(null);
};

nextServerId = 0;

function loadServerCapabilites(serverAddress, wmsCapsDoc) {

	wmsCapsDoc.service.onlineResource = "http://24.237.235.227/geoserver/?SERVICE=WMS&"
    var wmsService = wmsCapsDoc.service,
        wmsLayers = wmsCapsDoc.capability.layers,
        server = {
            id: nextServerId++,
            address: serverAddress,
            service: wmsService,
            //title: ko.observable(wmsService.title && wmsService.title.length > 0 ? wmsService.title : serverAddress),
            //layers: ko.observableArray()
        },
        result, i, numLayers;


    // Don't show the top-level layer if it's a grouping layer with the same title as the server title.
    // The NEO server is set up this way, for example.
    if ((wmsLayers.length === 1) && (wmsLayers[0].layers) &&
        (wmsLayers[0].title === wmsCapsDoc.service.title) && !(wmsLayers[0].name && wmsLayers[0].name.length > 0)) {
        wmsLayers = wmsLayers[0].layers;
    }


    addLayerFromCapabilities(wmsLayers[0].layers[2],null);
    //layer = new WorldWind.WmsLayer(wmsLayers, null);
    //wwd.addOverlayLayer(layer);


    //this.assembleLayers(wmsLayers, server.layers);

    return server;
};


function addLayerFromCapabilities(layerCaps, category) {
    if (layerCaps.name) {
        var config = WorldWind.WmsLayer.formLayerConfiguration(layerCaps, null);
        var layer;

        if (config.timeSequences &&
            (config.timeSequences[config.timeSequences.length - 1] instanceof WorldWind.PeriodicTimeSequence)) {
            var timeSequence = config.timeSequences[config.timeSequences.length - 1];
            config.levelZeroDelta = new WorldWind.Location(180, 180);
            layer = new WorldWind.WmsTimeDimensionedLayer(config);
            layer.opacity = 0.8;
            layer.time = timeSequence.startTime;
//                        this.timeSeriesPlayer.timeSequence = timeSequence;
//                        this.timeSeriesPlayer.layer = layer;
            layer.timeSequence = timeSequence;

            //for (var t = timeSequence.currentTime; t != null; t = timeSequence.next()) {
            //    console.log(t.toISOString());
            //}
            //timeSequence.reset();

        } else if (config.timeSequences &&
            (config.timeSequences[config.timeSequences.length - 1] instanceof Date)) {
            timeSequence = config.timeSequences[config.timeSequences.length - 1];
            config.levelZeroDelta = new WorldWind.Location(180, 180);
            layer = new WorldWind.WmsTimeDimensionedLayer(config);
            layer.opacity = 0.8;
            layer.time = config.timeSequences[0];
//                        this.timeSeriesPlayer.timeSequence = new WorldWind.BasicTimeSequence(config.timeSequences);
//                        this.timeSeriesPlayer.layer = layer;
            layer.timeSequence = timeSequence;
        } else {
	config.service = "http://24.237.235.227/geoserver/?SERVICE=WMS&"

            layer = new WorldWind.WmsLayer(config, null);
//                        this.timeSeriesPlayer.timeSequence = null;
//                        this.timeSeriesPlayer.layer = null;
        }

        if (layerCaps.styles && layerCaps.styles.length > 0
            && layerCaps.styles[0].legendUrls && layerCaps.styles[0].legendUrls.length > 0) {
            // Add the legend url to the layer object so we can
            // draw an image using the url as the image source
            layer.legendUrl = layerCaps.styles[0].legendUrls[0];
        }

        // TODO: pass in category; add to selected category
        layer.enabled = true;
        /*
         if (category === constants.LAYER_CATEGORY_BASE) {
         this.addBaseLayer(layer);
         } else if (category === constants.LAYER_CATEGORY_OVERLAY) {
         this.addOverlayLayer(layer);
         } else if (category === constants.LAYER_CATEGORY_DATA) {
         this.addDataLayer(layer);
         } else {
         this.addBaseLayer(layer);
         }
         */

        addOverlayLayer(layer);

        return layer;
    }

    return null;
};

function addOverlayLayer (layer, options) {
    // Determine the index of this layer within the WorldWindow
    //var index = this.backgroundLayers().length + this.baseLayers().length + this.overlayLayers().length;

    var index = 10;

    //LayerManager.applyOptionsToLayer(layer, options, "Overlay");

    wwd.insertLayer(index, layer);

    // Add a proxy for this layer to the list of overlays
    //this.overlayLayers.push(LayerManager.createLayerViewModel(layer));
};