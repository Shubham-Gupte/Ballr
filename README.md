# Ball'r
Ball'r is an underwear companion project inspired by efforts in wearable technology that offer health benefits to its user.  
At its core, Ball'r offers temperature (with the ability to expand as necessary) monitoring for sensitive areas, primarily for testicle monitoring.  
The reason to monitor the temperature stems from several health conditions, including testicular cancer and lymphoma, having abnormally high temperatures of the testicles as a common symptom.  
  
This repo is a proof-of-concept work. A user-interactive companion app makes monitoring and data collection easier, and circuitry using the Raspberry Pi to use our digital sensors.  
The front-end implementation uses the Ionic framework, while the back-end is powered by a Flask server on a Raspberry Pi, using a DHT11 temperature and humidity sensor.  
Future work would involve lower-power, project-specific devices, such as thermistors, that would both shrink the footprint of the necessary components considerably, as well as enabling the companion to be easily removed from the underwear for cleaning. 

# Resources
Ionic framework  
Raspberry Pi 3 running a Flask server
DHT11 Thermo sensor libraries https://github.com/adafruit/Adafruit_Python_DHT/
Ngock routing
