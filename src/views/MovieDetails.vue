<template>
  <div>
      <h1>{{ $route.params.movieId}}</h1>
    <p>Test</p>
    <p> {{store.state.testValue}}</p>
  </div>
</template>

<script>
  import store from "@/store";
  export default {
    data(){
      return{
        store
      }
    }
  }
</script>
