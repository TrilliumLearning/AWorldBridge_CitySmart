$(document).ready(function() {

      window.fun = function()
{
    var ddl = document.getElementById("dropDown");
    var selectedValue = ddl.options[ddl.selectedIndex].value;
      
      
    if (selectedValue == "Calcium")
   {
       document.getElementById('textpic').innerHTML = "<h6>Feitian Academy of the Arts Science Project Water Team tested how much calcium is contained inside the water in building two and three. <br>The test result is shown in the graph above.<br><br>From the data chart below on building two, we can see FTAA’s water is well qualified with an average 9.2 (mg/l)^2. <br><br>Building 2 Calcium</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Calcium<br>Ion-Selective<br>Electrode</td><td>8.3</td><td>8.7</td><td>9.3</td><td>10.6</td></tl><tr><td>Average</td><td>9.2</td><td>9.2</td><td>9.2</td><td>9.2</td></tr><tr><td>Public health goal<br>(mg/L)^2</td><td>30</td><td>30</td><td>30</td><td>30</td></tr></table><br><br><h6>From the data chart below on building three, we can see FTAA’s water is well qualified with an average 9.525 (mg/l)^2. <br><br>Building 3 Calcium</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Calcium<br>Ion-Selective<br>Electrode</td><td>8.9</td><td>8.9</td><td>9.5</td><td>10.8</td></tl><tr><td>Average</td><td>9.525</td><td>9.525</td><td>9.525</td><td>9.525</td></tr><tr><td>Public health goal<br>(mg/L)^2</td><td>30</td><td>30</td><td>30</td><td>30</td></tr></table><br><h6>The public health goal of calcium in the water 30 (mg/l)^2 or less. <br>This is the difference between stipulated calcium value and our result.</h6>";
       
   }
          
      
      if (selectedValue == "Ammonium")
   {
       document.getElementById('textpic').innerHTML = "<h6>Feitian Academy of the Arts Science Project Water Team tested how much ammonium is contained inside the water in building two and three. <br>The test result is shown in the graph above.<br><br>From the data chart below on building two, we can see FTAA’s water is well qualified with an average 0.425 (mg/l)^2. <br><br>Building 2 Ammonium</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Ammonium<br>Ion-Selective<br>Electrode</td><td>0.3</td><td>0.2</td><td>0.2</td><td>1</td></tl><tr><td>Average</td><td>0.425</td><td>0.425</td><td>0.425</td><td>0.425</td></tr><tr><td>Public health goal<br>(mg/L)^2</td><td>3.5</td><td>3.5</td><td>3.5</td><td>3.5</td></tr></table><br><br><h6>From the data chart below on building three, we can see FTAA’s water is well qualified with an average 0.55 (mg/l)^2.<br><br>Building 3 Ammonium</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Ammonium<br>Ion-Selective<br>Electrode</td><td>0.5</td><td>0.3</td><td>0.3</td><td>1.1</td></tl><tr><td>Average</td><td>0.55</td><td>0.55</td><td>0.55</td><td>0.55</td></tr><tr><td>Public health goal<br>(mg/L)^2</td><td>3.5</td><td>3.5</td><td>3.5</td><td>3.5</td></tr></table><br><h6>The public health goal of ammonium in the water 3.5 (mg/l)^2 or less. <br>This is the difference between stipulated ammonium value and our result.</h6>";
      
   }
      
      if (selectedValue == "Potassium")
   {
       document.getElementById('textpic').innerHTML = "<h6>Feitian Academy of the Arts Science Project Water Team tested how much potassium is contained inside the water in building two and three. <br>The test result is shown in the graph above.<br><br>From the data chart below on building two, we can see FTAA’s water is well qualified with an average 1 (mg/l)^2. <br><br>Building 2 Potassium</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Potassium<br>Ion-Selective<br>Electrode</td><td>1</td><td>1</td><td>1</td><td>1</td></tl><tr><td>Average</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Public health goal<br>(mg/L)^2</td><td>10</td><td>10</td><td>10</td><td>10</td></tr></table><br><br><h6>From the data chart below on building three, we can see FTAA’s water is well qualified with an average 1 (mg/l)^2.<br><br>Building 3 Ammonium</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Potassium<br>Ion-Selective<br>Electrode</td><td>1</td><td>1</td><td>1</td><td>1</td></tl><tr><td>Average</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Public health goal<br>(mg/L)^2</td><td>10</td><td>10</td><td>10</td><td>10</td></tr></table><br><h6>The public health goal of potassium in the water is 10 (mg/l)^2 or less. <br>This is the difference between stipulated potassium value and our result.</h6>";
      
       
   }
      
      if (selectedValue == "Chloride")
   {
       document.getElementById('textpic').innerHTML = "<h6>Feitian Academy of the Arts Science Project Water Team tested how much chloride is contained inside the water in building two and three. <br>The test result is shown in the graph above.<br><br>From the data chart below on building two, we can see FTAA’s water is well qualified with an average 72.125 (mg/l)^2. <br><br>Building 2 Chloride</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Chloride Probe</td><td>54.8</td><td>99.8</td><td>100.1</td><td>33.8</td></tl><tr><td>Average</td><td>72.125</td><td>72.125</td><td>72.125</td><td>72.125</td></tr><tr><td>Public health goal<br>(mg/L)^2</td><td>250</td><td>250</td><td>250</td><td>250</td></tr></table><br><br><h6>From the data chart below on building three, we can see FTAA’s water is well qualified with an average 58.75 (mg/l)^2. <br><br>Building 3 Chloride</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Chloride Probe</td><td>53</td><td>83.4</td><td>44.7</td><td>53.9</td></tl><tr><td>Average</td><td>58.75</td><td>58.75</td><td>58.75</td><td>58.75</td></tr><tr><td>Public health goal<br>(mg/L)^2</td><td>250</td><td>250</td><td>250</td><td>250</td></tr></table><br><h6>The public health goal of chloride in the water is 250 (mg/l)^2 or less. <br>This is the difference between stipulated chloride value and our result.</h6>";
       
   }
          
      
      if (selectedValue == "Turbidity")
   {
       document.getElementById('textpic').innerHTML = "<h6>Feitian Academy of the Arts Science Project Water Team tested how much turbidity is contained inside the water in building two and three.<br>The test result is shown in the graph above.<br><br>From the data chart below on building two, we can see FTAA’s water is well qualified with an average 1.075 (mg/l)^2.<br><br>Building 2 Turbidity</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Turbidity Sensor</td><td>2.9</td><td>0</td><td>1.4</td><td>0</td></tl><tr><td>Average</td><td>1.075</td><td>1.075</td><td>1.075</td><td>1.075</td></tr><tr><td>Public health goal<br>(mg/L)^2</td><td>5</td><td>5</td><td>5</td><td>5</td></tr></table><br><br><h6>From the data chart below on building three, we can see FTAA’s water is well qualified with an average 0.875 (mg/l)^2.<br><br>Building 3 Turbidity</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Turbidity Sensor</td><td>0</td><td>0</td><td>3.5</td><td>0</td></tl><tr><td>Average</td><td>0.875</td><td>0.875</td><td>0.875</td><td>0.875</td></tr><tr><td>Public health goal<br>(mg/L)^2</td><td>5</td><td>5</td><td>5</td><td>5</td></tr></table><br><h6>The public health goal of turbidity in the water is 5 (mg/l)^2 or less. <br>This is the difference between stipulated turbidity value and our result.</h6>";
  
       
   }
      
      if (selectedValue == "pH")
   {
       document.getElementById('textpic').innerHTML = "<h6>Feitian Academy of the Arts Science Project Water Team tested how much pH is contained inside the water in building two and three.<br>The test result is shown in the graph above.<br><br>From the data chart below on building two, we can see FTAA’s water is well qualified with an average 7.2752 (mg/l)^2. <br><br>Building 2 pH</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>pH Sensor</td><td>7</td><td>7.14</td><td>7.43</td><td>7.52</td></tl><tr><td>Average</td><td>7.2752</td><td>7.2752</td><td>7.2752</td><td>7.2752</td></tr><tr><td>Public health goal<br>(mg/L)^2<br>(Lowest Point)</td><td>6.5</td><td>6.5</td><td>6.5</td><td>6.5</td></tr><tr><td>Public health goal<br>(mg/L)^2<br>(Highest Point)</td><td>8.5</td><td>8.5</td><td>8.5</td><td>8.5</td></tr></table><br><br><h6>From the data chart below on building three, we can see FTAA’s water is well qualified with an average 7.345 (mg/l)^2. <br><br>Building 3 pH</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>pH Sensor</td><td>7.065</td><td>7.08</td><td>7.5</td><td>7.74</td></tl><tr><td>Average</td><td>7.345</td><td>7.345</td><td>7.345</td><td>7.345</td></tr><tr><td>Public health goal<br>(mg/L)^2<br>(Lowest Point)</td><td>6.5</td><td>6.5</td><td>6.5</td><td>6.5</td></tr><tr><td>Public health goal<br>(mg/L)^2<br>(Highest Point)</td><td>8.5</td><td>8.5</td><td>8.5</td><td>8.5</td></tr></table><br><h6>The public health goal of pH in the water is between 6.5 and 8.5 (mg/l)^2. <br>This is the difference between stipulated pH value and our result.</h6>";
       
   }
      
      if (selectedValue == "Temperature")
   {
       document.getElementById('textpic').innerHTML = "<h6>Feitian Academy of the Arts Science Project Water Team tested how much temperature of the water in building two and three. <br>The test result is shown in the graph above.<br><br>From the data chart below on building two, we can see FTAA’s water is well qualified with an average 9.2 (mg/l)^2. <br><br>Building 2 Temperature</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Temperature Probe</td><td>16.9</td><td>18.4</td><td>19.9</td><td>19.8</td></tl><tr><td>Average</td><td>18.75</td><td>18.75</td><td>18.75</td><td>18.75</td></tr><tr><td>No Requirements<br>(mg/L)^2</td><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td></tr></table><br><br><h6>From the data chart below on building three, we can see FTAA’s water has an average temperature of 18.45°C. <br><br>Building 3 Temperature</h6><table><tr><th>&nbsp;</th><th>Week1</th><th>Week2</th><th>Week3</th><th>Week4</th></tr><tl><td>Temperature Probe</td><td>16.7</td><td>17.8</td><td>19.6</td><td>19.7</td></tl><tr><td>Average</td><td>18.45</td><td>18.45</td><td>18.45</td><td>18.45</td></tr><tr><td>No Requirements</td><td>N/A</td><td>N/A</td><td>N/A</td><td>N/A</td></tr></table><br><h6>There are no requirements for temperature.</h6>";
       
   }
      
      
     
    };
    
});
