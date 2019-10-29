Svar obj = {
    movie: 'Hawaii 5-0',
    budget: 63000000,
    generas:{
        id: 18,
        name: "Drama"
    }
}

// console.log(obj.movie);
// console.log(obj.generas.name);


//convert that object to json
var jsonString = JSON.stringify(obj);
console.log(jsonString);

//https://api.themoviedb.org/3/movie/now_playing?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&page=1

// convert that json string back into an object

var backToObject = JSON.parse(jsonString);
console.log(backToObject);

window.addEventListener('load', initialPage);
function initialPage(){
    document.getElementById("movieTitle").innerHTML = backToObject.movie;
    document.getElementById("description").innerHTML = backToObject.movie;
};