


var KIBSD_Point = "KIBSD Turbine";
//Layer name
var KIBSD_Point_Ref = "KIBSD_Point_Num";
//Name of third variable
var KIBSD_Point_Num;
//A Variable to hold the number of the layer





$(document).ready(function(){

    $(document).on("click","#KHS_Turbine", function(){

        function Find(Display_Name, Reference_Name) {
            for (m = 0; m < wwd.layers.length; m++) {
                if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
                    window[Reference_Name] = m;
                    m = wwd.layers.length
                }
            }}

        Find(KIBSD_Point, KIBSD_Point_Ref);
if (wwd.layers[KIBSD_Point_Num].enabled === true) {
    wwd.layers[KIBSD_Point_Num].enabled = false}
    
else {wwd.layers[KIBSD_Point_Num].enabled = true}
    
    });

});
