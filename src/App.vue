<template>
  <div>
    <top-nav />
    <router-view v-if="!showMenu" class="o-spacing--body"/>
    <bottom-nav />
  </div>
</template>

<script>

  import TopNav from "@/components/TopNav";
  import BottomNav from "@/components/BottomNav";
  import store from "@/store";
  import movieRepository from "@/repositories/movieRepository";

  export default {
    components: {
      TopNav,
      BottomNav
    },
    computed: {
      showMenu(){
        return store.state.showMenu
      }
    },
    async created() {
      await store.dispatch('setMovies', await movieRepository.getMovies())
    }
  }
</script>

<style lang="scss">
@import "@/assets/style/screen.scss";

 
#nav {

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: 2b983;
    }
  }
}
</style>
