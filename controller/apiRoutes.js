const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv");
const fs = require("fs");




module.exports = function(app) {

    app.get("/json", function(req, res) {
        CSVToJSON().fromFile("/aacFile.csv").then(source => {
            console.log(source);
            res.json(source)
        })  
    })
    

    

}