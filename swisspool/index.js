const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('fs');

const URL = "https://www.swisspool-billard.ch/turnier/tabs/finalfield_ansicht.asp?t_id=4114&rub=tab_ansicht&op1=5715";

request(URL, function (err, res, body) {
    if(err)
    {
        console.log(err);
    }
    else
    {

        let $ = cheerio.load(body);  //loading of complete HTML body
        var tableau = $( ".spielfeld_hinter" )
        console.log(tableau.find("td").length)


    }
});