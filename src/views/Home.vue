<template>
  <div class="c-movieContainer">
      <movie-item v-for="movie in store.state.movies" v-bind:key="movie.title"
        :movie="movie"
      />
      <h1 v-if="store.state.movies.length === 0" class="u-font-color--grey"> No movies found</h1>
  </div>
</template>

<script>
import MovieItem from "../components/MovieItem.vue";
import store from "@/store";
import movieRepository from "@/repositories/movieRepository";

export default {
  name: "Home",
  components: {
    MovieItem
  },
  data(){
    return{
      store
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/style/6-components/movieItem.scss";

</style>