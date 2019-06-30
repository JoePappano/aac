const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv");
const fs = require("fs");




module.exports = function(app) {

    CSVToJSON().fromFile("./AAC_PLAYGROUP_FOR_1-17-2019_AT__8_23_17AM.csv").then(source => {
        console.log(source);
    }) 

}