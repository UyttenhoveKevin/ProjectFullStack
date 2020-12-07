<template>
  <div class="c-movieItem u-font-color--grey u-font-weight--light">
      <router-link class="o-flex--justify-center" :to="'/movie/'+movie.title">
    <img class="u-hover" alt="loading..." :src="movie.default_image" />
    </router-link>
    <div class="o-flex o-flex--space-between">
      <h1>{{ movie.title }}</h1>
      <div class="o-flex--space-between">
        <p class="o-spacing--right o-flex--center">{{ movie.size }}</p>
        <svg
          class="u-hover"
          v-on:click="svgClicked"
          xmlns="http://www.w3.org/2000/svg"
          width="16.839"
          height="20.48"
          viewBox="0 0 16.839 20.48"
        >
          <path
            id="Path_9"
            data-name="Path 9"
            d="M0,0H14.839V18.48h0l-7.42-3.8L0,18.48Z"
            transform="translate(1 1)"
            :fill="fill"
            :stroke="stroke"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import store from "@/store";

export default {
  created() {
    this.checkIfAdded();
    this.styleSVG();
  },
  props: ['movie'],
  data() {
    return {
      added: false,
      fill: "",
      stroke: "",
    };
  },
  methods: {
    svgClicked() {
      this.added = !this.added;
      this.styleSVG();
      this.updateInLocaleStorage();
    },
    styleSVG() {
      if (this.added) {
        this.fill = "#cb063c";
        this.stroke = "#cb063c";
      } else {
        this.fill = "none";
        this.stroke = "#989FA8";
      }
    },
    checkIfAdded(){
      let basketItems = JSON.parse(localStorage.getItem('moviesInCart'))
      basketItems.forEach(item => {
        if (item.title === this.movie.title){
          this.added = true;
        }
      })
    },
    updateInLocaleStorage(){
        //Update in locale storage
      if (this.added){
        this.addToLocaleStorage()
      }
      else {
        this.removeFromLocaleStorage()
      }
    },
    addToLocaleStorage(){
      try {
        let moviesInCart = [];

        if (localStorage.getItem('moviesInCart') === null){
          localStorage.setItem('moviesInCart',"["+JSON.stringify(this.movie)+"]")
        }
        else {
          moviesInCart = JSON.parse(localStorage.getItem('moviesInCart'))
          moviesInCart.push(this.movie)
          localStorage.setItem('moviesInCart',JSON.stringify(moviesInCart))
        }
        let itemsInBasket = JSON.parse(localStorage.getItem('moviesInCart')).length
        store.dispatch('addToCart', itemsInBasket)
      }
      catch (e){
        console.log('something went wrong')
      }
    },
    removeFromLocaleStorage(){
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
      }
      catch (e){
        console.log('something went wrong')
      }
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/style/6-components/movieItem.scss";
</style>