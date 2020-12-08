<template>
  <div>
    <h1>Basket ({{basketItemCounter}}) </h1>
    <div v-if="basketItemCounter > 0">
      <div class="c-movieContainer">
        <movie-item v-for="movie in basketItems" v-bind:key="movie.title"
                    :movie="movie"
        />
      </div>
      <div class="o-spacing--max-width">
        <div v-if="store.state.user !== 'anonymous'" class="o-spacing--center">
          <button class="c-button">Order movies</button>
        </div>
        <div v-else class="o-spacing--center">
          <button class="c-button">Login to order</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Your basket is empty</p>
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
  created() {
    this.basketItems = JSON.parse(localStorage.getItem('moviesInCart'))
  }
};
</script>
<style lang="scss">
@import "@/assets/style/6-components/movieItem.scss";
@import "@/assets/style/6-components/primaryButton.scss";

</style>