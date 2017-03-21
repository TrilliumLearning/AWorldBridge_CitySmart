#!/bin/bash

while :
do 
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+Windspeed+FROM+KHSwindturbine+WHERE+time+%3E+now()+-+1h&db=windturbine" > /var/www/WWGEFS/wwdev/gaugetest/WindData/windspeed.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+RPM+FROM+KHSwindturbine+WHERE+time+%3E+now()+-+1h&db=windturbine" > /var/www/WWGEFS/wwdev/gaugetest/WindData/rpm.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+Kilowatt_hours+FROM+KHSwindturbine+WHERE+time+%3E+now()+-+1h&db=windturbine" > /var/www/WWGEFS/wwdev/gaugetest/WindData/kilowatthours.json 2>/dev/null

/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+Windspeed,RPM+FROM+KHSwindturbine+WHERE+time+%3E+now()+-+1h&db=windturbine" > /var/www/WWGEFS/wwdev/gaugetest/WindData/Windspeed_and_RPM.json 2>/dev/null

sleep 4
done
