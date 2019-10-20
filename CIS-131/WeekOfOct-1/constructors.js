// const dog = {
//     name: "Stitch",
//     breed: "Golden Retriever",
//     birthdate: new Date(),
//     speak(sound) {
//         return "I like to " + sound;
//     },
//     setDate(birthday){
//         this.birthdate = new Date(birthday);
//     }
// };
const item = {
    name: "Wallace",
    strength: 25
}
function charObject(name,weapon, strength){
    this.charName = name;
    this.charWeapon = weapon;
    this.charStrength = strength;
    this.displayChar = function(){
        return `${this.charName} weilds a ${this.charWeapon} and has ${this.charStrength} strength`;
    }
    this.newWeapon = function(weapon){
        this.charWeapon = weapon;
    }

}

const player1 = new charObject("Hero","Axe", 65);
console.log(player1.displayChar());
player1.newWeapon("Sword");
console.log(player1.displayChar());
const player2 = new charObject(item, "Sheild", 85);
console.log(player2.charName.name)

objectArry= [player1,player2];

console.log(objectArry[)
/*** Constructor Methods */
function order(item,qty, price, purchaseDate){
    this.orderItem = item;
    this.orderQty = qty;
    this.orderPrice = price;
    this.orderDate = new Date(purchaseDate);
    this.displayOrder = function(){
        var subTotal = this.orderQty * this.orderPrice;
        return `${this.orderItem} and ${subTotal}`;
    },
    this.newQty = function(qty){
        this.orderQty = qty;
    }
}

const order1 = new order("DVD", 1, 10.99, Date.now());
console.log(order1.displayOrder());
order1.newQty(5);
console.log(order1.displayOrder());

const order2 = new order("Records", 7, 25.99, Date.now());
console.log(order2.displayOrder());
order2.newQty(4);
console.log(order2.displayOrder());

const order3 = new order(dog, 1, 100, Date.now());
console.log(order3.orderItem.breed);

// for(items in order1){
//     console.log(order1[items]);
// }

//console.log(order1.orderItem);


// dog.setDate("2017-1-02");


// aryMonth = ["jan", "feb", "march"];

// console.log(aryMonth[dog.birthdate.getMonth()]);

// console.log(dog.speak("woof woof"));

// dog.name= "tom";
// console.log(dog.name)

// d = new Date();
// console.log(d)
