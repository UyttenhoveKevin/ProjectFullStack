<template>
  <div>
    <top-nav />
    <div class="o-spacing--body">
      <movie-item v-for="movie in store.state.movies"
        :id="movie.title"
        :title="movie.title"
        :size="movie.size"
        :img="movie.default_image"
      />
    </div>
    <bottom-nav />
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav.vue";
import MovieItem from "../components/MovieItem.vue";
import TopNav from "../components/TopNav.vue";
import store from "@/store";

export default {
  name: "Home",
  components: {
    MovieItem,
    TopNav,
    BottomNav,
  },
  data(){
    return{
      store
    }
  }
};
</script>
