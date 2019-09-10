
var myAppName = "index";

document.getElementById('clickHere').addEventListener('click', theFunc);
document.getElementById('anonymous').addEventListener('dblclick', function(){
            alert("Another function here");
});

function theFunc(){
    alert("giggled");
}

function greetings(myName){
    //alert("hello" + myName + "! from " + myAppName);
    //document.write("hello " + myName + "! from " + myAppName);
    document.getElementById('greetMessage').innerHTML  = "hello " + myName + "! from " + myAppName;
}

function anObject(theObj) {
    //alert(theObj);
    document.getElementById('greetMessage').innerHTML = theObj.innerHTML;
}

