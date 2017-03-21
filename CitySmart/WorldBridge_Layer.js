/**
 * Created by Daniel on 3/9/2017.
 */



var index_num = 0;

function changeHTML(id) {

    var e = document.getElementsByClassName(id);

    e[0].innerHTML =
        `\<h3>Site Name:` + siteName[index_num] + `\</h3>
        <img src=".\\Pics\\` + pictureLocation[index_num] + `"/>
        \<h6>Copyright` + copyright[index_num] + `\</h6>
        <h6>` + siteDescription[index_num] + `\</h6>
        <h6>Latitude and Longitude:` + latitude_longitude[index_num] + `\</h6>
        <h6>Click <a href="javascript:void(0)" onclick="toggle_visibility('PopupBoxPosition');">here</a> to close popup box.</h6>`
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

url = "http://24.237.235.227/wwdev/CitySmart/World_Bridge_Sites.csv";

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

        for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = layers[l].enabled;
            wwd.addLayer(layers[l].layer);
        }

        var placemark,
            placemarkAttributes = new WorldWind.PlacemarkAttributes(null),
            highlightAttributes,
            placemarkLayer = new WorldWind.RenderableLayer("WorldBridge"),

            //PLacemark location are defined lower down!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! (placeholders right below and on top)


            latitude = 0,
            longitude = 0;


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

            latitude = new_list[0];
            longitude = new_list[1];

            console.log(latitude);
            console.log(longitude);

            // Create the placemark.
            placemark = new WorldWind.Placemark(new WorldWind.Position(latitude, longitude, 15), false, null);
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



                    if (latitude.indexOf(pickList.objects[p].position.latitude) === true && longitude.indexOf(pickList.objects[p].position.longitude) === true)
                    {
                        var index_num = latitude.indexOf(pickList.objects[p].position.latitude);

                        changeHTML('WorldBridgePopupBoxPosition');
                        toggle_visibility('WorldBridgePopupBoxPosition');
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