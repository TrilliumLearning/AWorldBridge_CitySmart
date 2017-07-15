/**
 * Created by docto on 7/2/2017.
 */


var country = [];
var city = [];
var category = [];
var subCategory = [];
var nameAndButton = [];

var interfaceArray = [];


//var Interface_URL = "http://localhost:63342/AWorldBridge_CitySmart/CitySmart/User_Interface_Upgrade/Interface_CSV.csv";
var Interface_URL = "http://cs.aworldbridgelabs.com/CitySmart/User_Interface_Upgrade/Interface_CSV.csv";


var CCStringEnd = `
    </select></p>
`;

var countryString = `
    <p><label>Country</label><select id="myListCountry">
    <option value="-1">-Select a Country-</option>
    <option value="-2">All Layers</option>
`;


var largeDropDownStringEnd = `
    </select></p>
    </div>
`;

function interfaceParse (Interface_CSV_URL) {

    function contains(Array_Name, Variable) {

        if (Array_Name.indexOf(Variable) === -1){return false}
        else {return true}
    }


    Papa.parse(Interface_CSV_URL, {

        header: true,

        skipEmptyLines: true,

        download: true,

        complete: function (results) {
            interfaceArray = results.data;


            //console.log(A_interfaceArray);
            country_parse(interfaceArray);


        }
    });



    function country_parse() {

        for (var a = 0; a < interfaceArray.length; a++) {

            //console.log(a);
            if (contains(country, interfaceArray[a]['Country']) === false) {
                country.push(interfaceArray[a]['Country'])
            }


        }
        //console.log(interfaceArray);
        //console.log(a);
        console.log('Country', country);
        cityParse()

    }



    function cityParse() {

        for (a = 0; a < country.length; a++) {

            city.push(cityParse2());


            function cityParse2() {


                window[country[a]] = [];

                for (b = 0; b < interfaceArray.length; b++) {

                    if (interfaceArray[b]['Country'] === country[a]) {
                        if (contains(window[country[a]], interfaceArray[b]['City']) === false) {
                            window[country[a]].push(interfaceArray[b]['City'])
                        }
                    }

                }
                //console.log(window[country[a]]);
                return window[country[a]]
            }


        }
        console.log('City', city);
        categoryParse();
    }



    function categoryParse() {
        for (x = 0; x < country.length; x++) {

            tempCity = city[x];

            category.push(categoryParse2());

            function categoryParse2() {

                window[country[x]] = [];

                for (z = 0; z < city[x].length; z++) {

                    window[country[x]].push(categoryParse3());

                    function categoryParse3() {

                        window[tempCity[z]] = [/* Holds categories */];

                        for (b = 0; b < interfaceArray.length; b++) {

                            //window[interfaceArray[b]['Category']] = [];

                            if (interfaceArray[b]['City'] === tempCity[z] && interfaceArray[b]['Country'] === country[x]) {
                                if (contains(window[tempCity[z]], interfaceArray[b]['Category']) === false) {

                                    window[tempCity[z]].push(interfaceArray[b]['Category'])

                                }
                            }

                        }


                        return window[tempCity[z]]
                    }


                }
                return window[country[x]]
            }
        }
        console.log('Category', category);
        subCategoryParse()
    }



    function subCategoryParse() {
        for (x = 0; x < country.length; x++) {

            tempCity = city[x];
            tc1 = category[x];

            subCategory.push(subCategoryParse2());

            function subCategoryParse2() {

                window[country[x]] = [/* Holds Cities */];

                for (z = 0; z < city[x].length; z++) {

                    window[country[x]].push(categoryParse3());

                    function categoryParse3() {

                        window[tempCity[z]] = [/* Holds categories */];

                        tc2 = tc1[z];

                        for (b = 0; b < tc2.length; b++) {

                            window[tempCity[z]].push(subCategoryParse4());

                            function subCategoryParse4() {

                                window[tc2[b]] = [/* Holds Sub Categories */];

                                for (c = 0; c < interfaceArray.length; c++) {


                                    if (interfaceArray[c]['City'] === tempCity[z] && interfaceArray[c]['Country'] === country[x] && interfaceArray[c]['Category'] === tc2[b]) {
                                        if (contains(window[tc2[b]], interfaceArray[c]['Sub Category']) === false) {

                                            window[tc2[b]].push(interfaceArray[c]['Sub Category'])

                                        }
                                    }

                                }
                                return window[tc2[b]]
                            }




                        }


                        return window[tempCity[z]]
                    }


                }
                return window[country[x]]
            }
        }
        console.log('Sub Category', subCategory);
        nrParse();

    }



    function nrParse() {
        for (x = 0; x < country.length; x++) {

            tempCity = city[x];
            tc1 = category[x];
            nr1 = subCategory[x];

            nameAndButton.push(nrParse2());

            function nrParse2() {

                window[country[x]] = [/* Holds Cities */];

                for (z = 0; z < city[x].length; z++) {

                    window[country[x]].push(nrParse3());

                    function nrParse3() {

                        window[tempCity[z]] = [/* Holds categories */];

                        tc2 = tc1[z];
                        nr2 = nr1[z];

                        for (b = 0; b < tc2.length; b++) {

                            nr3 = nr2[b];

                            window[tempCity[z]].push(nrParse4());

                            function nrParse4() {

                                window[tc2[b]] = [/* Holds Sub Categories */];

                                for (c = 0; c < nr3.length; c++) {

                                    window[tc2[b]].push(nrParse5());


                                    function nrParse5() {

                                        window[nr3[c]] = [];

                                        for (d = 0; d < interfaceArray.length; d++) {
                                            if (interfaceArray[d]['City'] === tempCity[z] && interfaceArray[d]['Country'] === country[x] && interfaceArray[d]['Category'] === tc2[b] && interfaceArray[d]['Sub Category'] === nr3[c]) {

                                                if (contains(window[nr3[c]], interfaceArray[d]['Sub Category']) === false) {


                                                    window[nr3[c]].push([interfaceArray[d]['Name'], interfaceArray[d]['Button Reference']])

                                                }

                                            }
                                        }
                                        return window[nr3[c]]
                                    }

                                }
                                return window[tc2[b]]
                            }


                        }


                        return window[tempCity[z]]
                    }


                }
                return window[country[x]]
            }
        }
        //console.log(category);
        console.log("Name and Button Reference", nameAndButton);
        countryStringCreation('myListCountry')
        //CountryCreation()
    }


    function countryStringCreation(id){

        //countryString = largeDropDownStringStart;
        //StringList = [];

        for (a = 0; a < country.length; a ++){


            countryMidString = `<option value="` + a.toString() + `"/>` + country[a] + `</option>`;


            countryString = countryString + countryMidString
        }

        countryString = countryString + largeDropDownStringEnd;

        var e = document.getElementById(id);

        e.innerHTML = countryString
    }

}


interfaceParse(Interface_URL);


