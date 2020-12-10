<template>
  <div>
    <div v-if="store.state.user ==='admin'" class="o-top-nav-container" >
      <h1>Add a movie</h1>
      <h2>Title*</h2>
      <input type="text" v-model="title" placeholder="Movie title"/>

      <h2>Description*</h2>
      <input type="text" v-model="description" placeholder="What is the movie about?"/>

      <h2>Size*</h2>
      <input type="text" v-model="size" placeholder="How big is the movie?"/>

      <h2>Default Imageurl*</h2>
      <input type="text" v-model="imageURL" placeholder="Add a valid ImageUrl"/>

      <h2>Date Released*</h2>
      <input type="text" v-model="dateReleased" placeholder="yyyy-mm-dd"/>

      <h2> Actors</h2>
      <div>
        <h2 class="u-font-color--grey"> First name</h2>
        <input type="text" v-model="actorFirstName" placeholder="First name"/>

        <h2 class="u-font-color--grey"> Name</h2>
        <input type="text" v-model="actorName" placeholder="Name"/>
        <h2 class="u-font-color--grey"> Image</h2>
        <input type="text" v-model="actorImage" placeholder="Add a valid ImageUrl"/>
      </div>

      <h2>Tags</h2>
      <input type="text" v-model="tag1" placeholder="Tag 1"/>
      <input type="text" v-model="tag2" placeholder="Tag 2"/>
      <input type="text" v-model="tag3" placeholder="Tag 3"/>

      <div class="o-spacing--center">
        <button v-on:click="addMovie" class="c-button">Add Movie</button>
      </div>
      <div v-if="error" class="o-spacing--center">
        <p class="u-font-color--alt"> Fill in the required fields</p>
      </div>
    </div>

    <div v-else>
      <h2> Enkel beschikbaar voor admins</h2>
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