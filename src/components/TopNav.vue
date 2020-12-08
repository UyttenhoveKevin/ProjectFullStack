<template>
  <div class="topNav">
    <div class="o-flex o-flex--space-between">
      <h1></h1>
      <router-link to="/">
        <h1 class="u-font-weight--black u-font-upperCase u-font-color">
            <span class="u-font-color--alt">X </span> Movies
        </h1>
      </router-link>

      <div class="o-spacing--right">
        <svg
          v-if="!showMenu"
          class="u-hover"
          v-on:click="toggleMenu"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 24 18"
        >
          <g
            id="_9851132801553239378"
            data-name="9851132801553239378"
            transform="translate(-7.667 -13)"
          >
            <path
              id="Path_3"
              data-name="Path 3"
              d="M8.417,14.591h22.5a.8.8,0,0,0,0-1.591H8.417a.8.8,0,0,0,0,1.591Z"
              transform="translate(0)"
              fill="#e6e6e6"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M8.417,36.591h22.5a.8.8,0,0,0,0-1.591H8.417a.8.8,0,0,0,0,1.591Z"
              transform="translate(0 -5.591)"
              fill="#e6e6e6"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M8.417,25.591h22.5a.8.8,0,0,0,0-1.591H8.417a.8.8,0,0,0,0,1.591Z"
              transform="translate(0 -2.795)"
              fill="#e6e6e6"
            />
          </g>
        </svg>
        <svg v-if="showMenu"
          class="u-hover"
          v-on:click="toggleMenu"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 18.095 18.3"
        >
          <g
            id="_9851132801553239378"
            data-name="9851132801553239378"
            transform="translate(-10.619 -12.748)"
          >
            <path
              id="Path_3"
              data-name="Path 3"
              d="M8.417,14.591h22.5a.8.8,0,0,0,0-1.591H8.417a.8.8,0,0,0,0,1.591Z"
              transform="translate(15.515 -1.866) rotate(45)"
              fill="#e6e6e6"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M8.417,25.591h22.5a.8.8,0,0,0,0-1.591H8.417a.8.8,0,0,0,0,1.591Z"
              transform="translate(-11.773 18.374) rotate(-45)"
              fill="#e6e6e6"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="o-spacing--left o-spacing--right o-spacing--height" v-if="showMenu">
      <div class="o-top-nav-container">
        <h1>Log in</h1>
        <h2>
          <label class="u-hover" for="username">
            Username
          </label></h2>
        <input id="username" placeholder="username" type="text"/>
        <h2 >
          <label class="u-hover" for="password">
            Password
          </label></h2>
        <input id="password" placeholder="password" type="password"/>
        <div class="o-spacing--center">
          <button class="c-button" v-on:click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import store from "@/store";

export default {
  computed: {
    showMenu(){
      return store.state.showMenu
    }
  },
  methods: {
    toggleMenu() {
      store.dispatch("setMenu", !this.showMenu)
    },
    login(){
      console.log('logging in')
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/style/6-components/topNav.scss";
@import "@/assets/style/6-components/primaryButton.scss";

</style>