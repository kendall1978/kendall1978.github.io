/*Kendall Roberts
CIS-131
Address Book
10/13/2019*/


imgAry = ['ironMan.jpg', 'captainAmerica.jpg', 'doctorStrange.jpg',
 'spiderman.jpg', 'thor.jpg', 'blackPanther.jpeg', 'newMan.jpg'];



function contacts(firstName, lastName, phone, email, image){
    this.contactFirst = firstName;
    this.contactLast = lastName;
    this.contactPhone = phone;
    this.contactEmail = email;
    imgAry = image;
    this.displayContacts = function(){
        document.getElementById('contacts').innerHTML = `<img src ='${image}'><h2>Name: ${this.contactFirst} ${this.contactLast}</h2>
        <h2>Phone: ${this.contactPhone}</h2> <h2>Email: ${this.contactEmail}</h2> `;
    }



}


document.getElementById('addButton').addEventListener('click', function(){
    
    const newMan = new contacts(document.getElementById('firstName').value,
    document.getElementById('lastName').value,
    document.getElementById('phone').value,
    document.getElementById('email').value,
    'newMan.jpg');
    document.getElementById('newDisplay').addEventListener('click', function(){
        newMan.displayContacts();
    });
    return newMan;
})

const spiderman = new contacts('Peter', 'Parker', '917-777-8787', 'spidey87@gmail.com', 'spiderman.jpg');
const ironMan = new contacts('Tony', 'Stark', '917-654-3288', 'ironDude@gmail.com', 'ironMan.jpg');
const capAmerica = new contacts('Steve', 'Rogers', '479-521-7779', 'theUncleSam@gmail.com', 'captainAmerica.jpg');
const docStrange = new contacts('Stephen', 'Strange', '917-449-9831', 'wizardTime@gmail.com', 'doctorStrange.jpg');
const thor = new contacts('Thor', 'Odinson', '917-873-1254', 'thunderBoy@gmail.com', 'thor.jpg');
const blackPanther = new contacts('T\'Challa', '', '917-899-5803', 'wakandaForever@gmail.com', 'blackPanther.jpeg');

contactsArry=[ironMan, capAmerica, docStrange, spiderman, thor, blackPanther];

function contactTabs(){
    document.getElementById('ironMan').innerHTML = `<h3>${contactsArry[0].contactFirst} ${contactsArry[0].contactLast}</h3>`;
    document.getElementById('capAmerica').innerHTML = `<h3>${contactsArry[1].contactFirst} ${contactsArry[1].contactLast}</h3>`;
    document.getElementById('docStrange').innerHTML = `<h3>${contactsArry[2].contactFirst} ${contactsArry[2].contactLast}</h3>`;
    document.getElementById('spiderman').innerHTML = `<h3>${contactsArry[3].contactFirst} ${contactsArry[3].contactLast}</h3>`;
    document.getElementById('thor').innerHTML = `<h3>${contactsArry[4].contactFirst} ${contactsArry[4].contactLast}</h3>`;
    document.getElementById('blackPanther').innerHTML = `<h3>${contactsArry[5].contactFirst} ${contactsArry[5].contactLast}</h3>`;
}
contactTabs();
document.getElementById('ironManDisplay').addEventListener('click', function(){
    ironMan.displayContacts();
});
document.getElementById('capDisplay').addEventListener('click', function(){
    capAmerica.displayContacts();
});
document.getElementById('docDisplay').addEventListener('click', function(){
    docStrange.displayContacts();
});
document.getElementById('spidermanDisplay').addEventListener('click', function(){
    spiderman.displayContacts();
});
document.getElementById('thorDisplay').addEventListener('click', function(){
    thor.displayContacts();
});
document.getElementById('blackPantherDisplay').addEventListener('click', function(){
    blackPanther.displayContacts();
});

document.getElementById('newDisplay').addEventListener('click', function(){
    newMan.displayContacts();
});

