const CSVToJSON = require("csvtojson");
const fs = require("fs")


let csvConverter = () => {
    CSVToJSON().fromFile("./aacFile.csv").then(source => {
        console.log(source);
    })  
}


module.exports = csvConverter