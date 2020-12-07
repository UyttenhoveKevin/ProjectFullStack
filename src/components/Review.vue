<template>
  <div class="c-review-container">
    <div class="o-flex--space-between">
      <p class="u-font-color--grey u-font-weight--bold"> {{reviewTitle}}</p>
      <p class="u-font-color--grey"> {{score}}/10</p>
    </div>

    <div class="" v-if="review !== ''">
      <p> {{review}}</p>
    </div>
    <div class="o-flex--space-between">
      <p></p>
      <p class="u-font-color--grey u-font-weight--light">{{userName}}</p>
    </div>

  </div>
</template>
<script>
  export default {
    props: ['userName','score','review','reviewTitle']
  }
</script>
<style lang="scss">
@import "@/assets/style/6-components/review.scss";

</style>