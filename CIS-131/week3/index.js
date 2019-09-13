/*
Kendall Roberts
CIS-131
9/9
*/
var getId;
function ChangeImg(getId){
    document.getElementById('bigOne').src = getId.src;
}

document.getElementById('bigOne').addEventListener("dblclick", function(){
    document.getElementById('bigOne').src = "bugs.jpg"
    document.getElementById('nasus').src = "bugs.jpg";
    document.getElementById('fizz').src = "duck.png";
    document.getElementById('darius').src = "marvin.jpg";
});

