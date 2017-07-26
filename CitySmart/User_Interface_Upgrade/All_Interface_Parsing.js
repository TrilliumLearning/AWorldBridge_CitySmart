/**
 * Created by docto on 7/14/2017.
 */



var ALLcategory = [];
var ALLsubCategory = [];
var ALLnameAndButton = [];

var ALLinterfaceArray = [];
var ALLInterface_URL = "http://cs.aworldbridgelabs.com/CitySmart/User_Interface_Upgrade/Interface_CSV.csv";


















function AllinterfaceParse (Interface_CSV_URL) {

    function contains(Array_Name, Variable) {

        if (Array_Name.indexOf(Variable) === -1) {
            return false
        }
        else {
            return true
        }
    }


    Papa.parse(Interface_CSV_URL, {

        header: true,

        skipEmptyLines: true,

        download: true,

        complete: function (results) {
            ALLinterfaceArray = results.data;


            //console.log(A_interfaceArray);
            ALLCategoryParse(ALLinterfaceArray);


        }
    });


    function ALLCategoryParse() {

        for (var a = 0; a < ALLinterfaceArray.length; a++) {

            //console.log(a);
            if (contains(ALLcategory, ALLinterfaceArray[a]['Category']) === false) {
                ALLcategory.push(ALLinterfaceArray[a]['Category'])
            }


        }
        //console.log(interfaceArray);
        //console.log(a);
        console.log('All Function Category', ALLcategory);
        ALLSubCategoryParse()

    }


    function ALLSubCategoryParse() {

        for (a = 0; a < ALLcategory.length; a++) {

            ALLsubCategory.push(ALLSubCategoryParse2());


            function ALLSubCategoryParse2() {


                window[ALLcategory[a]] = [];

                for (b = 0; b < ALLinterfaceArray.length; b++) {

                    if (ALLinterfaceArray[b]['Category'] === ALLcategory[a]) {
                        if (contains(window[ALLcategory[a]], ALLinterfaceArray[b]['Sub Category']) === false) {
                            window[ALLcategory[a]].push(ALLinterfaceArray[b]['Sub Category'])
                        }
                    }

                }
                //console.log(window[country[a]]);
                return window[ALLcategory[a]]
            }


        }
        console.log('All Function Sub Category', ALLsubCategory);
        ALLnrParse();
    }


    function ALLnrParse() {
        for (x = 0; x < ALLcategory.length; x++) {

            tempSubCategory = ALLsubCategory[x];

            ALLnameAndButton.push(ALLnrParse2());

            function ALLnrParse2() {

                window[ALLcategory[x]] = [];

                for (z = 0; z < ALLsubCategory[x].length; z++) {

                    window[ALLcategory[x]].push(ALLnrParse3());

                    function ALLnrParse3() {

                        window[tempSubCategory[z]] = [/* Holds Name and ID */];

                        for (b = 0; b < ALLinterfaceArray.length; b++) {

                            //window[interfaceArray[b]['Category']] = [];

                            if (ALLinterfaceArray[b]['Sub Category'] === tempSubCategory[z] && ALLinterfaceArray[b]['Category'] === ALLcategory[x]) {
                                if (contains(window[tempSubCategory[z]], ALLinterfaceArray[b]['Name']) === false) {

                                    window[tempSubCategory[z]].push([ALLinterfaceArray[b]['Name'], ALLinterfaceArray[b]['Button Reference']])

                                }
                            }

                        }

                        return window[tempSubCategory[z]]
                    }

                }
                return window[ALLcategory[x]]
            }
        }
        console.log('ALL Function Name and Button', ALLnameAndButton);
    }

}


AllinterfaceParse(ALLInterface_URL);
