var tvShows = [];
var reviews = [];
$(document).ready(() => {
    $.ajax({
        url:'https://api.themoviedb.org/3/tv/popular?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&page=1',
        success: (result) =>{
            tvShows.push(result.results[0], result.results[1], result.results[2]);
            console.log(result);

        }
    })
})

$(document).ready(() => {
    $.ajax({
        url:'https://api.themoviedb.org/3/tv/{tv_id}/reviews?api_key=065ba404968cd2bb5916e5ae06e33fcb&language=en-US&page=1',
        success: (result) =>{
            reviews.push(result.results[0], result.results[1], result.results[2])
            console.log(result);
        }
    })
})



Vue.component('popular-list',{
    props:['theshows'],
    template:
    `
        <div class="row">
            <div v-for="item in theshows">
                <div class="card" style="width: 15rem;">
                <img v-bind:src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+item.poster_path">
                <div class="card-body">
                    <h5 class="card-title">{{item.original_name}}</h5>
                    <p>{{item.vote_average}}</p>
                    <p>{{item.first_air_date}}</p>
                    <p>{{item.overview}}</p>
                    <button v-on:click="reviewDisplay(item)">More Info</button>
                </div>
                </div>
            </div>
        </div>
    `
})

var app = new Vue({
    el:'#app',
    data:{
        shows: tvShows,
        showReviews: reviews
    },
    methods:{
        reviewDisplay(theReview){
            if(showReviews.id == theReview.id){
                var aReview = document.createElement("p");
                aReview.appendChild(showReviews.content);
            }
        }
    }
})

