function greeting (greet)
{
    console.log(greet);
}

function createGreeting(firstName, myFunctionName){
    var myGreeting = "Hello "+ firstName;
    //greeting(myGreeting);
    //var myFunctionName = greeting;
    myFunctionName(myGreeting);
}

createGreeting("Nugget", greeting);

/******************** Timer  */
var myTimer = setInterval(aFunction, 5000);


document.getElementById("stop").addEventListener('click', function(){
    clearInterval(myTimer);
})

/**Arrays */

var movies = ["Lilo and Stitch", "hawaii 5-0", "Jurrassic Park"];

myDiv = document.getElementById('ary');
// getting the array size
myDiv.innerHTML = movies.length;
//to display anarray use the array name and element index or position
myDiv.innerHTML = movies[1];
//** */iterate over our array

myString = "<select id='movies'>";
// for loop

for (var i = 0; i < movies.length; i++){
    myString += "<option>" + movies[i] +  "</option>";
}
movies.forEach(function(el){
    //myString += "<option>" + el +  "</option>";
    myString += `<option>${el}</option>`; 
})
myString += "</select>"; 
myDiv.innerHTML = myString;

document.getElementById('getIt').addEventListener('click', function(){
    alert(document.getElementById('movie').value);
})
//add to the array
//movies.push("Jumanji");
//console.log(movies);

//add an element to the begining of an array
//var aVar = movies.pop();
//movies.unshift("50 first Dates");
//console.log(movies);
//console.log(aVar);

//movies.splice(1,2);
//console.log(movies);


