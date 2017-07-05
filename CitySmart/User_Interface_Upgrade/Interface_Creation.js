/**
 * Created by docto on 7/2/2017.
 */


var A_country = [];
var A_city = [];
var A_category = [];
var A_subCategory = [];
var A_name = [];
var A_buttonReference = [];

//window[Reference_Name]


var A_interfaceArray = [];
var A_Interface_URL = "http://localhost:63342/AWorldBridge_CitySmart/CitySmart/User_Interface_Upgrade/Interface_CSV.csv";


function contains(Array_Name, Variable) {

//console.log(Array_Name.indexOf(Variable));


   if (Array_Name.indexOf(Variable) === -1){return false}
   else {return true}
}
/*

var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};


*/

//Interface_Creation(Interface_URL);















function Interface_Creation (Interface_CSV_URL) {


    Papa.parse(Interface_CSV_URL, {

        header: true,

        skipEmptyLines: true,

        download: true,

        complete: function (results) {
            A_interfaceArray = results.data;


            //console.log(A_interfaceArray);
            country_parse(A_interfaceArray);


        }
    });



    function country_parse() {

        for (var a = 0; a < A_interfaceArray.length; a++) {

            //console.log(a);
            needle = A_interfaceArray[a]['Country'];
            if (contains(A_country, needle) === false) {
                A_country.push(needle)
            }


        }
        //console.log(interfaceArray);
        //console.log(a);
        console.log(A_country);
        //city_parse()

    }











    /*
        function city_parse() {

            for (b = 0; b < country.length; b++) {

                for (a = 0; a < interfaceArray.length; a++) {
                    needle = interfaceArray[a]['City'];
                    if (contains.call(city, needle) === false) {
                        city.push(needle)
                    }

                }

                console.log(city);
            }


        }

    */


}





Interface_Creation(A_Interface_URL);













