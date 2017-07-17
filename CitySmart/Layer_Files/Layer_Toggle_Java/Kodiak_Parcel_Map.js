/**
 * Created by docto on 7/15/2017.
 */




var Parcel_Map = "Kodiak Parcel Map";
//Layer name
var Parcel_Map_Ref = "Parcel_Map_Num";
//Name of third variable
var Parcel_Map_Num;
//A Variable to hold the number of the layer





$(document).ready(function(){

    $(document).on("click","#Kodiak_Parcel_Map", function(){

        function Find(Display_Name, Reference_Name) {
            for (m = 0; m < wwd.layers.length; m++) {
                if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
                    window[Reference_Name] = m;
                    m = wwd.layers.length
                }
            }}

        Find(Parcel_Map, Parcel_Map_Ref);
        if (wwd.layers[Parcel_Map_Num].enabled === true) {
            wwd.layers[Parcel_Map_Num].enabled = false}

        else {wwd.layers[Parcel_Map_Num].enabled = true}

    });

});
