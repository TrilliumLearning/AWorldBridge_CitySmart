/**
 * Created by Daniel on 4/27/2017.
 */




function changeHTML(id) {

    var e = document.getElementsByClassName(id);
//Depending on the version of javascript there might be a problem.
    e[0].innerHTML =
        `\<div class="popup-Header">
                <span class="close" id="closeIt"><a style="color: rgba(228,7,0,0.65)" href="javascript:void(0)" onclick="toggle_visibility('PopupBoxPosition');">&times;</a></span>
            </div>
            <br>
        <h4 style="color: rgb(36,118,51)" >  Site Name: ` + Globe_siteName[Globe_index_num] + `\</h4>
        <p style="color: rgb(89,89,89)">` + Globe_siteDescription[Globe_index_num] + `\</p>
		<br>
		<img src=".\\Pics\\` + Globe_pictureLocation[Globe_index_num] + `"/>
        \<p style="color: rgb(89,89,89)">Copyright: ` + Globe_copyright[Globe_index_num] + `\</p>
		<br>
        <p style="color: rgb(89,89,89)">Latitude and Longitude: ` + Globe_latitude_longitude[Globe_index_num] + `\</p>
		<br>
		<p style="color: rgb(89,89,89)">Site Link: <a style="color: rgb(0, 136, 234)" href="` + Globe_linkToSiteLocation[Globe_index_num] + `">` + Globe_linkToSiteLocation[Globe_index_num] + ` </a>\</p>
        <div class="popup-Header">
            </div>`

}

var Globe_latitude = [];
var Globe_longitude = [];

var Globe_location2 = [];
var Globe_copyright = [];
var Globe_linkToSiteLocation = [];
var Globe_pictureLocation = [];
var Globe_latitude_longitude = [];
var Globe_latitudeAndLongitudeDMS = [];
var Globe_siteDescription = [];
var Globe_siteName = [];

var Globe_index_num = 0;

var i = 0;

var Globe_myArray1 = [];


//var Globe_url = "http://localhost:63342/AWorldBridge_CitySmart2/CitySmart/Layer_Files/Layer_csv/Master_Julia_Test_File.csv";
//var Globe_url = "http://10.194.40.100/wwdev/CitySmart/Layer_Files/Layer_csv/Master.csv";

var Globe_url = "http://cs.aworldbridgelabs.com/CitySmart/Layer_Files/Layer_csv/MasterDTEST.csv";


var Globe_new_list = [];


//Internal Kodiak server IP to UNESCO information
//url = "http://10.194.40.100/wwdev/CitySmart/Compiled_UNESCO1.csv";

Papa.parse(Globe_url, {

    header: true,

    skipEmptyLines: true,

    download: true,

    complete: function (results) {
        Globe_myArray1 = results.data;

        parseCsv1();

        //showMe();
        //console.log(myArray);
    }

});


//This function seperates all of the columns into their own arrays and then pushes their data into arrays defined above and outside of the function

function parseCsv1(){

    for (i = 0; i < Globe_myArray1.length; i++) {

//Separates arrays
        Globe_location1 = Globe_myArray1[i]['Location'];
        Globe_copyright1 = Globe_myArray1[i]['Copyright'];
        Globe_linkToSiteLocation1 = Globe_myArray1[i]['Link to site location'];
        Globe_pictureLocation1 = Globe_myArray1[i]['Picture Location'];
        Globe_latitude_longitude1 = Globe_myArray1[i]['Latitude and Longitude(Decimal)'];
        Globe_latitudeAndLongitudeDMS1 = Globe_myArray1[i]['Latitude and Longitude(Deg Min Sec)'];
        Globe_siteDescription1 = Globe_myArray1[i]['Site Description'];
        Globe_siteName1 = Globe_myArray1[i]['Site Name'];

//Pushes into global variables
        Globe_location2.push(Globe_location1);
        Globe_copyright.push(Globe_copyright1);
        Globe_linkToSiteLocation.push(Globe_linkToSiteLocation1);
        Globe_pictureLocation.push(Globe_pictureLocation1);

//Spaces inbetween latitude and longitude are taken out and latitude and longitude are split into seperate strings but are still in the same array.
        Globe_latitude_longitude.push(Globe_latitude_longitude1.replace(/\s+/g, '').split(','));
        Globe_latitudeAndLongitudeDMS.push(Globe_latitudeAndLongitudeDMS1);
        Globe_siteDescription.push(Globe_siteDescription1);
        Globe_siteName.push(Globe_siteName1);

    }

    for (i = 0; i < Globe_myArray1.length; i++) {
        Globe_latitude1 = Globe_latitude_longitude[i][0];
        Globe_longitude1 = Globe_latitude_longitude[i][1];

        Globe_latitude.push(Globe_latitude1);
        Globe_longitude.push(Globe_longitude1)

    }
}



var wwd;
var layerManager;

requirejs(['./src/WorldWind',
        './LayerManager'],

    function (ww,
              LayerManager) {
        "use strict";

        // Tell World Wind to log only warnings.
        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        // Create the World Window.
        wwd = new WorldWind.WorldWindow("canvasOne");


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

        // Create a layer manager for controlling layer visibility.
        layerManager = new LayerManager(wwd);

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



                    // This logic is not fool proof. There needs to be a comparision to insure that
                    // The indexes are equal to each other. SM

                    if ((Globe_latitude.indexOf(pickList.objects[p].position.latitude > -1)) && (Globe_longitude.indexOf(pickList.objects[p].position.longitude) > -1))
                    {
                        // index_num was being defined in this scope instead of setting the global variable SM

//This is what searches for the index of the latitude so that it's number can be used to find the corresponding information

                        Globe_index_num = Globe_latitude.indexOf(pickList.objects[p].position.latitude);

//This activates code that dynamically creates, and toggles a popup box with the information from the excel/csv file
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

        //return wwd;
        console.log(wwd)
    });

