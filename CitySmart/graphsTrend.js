$(document).ready(function() {

      function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/RevenueCOM.csv",
              {
                legend: 'always',
                title: 'Commercial Revenue ($1000)',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );

  window.fun = function()
{
    var ddl = document.getElementById("myListTREND");
    var selectedValue = ddl.options[ddl.selectedIndex].value;
      
      
    if (selectedValue == "consumersC")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/ConsumerCOM.csv",
              {
                legend: 'always',
                title: 'Number of Commercial Consumers',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
      
      if (selectedValue == "salesC")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/SalesCOM.csv",
              {
                legend: 'always',
                title: 'Commercial Sales',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
      
      if (selectedValue == "revenueC")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/RevenueCOM.csv",
              {
                legend: 'always',
                title: 'Commercial Revenue ($1000)',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
      
      if (selectedValue == "consumersI")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/ConsumerIND.csv",
              {
                legend: 'always',
                title: 'Number of Industrial Consumers',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
      
      if (selectedValue == "salesI")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/SalesIND.csv",
              {
                legend: 'always',
                title: 'Industrial Sales',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
      
      if (selectedValue == "revenueI")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/RevenueIND.csv",
              {
                legend: 'always',
                title: 'Industrial Revenue ($1000)',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
      
      if (selectedValue == "consumersR")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/ConsumerRES.csv",
              {
                legend: 'always',
                title: 'Number of Residental Consumers',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
      
      if (selectedValue == "salesR")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/SalesRES.csv",
              {
                legend: 'always',
                title: 'Residental Sales',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
      
      if (selectedValue == "revenueR")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/RevenueRES.csv",
              {
                legend: 'always',
                title: 'Residental Revenue ($1000)',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
      
     
    };
    
    
    
  window.fun2 = function()
{
    var ddl = document.getElementById("myListHYDRO");
    var selectedValue = ddl.options[ddl.selectedIndex].value; 
    
      if (selectedValue == "grossTL")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/GrossWTF.csv",
              {
                legend: 'always',
                title: 'Generated Power/ Month',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
    };
    
    
 window.fun3 = function()
{
    var ddl = document.getElementById("myListWIND");
    var selectedValue = ddl.options[ddl.selectedIndex].value; 
    
       if (selectedValue == "grossWTF")
   {
       function clearCanvas(){

  		var c = document.getElementById("Graph");
  		var ctx = c.getContext("2d");
  		ctx.clearRect(0, 0, c.width, c.height);
  		ctx.beginPath();

		}
       
        function darkenColor(colorStr) {
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

      function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
          var sep = points[i].canvasx - points[i - 1].canvasx;
          if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var center_x = p.canvasx;

          ctx.fillRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);

          ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
              bar_width, y_bottom - p.canvasy);
        }
      }

      g = new Dygraph(
              document.getElementById("Graph"),
              "KEAcsv/GrossTL.csv",
              {
                legend: 'always',
                title: 'Generated Power/ Month',
                includeZero: false,
                dateWindow: [ Date.parse("2011/12/12"), Date.parse("2017/02/26") ],
                animatedZooms: true,
                plotter: barChartPlotter,
                axes: {
                  x: {
                    drawGrid: false
                  }
                }
              }
          );
       
   }
    
   };
    
});
