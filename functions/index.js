// const functions = require('firebase-functions');
// const admin = require("firebase-admin");

// admin.initializeApp()

// const express = require('express');
// const app = express();


// app.get('/getDogs', (req, res) => {
//     admin
//     .firestore()
//     .collection('dogs')
//     .where("name", "==", "Fido")
//     .get()
//     .then((data) => {
//             let dogs = [];
//             data.forEach(doc => {
//                 dogs.push(doc.data());
//             });
//             return res.json(dogs);
//         })
//         .catch((err) => console.error(err))
// })

// app.post('query')

// exports.api = functions.https.onRequest(app);