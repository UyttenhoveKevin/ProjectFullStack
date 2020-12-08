<template>
  <div>
    <div class="o-top-nav-container">
      <h1>Filters</h1>
      <h2>Search</h2>
      <input type="text" placeholder="Movie title">

      <h2>Genre</h2>

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
              <h3 v-on:click="updateFilter(item)" v-bind:class="{'active':item.active}" class="u-hover">{{ item.category }}</h3>
            </td>
          </tr>
        </table>
      </div>
      <div class="o-spacing--center">
        <button class="c-button">Filter</button>
      </div>
    </div>
  </div>


</template>
<script>
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
      updateFilter(item){
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
      }
    }
  }
</script>
<style lang="scss">

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