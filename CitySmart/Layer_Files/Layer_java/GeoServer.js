/**
 * Created by docto on 7/1/2017.
 */
/*
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:8888'}));
*/


function Ortho1() {
    requirejs(['./src/WorldWind',
            './LayerManager'],
        function (ww,
                  LayerManager) {
            "use strict";

            // Tell World Wind to log only warnings.
            WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

            //var server = addWMSServer('http://24.237.235.227/geoserver/');
            //var server = addWMSServer('http://24.237.235.227:8080/geoserver/');

            //var server =  addWMSServer("http://cs.aworldbridgelabs.com:8080/geoserver/");
            //var server =  addWMSServer("http://cs.aworldbridgelabs.com/geoserver/");

            //var server =  addWMSServer("http://cs.aworldbridgelabs:8080/geoserver/");
            //var server =  addWMSServer("http://cs.aworldbridgelabs/geoserver/");

            //var server =  addWMSServer("http://aworldbridgelabs.com:8080/geoserver/");
            //var server =  addWMSServer("http://aworldbridgelabs.com/geoserver/");

            //var server =  addWMSServer("http://aworldbridgelabs/geoserver/");
            //var server =  addWMSServer("http://aworldbridgelabs:8080/geoserver/");

            var server = addWMSServer("http://cs.aworldbridgelabs.com:8080/geoserver/ows");

            //var server = addWMSServer("http://24.237.235.227/geoserver/");
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
            request = new XMLHttpRequest();


            //request = makeCorsRequest(url);
            //request = createCORSRequest('get',"http://cs.aworldbridgelabs.com:8080/geoserver/ows/"),



            url = WorldWind.WmsUrlBuilder.fixGetMapString(serverAddress);

        //url += "service=WMS&request=GetCapabilities&vers";
        url += "service=WMS&request=GetCapabilities&version=1.1.1";


/*
        if ("withCredentials" in request) {
            // XHR for Chrome/Firefox/Opera/Safari.
            request.open("GET", url, true);
        } else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            request = new XDomainRequest();
            request.open("GET", url).setRequestHeader('Access-Control-Allow-Origin', '*');
        } else {
            // CORS not supported.
            request = null;
        }
*/


        request.open("GET", url, true);
        //request.setRequestHeader('Access-Control-Allow-Origin', '*');
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




        //wmsCapsDoc.service.onlineResource = 'http://24.237.235.227/geoserver/?SERVICE=WMS&';
        //wmsCapsDoc.service.onlineResource = 'http://24.237.235.227:8080/geoserver/?SERVICE=WMS&';

        //wmsCapsDoc.service.onlineResource = "http://cs.aworldbridgelabs.com:8080/geoserver/?SERVICE=WMS&";
        //wmsCapsDoc.service.onlineResource = "http://cs.aworldbridgelabs.com/geoserver/?SERVICE=WMS&";

        //wmsCapsDoc.service.onlineResource = "http://cs.aworldbridgelabs:8080/geoserver/?SERVICE=WMS&";
        //wmsCapsDoc.service.onlineResource = "http://cs.aworldbridgelabs/geoserver/?SERVICE=WMS&";

        //wmsCapsDoc.service.onlineResource = "http://aworldbridgelabs.com:8080/geoserver/?SERVICE=WMS&";
        //wmsCapsDoc.service.onlineResource = "http://aworldbridgelabs.com/geoserver/?SERVICE=WMS&";

        //wmsCapsDoc.service.onlineResource = "http://aworldbridgelabs/geoserver/?SERVICE=WMS&";
        //wmsCapsDoc.service.onlineResource = "http://aworldbridgelabs:8080/geoserver/?SERVICE=WMS&";


        wmsCapsDoc.service.onlineResource =  "http://cs.aworldbridgelabs.com:8080/geoserver/ows?SERVICE=WMS&";



        //wmsCapsDoc.service.onlineResource = "http://aworldbridgelabs.com/geoserver/?SERVICE=WMS&";
        //wmsCapsDoc.service.onlineResource = "http://24.237.235.227/geoserver/?SERVICE=WMS&";
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


        for (z = 0; z < wmsLayers.length; z ++) {
            addLayerFromCapabilities(wmsLayers[z], null);
            //layer = new WorldWind.WmsLayer(wmsLayers, null);
            //wwd.addOverlayLayer(layer);

            console.log('Finished importing', wmsLayers[z].title)
        }


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






                //config.service = 'http://24.237.235.227/geoserver/?SERVICE=WMS&';
                //config.service = 'http://24.237.235.227:8080/geoserver/?SERVICE=WMS&';

                //config.service = "http://cs.aworldbridgelabs.com:8080/geoserver/?SERVICE=WMS&";
                //config.service = "http://cs.aworldbridgelabs.com/geoserver/?SERVICE=WMS&";

                //config.service = "http://cs.aworldbridgelabs:8080/geoserver/?SERVICE=WMS&";
                //config.service = "http://cs.aworldbridgelabs/geoserver/?SERVICE=WMS&";

                //config.service = "http://aworldbridgelabs.com:8080/geoserver/?SERVICE=WMS&";
                //config.service = "http://aworldbridgelabs.com/geoserver/?SERVICE=WMS&";

                //config.service = "http://aworldbridgelabs/geoserver/?SERVICE=WMS&";
                //config.service = "http://aworldbridgelabs:8080/geoserver/?SERVICE=WMS&";



                config.service = "http://cs.aworldbridgelabs.com:8080/geoserver/ows?SERVICE=WMS&";
                //config.service = "http://cs.aworldbridgelabs.com:8080/geoserver/ows/?SERVICE=WMS&";

                //config.service = "http://aworldbridgelabs.com/geoserver/?SERVICE=WMS&";
                //config.service = "http://24.237.235.227/geoserver/?SERVICE=WMS&";
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



