# Import Dependencies
from flask import Flask, render_template
from flask_pymongo import PyMongo

# Create Flask app
app = Flask(__name__)

mongo = PyMongo(app, uri = 'mongodb://localhost:27017/USPoliceShootingData')

# Create Flask routes
################################
# Homepage
@app.route("/")
def homepage():
    shootingData = mongo.db.PoliceShootingData
    return render_template('index.html', shootingData=shootingData)

# First visualization page - map
# @app.route("/map")
# def map():

# Second visualization page - bubble chart
# @app.route("/bubble_chart")
# def bubble_chart():

# Third visualization page - pie charts
# @app.route("/pie_charts")
# def pie_charts:

# Discussion page
# @app.route("/discussion")
# def discussion():


# End Flask bit
if __name__ == '__main__':
    app.run(debug=True)
