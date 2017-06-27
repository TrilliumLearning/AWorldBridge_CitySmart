






var BVGC_Point = "Bear Valley Golf Course";
var BVGC_Point_Ref = "BVGC_Point_Num";
var BVGC_Point_Num;


var BVGC_Orthomosaic = "BVGC_May2016_mosaic";
var BVGC_Orthomosaic_Ref = "BVGC_Point_Num";
var BVGC_Orthomosaic_Num;





$(document).ready(function(){


    $("#bvgc").click(function(){

function Find(Display_Name, Reference_Name) {
            for (m = 0; m < wwd.layers.length; m++) {
                if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
                    window[Reference_Name] = m;
                    m = wwd.layers.length
                }
        }}

            Find(BVGC_Point,BVGC_Point_Ref);

        if (wwd.layers[BVGC_Point_Num].enabled === true) {
            wwd.layers[BVGC_Point_Num].enabled = false}

        else {wwd.layers[BVGC_Point_Num].enabled = true}

        Find(BVGC_Orthomosaic,BVGC_Orthomosaic_Ref);

    if (wwd.layers[BVGC_Orthomosaic_Num].enabled === true) {
        wwd.layers[BVGC_Orthomosaic_Num].enabled = false}

    else {wwd.layers[BVGC_Orthomosaic_Num].enabled = true}

})});
