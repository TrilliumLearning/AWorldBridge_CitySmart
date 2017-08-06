$(document).ready(function() {

      window.fun = function()
{
    var ddl = document.getElementById("dropDown");
    var selectedValue = ddl.options[ddl.selectedIndex].value;


    if (selectedValue == "budget")
   {
       document.getElementById('textpic').innerHTML = "";
       var img = new Image();
	   var div = document.getElementById('textpic');

	   img.onload = function() {
  	   div.appendChild(img);
		};

	   img.src = 'BudgetText/EnergyB.png';
   }


      if (selectedValue == "actual")
   {
       document.getElementById('textpic').innerHTML = "";
       var img = new Image();
	   var div = document.getElementById('textpic');

	   img.onload = function() {
  	   div.appendChild(img);
		};

	   img.src = 'BudgetText/BudgetVS.png';

   }

      if (selectedValue == "Analysis")
   {
       document.getElementById('textpic').innerHTML = "";
       var img = new Image();
	   var div = document.getElementById('textpic');

	   img.onload = function() {
  	   div.appendChild(img);
		};

	   img.src = 'BudgetText/B_analysis.png';

   }

    };

});
