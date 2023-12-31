const  axios = require("axios");
const cheerio = require("cheerio");
const pretty =require("pretty");

const markup = `

<ul class="fruits">


  <li class ="fruits__mango">Mango</li>
  <li class ="fruits__apple">Apple</li>

  </ul>
  `;


const  $ = cheerio.load(markup);

console.log($.html());
const apple = $(".fruits__apple");

console.log(apple.attr("class"));
// console.log(pretty($.html()));

const listItems = $("li");
console.log(listItems.length);

listItems.each((idx,el)=>{

    console.log($(el).text());


   })


const  ul = $("ul");

ul.append("<li>banana</li>");
ul.prepend("<li>pineaple</li>");


console.log(pretty($.html()));







