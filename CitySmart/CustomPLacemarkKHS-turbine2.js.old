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
        `\<h3 color="black">Site Name: ` + siteName[index_num] + `\</h3>
        <img src=".\\Pics\\` + pictureLocation[index_num] + `"/>
        \<h6 color="black">Copyright: ` + copyright[index_num] + `\</h6>
        <h6 color="black">` + siteDescription[index_num] + `\</h6>
        <h6 color="black">Latitude and Longitude: ` + latitude_longitude[index_num] + `\</h6>
        <h6 color="black">Click <a href="javascript:void(0)" onclick="toggle_visibility('PopupBoxPosition');">here</a> to close popup box.</h6>`
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

url = "http://10.194.40.100/wwdev/CitySmart/HM_TEST2.csv";

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

requirejs(['./src/WorldWind',
        './LayerManager'],
    function (ww,
              LayerManager) {
        "use strict";

        // Tell World Wind to log only warnings.
        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        // Create the World Window.
        var wwd = new WorldWind.WorldWindow("canvasOne");

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
            size = 64, c = size / 2  - 0.5, innerRadius = 5, outerRadius = 20;

        canvas.width = size;
        canvas.height = size;

        var gradient = ctx2d.createRadialGradient(c, c, innerRadius, c, c, outerRadius);
        gradient.addColorStop(0, 'rgb(255, 0, 0)');
        gradient.addColorStop(0.5, 'rgb(0, 255, 0)');
        gradient.addColorStop(1, 'rgb(255, 0, 0)');

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