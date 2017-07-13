


var FTAA_Point = "Energy";
var FTAA_Point_Ref = "FTAA_Point_Num";
var FTAA_Point_Num;





$(document).ready(function(){
    $("#ftaa_energy").click(function(){

        function Find(Display_Name, Reference_Name) {
            for (m = 0; m < wwd.layers.length; m++) {
                if (Display_Name.indexOf(wwd.layers[m].displayName) === 0) {
                    window[Reference_Name] = m;
                    m = wwd.layers.length
                }
            }}

        Find(FTAA_Point, FTAA_Point_Ref);
if (wwd.layers[FTAA_Point_Num].enabled === true) {
    wwd.layers[FTAA_Point_Num].enabled = false}
    
else {wwd.layers[FTAA_Point_Num].enabled = true}
    
    });
    
});
