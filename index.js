const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");


//URL of the page we want to scrape

const url = "http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3";

async function scrapeData(){

    try{
        //fetch HTML of the page we want to scrape

        const {data} = await axios.get(url);

        // LOad  HTML we fetched in the previous line;

        const $ = cheerio.load(data);

        //Select all the items in plainlist class 

        const listItems = $(".plainlist ul li");

        // Stores data for all countries
        const countries = [];

        //elements looping

        listItems.each((idx,el) =>{
            //holding object
        const country = {name:"",iso3:""};


        country.name = $(el).children("a").text();
        country.iso3 = $(el).children("span").text();

        // populate  countries array with country data

        countries.push(country);


        });


        // log the countries array in the console
        console.log(countries);

        // write countries data in a JSON File

        fs.writeFile("countries.json",JSON.stringify(countries,null,2),(err) =>{

            if(err){
                console.error(err);
                return;
            }
            console.log("Successfully written data to file");
        });


    }catch(err){

      console.error(err);
    }

}
//Let's invoke the function
scrapeData();















