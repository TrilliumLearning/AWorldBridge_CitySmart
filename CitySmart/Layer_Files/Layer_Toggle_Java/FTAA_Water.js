


var FTAA_Point2 = "Water";
var FTAA_Point_Ref2 = "FTAA_Point_Num2";
var FTAA_Point_Num2;





$(document).ready(function(){
    $("#ftaa_water").click(function(){

        function Find(Display_Name, Reference_Name) {
            for (m = 0; m < wwd.layers.length; m++) {
                if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
                    window[Reference_Name] = m;
                    m = wwd.layers.length
                }
            }}

        Find(FTAA_Point2, FTAA_Point_Ref2);
if (wwd.layers[FTAA_Point_Num2].enabled === true) {
    wwd.layers[FTAA_Point_Num2].enabled = false}
    
else {wwd.layers[FTAA_Point_Num2].enabled = true}
    
    });
    
});
