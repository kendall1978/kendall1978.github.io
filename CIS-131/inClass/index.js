var myAppName = "index";


document.getElementById('slickButton').addEventListener('dblclick', function(){
alert("another thing");
});

function theFunc(){
    alert("whats up home boy");
}
document.getElementById('butt').addEventListener('click', theFunc);


function greetings(myName){
    document.getElementById("cheers").innerHTML = "Hello "+
     myName + "Im from " + myAppName;
}

function anObject(theObj){
   // alert(theObj);
   document.getElementById('cheers').innerHTML =
   theObj.innerHTML;
}

