# Shooting Deaths by Police in the United States, 2015-2022
## Contributors: Jacob Douthett, Sam Espe, Alan Jallah, Jae Neuharth (Group 6)

### Overview

It is no secret that a substantial number of deaths in the United States result from police actions. We chose to do our project using a data set that compiled reports of people who were shot and killed by police officers in the United States. 

### The Data Set

We obtained the data set from Kaggle: https://www.kaggle.com/datasets/ramjasmaurya/us-police-shootings-from-20152022. This set was created by Ram Jas (www.kaggle.com/ramjasmaurya). It contains data on people who were shot and killed by the police within the United States from January 1st, 2015 through September 7th, 2022. 

### The Process

#### Extraction, Tranformation, and Loading
We extracted and cleaned the data using Pandas in a Jupyter Notebook. We used Pandas to access and read in the raw data from the CSV file. We decided that we didn't want to use the columns that contained data that are somewhat subjective in nature, specifically "Signs of Mental Illness" and "Threat Level". These parameters can be argued in several ways, depending on the perspective of those involved. We also decided to exclude the "Manner of Death" column because all of the data are of people who were shot and killed by the police. We then removed entries where one or more data points were missing. We had to remove one entry where the latitude and longitude were incorrect (the incident occurred in Ohio, but the coordinates were located in Canada).

To make the data easier to work with, we masked some of the values in the data set. We changed the "Gender" category to "Sex" because we don't know how any of the victims identified their gender. The data set originally used single letters to record the sex and race of the person who was killed. We used Pandas to mask these into full words so that they are easier to understand and interact with.

Once the data was cleaned and transformed, we loaded it into MongoDB using Pymongo.

#### Creating the Website
We created a website to display our data and the visualizations thereof using HTML, CSS, JavaScript, and Python. We used Python to build the Flask app that supports the website and interacts with the MongoDB database on the user's behalf,  HTML to create the basic structure of the webpages, and JavaScript to build the visualizations and insert them into the pages. We then used Bootstrap and CSS to style the pages.

#### Creating the Visualizations
We created different visualizations to explore different aspects of the data using the JavaScript library, Chart.js, and Leaflet. We created a map to see how the killings were distributed geographically, a bar chart to examine any trends in what people were holding when they were killed, and pie charts to look into the demographics of the victims.

The Pie Charts page contains three pie charts that display data of the victims' demographics: their age, their race, and their sex. We used the Charts.js package to create the pie charts. 

Our data set included what each victim was holding (or was armed with) at the time of their death. We created a bar chart to see what the distribution of frequency of the different types of objects that were held.

We created a Leaflet map that displays the location of each incident. Each marker, when clicked, displays the data available about the person who was killed. With more than 5,000 data points, we needed to use marker clustering to a) lower the amount of processing power used in creating the map and b) to make the map easier to interact with and less cluttered. We used the Leaflet Marker Clustering plug-in found in this repo: https://github.com/Leaflet/Leaflet.markercluster. 

We included a discussion page as part of the website to try to draw conclusions based on the visualizations we made and also created a way for people to leave comments on the site to reflect on their experiences and reactions to the visualizations we made. Were the website hosted on an external server, users could save and share their comments with each other, but for now, the feature remains inactive.

### Instructions to Recreate the Results

Before running the Jupyter Notebook, ensure that your environment can use the following Python packages: Flask, Pandas, requests, and Pymongo. You must also have MongoDB installed on your computer to proceed. 

1. Clone the repo.
1. Ensure that your environment is compatible with the dependencies specified in the first code cell of the Juptyer Notebook.
1. Run the cells of the Jupyter Notebook, in order. This will import the raw data, refine and clean it, and create and populate the database in MongoDB.
1. Close the Jupyter Notebook, and end the Jupyter Notebook session.
1. On the command line, open `app.py` using Python.
1. Open a new tab or window in Google Chrome, and navigate to the address specified in the terminal window (typically, this is `127.0.0.1:5000`). This should open the Flask website on the index page.
1. Use the navigation bar and links to visit the different pages of the website.

### Acknowledgements
We would like to thank our instructor, Dom LaBella for his guidance as we took on this project.
