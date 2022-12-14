# Import Dependencies
from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
from itsdangerous import json

# Create Flask app
app = Flask(__name__)

mongo = PyMongo(app, uri='mongodb://localhost:27017/USPoliceShootingData')

# Create Flask routes
################################
# Homepage


# @app.route("/")
# def homepage():
#     shootingData = mongo.db.PoliceShootingData.find({}, {'_id': 0})
#     return render_template('index.html' shootingData=shootingData)

@app.route("/")
def homepage():
    author = "alan. jae, sam"
    return render_template('index.html', author=author)


# Route to get data from MongoDB


@app.route("/mongo")
def readMongo():
    data = mongo.db.PoliceShootingData.find({}, {'_id': 0, 'latitude': 1, 'longitude': 1, 'is_geocoding_exact': 1,
                                            'name': 1, 'date': 1, 'age': 1, 'sex': 1, 'ethnicity': 1, 'armed': 1, 'city': 1, 'state': 1})
    result = []
    for item in data:
        result.append(item)
    print(jsonify(result))
    return jsonify(result)

# First visualization page - map


@app.route("/map")
def map():
    return render_template('map.html')

# Second visualization page - bubble chart


@app.route("/bar_chart")
def bubble_chart():
    shootingData = mongo.db.PoliceShootingData.find({}, {'_id': 0, 'armed': 1})
    result = shootingData
    return render_template('bar_chart.html', result=result)


# Third visualization page - pie charts
@app.route("/pie_charts")
def pie_charts():
    shootingData = mongo.db.PoliceShootingData.find(
        {}, {'_id': 0, 'age': 1, 'ethnicity': 1, 'sex': 1})
    result = shootingData
    return render_template('pie_charts.html', result=result)

# Discussion page


@app.route("/discussion")
def discussion():
    return render_template('discussion.html')


@app.route('/data')
def data():
    shootingData = mongo.db.PoliceShootingData.find({}, {'_id': False})
    result = shootingData
    return render_template('data.html', result=result)


# End Flask bit
if __name__ == '__main__':
    app.run(debug=True)
