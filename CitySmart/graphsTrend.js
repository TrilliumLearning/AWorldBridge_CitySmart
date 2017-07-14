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
                title: 'Revenue ($1000)',
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

     
    
   
    
    
});
