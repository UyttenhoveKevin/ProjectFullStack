import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  mutations,
  state: {
    testValue: "Dit is een test",
    movies: [{
      "title": "Tenet",
      "description": "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      "size": "7.8 GB",
      "default_image": "https://images.bruzz.be/bulk_image_upload/1598337756/deel1/1719%20FILM_TENET.jpg?auto=format&crop=edges%252C%2520entropy&fit=crop&ixlib=php-1.1.0&q=95&w=640&s=1693f3ad9715f1bd0684735b9efec544",
      "alt_images": ["https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg"],
      "dateReleased": "2020-09-03",
      "dateAdded": "2020-12-07",
      "available": "true",
      "avarageScore": "9",
      "reviews": [{
        "username": "kevin",
        "rating": "9",
        "reviewTitle": "Geweldig",
        "review": "Hele goeie film! Is heel spannend zeker een aanrader"
      },{
        "username": "kevin",
        "rating": "9",
        "reviewTitle": "Geweldig",
        "review": "Hele goeie film! Is heel spannend zeker een aanrader"
      }],
      "actors": [{
        "id": "12",
        "firstName": "Kevin",
        "name": "Uyttenhove",
        "image": ""
      },{
        "id": "12",
        "firstName": "Xander",
        "name": "Uyttenhove",
        "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      }],
      "tags": [{
        "id": "12",
        "name":"Adventure"
      },
        {
          "id": "12",
          "name":"Comedy"
        },
        {
          "id": "12",
          "name":"Family"
        },
        {
          "id": "12",
          "name":"Action"
        }]
    }]
  },
  getters: {
    getMovie: (state) => (title) => {
      let movieData;
      state.movies.forEach(movie => {
        if (movie.title === title){
          movieData = movie
        }
      })
      return movieData
    }
  }
})

export default  store;