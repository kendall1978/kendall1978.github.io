/*
Kendall Roberts
CIS-131
9/9
*/
document.getElementById('nasus').addEventListener("click", function(){
    document.getElementById('nasus1').src = "nasus.jfif"
});
document.getElementById('darius').addEventListener("click", function(){
    document.getElementById('nasus1').src = "darius.jfif"
});
document.getElementById('fizz').addEventListener("click", function(){
    document.getElementById('nasus1').src = "fizz.jpg"
});

document.getElementById('nasus1').addEventListener("click", function(){
    document.getElementById('nasus').src = "bugs.jpg";
    document.getElementById('fizz').src = "duck.png";
    document.getElementById('darius').src = "marvin.jpg";
});

