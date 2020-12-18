<template>
  <div>
    <div v-if="store.state.user ==='admin'" class="o-top-nav-container" >
      <h1>{{ $t('addMovie.title') }}</h1>
      <h2>{{ $t('addMovie.labels.title') }}*</h2>
      <input type="text" v-model="title" :placeholder="$t('addMovie.placeholders.title')"/>

      <h2>{{ $t('addMovie.labels.description') }}*</h2>
      <input type="text" v-model="description" :placeholder="$t('addMovie.placeholders.description')"/>

      <h2>{{ $t('addMovie.labels.size') }}*</h2>
      <input type="text" v-model="size" :placeholder="$t('addMovie.placeholders.size')"/>

      <h2>{{ $t('addMovie.labels.defaultImg') }}*</h2>
      <input type="text" v-model="imageURL" :placeholder="$t('addMovie.placeholders.defaultImg')"/>

      <h2>{{ $t('addMovie.labels.dateReleased') }}*</h2>
      <input type="text" v-model="dateReleased" :placeholder="$t('addMovie.placeholders.dateReleased')"/>

      <h2> {{ $t('addMovie.labels.actors') }}</h2>
      <div>
        <h2 class="u-font-color--grey"> {{ $t('addMovie.labels.firstName') }}</h2>
        <input type="text" v-model="actorFirstName" :placeholder="$t('addMovie.placeholders.firstName')"/>

        <h2 class="u-font-color--grey"> {{ $t('addMovie.labels.name') }}</h2>
        <input type="text" v-model="actorName" :placeholder="$t('addMovie.placeholders.name')"/>
        <h2 class="u-font-color--grey"> {{ $t('addMovie.labels.actorImg') }}</h2>
        <input type="text" v-model="actorImage" :placeholder="$t('addMovie.placeholders.actorImg')"/>
      </div>

      <h2>{{ $t('addMovie.labels.tags') }}</h2>
      <input type="text" v-model="tag1" :placeholder="$t('addMovie.placeholders.tags')+ '1'"/>
      <input type="text" v-model="tag2" :placeholder="$t('addMovie.placeholders.tags')+ '2'"/>
      <input type="text" v-model="tag3" :placeholder="$t('addMovie.placeholders.tags')+ '3'"/>

      <div class="o-spacing--center">
        <button v-on:click="addMovie" class="c-button">{{ $t('addMovie.labels.addMovie') }}</button>
      </div>
      <div v-if="error" class="o-spacing--center">
        <p class="u-font-color--alt"> {{ $t('addMovie.labels.fieldsRequired') }}</p>
      </div>
    </div>

    <div v-else>
      <h2> {{ $t('addMovie.labels.adminOnly') }}</h2>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import movieRepository from "@/repositories/movieRepository";
import router from "@/router";
export default {
  data(){
    return{
      store,
      title: '',
      description: '',
      size: '',
      imageURL: '',
      dateReleased: '',

      actorImage:'',
      actorName:'',
      actorFirstName:'',

      tag1: '',
      tag2: '',
      tag3: '',

      error: false
    }
  },
  methods:{
    async addMovie(){
      if(this.title === '' || this.description  === '' || this.size  === '' || this.imageURL  === '' || this.dateReleased === ''){
        this.error = true
      }
      else {
        this.error = false
        let dateNow = new Date()
        let tags = []

        if (this.tag1 !== ''){
          tags.push({name: this.tag1})
        }
        if (this.tag2 !== ''){
          tags.push({name: this.tag2})
        }
        if (this.tag3 !== ''){
          tags.push({name: this.tag3})
        }

        let actors = []
        if (this.actorFirstName !== '' && this.actorName !== ''){
          actors.push({
            firstName: this.actorFirstName,
            name: this.actorName,
            image: this.actorImage
          })
        }

        let movie = {
          title: this.title,
          description: this.description,
          size: this.size,
          default_Image: this.imageURL,
          dateReleased: this.dateReleased,
          dateAdded: (dateNow.getFullYear()+"-"+(dateNow.getMonth()+1)+"-"+dateNow.getDate()).toString(),
          available: true,
          avarageScore: "7.5",
          reviews: [],
          actors: actors,
          tags:tags
        }

        await movieRepository.createMovie(movie)
        router.push({name: 'Home'})
      }

    }
  }
}
</script>