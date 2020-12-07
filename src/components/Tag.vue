<template>
  <div class="c-tag--container">
      <p class="c-tag--item c-tag--text"> {{tag.name}}</p>
  </div>
</template>
<script>
  export default {
    props: ['tag']
  }
</script>
<style  lang="scss">
@import "@/assets/style/6-components/tag.scss";

</style>
