$(document).ready(function() {

      window.fun = function()
{
    var ddl = document.getElementById("dropDown");
    var selectedValue = ddl.options[ddl.selectedIndex].value;
      
      
    if (selectedValue == "Calcium")
   {
       document.getElementById('textpic').innerHTML = "";
       var img = new Image();
	   var div = document.getElementById('textpic');

	   img.onload = function() {
  	   div.appendChild(img);
		};

	   img.src = 'water_experiment/calcium.png';
   }
          
      
      if (selectedValue == "Ammonium")
   {
       document.getElementById('textpic').innerHTML = "";
       var img = new Image();
	   var div = document.getElementById('textpic');

	   img.onload = function() {
  	   div.appendChild(img);
		};

	   img.src = 'water_experiment/ammonium.png';
       
   }
      
      if (selectedValue == "Potassium")
   {
       document.getElementById('textpic').innerHTML = "";
       var img = new Image();
	   var div = document.getElementById('textpic');

	   img.onload = function() {
  	   div.appendChild(img);
		};

	   img.src = 'water_experiment/potassium.png';
       
   }
      
      if (selectedValue == "Chloride")
   {
       document.getElementById('textpic').innerHTML = "";
       var img = new Image();
	   var div = document.getElementById('textpic');

	   img.onload = function() {
  	   div.appendChild(img);
		};

	   img.src = 'water_experiment/chloroide.png';
   }
          
      
      if (selectedValue == "Turbidity")
   {
       document.getElementById('textpic').innerHTML = "";
       var img = new Image();
	   var div = document.getElementById('textpic');

	   img.onload = function() {
  	   div.appendChild(img);
		};

	   img.src = 'water_experiment/turbidity.png';
       
   }
      
      if (selectedValue == "pH")
   {
       document.getElementById('textpic').innerHTML = "";
       var img = new Image();
	   var div = document.getElementById('textpic');

	   img.onload = function() {
  	   div.appendChild(img);
		};

	   img.src = 'water_experiment/ph.png';
   }
      
      if (selectedValue == "Temperature")
   {
       document.getElementById('textpic').innerHTML = "";
       var img = new Image();
	   var div = document.getElementById('textpic');

	   img.onload = function() {
  	   div.appendChild(img);
		};

	   img.src = 'water_experiment/temp.png';
   }
      
      
     
    };
    
});
