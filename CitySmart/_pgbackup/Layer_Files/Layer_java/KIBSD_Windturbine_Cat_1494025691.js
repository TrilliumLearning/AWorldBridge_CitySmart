/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */
/*
 * Illustrates how to create a placemark with a dynamically created image.
 *
 * @version $Id: CustomPlacemark.js 3320 2015-07-15 20:53:05Z dcollins $
 */



var Point_Layers = [
    ["KIBSD Turbine","KHS_Wind_Turbine.csv"],
    ["World Bridge","World_Bridge_Sites.csv"],
    ["KIBSD Turbine","KEA_Wind_Turbine.csv"],

];


var new_list = [];

var latitude = [];
var longitude = [];
var latitude_longitude = [];


var index_num = 0;

var i = 0;
var k = 0;
var l = 0;
var p = 0;
var q = 0;
var myArray = [];


requirejs(['./src/WorldWind',
        './LayerManager'],

    function (ww,
              LayerManager) {
        "use strict";










    for (k = 0; k < Point_Layers.length; k++) {
        var CSV_NAME = Point_Layers[k][1];

		//var url = "http://10.194.40.100/wwdev/CitySmart/Layer_Files/Layer_csv/" + CSV_NAME;
        var url = "http://localhost:40002/file:///Users/kshin/Desktop/CitySmart/Layer_Files/Layer_csv/" + CSV_NAME;

        /*
         for(i = 0; i < myArray.length; i++)
         {
         for(key in options[i])
         {
         alert(options[i][key])
         }

         }
         */

//Internal Kodiak server IP to UNESCO information
//url = "http://10.194.40.100/wwdev/CitySmart/Compiled_UNESCO1.csv";

        Papa.parse(url, {

            header: true,

            skipEmptyLines: true,

            download: true,

            complete: function (results) {
                myArray.push(results.data);



                if (myArray.length === Point_Layers.length) {parseCsv()}
                else {}
                //showMe();
                //console.log(myArray);
            }

        });



}


function parseCsv() {
    for (l = 0; l < myArray.length; l++) {

        var New_Array = myArray[l];

        for (q = 0; q < New_Array.length; q++) {

            var latitude_longitude1 = New_Array[q]['Latitude and Longitude(Decimal)'];
            latitude_longitude.push(latitude_longitude1.replace(/\s+/g, '').split(','));
            //latitude1 = latitude_longitude[i][0];
            //longitude1 = latitude_longitude[i][1];

            //latitude.push(latitude1);
            //longitude.push(longitude1)

        }


        //for (p = 0; p < New_Array.length; p++) {

            var Layer_Name = Point_Layers[l][0];
            Placemark_Creation(Layer_Name);

        //}

    }

}


function Placemark_Creation(Layer_Name) {


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
gradient.addColorStop(0, 'rgb(187, 0, 255)');
gradient.addColorStop(0.5, 'rgb(0, 255, 0)');
gradient.addColorStop(1, 'rgb(187, 0, 255)');

ctx2d.fillStyle = gradient;
ctx2d.arc(c, c, outerRadius, 0, 2 * Math.PI, false);
ctx2d.fill();


wwd.addLayer(placemarkLayer);
//placemarkLayer.enabled = false;

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

latitude_longitude = []


}

    });

    /*
     for (i = 0; i < myArray.length; i++) {

     latitude_longitude1 = myArray[i]['Latitude and Longitude(Decimal)'];
     latitude_longitude.push(latitude_longitude1.replace(/\s+/g, '').split(','));

     }

     for (i = 0; i < myArray.length; i++) {
     latitude1 = latitude_longitude[i][0];
     longitude1 = latitude_longitude[i][1];

     latitude.push(latitude1);
     longitude.push(longitude1)

     }
     */

//This function seperates all of the columns into their own arrays and then pushes their data into arrays defined above and outside of the function













//



































/*




requirejs(['./src/WorldWind',
        './LayerManager'],

    function (ww,
              LayerManager) {
        "use strict";

        var placemark,
            placemarkAttributes = new WorldWind.PlacemarkAttributes(null),
            highlightAttributes,
            placemarkLayer = new WorldWind.RenderableLayer("A World Bridge"),

            //Placemark locations are defined lower down!!!!!!!!! (placeholders are right below (175 and 176))


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
//This is the color of the placeholder and appearance (Most likely)
        var gradient = ctx2d.createRadialGradient(c, c, innerRadius, c, c, outerRadius);
        gradient.addColorStop(0, 'rgb(187, 0, 255)');
        gradient.addColorStop(0.5, 'rgb(0, 255, 0)');
        gradient.addColorStop(1, 'rgb(187, 0, 255)');

        ctx2d.fillStyle = gradient;
        ctx2d.arc(c, c, outerRadius, 0, 2 * Math.PI, false);
        ctx2d.fill();


        wwd.addLayer(placemarkLayer);
        //wwd.layers[7].enabled = false;

        var arrayLength = latitude_longitude.length;

//Takes latitude and longitude values into a new local variable to parse and make into points on the globe.
//This is the loop that goes through all of the coordinate pairs from the parsed file and makes points for them.

        for (var i = 0; i < arrayLength; i++) {
            //console.log(i);
            //alert(latitude_longitude[i]);

            new_list = latitude_longitude[i];


            latitude_3 = new_list[0];
            longitude_3 = new_list[1];
//Prints coordinates to console as they are looped through.
            //console.log(latitude_3);
            //console.log(longitude_3);

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
//End of point creation


    });

    */