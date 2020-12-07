<template>
  <div class="c-movieContainer">
    <h1>Basket</h1>
    <movie-item v-for="movie in store.state.movies" v-bind:key="movie.title"
                :movie="movie"
    />
    <div class="o-spacing--max-width">
      <div class="o-spacing--center">
        <button class="c-button">Order movies</button>
      </div>
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
      store
    }
  },
  created() {
  }
};
</script>
<style lang="scss">
@import "@/assets/style/6-components/movieItem.scss";
@import "@/assets/style/6-components/primaryButton.scss";

</style>