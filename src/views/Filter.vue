<template>
  <div>
    <div class="o-top-nav-container">
      <div class="o-flex--space-between o-flex--align-items-end">
        <h1>{{$t('filter.title')}}</h1>
        <div v-if="store.state.filtersActive" v-on:click="removeFilters" class="o-flex--justify-center o-spacing--top u-hover">

          <h3 class="u-font-color--alt o-spacing--right-sm"> {{ $t('filter.labels.removeFilter') }}</h3>
          <svg id="Group_5" data-name="Group 5" xmlns="http://www.w3.org/2000/svg" width="13.797" height="18.091" viewBox="0 0 13.797 18.091">
            <path id="Path_14" data-name="Path 14" d="M73.91,1.645a.927.927,0,0,1,.96-.933h3.947a.927.927,0,0,1,.96.933V2.667h.711V1.645A1.638,1.638,0,0,0,78.818,0H74.871A1.638,1.638,0,0,0,73.2,1.645V2.667h.711Zm0,0" transform="translate(-69.945)" fill="#cb063b"/>
            <path id="Path_15" data-name="Path 15" d="M29.639,136.579h8.41a1.514,1.514,0,0,0,1.44-1.6V124H28.2v10.979a1.514,1.514,0,0,0,1.44,1.6ZM36.111,125.7a.356.356,0,0,1,.711,0v8.4a.356.356,0,1,1-.711,0Zm-2.623,0a.356.356,0,0,1,.711,0v8.4a.356.356,0,1,1-.711,0Zm-2.623,0a.356.356,0,0,1,.711,0v8.4a.356.356,0,1,1-.711,0Zm0,0" transform="translate(-26.946 -118.488)" fill="#cb063b"/>
            <path id="Path_16" data-name="Path 16" d="M.889,69.778H12.908a.889.889,0,1,0,0-1.778H.889a.889.889,0,1,0,0,1.778Zm0,0" transform="translate(0 -64.977)" fill="#cb063b"/>
          </svg>
        </div>
      </div>


      <h2>{{ $t('filter.labels.search') }}</h2>
      <input type="text" v-model="searchQuery" :placeholder="$t('filter.placeholder.title')">

      <h2><label for="genres">{{ $t('filter.labels.genre') }}</label> </h2>
      <div id="genres" class="select-box">
        <div class="select-box__current" tabindex="1">
          <div class="select-box__value"><input class="select-box__input" type="radio" id="0" value="1" name="Ben" v-model="checkedGenres" />
            <p class="select-box__input-text">{{ $t('filter.labels.all') }}</p>
          </div>
          <div class="select-box__value"><input class="select-box__input" type="radio" id="1" value="2" name="Ben" v-model="checkedGenres"/>
            <p class="select-box__input-text">{{ $t('filter.labels.action') }}</p>
          </div>
          <div class="select-box__value"><input class="select-box__input" type="radio" id="2" value="3" name="Ben" v-model="checkedGenres"/>
            <p class="select-box__input-text">{{ $t('filter.labels.comedy') }}</p>
          </div>
          <div class="select-box__value"><input class="select-box__input" type="radio" id="3" value="4" name="Ben" v-model="checkedGenres"/>
            <p class="select-box__input-text">{{ $t('filter.labels.drama') }}</p>
          </div>
          <div class="select-box__value"><input class="select-box__input" type="radio" id="4" value="5" name="Ben" v-model="checkedGenres"/>
            <p class="select-box__input-text">{{ $t('filter.labels.family') }}</p>
          </div>
          <svg class="select-box__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
            <g><path fill="#989FA8" d="M500,775.4L10,287.2l64.4-62.6L500,650.2l425.6-425.6l64.4,62.6L500,775.4z"/></g>
</svg>
        </div>
        <ul class="select-box__list">
          <li><label class="select-box__option" for="0" aria-hidden="aria-hidden">{{ $t('filter.labels.all') }}</label></li>
          <li><label class="select-box__option" for="1" aria-hidden="aria-hidden">{{ $t('filter.labels.action') }}</label></li>
          <li><label class="select-box__option" for="2" aria-hidden="aria-hidden">{{ $t('filter.labels.comedy') }}</label></li>
          <li><label class="select-box__option" for="3" aria-hidden="aria-hidden">{{ $t('filter.labels.drama') }}</label></li>
          <li><label class="select-box__option" for="4" aria-hidden="aria-hidden">{{ $t('filter.labels.family') }}</label></li>
        </ul>
      </div>

      <h2>{{ $t('filter.labels.sort') }}</h2>
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
      <div v-if="!store.state.filtersActive" class="o-spacing--center">
        <button  v-on:click="filterList" class="c-button">{{ $t('filter.labels.filter') }}</button>
      </div>
      <div v-else class="o-spacing--center">
        <button v-on:click="filterList" class="c-button">{{ $t('filter.labels.update') }}</button>
      </div>
    </div>
  </div>


</template>
<script>
  import router from "@/router";
  import store from "@/store";
  import movieRepository from "@/repositories/movieRepository";

  export default {
    data(){
      return{
        store,
        searchQuery: "",
        checkedGenres: 1,
        selectedSortItem: {
          category: "Title",
          sortAsc: true
        },
        sortItems: [
            {
              category: this.$t('filter.labels.title').toString(),
              active: true
            },
          {
            category: this.$t('filter.labels.year').toString(),
            active: false
          },
          {
            category: this.$t('filter.labels.dateAdded').toString(),
            active: false
          },
          {
            category: this.$t('filter.labels.rating').toString(),
            active: false
          }],
        sortAsc: true
      }
    },
    created() {
      let filters = store.state.filters;

      if (filters.genre !== undefined){
        this.checkedGenres = filters.genre;
        this.searchQuery = filters.search;
        this.sortAsc = filters.sort.sortAsc;
        this.sortItems.forEach(item => {
          if(item.category === filters.sort.category){
            item.active = true;
            this.selectedSortItem = {
              category: item.category,
              sortAsc: this.sortAsc
            }
          }
          else {
            item.active = false
          }
        })
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

          this.selectedSortItem = {
            category: item.category,
            sortAsc: this.sortAsc
          }
        })
      },
      async filterList(){

        await store.dispatch('setMovies',await movieRepository.getMovies())
        await store.dispatch('updateFilterStatus', true)

        let filters = {
          search: this.searchQuery,
          genre: this.checkedGenres,
          sort: this.selectedSortItem
        }
        await store.dispatch('setFilters', filters)
        this.filterMovies(filters)
        await router.push({name: 'Home'})
      },

      removeFilters(){
        store.dispatch('setMovies',movieRepository.getMovies())
        store.dispatch('updateFilterStatus', false)
        store.dispatch('setFilters', {})
        this.searchQuery= "";
        this.checkedGenres= 1;
        this.sortItems =  [
          {
            category: this.$t('filter.labels.title').toString(),
            active: true
          },
          {
            category: this.$t('filter.labels.year').toString(),
            active: false
          },
          {
            category: this.$t('filter.labels.dateAdded').toString(),
            active: false
          },
          {
            category: this.$t('filter.labels.rating').toString(),
            active: false
          }]
      },
      filterMovies(filters){

        let movies = store.state.movies;
        let filteredList = []
        if (filters.search !== ""){
          filteredList = this.filterSearch(movies, filters.search)
          if (filters.genre !== 1){
            filteredList = this.filterGenre(filteredList, filters.genre)
          }
        }
        else  if (filters.genre !== 1){
            filteredList = this.filterGenre(movies, filters.genre)
          }
        else{
          filteredList = movies
        }

        this.sortList(filteredList, filters.sort.category, filters.sort.sortAsc)
        store.dispatch('setMovies', filteredList)
      },
      filterGenre(movieList, genreId){
        let genreList = ['All','Action','Comedy','Drama','Family']
        let filteredList =[];

        movieList.forEach(movie =>{
          let hasTag = false
          movie.tags.forEach(tag => {
            if (tag.name === genreList[genreId-1]){
              console.log(tag.name)
              hasTag = true
            }
          });
          if (hasTag){
            filteredList.push(movie)
          }
        })

        return filteredList
      },
      filterSearch(movieList, search){
        let filteredList = []

        movieList.forEach(movie =>{
          if (movie.title.toLocaleLowerCase().includes(search.toLowerCase())){
            filteredList.push(movie)
          }
        })

        return filteredList
      },

      sortList(movieList, category, sortAsc){
        if (category === "Title"){
          return this.sortTitle(movieList, sortAsc)
        }

        if (category === "Year"){
          return this.sortYear(movieList,sortAsc)
        }

        if (category === "DateAdded"){
          return this.sortDateAdded(movieList,sortAsc)
        }

        if (category === "Rating"){
          return this.sortDateAdded(movieList,sortAsc)
        }

      },
      sortTitle(movieList, sortAsc){
        if (sortAsc){
            movieList.sort(function (a,b){
              if (a.title < b.title) {
                return -1;
              }
              if (b.title < a.title) {
                return 1;
              }
              return 0;
            })
        }
        else {
            movieList.sort(function (a,b){
              if (a.title > b.title) {
                return -1;
              }
              if (b.title > a.title) {
                return 1;
              }
              return 0;
            })
        }
        return movieList
      },
      sortYear(movieList, sortAsc){
        if (sortAsc){
          movieList.sort(function (a,b){
            let dateA = new Date(a.dateReleased)
            let dateB = new Date(b.dateReleased)
            if (dateA < dateB) {
              return -1;
            }
            if (dateB < dateA) {
              return 1;
            }
            return 0;
          })
        }
        else {
          movieList.sort(function (a,b){
            let dateA = new Date(a.dateReleased)
            let dateB = new Date(b.dateReleased)
            if (dateA > dateB) {
              return -1;
            }
            if (dateB > dateA) {
              return 1;
            }
            return 0;
          })
        }
        return movieList
      },
      sortDateAdded(movieList, sortAsc){
        if (sortAsc){
          movieList.sort(function (a,b){
            let dateA = new Date(a.dateAdded)
            let dateB = new Date(b.dateAdded)
            if (dateA < dateB) {
              return -1;
            }
            if (dateB < dateA) {
              return 1;
            }
            return 0;
          })
        }
        else {
          movieList.sort(function (a,b){
            let dateA = new Date(a.dateAdded)
            let dateB = new Date(b.dateAdded)
            if (dateA > dateB) {
              return -1;
            }
            if (dateB > dateA) {
              return 1;
            }
            return 0;
          })
        }
        return movieList
      },
      sortRating(movieList, sortAsc){
        if (sortAsc){
          movieList.sort(function (a,b){
            if (a.avarageScore < b.avarageScore) {
              return -1;
            }
            if (b.avarageScore < a.avarageScore) {
              return 1;
            }
            return 0;
          })
        }
        else {
          movieList.sort(function (a,b){
            if (a.avarageScore > b.avarageScore) {
              return -1;
            }
            if (b.avarageScore > a.avarageScore) {
              return 1;
            }
            return 0;
          })
        }
        return movieList
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