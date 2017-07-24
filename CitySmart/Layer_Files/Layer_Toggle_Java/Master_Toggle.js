

function Find(Display_Name) {
    for (m = 0; m < wwd.layers.length; m++) {
        if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
            FOUND = m;
            return FOUND
        }}}






$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#KHS_Turbine", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("KHS_Turbine");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

            //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.793083,-152.397157, 2500));}




    })});



$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#KEA_Wind_Turbine", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("KEA_Turbine");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.785,-152.45, 2500));}





        Layer_Number = Find("KEA_Mosaic");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        else {wwd.layers[Layer_Number].enabled = true;}



    })});




$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#US_A_World_Bridge_Sites', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("A_World_Bridge");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}




    })});





$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Parcel_Map", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("KEAParcelMap_Layer");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.75, -152.50, 400000));}




    })});






$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#KEA_Grid_Map", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("KEAGridMap_Layer");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.75, -152.50, 400000));}




    })});







$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Bear_Valley_Golf_Course", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Bear_Valley_Golf_Course");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.7855, -152.56, 2500));}





        Layer_Number = Find("BVGC_Mosaic");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        else {wwd.layers[Layer_Number].enabled = true;}



    })});





$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Base_Roads", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("BaseRoad_Layer");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.75,-152.50, 20000));}




    })});



$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Main_KEA_Building", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("BaseRoad_Layer");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.75,-152.50, 2500));}




    })});









