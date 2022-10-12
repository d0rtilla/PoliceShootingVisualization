# Shooting Deaths by Police in the United States, 2015-2022
## Contributors: Jacob Douthett, Sam Espe, Alan Jallah, Jae Neuharth (Group 6)

### Overview

It is no secret that a substantial number of deaths in the United States result from police actions. We chose to do our project using a dataset that compiled reports of people who were shot and killed by police officers in the United States. 

### The Dataset

We obtained the dataset from Kaggle: https://www.kaggle.com/datasets/ramjasmaurya/us-police-shootings-from-20152022. This set was created by Ram Jas (www.kaggle.com/ramjasmaurya). It contains data on people who were shot and killed by the police within the United States from January 1st, 2015 through September 7th, 2022. 

### The Process

We extracted and cleaned the data using Pandas in a Jupyter Notebook. We used Pandas to access and read in the raw data from the CSV file. We decided that we didn't want to use the columns that contained data that are somewhat subjective in nature, specifically "Signs of Mental Illness" and "Threat Level". These parameters can be argued in several ways, depending on the perspective of those involved. We also decided to exclude the "Manner of Death" column because all of the data are of people who were shot and killed by the police. 

We loaded the data into MongoDB. 

We created a website using Flask and HTML files. We used Flask to interact with the MongoDB using Pymongo.

We formatted and styled the website with Bootstrap.

We created different visualizations to explore the data. We used D3 to insert the visualizations and other content into the web pages. We used Plotly, Leaflet, and Chart.js to create the various visualizations of the data.

We included a discussion page as part of the website to try to draw conclusions based on the visualizations we made.

### Instructions to Recreate the Results

Before running the Jupyter Notebook, ensure that your environment can use Flask, Pandas, requests, and Pymongo. You must also have MongoDB installed on your computer to proceed. 

1. Clone the repo
1. Ensure that your environment is compatible with the dependencies specified in the first code cell of the Juptyer Notebook.
1. Run the cells of the Jupyter Notebook, in order. This will import the raw data, refine and clean it, and create and populate the database in MongoDB.
1. Close the Jupyter Notebook, and end the Jupyter Notebook session.
1. On the command line, open `app.py` using python.
1. Open a new tab or window in Google Chrome, and navigate to the address specified in the terminal window (typically, this is `127.0.0.1:5000`). This should open the Flask website on the index page.