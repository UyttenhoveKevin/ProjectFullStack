<template>
  <div class="topNav">
    <div class="o-flex o-flex--space-between">
      <div class="o-flex--space-between">
        <h2 class="o-spacing--left u-hover" v-bind:class="{'active':enActive}" v-on:click="setLocale('en')">EN</h2>
        <h2 class="o-spacing--left-sm u-hover" v-bind:class="{'active':!enActive}" v-on:click="setLocale('nl')">NL</h2>
      </div>
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
      <div class="o-top-nav-container" v-if="store.state.user === 'anonymous'">
        <h1>Log in</h1>
        <h2>
          <label class="u-hover" for="username">
            Username
          </label></h2>
        <input id="username" v-model="username" placeholder="username" type="text"/>
        <h2 >
          <label class="u-hover"  for="password">
            Password
          </label></h2>
        <input id="password" v-model="password" placeholder="password" type="password"/>
        <div v-if="wrongCredentials" class="o-spacing--center">
          <p class="u-font-color--alt">Wrong username/password</p>
        </div>
        <div class="o-spacing--center">
          <button class="c-button" v-on:click="login">Login</button>
        </div>
      </div>

<!--      admin menu-->
      <div class="o-top-nav-container" v-if="store.state.user === 'admin'">
        <h1 class="o-spacing--bottom u-font-weight--light">Welcome Admin! 🎉🎉🎉</h1>
        <div class="o-menu-item-container">
          <h2 class="u-hover" v-on:click="navToOrders"> Orders</h2>
        </div>
        <div class="o-menu-item-container">
          <h2 class="u-hover" v-on:click="navToMovie"> Add Movie</h2>
        </div>
        <div class="o-menu-item-container">
          <h2 class="u-hover" v-on:click="logout"> Logout</h2>
        </div>
      </div>

<!--      user menu-->
      <div class="o-top-nav-container" v-if="store.state.user === 'user'">
        <div class="o-menu-item-container">
          <h1 class="o-spacing--bottom u-font-weight--light">Welcome Kevin 👏👏👏</h1>
        </div>
        <div class="o-menu-item-container">
          <h2 class="u-hover" v-on:click="navToOrders"> Orders</h2>
        </div>
        <div class="o-menu-item-container">
          <h2 class="u-hover" v-on:click="logout"> Logout</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import store from "@/store";
import userRepository from "@/repositories/userRepository";

export default {
  computed: {
    showMenu(){
      return store.state.showMenu
    }
  },
  data(){
    return{
      store,
      wrongCredentials: false,
      username: "",
      password: "",
      enActive: true
    }
  },
  methods: {
    toggleMenu() {
      store.dispatch("setMenu", !this.showMenu)
    },
    async login(){
      this.wrongCredentials = !await userRepository.loginUser(this.username, this.password)
      this.username = ""
      this.password = ""
    },

    async logout(){
      await userRepository.logout()
    },

    navToOrders(){
      if (router.currentRoute.name !== "Orders"){
        router.push({name: "Orders"})
      }
      else {
        this.store.dispatch('setMenu', false)
      }
    },

    navToMovie(){
      if (router.currentRoute.name !== "AddMovie"){
        router.push({name: "AddMovie"})
      }
      else {
        this.store.dispatch('setMenu', false)
      }
    },

    setLocale(locale){
      console.log(locale)
      this.$i18n.locale = locale;
      if (locale === 'en'){
        this.enActive = true
      }
      else {
        this.enActive = false
      }
    }


  },
};
</script>

<style lang="scss">
@import "@/assets/style/6-components/topNav.scss";
@import "@/assets/style/6-components/primaryButton.scss";
.active{
  color: #CB063B;
}
</style>