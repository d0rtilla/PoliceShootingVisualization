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
@app.route("/map")
def map():
    shootingData = mongo.db.PoliceShootingData
    return render_template('map.html', shootingData=shootingData )

# Second visualization page - bubble chart
@app.route("/bubble_chart")
def bubble_chart():
     shootingData = mongo.db.PoliceShootingData
     return render_template('bubble_chart.html', shootingData = shootingData )


# Third visualization page - pie charts
@app.route("/pie_charts")
def pie_charts():
    shootingData = mongo.db.PoliceShootingData
    return render_template('pie_charts.html', shootingData = shootingData)
# Discussion page
@app.route("/discussion")
def discussion():
    return render_template('discussion.html')

# End Flask bit
if __name__ == '__main__':
    app.run(debug=True)
