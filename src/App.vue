<template>
  <div>
    <top-nav />
    <router-view class="o-spacing--body"/>
    <bottom-nav />
  </div>
</template>

<script>
  import TopNav from "@/components/TopNav";
  import BottomNav from "@/components/BottomNav";
  export default {
    components: {
      TopNav,
      BottomNav
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
      color: #42b983;
    }
  }
}
</style>
