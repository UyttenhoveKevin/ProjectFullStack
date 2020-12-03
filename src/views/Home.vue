<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/poster.jpg" />
    <div class="o-flex o-flex--space-between">
      <h1>Movie Title</h1>
      <div class="o-flex--space-between">
        <h1 class="o-spacing--right">Size</h1>
        <h1>Added</h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
