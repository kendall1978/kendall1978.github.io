/*
   Kendall Roberts
   CIS-131
   Cheech's Pizza Company
*/

var numPizza = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
selDiv1 = document.getElementById('selBox1');
selDiv1.innerHTML = numPizza.length;
selDiv1.innerHTML = numPizza[1];
numPizzaString = "<select id='numPizza'>";

for (var i = 0; i < numPizza.length; i++) {
    numPizzaString += "<option>" + numPizza[i] + "</option>";
}
numPizzaString += "</select>";
selDiv1.innerHTML = numPizzaString;

var pizzaType = ['Pepperoni', 'Hawaiian', 'Supreme', 'Meat Lovers', 'Cheech'];
selDiv2 = document.getElementById('selBox2');
selDiv2.innerHTML = pizzaType.length;
selDiv2.innerHTML = pizzaType[1];
pizzaTypeString = "<select id='pizzaType'>";

for (var x = 0; x < pizzaType.length; x++) {
    pizzaTypeString += "<option>" + pizzaType[x] + "</option>";
}
pizzaTypeString += "</select>";
selDiv2.innerHTML = pizzaTypeString;

document.getElementById("confirmButton").addEventListener("click", function(){
    var pizzaPrice = 12;
    var pizzaTax = ((.076 * pizzaPrice)+ 12) - 12;
    var pricePerPizza = ((.076 * pizzaPrice)+ 12);
    var pizzaTotal = 0;
    var typeOfPizza = document.getElementById('pizzaType').value;
    var orderName = document.getElementById('oName').value;
    var orderPhone = document.getElementById('phoneNum').value;
    if (document.getElementById('numPizza').value == '1') {
        pizzaTotal = pricePerPizza * 1;
    }
    else if (document.getElementById('numPizza').value == '2') {
        pizzaTotal = pricePerPizza * 2;
    }
    else if (document.getElementById('numPizza').value == '3') {
        pizzaTotal = pricePerPizza * 3;
    }
    else if (document.getElementById('numPizza').value == '4') {
        pizzaTotal = pricePerPizza * 4;
    }
    else if (document.getElementById('numPizza').value == '5') {
        pizzaTotal = pricePerPizza * 5;
    }
    else if (document.getElementById('numPizza').value == '6') {
        pizzaTotal = pricePerPizza * 6
    }
    else if (document.getElementById('numPizza').value == '7') {
        pizzaTotal = pricePerPizza * 7;
    }
    else if (document.getElementById('numPizza').value == '8') {
        pizzaTotal = pricePerPizza * 8;
    }
    else if (document.getElementById('numPizza').value == '9') {
        pizzaTotal = pricePerPizza * 9;
    }
    else if (document.getElementById('numPizza').value == '10') {
        pizzaTotal = pricePerPizza * 10;
    }
    document.getElementById("completeOrder").innerHTML = "Order details" +"<br>" + "Name: " + orderName + '<br>' + "Phone Number: " +  
    orderPhone + "<br>" +"Pizza Type: "+ typeOfPizza + "<br>" + "Price per pizza: $" + pizzaPrice + "<br>" + "Taxes Per Pizza: $" + pizzaTax.toFixed(2) + "<br>" + 
    "Order total: $" + pizzaTotal.toFixed(2) ;
});

