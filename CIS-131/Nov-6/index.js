/*
Kendall Roberts
11/6/2019
CIS-131
*/

var moment = require('moment');
moment().format();
const chalk = require('chalk');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Please enter a date `, (date) =>{
    var now = moment();
    console.log(moment(date).format("YYYY MM DD"))
    console.log("Todays date is: "+ now);
    console.log(chalk.blue('Hello world!'));
    readline.close();
})
 
