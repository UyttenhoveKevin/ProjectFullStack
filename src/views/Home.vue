<template>
  <div>
      <movie-item v-for="movie in store.state.movies"
        :id="movie.title"
        :title="movie.title"
        :size="movie.size"
        :img="movie.default_image"
      />
  </div>
</template>

<script>
import MovieItem from "../components/MovieItem.vue";
import store from "@/store";

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
