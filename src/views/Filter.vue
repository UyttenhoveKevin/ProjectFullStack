<template>
  <div>
    <div class="o-top-nav-container">
      <h1>Filters</h1>
      <h2>Search</h2>
      <input type="text" placeholder="Movie title">

      <h2><label for="genres">Genre</label> </h2>
      <div id="genres" class="select-box">
        <div class="select-box__current" tabindex="1">
          <div class="select-box__value"><input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked" />
            <p class="select-box__input-text">All</p>
          </div>
          <div class="select-box__value"><input class="select-box__input" type="radio" id="1" value="2" name="Ben" />
            <p class="select-box__input-text">Action</p>
          </div>
          <div class="select-box__value"><input class="select-box__input" type="radio" id="2" value="3" name="Ben" />
            <p class="select-box__input-text">Comedy</p>
          </div>
          <div class="select-box__value"><input class="select-box__input" type="radio" id="3" value="4" name="Ben" />
            <p class="select-box__input-text">Drama</p>
          </div>
          <div class="select-box__value"><input class="select-box__input" type="radio" id="4" value="5" name="Ben" />
            <p class="select-box__input-text">Family</p>
          </div>
          <svg class="select-box__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
            <g><path fill="#989FA8" d="M500,775.4L10,287.2l64.4-62.6L500,650.2l425.6-425.6l64.4,62.6L500,775.4z"/></g>
</svg>
        </div>
        <ul class="select-box__list">
          <li><label class="select-box__option" for="0" aria-hidden="aria-hidden">All</label></li>
          <li><label class="select-box__option" for="1" aria-hidden="aria-hidden">Action</label></li>
          <li><label class="select-box__option" for="2" aria-hidden="aria-hidden">Comedy</label></li>
          <li><label class="select-box__option" for="3" aria-hidden="aria-hidden">Drama</label></li>
          <li><label class="select-box__option" for="4" aria-hidden="aria-hidden">Family</label></li>
        </ul>
      </div>

      <h2>Sort</h2>
      <div>
        <table>
          <tr v-for="item in sortItems">
            <td>
              <div class="o-spacing--right-sm" v-if="sortAsc ===true && item.active === true">
                <svg  xmlns="http://www.w3.org/2000/svg" width="13.985" height="7.867" viewBox="0 0 13.985 7.867">
                  <g transform="translate(-319 -48.748)">
                    <g data-name="9851132801553239378" transform="translate(319 48.748)">
                      <path :class="'pathSelectedAsc'" d="M.31,1.217H9.6c.171,0,.31-.272.31-.608S9.77,0,9.6,0H.31C.139,0,0,.272,0,.608S.138,1.217.31,1.217Z" transform="translate(0.86 0) rotate(45)" />
                      <path :class="'pathSelectedAsc'" d="M.31,1.217H9.6c.171,0,.31-.272.31-.608S9.77,0,9.6,0H.31C.139,0,0,.272,0,.608S.138,1.217.31,1.217Z" transform="translate(0.86 0) rotate(45)"/>
                    </g>
                    <g data-name="9851132801553239378" transform="translate(332.985 48.748) rotate(90)">
                      <path :class="'pathSelectedAsc'" data-name="Path 3" d="M.31,1.217H9.6c.171,0,.31-.272.31-.608S9.77,0,9.6,0H.31C.139,0,0,.272,0,.608S.138,1.217.31,1.217Z" transform="translate(0.86 0) rotate(45)"/>
                      <path :class="'pathSelectedAsc'" data-name="Path 13" d="M.31,1.217H9.6c.171,0,.31-.272.31-.608S9.77,0,9.6,0H.31C.139,0,0,.272,0,.608S.138,1.217.31,1.217Z" transform="translate(0.86 0) rotate(45)"/>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="o-spacing--right-sm" v-if="sortAsc === false && item.active === true">
                <svg  xmlns="http://www.w3.org/2000/svg" width="13.985" height="7.867" viewBox="0 0 13.985 7.867">
                  <g transform="translate(332.985 56.615) rotate(180)">
                    <g transform="translate(319 48.748)">
                      <path :class="'pathSelectedDesc'" d="M.31,1.217H9.6c.171,0,.31-.272.31-.608S9.77,0,9.6,0H.31C.139,0,0,.272,0,.608S.138,1.217.31,1.217Z" transform="translate(0.86 0) rotate(45)"/>
                      <path :class="'pathSelectedDesc'" d="M.31,1.217H9.6c.171,0,.31-.272.31-.608S9.77,0,9.6,0H.31C.139,0,0,.272,0,.608S.138,1.217.31,1.217Z" transform="translate(0.86 0) rotate(45)"/>
                    </g>
                    <g transform="translate(332.985 48.748) rotate(90)">
                      <path :class="'pathSelectedDesc'" d="M.31,1.217H9.6c.171,0,.31-.272.31-.608S9.77,0,9.6,0H.31C.139,0,0,.272,0,.608S.138,1.217.31,1.217Z" transform="translate(0.86 0) rotate(45)"/>
                      <path :class="'pathSelectedDesc'" d="M.31,1.217H9.6c.171,0,.31-.272.31-.608S9.77,0,9.6,0H.31C.139,0,0,.272,0,.608S.138,1.217.31,1.217Z" transform="translate(0.86 0) rotate(45)"/>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="o-spacing--right-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="13.985" height="7.867" viewBox="0 0 13.985 7.867">
                </svg>
              </div>
            </td>
            <td>
              <h3 v-on:click="updateSort(item)" v-bind:class="{'active':item.active}" class="u-hover">{{ item.category }}</h3>
            </td>
          </tr>
        </table>
      </div>
      <div class="o-spacing--center">
        <button v-on:click="filterList" class="c-button">Filter</button>
      </div>
    </div>
  </div>


</template>
<script>
  import router from "@/router";
  import store from "@/store";

  export default {
    data(){
      return{
        sortItems: [
            {
              category: "Title",
              active: true
            },
          {
            category: "Year",
            active: false
          },
          {
            category: "DateAdded",
            active: false
          },
          {
            category: "Rating",
            active: false
          }],
        sortAsc: true
      }
    },
    methods: {
      updateSort(item){
        this.sortItems.forEach(i => {
          let wasActive = i.active

          i.active = i.category === item.category;

          if (wasActive === i.active){
            if(wasActive){
              this.sortAsc = !this.sortAsc
            }
          }
          else {
            this.sortAsc = true
          }

        })
      },
      filterList(){
        console.log('filter list')
        store.dispatch('updateFilterStatus', true)
        router.push({name: 'Home'})
      }
    }
  }
</script>
<style lang="scss">
@import "@/assets/style/6-components/inputField.scss";

.pathSelectedAsc{
  fill: #CB063B;
}

.pathSelectedDesc{
  fill: #CB063B;
}

.active{
  color: #CB063B;
}
</style>