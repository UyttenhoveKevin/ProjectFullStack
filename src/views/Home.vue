<template>
  <div>
    <top-nav />
    <div class="o-spacing--body">
      <movie-item
        id="myid"
        title="Interstellar"
        size="3.6 GB"
        img="https://wallup.net/wp-content/uploads/2016/01/147474-space-Interstellar_movie-movies.jpg"
      />
      <movie-item
        id="myid"
        title="Interstellar"
        size="3.6 GB"
        img="https://wallup.net/wp-content/uploads/2016/01/147474-space-Interstellar_movie-movies.jpg"
      />
      <movie-item
        id="myid"
        title="Interstellar"
        size="3.6 GB"
        img="https://wallup.net/wp-content/uploads/2016/01/147474-space-Interstellar_movie-movies.jpg"
      />
      <movie-item
        id="myid"
        title="Interstellar"
        size="3.6 GB"
        img="https://wallup.net/wp-content/uploads/2016/01/147474-space-Interstellar_movie-movies.jpg"
      />
      <movie-item
        id="myid"
        title="Interstellar"
        size="3.6 GB"
        img="https://wallup.net/wp-content/uploads/2016/01/147474-space-Interstellar_movie-movies.jpg"
      />
      <movie-item
        id="myid"
        title="Interstellar"
        size="3.6 GB"
        img="https://wallup.net/wp-content/uploads/2016/01/147474-space-Interstellar_movie-movies.jpg"
      />
    </div>
    <bottom-nav />
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav.vue";
import MovieItem from "../components/MovieItem.vue";
import TopNav from "../components/TopNav.vue";

export default {
  name: "Home",
  components: {
    MovieItem,
    TopNav,
    BottomNav,
  },
};
</script>
