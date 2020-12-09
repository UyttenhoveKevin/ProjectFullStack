<template>
  <div>
    <div class="c-movieDetailContainer">
      <div class="o-flex--space-between">
        <h1> {{ $route.params.movieId + " (" + this.movie.dateReleased.slice(0,4) + ")"}} </h1>
        <h1 class="u-font-color--grey"> {{movie.avarageScore}}/10</h1>
      </div>
      <img :src="movie.default_Image"/>
      <div class="o-flex--wrap">
        <tag v-for="tag in movie.tags" v-bind:key="tag.id" :tag="tag"/>
      </div>
        <h2>Description</h2>
      <div class="u-font-color--grey">
        <p v-if="movie.description !== '' && movie.description !== null">
          {{movie.description}}
        </p>
        <p v-else>
          No description available
        </p>
      </div>
      <h2>Starring</h2>
      <div class="o-flex--wrap">
        <actor class="o-spacing--width--1-3" v-for="actor in movie.actors" v-bind:key="actor.id" :image="actor.image" :name="actor.name" :first-name="actor.firstName"/>
        <p class="u-font-color--grey" v-if="movie.actors.length === 0">
          No actors found
        </p>
      </div>
      <div v-on:click="toggleReviews" class="o-flex--space-between u-hover">
        <h2> Reviews ({{movie.reviews.length}}) </h2>
        <div class="o-flex--row" v-if="!showReviews">
          <p class="u-font-weight--light u-font-color--grey o-spacing--right-sm"> Show</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18.286" height="10.286" viewBox="0 0 18.286 10.286">
            <g id="Group_3" data-name="Group 3" transform="translate(-319 -48.748)">
              <g id="_9851132801553239378" data-name="9851132801553239378" transform="translate(308.381 36)">
                <path data-name="Path 3" d="M8.072,14.591H20.218c.223,0,.4-.356.4-.8s-.181-.8-.4-.8H8.072c-.223,0-.4.356-.4.8S7.848,14.591,8.072,14.591Z" transform="translate(15.515 -1.866) rotate(45)" fill="#e6e6e6"/>
                <path data-name="Path 13" d="M8.072,14.591H20.218c.223,0,.4-.356.4-.8s-.181-.8-.4-.8H8.072c-.223,0-.4.356-.4.8S7.848,14.591,8.072,14.591Z" transform="translate(15.515 -1.866) rotate(45)" fill="#e6e6e6"/>
              </g>
              <g id="_9851132801553239378-2" data-name="9851132801553239378" transform="translate(350.034 38.128) rotate(90)">
                <path data-name="Path 3" d="M8.072,14.591H20.218c.223,0,.4-.356.4-.8s-.181-.8-.4-.8H8.072c-.223,0-.4.356-.4.8S7.848,14.591,8.072,14.591Z" transform="translate(15.515 -1.866) rotate(45)" fill="#e6e6e6"/>
                <path  d="M8.072,14.591H20.218c.223,0,.4-.356.4-.8s-.181-.8-.4-.8H8.072c-.223,0-.4.356-.4.8S7.848,14.591,8.072,14.591Z" transform="translate(15.515 -1.866) rotate(45)" fill="#e6e6e6"/>
              </g>
            </g>
          </svg>
        </div>
        <div class="o-flex--row" v-else>
          <p class="u-font-weight--light u-font-color--grey o-spacing--right-sm"> Hide</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18.286" height="10.286" viewBox="0 0 18.286 10.286">
            <g id="Group_4" data-name="Group 4" transform="translate(337.286 59.034) rotate(180)">
              <g id="_9851132801553239378" data-name="9851132801553239378" transform="translate(308.381 36)">
                <path  d="M8.072,14.591H20.218c.223,0,.4-.356.4-.8s-.181-.8-.4-.8H8.072c-.223,0-.4.356-.4.8S7.848,14.591,8.072,14.591Z" transform="translate(15.515 -1.866) rotate(45)" fill="#e6e6e6"/>
                <path  d="M8.072,14.591H20.218c.223,0,.4-.356.4-.8s-.181-.8-.4-.8H8.072c-.223,0-.4.356-.4.8S7.848,14.591,8.072,14.591Z" transform="translate(15.515 -1.866) rotate(45)" fill="#e6e6e6"/>
              </g>
              <g id="_9851132801553239378-2" data-name="9851132801553239378" transform="translate(350.034 38.128) rotate(90)">
                <path d="M8.072,14.591H20.218c.223,0,.4-.356.4-.8s-.181-.8-.4-.8H8.072c-.223,0-.4.356-.4.8S7.848,14.591,8.072,14.591Z" transform="translate(15.515 -1.866) rotate(45)" fill="#e6e6e6"/>
                <path d="M8.072,14.591H20.218c.223,0,.4-.356.4-.8s-.181-.8-.4-.8H8.072c-.223,0-.4.356-.4.8S7.848,14.591,8.072,14.591Z" transform="translate(15.515 -1.866) rotate(45)" fill="#e6e6e6"/>
              </g>
            </g>
          </svg>
        </div>


      </div>
      <review v-if="showReviews" v-for="review in movie.reviews" v-bind:key="review.id" :user-name="review.userName" :review="review.reviewDescription" :review-title="review.reviewTitle" :score="review.rating"/>
      <div v-if="!added" class="o-spacing--center">
        <button class="c-button" v-on:click="addButtonClicked">Add to basket </button>
      </div>
      <div v-else class="o-spacing--center">
        <button class="c-button" v-on:click="removeButtonClicked">Remove from basket </button>
      </div>
    </div>

  </div>
</template>

<script>
  import store from "@/store";
  import Tag from "../components/Tag"
  import Actor from "@/components/Actor";
  import Review from "@/components/Review"
  import router from "@/router";

  export default {
    created() {
      this.movie = store.getters.getMovie(this.$route.params.movieId)
      this.checkIfAdded()
    },
    components: {
      Tag, Actor, Review
    },
    data(){
      return{
        store,
        movie: {},
        year: "",
        showReviews: false,
        added: false
      }
    },
    methods: {
      toggleReviews(){
        this.showReviews = !this.showReviews
      },
      checkIfAdded(){
        let basketItems = JSON.parse(localStorage.getItem('moviesInCart'))
        this.added = false
        basketItems.forEach(item => {
          if (item.title === this.movie.title){
            this.added = true
          }
        })
      },
      addButtonClicked(){
        try {
          console.log('clicked');
          let moviesInCart = [];

          if (localStorage.getItem('moviesInCart') === null){
            localStorage.setItem('moviesInCart',"["+JSON.stringify(this.movie)+"]")
          }
          else {
            moviesInCart = JSON.parse(localStorage.getItem('moviesInCart'))
            moviesInCart.push(this.movie)
            localStorage.setItem('moviesInCart',JSON.stringify(moviesInCart))
          }
          // console.log(localStorage.getItem('moviesInCart'))
          let itemsInBasket = JSON.parse(localStorage.getItem('moviesInCart')).length
          store.dispatch('addToCart', itemsInBasket)
          router.push({name: 'Home'})
        }
        catch (e){
          console.log('something went wrong')
        }
      },
      removeButtonClicked(){
        try {
          let newBasketItems = []
          let basketItems = JSON.parse(localStorage.getItem('moviesInCart'))
          basketItems.forEach(item => {
            if (item.title !== this.movie.title){
              newBasketItems.push(item)
            }
          });
          localStorage.setItem('moviesInCart', JSON.stringify(newBasketItems))
          let itemsInBasket = JSON.parse(localStorage.getItem('moviesInCart')).length
          store.dispatch('addToCart', itemsInBasket)
          router.push({name: 'Home'})
        }
        catch (e){
          console.log('something went wrong')
        }
      }
    }
  }
</script>
<style lang="scss">
@import "@/assets/style/6-components/primaryButton.scss";
@import "@/assets/style/6-components/movieItem.scss";

</style>