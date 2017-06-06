

// Now set up to handle highlighting.
var highlightController = new WorldWind.HighlightController(wwd);

var highlightedItems = [];

var wwd;

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

wmsCapsDoc.service.onlineResource = "http://10.194.40.100/geoserver/?SERVICE=WMS&"
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
config.service = "http://10.194.40.100/geoserver/?SERVICE=WMS&"

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
