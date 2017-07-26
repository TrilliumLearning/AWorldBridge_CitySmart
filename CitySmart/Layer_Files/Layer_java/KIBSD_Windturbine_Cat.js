/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */
/*
 * Illustrates how to create a placemark with a dynamically created image.
 *
 * @version $Id: CustomPlacemark.js 3320 2015-07-15 20:53:05Z dcollins $
 */











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
    //else {Geo()}
    else {


        document.getElementById("myListCountry").selectedIndex = 1;
        interfaceCityCreation();
        document.getElementById("ACToggle").classList.toggle('is-active');
        $("#ACToggle").attr("aria-expanded","true");
        $("#ACToggle").attr("aria-selected","true");
        document.getElementById("Layer Menu").setAttribute("style", "display: block;");
        document.getElementById('Layer Menu').setAttribute('aria-hidden','false');

        Ortho1();

        Geo()
    }


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
    ["US A World Bridge Sites","World_Bridge_Sites.csv",['rgb(187,0,255)','rgb(0,255,0)','rgb(187,0,255)']],
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
