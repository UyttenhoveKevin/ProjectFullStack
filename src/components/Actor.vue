<template>
  <div class="o-flex--column o-spacing--bottom">
    <div>
      <img class="c-actor--image" :src="actorImage" alt="">
    </div>
    <span class="u-font-color--grey o-spacing--top"> {{firstName}}</span>
    <span class="u-font-color--grey"> {{name}}</span>
  </div>
</template>
<script>
export default {
  created() {
    if (this.image !== ''){
      this.actorImage = this.image
    }
  },
  props: ['image', 'name', 'firstName'],
  data(){
    return{
      actorImage: "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/6-components/actor.scss";

</style>