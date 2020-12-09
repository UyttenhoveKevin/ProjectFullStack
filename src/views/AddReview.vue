<template>
  <div>
    <div class="o-top-nav-container">

      <h1 class="o-spacing--bottom">Reviewing: <span>{{ $route.params.movieId }}</span> </h1>

      <h2>Title</h2>
      <input type="text" v-model="title" placeholder="Review title">
      <h2>Description</h2>
      <input type="text" v-model="description" placeholder="What did you like about the movie?">
      <h2><label for="genres">Rating</label></h2>
      <div id="genres" class="select-box">
        <div class="select-box__current" tabindex="1">
          <div v-for="n in 10" class="select-box__value"><input class="select-box__input" type="radio" :id="n-1"
                                                                :value="n" name="Ben" v-model="checked"/>
            <p class="select-box__input-text">{{ n }}</p>
          </div>
          <svg class="select-box__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
            <g><path fill="#989FA8" d="M500,775.4L10,287.2l64.4-62.6L500,650.2l425.6-425.6l64.4,62.6L500,775.4z"/></g>
            </svg>
        </div>
        <ul class="select-box__list">
          <li><label v-for="n in 10" class="select-box__option" :for="n-1" aria-hidden="aria-hidden">{{ n }}</label>
          </li>
        </ul>
      </div>

      <div class="o-spacing--center o-spacing--top">
          <button class="c-button" v-on:click="addReview">Write review</button>
      </div>
      <div v-if="!fieldsValid" class="o-spacing--center">
        <p class="u-font-color--alt">All fields required</p>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import movieRepository from "@/repositories/movieRepository";
import router from "@/router";

export default {
  data() {
    return {
      store,
      title: "",
      description: "",
      checked: 1,
      fieldsValid: true,
      movie: {}
    }
  },
  async created() {
    let movies = await movieRepository.getMovies()

    movies.forEach(m =>{
      if (m.title === this.$route.params.movieId){
        this.movie = m
      }
    })
  },
  methods: {
    async addReview() {
      this.fieldsValid = !(this.title === "" || this.description === "");

      let movieReviews= []

      if (this.fieldsValid){
        movieReviews = this.movie.reviews;

        let newReview= {
          userName: store.state.user,
          rating: this.checked.toString(),
          reviewTitle: this.title,
          reviewDescription: this.description
        }

        movieReviews.push(newReview)
        this.movie.reviews = movieReviews

        await router.push({name: "Home"})
        await movieRepository.updateMovie(this.movie.id, this.movie)
      }

    }
  }
}
</script>