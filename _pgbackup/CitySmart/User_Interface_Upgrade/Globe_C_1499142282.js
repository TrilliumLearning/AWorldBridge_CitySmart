/**
 * Created by docto on 7/2/2017.
 */



var Interface_URL = "http://localhost:63342/AWorldBridge_CitySmart/CitySmart/User_Interface_Upgrade/Interface_CSV.csv";



Interface_Creation();

function Interface_Creation (Interface_CSV) {


    Papa.parse(Interface_URL, {

        header: true,

        skipEmptyLines: true,

        download: true,

        complete: function (results) {
            Interface_Array = results.data;

            Continue(Interface_Array)


        }
    });


    function Continue() {


        console.log(Interface_Array)

    }


}