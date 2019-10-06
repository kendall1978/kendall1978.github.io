
// const pen = {
//     type: "ballpoint",
//     color: "blue",
//     brand: "bic"
// };

// pen.color = "red";


// console.log(pen.type);
// console.log(pen.color);


// console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

// //dynamically add new properties to an already created object

// pen.price = 2.5;
// console.log(pen.price);

//************************* */

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe(){
        var aString = `${this.name} has ${this.health} health points, ${this.strength} as strength, and ${this.xp} as experince points`;
        // console.log(`${this.name} has ${this.health} health points and ${this.strength} as strength`);
        return aString;
    }
};

//console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);
aurora.health -= 20;
aurora.strength += 50;
aurora.xp +=25;
//console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);


// function describe(character){
//     console.log(`${character.name} has ${character.health} health points and ${character.strength} as strength `);
// }
// describe(aurora);


console.log(aurora.describe());

const koba = {
    name: "Koba",
    species: "Blue Heeler",
    weight: 45,
    bark: "Grr, Ruff!",
    dog(){
        var dogString = `${this.name} is a  ${this.species} he weighs ${this.weight}`;
        console.log(`Look, a cat! ${koba.name} barks: ${koba.bark}`);
        return dogString;
    }
};

console.log(koba.dog());

const bank = {
    name: "Alex",
    balance: 0,
    describeBank(){
        var bankString = `${this.name} has  ${this.balance} dollars in his bank. `;
        
        return bankString;
    },
    credit(money){
        this.balance += money;
    }

}




bank.credit(250);
bank.credit(-80);

console.log(bank.describeBank());


