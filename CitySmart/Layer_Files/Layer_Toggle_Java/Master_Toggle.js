

function Find(Display_Name) {
    for (m = 0; m < wwd.layers.length; m++) {
        if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
            FOUND = m;
            return FOUND
        }}}










//Fei Tian Energy Tests
/*
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Fei_Tian_Energy_Tests", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Fei_Tian_Energy_Tests");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(41.452035, -74.438758, 900));}




    })});
*/



//KHS Turbine
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



//KEA Turbine
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



//KEA Grid Map
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#KEA_Grid_Map", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("KEAGridMap_Layer");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.71, -152.50, 40000));}


        //Put the name of the layer in the "find" function
        Layer_Number = Find("Circuit_Direction");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}


    })});




//KEA Overhead Cables and Poles
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Overhead_Cables_and_Poles", function(){



        //Put the name of the layer in the "find" function
        Layer_Number = Find("Utility");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}




        //Put the name of the layer in the "find" function
        Layer_Number = Find("OHC_M");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.70, -152.43, 40000));}



        //Put the name of the layer in the "find" function
        Layer_Number = Find("OHC_1");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}



        //Put the name of the layer in the "find" function
        Layer_Number = Find("OHC_2");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}



        //Put the name of the layer in the "find" function
        Layer_Number = Find("OHC_3");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}

    })});




//KEA Underground Cables
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Underground_Cables", function(){










        //Put the name of the layer in the "find" function
        Layer_Number = Find("UGC_1");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.75, -152.50, 37000));}




        //Put the name of the layer in the "find" function
        Layer_Number = Find("UGC_2");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}



        //Put the name of the layer in the "find" function
        Layer_Number = Find("UGC_3");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}


    })});



//Kodiak Terror Lake Powerhouse Transmission Lines
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Terror_Lake_Powerhouse_Transmission_Lines", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Transmission_Lines");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.76, -152.62, 35000));}



        Layer_Number = Find("Wire_Transmission_Kodiak");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}


    })});





//Kodiak Small Transformers
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Small_Transformers", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Small_Transformers");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.71, -152.50, 40000));}




    })});




//Kodiak Large Transformers
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Large_Transformers", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Large_Transformers");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.71, -152.50, 40000));}




    })});




//Kodiak Substations
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Substations", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Substations");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.75, -152.50, 25000));}






        //Put the name of the layer in the "find" function
        Layer_Number = Find("Airport_Substation");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true}

    })});





//Kodiak Fuses
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Fuses", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("FUSE_line_Kodiak");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.75, -152.50, 25000));}



/*
        //Put the name of the layer in the "find" function
        Layer_Number = Find("FUSE_2points_Kodiak");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}




        //Put the name of the layer in the "find" function
        Layer_Number = Find("FUSE_3points_Kodiak");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}
*/

    })});





//Kodiak Poles With Guy Cable Support
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Poles_With_Guy_Cable_Support", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Poles_with_Guy_Cable_Support");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.71, -152.50, 40000));}




    })});





//Tuluksak Energy Budget
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Tuluksak_Energy_Budget', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Tuluksak_Energy_Budget");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(61.098667, -160.956686, 1200));}




    })});




//Fei Tian Energy Grid
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Fei_Tian_Energy_Grid", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("power");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(41.452035, -74.438758, 1500));}



        //Put the name of the layer in the "find" function
        Layer_Number = Find("power2");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}


/*
        //Put the name of the layer in the "find" function
        Layer_Number = Find("FTAA_Energy_Tests");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}
*/

    })});




//Main KEA Building
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Main_KEA_Building", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_KEA_Office");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.798113, -152.388234, 2500));}




    })});





//Kodiak Terror Dam
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Terror_Lake", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Terror_Lake_Powerhouse");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.6861,-152.895, 2500));}




    })});





//Kodiak's Trident Seafoods
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Trident_Seafoods", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Trident_Seafoods");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.786598, -152.404565, 1200));}


        //Put the name of the layer in the "find" function
        Layer_Number = Find("Line_WMS_Kodiak_Trident_Seafoods");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}





        //Put the name of the layer in the "find" function
        Layer_Number = Find("Polygon_WMS_Kodiak_Trident_Seafoods");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}

    })});




//Kodiak's Alaska Pacific Seafoods
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
$(document).on("click","#Kodiak_Alaska_Pacific_Seafoods", function(){

   //Put the name of the layer in the "find" function
   Layer_Number = Find("Kodiak_Alaska_Pacific_Seafoods");




   if (wwd.layers[Layer_Number].enabled === true) {
       wwd.layers[Layer_Number].enabled = false}

   //Put the zoom function in the first enabling layer

   else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.7847,-152.4228, 2500));}




})});




//Kodiak's International Seafoods of Alaska
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_International_Seafoods_of_Alaska", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_International_Seafoods_of_Alaska");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.786268, -152.415958, 2500));}




    })});




//Kodiak's Ocean Beauty Seafoods
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Ocean_Beauty_Seafoods", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Ocean_Beauty_Seafoods");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.785057,-152.420816, 2500));}




    })});





//Kodiak Base and Airport Drainage System
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Base_and_Airport_Drainage_System", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("MANHOLE_line");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.75,-152.50, 15000));}



        //Put the name of the layer in the "find" function
        Layer_Number = Find("MANHOLE_polygon");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}



    })});





//FTAA Water Tests
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Fei_Tian_Water_Tests", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Fei_Tian_Water_Tests");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(41.452035, -74.438758, 900));}




    })});






//FTAA Water Grid
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#FTAA_Water_Grid", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("water1_FTAA");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(41.452035, -74.438758, 2000));}



        //Put the name of the layer in the "find" function
        Layer_Number = Find("water1c_FTAA");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}


        //Put the name of the layer in the "find" function
        Layer_Number = Find("water2_FTAA");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}




        //Put the name of the layer in the "find" function
        Layer_Number = Find("water2c_FTAA");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}





        //Put the name of the layer in the "find" function
        Layer_Number = Find("water3_FTAA");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}





        //Put the name of the layer in the "find" function
        Layer_Number = Find("water3c_FTAA");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}




    })});














//Kodiak Bear Valley Golf Course
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Bear_Valley_Golf_Course", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Bear_Valley_Golf_Course");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.7855, -152.56, 1000));}





        Layer_Number = Find("BVGC_Mosaic");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        else {wwd.layers[Layer_Number].enabled = true;}



    })});














//Kodiak Benny Benson State Airport
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Benny_Benson_State_Airport", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Benny_Benson_State_Airport");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.754298, -152.514823, 1250));}




    })});





//Kodiak Municipal Airport
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Municipal_Airport", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Municipal_Airport");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.806425, -152.373362, 2500));}




    })});






//Kodiak Budget Rent-A-Car
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Budget_Rent_A_Car", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Budget_Rent_A_Car");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.755658, -152.514098, 2500));}




    })});






//Kodiak St. Paul Harbor
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_St_Paul_Harbor", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_St_Paul_Harbor");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.786944, -152.410215, 2500));}




    })});








//Kodiak St. Herman Harbor
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_St_Herman_Harbor", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_St_Herman_Harbor");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.782760, -152.406014, 2500));}




    })});







//Kodiak Pier One
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Pier_One", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Pier_One");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.787113, -152.402898, 2500));}




    })});






//Kodiak Pier Two
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Pier_Two", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Pier_Two");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.783946, -152.427082, 2500));}




    })});





//Kodiak Base Roads
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Base_and_Airport_Roads", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("BaseRoad_Layer");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.75,-152.50, 15000));}




    })});




















//Kodiak Parcel Map
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






//Kodiak Wells Fargo
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Wells_Fargo", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Wells_Fargo");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.787323, -152.406335, 2500));}




    })});






//Kodiak First National
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_First_National", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_First_National");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.788570, -152.406096, 2500));}




    })});






//Kodiak Key Bank
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Key_Bank", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Key_Bank");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.788551, -152.407104, 2500));}




    })});




//Kodiak Credit Union
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Credit_Union", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Credit_Union");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.792517, -152.404054, 2500));}




    })});




//Kodiak Post Office
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Post_Office", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Post_Office");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.792517, -152.404054, 2500));}




    })});






//Kodiak Island Providence Medical Center
$(document).ready(function(){

//If there are multiple layers being activated, put the zoom function in the first layer activation marked below


//Put the name of the switch's id in the "on" function
    $(document).on("click","#Providence_Kodiak_Island_Medical_Center", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Island_Providence_Medical_Center");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.800901, -152.375615, 5000));}






    })});





//Kodiak KIMA
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_KIMA', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_KIMA");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.800901, -152.375615, 2500));}




    })});






//Kodiak Care Clinic
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_Care_Clinic', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Care_Clinic");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.788872, -152.406055, 2500));}




    })});





//Kodiak Public Health Center
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_Public_Health_Center', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Public_Health_Center");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;layerManager.goToAnimator.goTo(new WorldWind.Position(57.788872, -152.406055, 2500));}




    })});





//Kodiak Mill Bay Health Center
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_Mill_Bay_Health_Center', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Mill_Bay_Health_Center");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.811924, -152.356087, 2500));}




    })});






//Kodiak Kodiak Veterinary Clinic
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_Veterinary_Clinic', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Veterinary_Clinic");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.802591, -152.377762, 2500));}




    })});





//Kodiak Vision Clinic
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_Vision_Clinic', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Vision_Clinic");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.788957, -152.409432, 2500));}




    })});






//Kodiak Vision Source
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_Vision_Source_Eyecare_Excellence', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Vision_Source_Eyecare_Excellence");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.812503, -152.354037, 2500));}




    })});











//Kodiak City Fire Department
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_City_Fire_Department', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_City_Fire_Department");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.791584, -152.405380, 2500));}




    })});







//Kodiak Bayside Volunteer Fire Department
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_Bayside_Volunteer_Fire_Department', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Bayside_Volunteer_Fire_Department");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.825524, -152.354888, 2500));}




    })});






//Kodiak Base Fire Department
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_Base_Fire_Department', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Base_Fire_Department");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.748890, -152.495890, 2500));}




    })});






//Kodiak Police Department
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#Kodiak_Police_Department', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Police_Department");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.805178, -152.372623, 2500));}




    })});






//Kodiak ESP Sensors

$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#ESP_Sensors', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("ESP_SENSORS_ALASKA");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(64.16, -143.85, 2500000));}




    })});



























//USA A World Bridge
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click",'#US_A_World_Bridge_Sites', function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("A_World_Bridge");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(48.92, -101.47, 5800000));}




    })});





//Kodiak Alutiq Museum
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Alutiq_Museum", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Alutiq_Museum");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.788894, -152.402316, 2500));}




    })});







//Kodiak Baranov Museum
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Baranov_Museum", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Baranov_Museum");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.787681, -152.403432, 2500));}




    })});






//Kodiak Community Library
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Public_Library", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Public_Library");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.792240, -152.397467, 700));}




    })});






//Kodiak North Star Elementary
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_North_Star_Elementary", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_North_Star_Elementary");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.821627, -152.365525, 2500));}




    })});







//Kodiak Main Elementary
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Main_Elementary", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Main_Elementary");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.795413, -152.391249, 2500));}




    })});






//Kodiak East Elementary
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_East_Elementary", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_East_Elementary");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.804687, -152.367064, 2500));}




    })});





//Kodiak Peterson Elementary
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Peterson_Elementary", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Peterson_Elementary");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.747176, -152.496252, 2500));}




    })});






//Kodiak Middle School
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Middle_School", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Middle_School");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.793691, -152.391200, 2500));}




    })});







//Kodiak High School
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_High_School", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_High_School");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.794451, -152.394476, 2500));}




    })});






//Kodiak Community College
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Kodiak_Community_College", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Kodiak_Community_College");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.807426, -152.363391, 3200));}




    })});




//Fei Tian Academy of the Arts UNESCO Prototype
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#FTAA_UNESCO_Prototype", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("FTAA_UNESCO_Prototype");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(41.451526,-74.439336, 2500));}




    })});




//Fei Tian Academy of the Arts
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Fei_Tian_Academy_of_the_Arts", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Fei_Tian_Academy_of_the_Arts");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(41.451526,-74.439336, 1000));}



        //Put the name of the layer in the "find" function
        Layer_Number = Find("FTAA_Campus");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true;}


    })});




//Fei Tian College
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Fei_Tian_College", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("Fei_Tian_College");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(41.451526,-74.439336, 2500));}




    })});
























//Poles With Guy Cable Support
$(document).ready(function(){

    //If there are multiple layers being activated, put the zoom function in the first layer activation marked below


    //Put the name of the switch's id in the "on" function
    $(document).on("click","#Poles_With_Guy_Cables_Support", function(){

        //Put the name of the layer in the "find" function
        Layer_Number = Find("M1");




        if (wwd.layers[Layer_Number].enabled === true) {
            wwd.layers[Layer_Number].enabled = false}

        //Put the zoom function in the first enabling layer

        else {wwd.layers[Layer_Number].enabled = true; layerManager.goToAnimator.goTo(new WorldWind.Position(57.71, -152.50, 40000));}




    })});






















