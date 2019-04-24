"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Kendall Roberts
   Date: 4/23/2019

*/
/* Declaring Date */
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
/*Extracting the hour and Month from thisTime Var */
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2*thisMonth+thisHour)%24;
var imgStr = "<img src='sd_sky"+mapNum+".png'/>";
document.getElementById("timeStamp").innerHTML = timeStr;
document.getElementById("planisphere").insertAdjacentHTML("afterbegin",imgStr);
/*
var thisDate = new Date("October 12, 2018");
var dateString = thisDate.toLocaleDateString();
var dateHTML = "<h2>"+dateString+"</h2>";
var thisDay = thisDate.getDay();
var eventHTML = getEvennt(thisDay);
document.getElementById("unionToday").insertAdjacentHTML("beforeend",dateHTML+eventHTML);
*/