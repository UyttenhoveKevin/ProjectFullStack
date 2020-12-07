<template>
  <div>
      <h1> {{ $route.params.movieId }} </h1>
  </div>
</template>

<script>
  import store from "@/store";
  export default {
    created() {
      let testing = store.getters.getMovie(this.$route.params.movieId)
      console.log(testing.size)
    },
    data(){
      return{
        store,
        movie: {}
      }
    }
  }
</script>
