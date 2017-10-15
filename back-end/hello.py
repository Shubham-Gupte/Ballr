from flask import Flask
from flask import request
import run
import json

app = Flask(__name__)

all_data = dict()
count = 0

@app.route('/pollalldata', methods = ['POST', 'GET'])
def postJSON():
    global all_data
    global count
    if request.method == 'POST' or request.method == 'GET':
        key = "data" + str(count)
        count = count + 1
        all_data[key] = run.get_data()
        return json.dumps(all_data)
    else:
        key = "data" + str(count)
        count = count + 1
        all_data[key] = run.get_data()
        return json.dumps(all_data)
        # content = getJson() print content
        # return 'JSON Posted'

@app.route('/polldata', methods = {'POST', 'GET'})
def poll_data():
        global count
        global all_data
        if request.method == 'POST' or request.method == 'GET':
                key = "data" + str(count)
                count = count + 1
                all_data[key] = run.get_data()
                return json.dumps(all_data[key])