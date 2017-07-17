


var KEA_Point = "KEA Turbine";
var KEA_Point_Ref = "KEA_Point_Num";
var KEA_Point_Num;

var KEA_Orthomosaic = "KEA Mosaic";
var KEA_Orthomosaic_Ref = "KEA_Orthomosaic_Num";
var KEA_Orthomosaic_Num;






$(document).ready(function(){


    $(document).on('click', "#KEA_Wind_Turbine",

        function(){

function Find(Display_Name, Reference_Name) {
            for (m = 0; m < wwd.layers.length; m++) {
                if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
                    window[Reference_Name] = m;
                    m = wwd.layers.length
                }
        }}

            Find(KEA_Point,KEA_Point_Ref);

        if (wwd.layers[KEA_Point_Num].enabled === true) {
            wwd.layers[KEA_Point_Num].enabled = false}

        else {wwd.layers[KEA_Point_Num].enabled = true}

            Find(KEA_Orthomosaic,KEA_Orthomosaic_Ref);

        if (wwd.layers[KEA_Orthomosaic_Num].enabled === true) {
            wwd.layers[KEA_Orthomosaic_Num].enabled = false}

        else {wwd.layers[KEA_Orthomosaic_Num].enabled = true}







})});
