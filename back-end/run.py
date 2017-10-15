import Adafruit_DHT
import sys, requests, time

# data post format should follow the scheme:
# {'status' : value, 'type' : value, 'data' : {'humidity' : value, 'temperature' : value, 'IR levels' : value}}

print "Welcome to the testing temperature setttings of our DHT."

# Uncomment the following line to send the "started" message to our Flask server
# r =  requests.post("127.0.0.1", data={'status' : "ok", 'type' : "start")

# Some variable declaration for when we have the sensors:
DHT_TYPE = Adafruit_DHT.DHT11     # DHT Device type, DHT11 or DHT22
DHT_PIN = 4                      # Pin location on PI

# Frequency to poll the device for sensor data
REFRESH_FREQ = 30

# function definition
def poll_temp():
    _, temp = Adafruit_DHT.read(DHT_TYPE, DHT_PIN)
    if temp is None:
        time.sleep(2)
        return
    print "Temperature: {0:0.1f} C".format(temp)
    return {'temperature' : temp}

def poll_sensor():
    humidity, temp = Adafruit_DHT.read(DHT_TYPE, DHT_PIN)
    if humidity is None or temp is None:
        print "Nothing or garbage read from sensor: " + str(humidity) + " " + str(temp)
        return poll_sensor()
    print "Temperature: " + str(temp) +  "C"
    print "Humidity: " + str(humidity) + "%"
    return {'temperature' : temp, 'humidity' : humidity}

def get_data():
        return poll_sensor()