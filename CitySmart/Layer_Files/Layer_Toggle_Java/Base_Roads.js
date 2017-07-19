


var Base_Road = "BaseRoad_Layer";
//Layer name
var Base_Road_Ref = "Base_Road_Num";
//Name of third variable
var Base_Road_Num;
//A Variable to hold the number of the layer





$(document).ready(function(){

    $(document).on("click","#Base_Roads", function(){

        function Find(Display_Name, Reference_Name) {
            for (m = 0; m < wwd.layers.length; m++) {
                if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
                    window[Reference_Name] = m;
                    m = wwd.layers.length
                }}}

        Find(Base_Road, Base_Road_Ref);
        if (wwd.layers[Base_Road_Num].enabled === true) {
            wwd.layers[Base_Road_Num].enabled = false}

        else {wwd.layers[Base_Road_Num].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.793083,-152.397157, 100000));}




    })});
