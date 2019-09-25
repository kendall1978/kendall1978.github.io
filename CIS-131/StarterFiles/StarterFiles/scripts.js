function valForm(frm)
{
    var userName = document.getElementById('userName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var defColor = "white"
    var errColor = "red"

    var isValid=true;
    //reset the background colors
    userName.style.backgroundColor = defColor;
    email.style.backgroundColor = defColor;
    phone.style.backgroundColor = defColor;


    if (frm.userName.value == "")
    {
       document.getElementById('userNameErr').innerHTML = "Invalid Name"
       userName.style.backgroundColor = errColor;
       isValid = false;
    }

    if (frm.email.value == "")
    {
       document.getElementById('emailErr').innerHTML = "Invalid Email"
       email.style.backgroundColor = errColor;
       isValid = false;
    }

    if (frm.phone.value == "")
    {
       document.getElementById('phoneErr').innerHTML = "Invalid Phone"
       phone.style.backgroundColor = errColor;
       isValid = false;
    }

    if (isValid)
    {
        frm.submit();
    }
}

function printQuery() {
    var url = window.location.search.substr(1);
    var pairs = url.split("&");

    pairs.forEach(function(el)
    {
        var keyValue = el.split("=")
        document.write(keyValue[0] +  ": " + keyValue[1] + "<br>")
    })

}
