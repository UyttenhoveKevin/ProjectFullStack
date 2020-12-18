<template>
  <div>
    <h1>{{ $t('basketPage.title') }} ({{basketItemCounter}}) </h1>
    <div v-if="basketItemCounter > 0">
      <div class="c-movieContainer">
        <movie-item v-for="movie in basketItems" v-bind:key="movie.title"
                    :movie="movie"
        />
      </div>
      <div class="o-spacing--max-width">
        <div v-if="store.state.user !== 'anonymous'" class="o-spacing--center">
          <button class="c-button" v-on:click="orderMovies">{{ $t('basketPage.btnOrder') }}</button>
        </div>
        <div v-else class="o-spacing--center">
          <button class="c-button" v-on:click="showLogin">{{ $t('basketPage.btnLogin') }}</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p id="#msgNoItems">{{ $t('basketPage.noItems') }}</p>

    </div>
  </div>

</template>

<script>
import MovieItem from "../components/MovieItem.vue";
import store from "@/store";

export default {
  name: "Basket",
  components: {
    MovieItem
  },
  data(){
    return{
      store,
      basketItems: []
    }
  },
  computed: {
    basketItemCounter(){
      this.basketItems = JSON.parse(localStorage.getItem('moviesInCart'))
      return store.state.basketItems
    }
  },
  methods: {
    showLogin(){
      store.dispatch('setMenu', true)
    },
    orderMovies(){
      // localStorage.setItem('moviesInCart',"["+JSON.stringify(this.movie)+"]")
      let orders = [];

      if (localStorage.getItem('orders') === null){
        localStorage.setItem('orders',"["+JSON.stringify(this.basketItems)+"]")
      }
      else {
        orders = JSON.parse(localStorage.getItem('orders'))
        orders.push(this.basketItems)
        localStorage.setItem('orders',JSON.stringify(orders))
      }

      localStorage.setItem('moviesInCart', JSON.stringify([]))
      store.dispatch('addToCart', 0)
    }
  },
  created() {
    this.basketItems = JSON.parse(localStorage.getItem('moviesInCart'))
  }
};
</script>
<style lang="scss">
@import "@/assets/style/6-components/movieItem.scss";
@import "@/assets/style/6-components/primaryButton.scss";

</style>