import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex)
Vue.use(VueCookies)


$cookies.set('theme','default');

const store = new Vuex.Store({
  actions,
  mutations,
  state: {
    user: "anonymous",
    filtersActive: false,
    filters: {},
    showMenu: false,
    basketItems: 0,
    movies: []
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