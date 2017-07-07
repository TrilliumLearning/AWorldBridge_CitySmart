var temporaryCountryValue = -1;

var countryString = `
    <p><label>Country</label><select id="myListCountry">
    <option value="-1">-Select a Country-</option>
`;


var cityString =`
    <p><label>City</label><select id="myListCountry">
    <option value="-1">-Select a City-</option>
`;


CCStringEnd = `
    </select></p>
`;


function interfaceCreation() {console.log('hello there');


//TcityString = cityString;


    if (Number($('#myListCountry').val()) === -1){}
    else if (Number($('#myListCountry').val()) === temporaryCountryValue){}
    else if (typeof Number($('#myListCountry').val()) === 'undefined'){}
    else{

        //console.log(typeof Number($('#myListCountry').val()));
        //console.log($('#myListCountry').val());

        CV = Number($('#myListCountry').val());

        console.log(CV);

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










if (Number($('#myListCity').val()) === -1){}
else if (Number($('#myListCity').val()) === temporaryCountryValue){}
else if (typeof Number($('#myListCity').val()) === 'undefined'){}
else{






}

























var HTMLSTRING = `

<div id = "Layer Selection Row" class="row">
    <div class="columns large-3">
    <div id = "Country Selection">
    <p><label>Country</label><select id="myListCountry">
    <option value="0">1</option>
    <option value="1">2</option>
    <option value="2">3</option>
    <option value="3">4</option>
    </select></p>
    </div>



    <div id = "City Selection">
    <p><label>City</label><select id="myListCity">
    <option value="0">one</option>
    <option value="1">two</option>
    <option value="2">three</option>
    <option value="3">four</option>
    </select></p>
    </div>



    <div style="height:6px" class="clearfix clear-columns"></div>



    <ul class="accordion" data-accordion role="tablist" data-allow-all-closed="true">
    <li class="accordion-item">
    <a style="height:60px" href="#panel173" role="tab" class="accordion-title" id="panel173-heading" aria-controls="panel173"><h5>List</h5></a>
    <div id="panel173" class="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel173-heading">



    <ul class="accordion" data-accordion role="tablist" data-allow-all-closed="true">
    <li class="accordion-item">
    <a style="height:60px" href="#panel173" role="tab" class="accordion-title" id="panel173-heading" aria-controls="panel173"><h5>Category 1</h5></a>
<div id="panel173" class="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel173-heading">



    <ul class="accordion" data-accordion role="tablist" data-allow-all-closed="true">
    <li class="accordion-item">
    <a href="#panel538" role="tab" class="accordion-title" id="panel538-heading" aria-controls="panel538"><h5><h6>Subcategory A</h6></h5></a>
<div id="panel538" class="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel538-heading">


    <div>
    <h6><a href="#">- Kodiak </a><label class="switch right">
    <input type="checkbox">
    <div id= "kodiak" style="height:12px" class="slider round"></div>
    </label></h6>
    </div>


    <div>
    <h6><a href="#">- Kodiak </a><label class="switch right">
    <input type="checkbox">
    <div id= "kodiak" style="height:12px" class="slider round"></div>
    </label></h6>
    </div>


    </div>
    </li>
    </ul>



    </div>
    </li>
    </ul>
    <ul class="accordion" data-accordion role="tablist" data-allow-all-closed="true">
    </ul>



    </div>
    </li>
    </ul>



    </div>
    <div class="large-9 columns">
    <canvas id="canvasOne" style="width: 100%; height: auto">
    Your browser does not support HTML5 Canvas.
</canvas>
</div>
</div>

`