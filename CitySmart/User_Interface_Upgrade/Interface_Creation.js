var temporaryCountryValue = -1;



function replaceSpace(str){

    newString = str.replace(/\s/g, '');

    return newString
}


var countryString = `
    <p><label>Country</label><select id="myListCountry">
    <option value="-1">-Select a Country-</option>
    <option value="-2">All Layers</option>
`;


var cityString =`
    <p><label>City</label><select id="myListCountry">
    <option value="-1">-Select a City-</option>
`;


CCStringEnd = `
    </select></p>
`;

var accordianEnd = `
                                            </div>
                                       </li>
                                </ul>
`;



function interfaceCityCreation() {


    if (Number($('#myListCountry').val()) === -1){


        var e = document.getElementById("myListCity");

        e.innerHTML = `
        <option value="-1">-Select a City-</option>
        `

        var b = document.getElementById("Layer Menu");

        b.innerHTML = ``

    }
    else if (Number($('#myListCountry').val()) === -2){


        var e = document.getElementById("myListCity");

        e.innerHTML = `
        <option value="-2">All Layers</option>
        `;

        interfaceCreation();

    }
    else if (Number($('#myListCountry').val()) === temporaryCountryValue){}
    else if (typeof Number($('#myListCountry').val()) === 'undefined'){}
    else{

        var q = document.getElementById('Layer Menu');

        q.innerHTML = ``;
        //console.log(typeof Number($('#myListCountry').val()));
        //console.log($('#myListCountry').val());

        CV = Number($('#myListCountry').val());


///////////////////////////////////////////////////////////////////
        function cityStringCreation(id){

            tempCity = city[CV];
            TcityString = cityString;

            for (a = 0; a < tempCity.length; a ++){

                cityMidString = `<option value="` + a.toString() + `"/>` + tempCity[a] + `</option>`;

                TcityString = TcityString + cityMidString
            }

            TcityString = TcityString + CCStringEnd;

            var e = document.getElementById(id);

            e.innerHTML = TcityString
        }

        cityStringCreation('myListCity')

    }

    temporaryCountryValue = $('#myListCountry').val()

}



$('#myListCountry').change(function(){interfaceCityCreation()});



function interfaceCreation() {


    if (Number($('#myListCity').val()) === -1) {
    }
    else if (Number($('#myListCity').val()) === temporaryCountryValue) {
    }
    else if (Number($('#myListCity').val()) === -2) {



        stringStorage = [];

        for (b = 0; b < ALLcategory.length; b++) {
            SBC = ALLsubCategory[b];



            categoryAccordianStart = `

        <ul id="` + replaceSpace(ALLcategory[b]) + `" class="accordion" data-accordion role="tablist" data-allow-all-closed="true">
                <li class="accordion-item">
                <a style="height:55px"  role="tab" class="accordion-title" id="` + replaceSpace(ALLcategory[b]) + `" ><h6 id="` + replaceSpace(ALLcategory[b]) + "-word" + `">` + ALLcategory[b] + `</h6></a>
            <div id="` + replaceSpace(ALLcategory[b]) + `" class="accordion-content" role="tabpanel" data-tab-content >
`;
//href="#panel173"     id="panel173-heading"        aria-controls="panel173"          aria-labelledby="panel173-heading"

            stringStorage.push(categoryAccordianStart);

            for (c = 0; c < SBC.length; c++) {


                NBR = ALLnameAndButton[b];
                NBR2 = NBR[c];



                subCategoryAccordianStart = `

        <ul id="` + SBC[c] + `" class="accordion" data-accordion role="tablist" data-allow-all-closed="true">
                <li class="accordion-item">
                <a style="height:55px"  role="tab" class="accordion-title"  id="` + replaceSpace(SBC[c]) + `"><h6>` + SBC[c] + `</h6></a>
            <div id="` + replaceSpace(SBC[c]) + `" class="accordion-content" role="tabpanel" data-tab-content >
`;

//href="#panel173"           id="panel173-heading"        aria-controls="panel173"       aria-labelledby="panel173-heading"

                stringStorage.push(subCategoryAccordianStart);


                var checkBoxStringList = [];



                for (d = 0; d < NBR2.length; d++) {

                    TempString = `
                        <div>
                        <h6><a href="#">-` + NBR2[d][0] + ` ` + `</a><label class="switch right">
                        <input type="checkbox">
                        <div id= "` + NBR2[d][1] + `" style="height:12px" class="slider round"></div>
                        </label></h6>
                        </div>
                    `;
                    checkBoxStringList.push(TempString)
                }

                var checkBoxString = checkBoxStringList[0];
                for (e = 1; e < checkBoxStringList.length; e++) {

                    checkBoxString = checkBoxString + checkBoxStringList[e]

                }
                stringStorage.push(checkBoxString);


                stringStorage.push(accordianEnd);
            }


            stringStorage.push(accordianEnd);
        }


        TS = stringStorage[0];

        for (f = 1; f < stringStorage.length; f++) {

            TS = TS + stringStorage[f];


        }

        var q = document.getElementById('Layer Menu');

        q.innerHTML = TS;

        $(document).foundation()
    }






    else if (typeof Number($('#myListCity').val()) === 'undefined') {
    }
    else {



        CountryN = Number($('#myListCountry').val());
        CityN = Number($('#myListCity').val());

        Ca1 = category[CountryN];
        Ca2 = Ca1[CityN];

        stringStorage = [];

        for (b = 0; b < Ca2.length; b++){
            Sb1 = subCategory[CountryN];
            Sb2 = Sb1[CityN];
            Sb3 = Sb2[b];



            categoryAccordianStart =`

        <ul id="` + replaceSpace(Ca2[b]) + `" class="accordion" data-accordion role="tablist" data-allow-all-closed="true">
                <li class="accordion-item">
                <a style="height:55px"  role="tab" class="accordion-title"  id="` + replaceSpace(Ca2[b]) + `"><h6 id="` + replaceSpace(Ca2[b]) + "-word" + `">` + Ca2[b] + `</h6></a>
            <div id="` + replaceSpace(Ca2[b]) + `" class="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel173-heading">
`;

//href="#panel173"          id="panel173-heading" aria-controls="panel173"



            stringStorage.push(categoryAccordianStart);

            for (c = 0; c < Sb3.length; c++) {
                NR1 = nameAndButton[CountryN];
                NR2 = NR1[CityN];
                NR3 = NR2[b];
                NR4 = NR3[c];



                subCategoryAccordianStart =`

        <ul id="` + Sb3[c] + `" class="accordion" data-accordion role="tablist" data-allow-all-closed="true">
                <li class="accordion-item">
                <a style="height:55px"  role="tab" class="accordion-title" ><h6>` + Sb3[c] + `</h6></a>
            <div id="` + replaceSpace(Sb3[c]) + `" class="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel173-heading">
`;

//href="#panel173"            id="panel173-heading" aria-controls="panel173"






                stringStorage.push(subCategoryAccordianStart);


                var checkBoxStringList = [];

                for (d = 0; d < NR4.length; d++){

                    TempString = `
                        <div>
                        <h6><a href="#">-` + NR4[d][0] +` ` + `</a><label class="switch right">
                        <input type="checkbox">
                        <div id= "` + NR4[d][1] + `" style="height:12px" class="slider round"></div>
                        </label></h6>
                        </div>
                    `;
                    checkBoxStringList.push(TempString)
                }

                var checkBoxString = checkBoxStringList[0];
                for (e = 1; e < checkBoxStringList.length; e++){

                    checkBoxString = checkBoxString + checkBoxStringList[e]

                }
                stringStorage.push(checkBoxString);


                stringStorage.push(accordianEnd);
            }





            stringStorage.push(accordianEnd);
        }



        TS = stringStorage[0];

        for (f = 1; f < stringStorage.length; f++){

            TS = TS + stringStorage[f];


        }

        var q = document.getElementById('Layer Menu');

        q.innerHTML = TS;

        $(document).foundation()
    }










}



$('#myListCity').change(function(){interfaceCreation()});










