<template>
  <div class="bottomNav">
    <div class="o-flex o-flex--space-between">
      <div class="o-spacing--width--1-3">
        <router-link to="/basket">
        <div class="bottomNav--item o-spacing--center  u-hover" :style="{borderBottomColor:basketColor}">
          <div class="o-flex--row">
            <svg
                class="menu-icon--saved o-spacing--right-sm"
                xmlns="http://www.w3.org/2000/svg"
                width="16.839"
                height="20.48"
                viewBox="0 0 16.839 20.48"
            >
              <g
                  id="Component_4_2"
                  data-name="Component 4 – 2"
                  transform="translate(1 1)"
              >
                <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M0,0H14.839V18.48h0l-7.42-3.8L0,18.48Z"
                    :fill="basketFill"
                    stroke="#989FA8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />
              </g>
            </svg>
            <span class="u-font-color--grey u-font-weight--bold">{{basketItems}}</span>
          </div>
        </div>
        </router-link>
      </div>
      <div class="o-spacing--width--1-3">
        <router-link to="/">
        <div class="bottomNav--item  o-spacing--center  u-hover" :style="{borderBottomColor:moviesColor}">
          <svg
          class="menu-icon--movies"
            xmlns="http://www.w3.org/2000/svg"
            width="27.416"
            height="20.5"
            viewBox="0 0 27.416 20.5"
          >
            <g
              id="_20952249821558096323"
              data-name="20952249821558096323"
              transform="translate(1.916)"
            >
              <path
                id="Path_11"
                data-name="Path 11"
                d="M4,11.035,6.6,8h6.5a2.852,2.852,0,0,1,2.6,3.035Z"
                transform="translate(9.75 -8)"
                fill="#989FA8"
              />
              <path
                id="Path_12"
                data-name="Path 12"
                d="M6.071,12h24.3c.032,0,0,1.387,0,14.541,0,1.333-.66,2.424-2.113,2.424H6.071c-1.453,0-2.113-1.091-2.113-2.424V14.424C3.958,13.091,4.618,12,6.071,12Z"
                transform="translate(-5.374 -8.965)"
                fill="#989FA8"
                stroke="#989FA8"
                stroke-width="1"
              />
            </g>
          </svg>
        </div>
        </router-link>
      </div>
      <div class="o-spacing--width--1-3">
        <router-link to="/filter">
        <div class="bottomNav--item o-spacing--center  u-hover" :style="{borderBottomColor:filterColor}">
          <svg
          class="menu-icon--filter"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g id="Icons" transform="translate(3 6)">
              <g id="Outlined" transform="translate(-477 -1488)">
                <g id="Content" transform="translate(100 1428)">
                  <g
                    id="Outlined-_-Content-_-filter_list"
                    data-name="Outlined-/-Content-/-filter_list"
                    transform="translate(374 54)"
                  >
                    <g id="Group_2" data-name="Group 2">
                      <path
                        id="Path"
                        d="M0,0H24V24H0Z"
                        fill="none"
                        fill-rule="evenodd"
                      />
                      <path v-if="!store.state.filtersActive"
                        id="_-Icon-Color"
                        data-name="🔹-Icon-Color"
                        d="M10,18h4V16H10ZM3,6V8H21V6Zm3,7H18V11H6Z"
                        fill="#989FA8"
                        fill-rule="evenodd"
                      />
                      <path v-if="store.state.filtersActive"
                            id="_-Icon-Color"
                            data-name="🔹-Icon-Color"
                            d="M10,18h4V16H10ZM3,6V8H21V6Zm3,7H18V11H6Z"
                            fill="#CB063B"
                            fill-rule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";

export default {
  data(){
    return {
      store,
      basketColor: "#111822",
      moviesColor: "#111822",
      filterColor: "#111822",
      basketFill: 'none'
    }
  },
  computed: {
    basketItems(){
      if (store.state.basketItems > 0){
        this.basketFill = '#989FA8'
      }
      else this.basketFill = 'none'
      return store.state.basketItems
    }
  },
  created() {
    if (localStorage.getItem('moviesInCart') !== null){
      let basket = JSON.parse(localStorage.getItem('moviesInCart'))
      this.store.dispatch("addToCart", basket.length)
    }

    if (router.currentRoute.path === '/'){
      this.moviesSelected();
    }
    else if (router.currentRoute.path === '/filter'){
      this.filterSelected();
    }
    else if (router.currentRoute.path === '/basket'){
      this.basketSelected();
    }
    else {
      this.noneSelected();
    }
  },
  watch:{
    $route (to, from){
      store.dispatch("setMenu", false)
      if (router.currentRoute.path === '/'){
        this.moviesSelected();
      }
      else if (router.currentRoute.path === '/filter'){
        this.filterSelected();
      }
      else if (router.currentRoute.path === '/basket'){
        this.basketSelected();
      }
      else {
        this.noneSelected();
      }
    },
  },
  methods: {
    basketSelected(){
      this.basketColor = "#CB063B"
      this.moviesColor = "#111822"
      this.filterColor = "#111822"
    },
    moviesSelected(){
      this.basketColor = "#111822"
      this.moviesColor = "#CB063B"
      this.filterColor = "#111822"
    },
    filterSelected(){
      this.basketColor = "#111822"
      this.moviesColor = "#111822"
      this.filterColor = "#CB063B"
    },
    noneSelected(){
      this.basketColor = "#111822"
      this.moviesColor = "#111822"
      this.filterColor = "#111822"
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/style/6-components/bottomNav.scss";
</style>