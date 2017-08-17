$(document).ready(function() {

      window.fun = function()
{
    var ddl = document.getElementById("dropDown");
    var selectedValue = ddl.options[ddl.selectedIndex].value;


    if (selectedValue == "budget")
   {
       document.getElementById('textpic').innerHTML = "<h6>Energy Budget Report Description:<br><br>Energy budget is one of important planning steps for “City Smart” Project. With energy budget established, we can have full picture of fundamental demand of energy requirement. Energy budget helps well plan ahead renewable energy sources in certain circumstance. It builds core capabilities in City Smart Practices.<br><br>FTAA students calculate energy budget by different categories of electronic devices. The budget’s model establishes relationship with variable time frame usage by different devices. The entire energy budget data was loaded into Influx Database. This model has been applied by Mid-ware software program. You can simply pick the time frame for specific energy budget.</h6>";
       
   }


      if (selectedValue == "actual")
   {
       document.getElementById('textpic').innerHTML = "<h6>Budget vs Actual report description:<br><br>Budget vs Actual is nowadays useful tool to measure how far the actual data from the projection data, and then dig out the root causes for the variances. The Budget vs Actual report for City Smart Energy builds a process involves using budget data to assess how closely the Campus consuming energy. By taking he time to conduct this comparison, it helps determine the following:<br><br>·        Whether there are areas of energy consumption that need to be controlled?<br>·        Whether the budget is realistic?<br>·        Whether the energy demand could be sustainably met?<br>·        What can be done about the variance?<br><br>Due that the actual data was parsed from utility bills, which cannot be categorized by different type of electronic devices, the Budget vs Actual report can only perform high level comparison. Similar to Energy Budget report, the report data will be dynamically calculated by Mid-ware software program which retrieve the data from live Influx Database.";
       
   }

      if (selectedValue == "Analysis")
   {
       document.getElementById('textpic').innerHTML = "Budget Analysis report description:<br><br>Once you have an overview Budget report, Budget vs Actual report, the next questions you might have: -<br><br>·        Can we save more energy by some simple reaction?<br>·        What are the top 3 category of devices to impact energy consumption?<br>·        What can we do most efficient change to reduce energy usage?<br><br>Budget Analysis report can easily answer above questions with simply few mouse clicks. In fact, the best answer stores in Actual Usage Analysis report. However, technically, it is hard to get relevant usage data by different category electronic devices. Instead, we use budget data to perform similar role. It might not be able to get exact accurate answer. Qualitatively, there suppose not to be different.";
       

   }

    };

});
