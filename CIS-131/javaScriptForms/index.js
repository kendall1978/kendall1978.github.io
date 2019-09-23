
//document.getElementById('val').addEventListener("click", val);

function vals(frm){
    var isValid = true;
    if(frm.userName.value.length == 0){
        isValid = false;
        document.getElementById('err').innerHTML = "All fields must be filled";
        frm.userName.style.backgroundColor = "red"; 
    }
    else if(frm.mail.value.length == 0){
        isValid = false;
        document.getElementById('err').innerHTML = "All fields must be filled";
        frm.mail.style.backgroundColor = "red";
    }
    else if(frm.phone.value.length == 0){
        isValid = false;
        document.getElementById('err').innerHTML = "All fields must be filled";
        frm.phone.style.backgroundColor = "red";
    }
    else if(frm.userName.value.length > 0){
        frm.userName.style.backgroundColor = "white";
    }
    else if(frm.mail.value.length > 0){
        frm.mail.style.backgroundColor = "white";
    }
    else if(frm.phone.value.length > 0){
        frm.phone.style.backgroundColor = "white";
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
        document.write(`${pair[0]} is ${pair[1]}<br>`)
    }
}

var items = ["Hoodies", "Beanies", "T-Shirt"];
myDiv = document.getElementById('merch');
myDiv.innerHTML = items.length;
myDiv.innerHTML = items[1];
merchString = "<select id='Merch'>";

for (var i = 0; i < items.length; i++){
    merchString += "<option>" + items[i] +  "</option>";
}
merchString += "</select>"; 
myDiv.innerHTML = merchString;