/* 
Kendall Roberts
Vue Components Project
11/5/2019
*/
var movies = [];
$(document).ready(() => {
    $.ajax({
        url:'https://api.themoviedb.org/3/movie/now_playing?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&page=1',
        success: (result) =>{
            movies.push(result.results[0], result.results[1], result.results[2])
            console.log(result)

        }
    })
})

Vue.component('section-list',{
    props:['themovies'],
    template:
    `
        <div class="row">
            <div v-for="movie in themovies">
                <div class="card" style="width: 18rem;">
                    <img v-bind:src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+movie.poster_path" class ="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{movie.title}}</h5>
                        <p class="card-text">{{movie.overview}}</p>
                    </div>
                </div>
            </div>
        </div>

    `
})

console.log(movies)

var app = new Vue({
    el: "#app",
    data:{
        moviesPlaying: movies
        
    }
})