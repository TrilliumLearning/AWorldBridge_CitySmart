#!/bin/bash

while :
do 
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+HYD_1_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/HYD_1_kwh.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+HYD_2_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/HYD_2_kwh.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+HYD_3_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/HYD_3_kwh.json 2>/dev/null

/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+KPH_D1_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/KPH_D1_kwh.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+KPH_D2_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/KPH_D2_kwh.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+KPH_D3_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/KPH_D3_kwh.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+KPH_D4_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/KPH_D4_kwh.json 2>/dev/null

/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+NYMN_2_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/NYMN_1_kwh.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+NYMN_2_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/NYMN_2_kwh.json 2>/dev/null

/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+SWPH_1_IN_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/SWPH_1_IN_kwh.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+SWPH_2_IN_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/SWPH_2_IN_kwh.json 2>/dev/null

/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+SWPH_3_OUT_kwh+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/SWPH_3_OUT_kwh.json 2>/dev/null
/usr/bin/curl "http://10.194.40.100/influxdb-data/query?q=SELECT+SWPH_3_OUT_kwh_2+FROM+KEAdata&db=KEA" > /var/www/WWGEFS/wwdev/gaugetest/WindData/SWPH_3_OUT_kwh_2.json 2>/dev/null

sleep 3600
done
