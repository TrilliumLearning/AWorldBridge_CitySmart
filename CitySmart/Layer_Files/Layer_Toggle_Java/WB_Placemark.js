




var AWB_Point = "US A World Bridge Sites";
var AWB_Point_Ref = "AWB_Point_Num";
var AWB_Point_Num;







$(document).ready(function(){


    $(document).on("click", '#US_A_World_Bridge_Sites',

        function(){

function Find(Display_Name, Reference_Name) {
            for (m = 0; m < wwd.layers.length; m++) {
                if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
                    window[Reference_Name] = m;
                    m = wwd.layers.length
                }
        }}

            Find(AWB_Point,AWB_Point_Ref);

        if (wwd.layers[AWB_Point_Num].enabled === true) {
            wwd.layers[AWB_Point_Num].enabled = false}

        else {wwd.layers[AWB_Point_Num].enabled = true}



})});
