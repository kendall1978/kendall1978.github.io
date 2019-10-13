/*Kendall Roberts
CIS-131
Great Race*/


var stopLight = document.getElementById("light");
var bugs = document.getElementById('bugs');
var daffy = document.getElementById('daffy');
var bugsMove = 50;
var daffyMove = 50;
var bugsReset = document.getElementById('bugsWin');
var daffyReset = document.getElementById('daffyWin');
var race;

function raceTime() {
    if (bugsMove < 1000 && daffyMove < 1000) {
        var bugsInt = Math.random() * 7;
        var daffyInt = Math.random() * 7;
        bugsMove += bugsInt;
        daffyMove += daffyInt;
        bugs.style.left = `${bugsMove}px`;
        daffy.style.left = `${daffyMove}px`;

    } else {
        if (bugsMove > daffyMove) {
            document.getElementById("bugsContain").style.display = `block`;
        } else if (daffyMove > bugsMove) {
            document.getElementById("daffyContain").style.display = `block`;
        }

    }
}

stopLight.addEventListener ("click", function() {
    if (bugsMove == 50 && daffyMove == 50) {
        stopLight.src = "greenLight.png";
        console.log("gsdjfgh");
        if (race == null || race == undefined) {
            race = setInterval(raceTime, 10);
        }
    }

});

bugsReset.addEventListener("click", function(){
    if(bugsMove > daffyMove){
        document.getElementById("bugsContain").style.display = `none`;
        bugs.style.left = `50px`;
        daffy.style.left = `50px`;
        bugsMove = 50;
        daffyMove = 50;
        stopLight.src = "redlight.png";
        console.log("jsdfh");
        clearInterval(race);
        race = null;

    }
});

daffyReset.addEventListener("click", function(){
    if(daffyMove > bugsMove){
        document.getElementById("daffyContain").style.display = `none`;
        bugs.style.left = `50px`;
        daffy.style.left = `50px`;
        bugsMove = 50;
        daffyMove = 50;
        stopLight.src = "redlight.png";
        console.log("jsdfh");
        clearInterval(race);
        race = null;

    }
});



