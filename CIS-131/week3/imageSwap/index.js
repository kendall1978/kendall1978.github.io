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

var myImg = document.getElementById('bigOne');
var imgIndex = 1;
var imgArray = ["nasus.jfif", "darius.jfif", "fizz.jpg", "bugs.jpg", "marvin.jpg", "duck.png"];
var aTimer = setInterval(imgSwap, 3000);

/*document.getElementById('bigOne').addEventListener('click', function(){
    myImg.setAttribute('src', imgArray[imgIndex])
    imgIndex++;
    if(imgIndex > 5){
        imgIndex = 0;
    }
    clearInterval(aTimer);
});*/
function imgSwap(){
    myImg.setAttribute('src', imgArray[imgIndex])
    imgIndex++;
    if(imgIndex > 5){
        imgIndex = 0;
    }
};
