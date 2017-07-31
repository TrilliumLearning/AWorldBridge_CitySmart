


var accordionCategories = [

    "Energy-label",
    "Water-label",
    "Agriculture-label",
    "Transportation-label",
    "Economics-label",
    "Health Services-label",
    "Risk Management-label",
    "Education-label"

];






function accordionToggling(Exemption){


    for(i = 0; i < accordionCategories; i++){

        if (i === Exemption){}
        else {
            if ($(("#" + i)).attr("aria-selected") === "false") {
            }
            else {
                document.getElementById(i).click();
            }
        }


    }





}






document.getElementById("Energy-label").addEventListener("click", accordionToggling("Energy-label"));

document.getElementById("Water-label").addEventListener("click", accordionToggling("Water-label"));

document.getElementById("Agriculture-label").addEventListener("click", accordionToggling("Agriculture-label"));

document.getElementById("Transportation-label").addEventListener("click", accordionToggling("Transportation-label"));

document.getElementById("Economics-label").addEventListener("click", accordionToggling("Economics-label"));

document.getElementById("Health Services-label").addEventListener("click", accordionToggling("Health Services-label"));

document.getElementById("Risk Management-label").addEventListener("click", accordionToggling("Risk Management-label"));

document.getElementById("Education-label").addEventListener("click", accordionToggling("Education-label"));









str = str.replace(/\s/g, '');













