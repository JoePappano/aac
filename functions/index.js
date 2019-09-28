const functions = require('firebase-functions');
const express = require('express');
const app = express();

const { 
    getAllDogs, 
    createOneDog, 
    queryDogsByName, 
    get100sDogs, 
    get200sDogs, 
    get300sDogs, 
    get400sDogs, 
    get500sDogs, 
    get600sDogs
} = require("./handlers/dogs")

//Dog Routes
app.get('/getDogs', getAllDogs)
app.post("/createDog", createOneDog)
app.post("/queryDogsByName", queryDogsByName)
app.get('/get100sDogs', get100sDogs)
app.get('/get200sDogs', get200sDogs)
app.get('/get300sDogs', get300sDogs)
app.get('/get400sDogs', get400sDogs)
app.get('/get500sDogs', get500sDogs)
app.get('/get600sDogs', get600sDogs)

exports.api = functions.https.onRequest(app);