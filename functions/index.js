const functions = require('firebase-functions');
const express = require('express');
const app = express();

const { getAllDogs, createOneDog, queryDogsByName} = require("./handlers/dogs")

//Dog Routes
app.get('/getDogs', getAllDogs)
app.post("/createDog", createOneDog)
app.post("/queryDogsByName", queryDogsByName)

exports.api = functions.https.onRequest(app);