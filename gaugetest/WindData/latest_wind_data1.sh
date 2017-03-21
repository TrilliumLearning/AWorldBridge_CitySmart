!/bin/bash

while :
do
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+Windspeed+FROM+KHSwindturbine+WHERE+time+%3E+now()+-+4s+LIMIT+1&db=windturbine" > /var/www/WWGEFS/wwdev/gaugetest/WindData/windspeed_latest.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+RPM+FROM+KHSwindturbine+WHERE+time+%3E+now()+-+4s+LIMIT+1&db=windturbine" > /var/www/WWGEFS/wwdev/gaugetest/WindData/rpm_latest.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+Kilowatt_hours+FROM+KHSwindturbine+WHERE+time+%3E+now()+-+4s+LIMIT+1&db=windturbine" > /var/www/WWGEFS/wwdev/gaugetest/WindData/kilowatthours_latest.json 2>/dev/null
sleep 2
done

