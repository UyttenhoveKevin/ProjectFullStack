<template>
  <div>
    <movie-item id="myid"  title='Interstellar' size="3.6 GB" img="https://wallup.net/wp-content/uploads/2016/01/147474-space-Interstellar_movie-movies.jpg"/>
  </div>
</template>

<script>
import MovieItem from "../components/MovieItem.vue";
export default {
  name: "Home",
  components: {
    MovieItem,
  }
};
</script>
