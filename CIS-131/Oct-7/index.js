function Order(item, qty, price){
    this.item = item
    this.qty = qty;
    this.price = price;
    this.displayOrder = function(){
        var total = this.qty * this.price;
        return `${this.item}: ${total}`;
    }
}

order1 = new Order ("Toy", 4, 5.99);
order2 = new Order("Game", 1, 15.99);

var anyOrders = [order1, order2];
console.log(anyOrders);

for(var i = 0; i < anyOrders.length; i++){
    console.log(anyOrders[i]);
};

document.querySelector('h4').addEventListener("click", function(){
    var myList = "";
    for(var i = 0; i<anyOrders.length; i++){
        myList += `<li id={i}> ${anyOrders[i]} </li>`;

    }
    document.getElementById('displayOrders').innerHTML = myList;
});

document.getElementById('displayOrders').addEventListener('click', 
function(e){
    alert(e.target);
    var objectID = e.target.id;
    document.querySelector('h3').innerHTML = anyOrders[objectID]
    .displayOrder();

})