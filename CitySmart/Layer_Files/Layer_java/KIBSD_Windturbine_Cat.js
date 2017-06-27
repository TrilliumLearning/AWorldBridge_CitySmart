/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */
/*
 * Illustrates how to create a placemark with a dynamically created image.
 *
 * @version $Id: CustomPlacemark.js 3320 2015-07-15 20:53:05Z dcollins $
 */





function Ortho3() {requirejs(['./src/WorldWind', './LayerManager'],
    function (ww,
              LayerManager) {
        "use strict";

        // Tell World Wind to log only warnings.
        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        var server = addWMSServer("http://24.237.235.227/geoserver/");
        //var server = addWMSServer("http://10.194.40.100/geoserver/");
        //var server = addWMSServer("http://24.237.235.227:8080/geoserver/gwc/service/wms");
        //var server = addWMSServer("http://10.194.40.100:8080/geoserver/gwc/service/wms");
        //var server = addWMSServer("http://10.194.40.100/geoserver/");
        // Add imagery layers.



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
    }

    nextServerId = 0;

    function loadServerCapabilites(serverAddress, wmsCapsDoc) {
        wmsCapsDoc.service.onlineResource = "http://24.237.235.227/geoserver/?SERVICE=WMS&";
        //wmsCapsDoc.service.onlineResource = "http://10.194.40.100/geoserver/?SERVICE=WMS&";
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


        addLayerFromCapabilities(wmsLayers[0].layers[4],null);
        //layer = new WorldWind.WmsLayer(wmsLayers, null);
        //wwd.addOverlayLayer(layer);


        //this.assembleLayers(wmsLayers, server.layers);

        return server;
    }


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

                config.service = "http://24.237.235.227/geoserver/?SERVICE=WMS&";
                //config.service = "http://10.194.40.100/geoserver/?SERVICE=WMS&";

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
            layer.enabled = false;
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
    }

    function addOverlayLayer (layer, options) {
        // Determine the index of this layer within the WorldWindow
        //var index = this.backgroundLayers().length + this.baseLayers().length + this.overlayLayers().length;

        var index = 12;

        //LayerManager.applyOptionsToLayer(layer, options, "Overlay");

        wwd.insertLayer(index, layer);

        // Add a proxy for this layer to the list of overlays
        //this.overlayLayers.push(LayerManager.createLayerViewModel(layer));
    }

}

function Ortho2() {
    requirejs(['./src/WorldWind',
        './LayerManager'],
    function (ww,
              LayerManager) {
        "use strict";

        // Tell World Wind to log only warnings.
        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        var server = addWMSServer("http://24.237.235.227/geoserver/");
        //var server = addWMSServer("http://10.194.40.100/geoserver/");
        //var server = addWMSServer("http://24.237.235.227:8080/geoserver/gwc/service/wms");
        //var server = addWMSServer("http://10.194.40.100:8080/geoserver/gwc/service/wms");
        //var server = addWMSServer("http://10.194.40.100/geoserver/");
        // Add imagery layers.



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
    }

    nextServerId = 0;

    function loadServerCapabilites(serverAddress, wmsCapsDoc) {

        wmsCapsDoc.service.onlineResource = "http://24.237.235.227/geoserver/?SERVICE=WMS&";
        //wmsCapsDoc.service.onlineResource = "http://10.194.40.100/geoserver/?SERVICE=WMS&";
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


        addLayerFromCapabilities(wmsLayers[0].layers[14],null);
        //layer = new WorldWind.WmsLayer(wmsLayers, null);
        //wwd.addOverlayLayer(layer);


        //this.assembleLayers(wmsLayers, server.layers);

        return server;
    }


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

                config.service = "http://24.237.235.227/geoserver/?SERVICE=WMS&";
                //config.service = "http://10.194.40.100/geoserver/?SERVICE=WMS&";

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
            layer.enabled = false;
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
    }

    function addOverlayLayer (layer, options) {
        // Determine the index of this layer within the WorldWindow
        //var index = this.backgroundLayers().length + this.baseLayers().length + this.overlayLayers().length;

        var index = 11;

        //LayerManager.applyOptionsToLayer(layer, options, "Overlay");

        wwd.insertLayer(index, layer);

        // Add a proxy for this layer to the list of overlays
        //this.overlayLayers.push(LayerManager.createLayerViewModel(layer));
    }

}

function Ortho1() {
    requirejs(['./src/WorldWind',
        './LayerManager'],
    function (ww,
              LayerManager) {
        "use strict";

        // Tell World Wind to log only warnings.
        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        var server = addWMSServer("http://24.237.235.227/geoserver/");
        //var server = addWMSServer("http://10.194.40.100/geoserver/");
        //var server = addWMSServer("http://24.237.235.227:8080/geoserver/gwc/service/wms");
        //var server = addWMSServer("http://10.194.40.100:8080/geoserver/gwc/service/wms");
        //var server = addWMSServer("http://10.194.40.100/geoserver/");
        // Add imagery layers.



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
    }

    nextServerId = 0;

    function loadServerCapabilites(serverAddress, wmsCapsDoc) {

        wmsCapsDoc.service.onlineResource = "http://24.237.235.227/geoserver/?SERVICE=WMS&";
        //wmsCapsDoc.service.onlineResource = "http://10.194.40.100/geoserver/?SERVICE=WMS&";
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


        addLayerFromCapabilities(wmsLayers[0].layers[15],null);
        //layer = new WorldWind.WmsLayer(wmsLayers, null);
        //wwd.addOverlayLayer(layer);


        //this.assembleLayers(wmsLayers, server.layers);

        return server;
    }


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

                config.service = "http://24.237.235.227/geoserver/?SERVICE=WMS&";
                //config.service = "http://10.194.40.100/geoserver/?SERVICE=WMS&";

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
            layer.enabled = false;
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
    }

    function addOverlayLayer (layer, options) {
        // Determine the index of this layer within the WorldWindow
        //var index = this.backgroundLayers().length + this.baseLayers().length + this.overlayLayers().length;

        var index = 10;

        //LayerManager.applyOptionsToLayer(layer, options, "Overlay");

        wwd.insertLayer(index, layer);

        // Add a proxy for this layer to the list of overlays
        //this.overlayLayers.push(LayerManager.createLayerViewModel(layer));
    }

}











function Geo() {



    requirejs(['./src/WorldWind', './LayerManager'],
        function (ww,
                  LayerManager) {
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

            var shapeConfigurationCallback = function (geometry, properties) {
                var configuration = {};

                if (properties.layer === "OHC1" || "OHC2" || "OHC3") {

                    configuration.attributes = new WorldWind.ShapeAttributes(null);
                    configuration.attributes.drawOutline = true;

                    configuration.attributes.interiorColor = new WorldWind.Color((255/255), (200/255), (100/255), 1.0);
                    // Paint the outline in a darker variant of the interior color.
                    configuration.attributes.outlineColor = configuration.attributes.interiorColor;

                    configuration.attributes.outlineWidth = 1.0;
                    return configuration;

                }
                else if (properties.layer === "UGC1" || "UGC2" || "UGC3") {

                    configuration.attributes = new WorldWind.ShapeAttributes(null);
                    configuration.attributes.drawOutline = true;

                    configuration.attributes.interiorColor = new WorldWind.Color((150/255), (200/255), (250/255), 1.0);
                    // Paint the outline in a darker variant of the interior color.
                    configuration.attributes.outlineColor = configuration.attributes.interiorColor;

                    configuration.attributes.outlineWidth = 1.0;
                    return configuration;


                }

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
                geoLayer.enabled = false
            }

            //var layerManager = new LayerManager(wwd);

            layerManager.goToAnimator.goTo(new WorldWind.Position(57.79000, -152.4072, 10000));

        });

    Ortho1();
    Ortho2();
    Ortho3();
    //Reset();
}






function Placemark_Creation(Layer_Name,RGB) {


    var placemark,
        placemarkAttributes = new WorldWind.PlacemarkAttributes(null),
        highlightAttributes,

        ///////////////////////////////////////////////////////////////////
        placemarkLayer = new WorldWind.RenderableLayer(Layer_Name),

        //Placemark locations are defined lower down!!!!!!!!! (placeholders are right below (175 and 176))


        Point_latitude = 0,
        Point_longitude = 0;


// Set up the common placemark attributes.
    placemarkAttributes.imageScale = 0.75; //placemark size!!!!!!
    placemarkAttributes.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION, 0.5,
        WorldWind.OFFSET_FRACTION, 0.5);
    placemarkAttributes.imageColor = WorldWind.Color.WHITE;

// Create the custom image for the placemark.

    var canvas = document.createElement("canvas"),
        ctx2d = canvas.getContext("2d"),
        size = 45, c = size / 2 - 0.5, innerRadius = 3, outerRadius = 10;

    canvas.width = size;
    canvas.height = size;
//This is the color of the placeholder and appearance (Most likely)
    var gradient = ctx2d.createRadialGradient(c, c, innerRadius, c, c, outerRadius);
    gradient.addColorStop(0, RGB[0]);
    gradient.addColorStop(0.5, RGB[1]);
    gradient.addColorStop(1, RGB[2]);

    ctx2d.fillStyle = gradient;
    ctx2d.arc(c, c, outerRadius, 0, 2 * Math.PI, false);
    ctx2d.fill();


    wwd.addLayer(placemarkLayer);
    placemarkLayer.enabled = false;

    var arrayLength = latitude_longitude.length;

//Takes latitude and longitude values into a new local variable to parse and make into points on the globe.
//This is the loop that goes through all of the coordinate pairs from the parsed file and makes points for them.


///////////////////////////////////////
    for (var i = 0; i < arrayLength; i++) {
        //console.log(i);
        //alert(latitude_longitude[i]);

        new_list = latitude_longitude[i];


        Point_latitude = new_list[0];
        Point_longitude = new_list[1];
        ///////////////////////////////////


//Prints coordinates to console as they are looped through.
        //console.log(Point_latitude);
        //console.log(Point_longitude);

        // Create the placemark.
        placemark = new WorldWind.Placemark(new WorldWind.Position(Point_latitude, Point_longitude, 15), false, null);
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
    console.log("Finished importing " +  Layer_Name);

    latitude_longitude = [];
    k++;
    if (k < Point_Layers.length){First_Function()}
    else {Geo()}


}








function parseArray() {
//    for (l = 0; l < myArray.length; l++) {

    var New_Array = myArray;

    for (q = 0; q < New_Array.length; q++) {

        var latitude_longitude1 = New_Array[q]['Latitude and Longitude(Decimal)'];
        latitude_longitude.push(latitude_longitude1.replace(/\s+/g, '').split(','));
        //latitude1 = latitude_longitude[i][0];
        //longitude1 = latitude_longitude[i][1];

        //latitude.push(latitude1);
        //longitude.push(longitude1)

    }


    //for (p = 0; p < New_Array.length; p++) {

    var RGB = Point_Layers[k][2];
    var Layer_Name = Point_Layers[k][0];
    Placemark_Creation(Layer_Name,RGB);

    //}

//    }
}





function ParseCSV(url, ReferenceArray) {

    Papa.parse(url, {

        header: true,

        skipEmptyLines: true,

        download: true,

        complete: function (results) {

            //var g = Point_Layers.indexOf(ReferenceArray);

            myArray = (results.data);

            parseArray();
            /*
             if (myArray.length === Point_Layers.length) {
             parseArray()
             }
             else {
             }
             */
            //showMe();
            //console.log(myArray);
        }

    });

}






function First_Function () {

    CSV_NAME = Point_Layers[k][1];

    ReferenceArray = Point_Layers[k];

    var url = "http://cs.aworldbridgelabs.com/CitySmart/Layer_Files/Layer_csv/" + CSV_NAME;
    //url = "http://localhost:63342/AWorldBridge_CitySmart/CitySmart/Layer_Files/Layer_csv/" + CSV_NAME;
    //var url = "http://localhost:40002/file:///Users/kshin/Desktop/CitySmart/Layer_Files/Layer_csv/" + CSV_NAME;
    //url = "http://10.194.40.100/wwdev/CitySmart/Layer_Files/Layer_csv/" + CSV_NAME;
    //url = "http://24.237.235.227/wwdev/CitySmart/Layer_Files/Layer_csv/" + CSV_NAME;
    /*
     for(i = 0; i < myArray.length; i++)
     {
     for(key in options[i])
     {
     alert(options[i][key])
     }

     }
     */

    ParseCSV(url, ReferenceArray);

}



//RGB Pink 'rgb(255,192,203)'
//RGB Red 'rgb(255,0,0)'
//RGB Green 'rgb(0,255,0)'
//RGB Blue 'rgb(0,0,255)'
//Light Purple 'rgb(204, 204, 255)'

var Point_Layers = [
    ["World Bridge","World_Bridge_Sites.csv",['rgb(187,0,255)','rgb(0,255,0)','rgb(187,0,255)']],
    ["KIBSD Turbine","KHS_Wind_Turbine.csv",['rgb(255,192,203)','rgb(255,0,0)','rgb(255,192,203)']],
    ["KEA Turbine","KEA_Wind_Turbine.csv",['rgb(204, 204, 255)','rgb(0,0,255)','rgb(204, 204, 255)']],
    ["Bear Valley Golf Course","BVGC.csv",['rgb(0,0,255)','rgb(255,192,203)','rgb(0,0,255)']]


];

var new_list = [];

var latitude = [];
var longitude = [];
var latitude_longitude = [];

var CSV_NAME;
var ReferenceArray;

var index_num = 0;

var url;

var i = 0;
var k = 0;
var l = 0;
var p = 0;
var q = 0;
var o = 0;
var myArray = [];


requirejs(['./src/WorldWind',
        './LayerManager'],

    function (ww,
              LayerManager) {
        "use strict";


        First_Function ();


        console.log(wwd);

    });






















