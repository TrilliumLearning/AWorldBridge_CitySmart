


var KEA_Grid_Map = "KEAGridMap_Layer";
//Layer name
var KEA_Grid_Map_Ref = "KEA_Grid_Map_Num";
//Name of third variable
var KEA_Grid_Map_Num;
//A Variable to hold the number of the layer





$(document).ready(function(){

    $(document).on("click","#KEA_Grid_Map", function(){

        function Find(Display_Name, Reference_Name) {
            for (m = 0; m < wwd.layers.length; m++) {
                if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
                    window[Reference_Name] = m;
                    m = wwd.layers.length
                }}}

        Find(KEA_Grid_Map, KEA_Grid_Map_Ref);
        if (wwd.layers[KEA_Grid_Map_Num].enabled === true) {
            wwd.layers[KEA_Grid_Map_Num].enabled = false}

        else {wwd.layers[KEA_Grid_Map_Num].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.75, -152.50, 25000));}




    })});
