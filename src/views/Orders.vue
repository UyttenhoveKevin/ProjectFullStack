<template>
  <div>
    <div v-if="store.state.user !== 'anonymous'">
      <h1> {{$t('orders.title')}} </h1>
      <div v-if="orders === null">
        <p>{{$t('orders.notFound')}}</p>
      </div>
      <div v-if="orders !== null" v-for="order in orders">
        <h2>Order#{{Math.floor(Math.random() * (10000000 - 1 + 1)) + 1}}</h2>
        <table class="o-spacing--bottom u-font-color--grey o-spacing--max-width">
          <tr>
            <th>{{$t('orders.movieTitle')}}</th>
            <th>{{$t('orders.dateReleased')}}</th>
            <th>{{$t('orders.size')}}</th>
          </tr>
          <tr v-for="movie in order">
            <td>{{movie.title}}</td>
            <td>{{movie.dateReleased}}</td>
            <td>{{movie.size}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div v-else>
      <h2>Login to view orders</h2>
    </div>
  </div>
</template>
<script>
import store from "@/store";
export default {
  data(){
    return{
      store,
      orders: []
    }
  },
  created() {
    this.orders = localStorage.getItem('orders')

    if (localStorage.getItem('orders') !== null){
      this.orders = JSON.parse(localStorage.getItem('orders'))
    }
  }
}
</script>