<template>
  <div class="u-font-color--grey u-font-weight--light">
      <router-link class="o-flex--justify-center" :to="'/movie/'+this.id">
    <img class="u-hover" alt="loading..." :src="this.img" />
    </router-link>
    <div class="o-flex o-flex--space-between">
      <h1>{{ this.title }}</h1>
      <div class="o-flex--space-between">
        <p class="o-spacing--right o-flex--center">{{ this.size }}</p>
        <svg
          class="u-hover"
          v-on:click="svgClicked"
          xmlns="http://www.w3.org/2000/svg"
          width="16.839"
          height="20.48"
          viewBox="0 0 16.839 20.48"
        >
          <path
            id="Path_9"
            data-name="Path 9"
            d="M0,0H14.839V18.48h0l-7.42-3.8L0,18.48Z"
            transform="translate(1 1)"
            :fill="fill"
            :stroke="stroke"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.styleSVG();
  },
  props: ['title','size','img', 'id'],
  data() {
    return {
      added: false,
      fill: "",
      stroke: "",
    };
  },
  methods: {
    svgClicked() {
      this.added = !this.added;
      this.styleSVG();
      this.updateInCache();
    },
    styleSVG() {
      console.log("styling SVG");
      if (this.added) {
        this.fill = "#cb063c";
        this.stroke = "#cb063c";
      } else {
        this.fill = "none";
        this.stroke = "#989FA8";
      }
    },
    updateInCache(){
        //TODO add to cache
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/style/6-components/movieItem.scss";
</style>