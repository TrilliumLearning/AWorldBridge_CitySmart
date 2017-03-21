#!/bin/bash

while :
do 

/usr/bin/curl "https://openweathermap.org/data/2.5/weather?id=5866583&units=metric&appid=b1b15e88fa797225412429c1c50c122a1" >/var/www/WWGEFS/wwdev/gaugetest/WindData/weather_latest.json 2>/dev/null

#"https://openweathermap.org/data/2.5/weather?id=5866583&units=metric&appid=585b06a20495244296b6500db649b0d6" 


sleep 60
done
