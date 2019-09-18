var timer = setInterval(ranNum, 3000);
var showNum = document.getElementById('timer');

function ranNum(){
    showNum.innerHTML = Math.floor(Math.random() * 5);
}

//document.getElementById('val').addEventListener("click", val);

function vals(frm){
    var isValid = true;
    if(frm.userName.value == ""){
        isValid = false;
        document.getElementById('err').innerHTML = "Cannot be Blank";
        frm.userName.style.backgroundColor = "red"; 
    }
    return isValid;
    //if(isValid){
        //frm.submit();
//}
}
function printQuery(){
    var query =window.location.search.substring(1);
    var valPairs = query.split("&");
    for(var i = 0; i < valPairs.length; i++){
        var pair = valPairs[i].split("=")
        document.write(`${pair[0]} gets ${pair[1]}<br>`)
    }
}