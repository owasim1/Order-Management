<template>
  <div id="app">
    <OM v-bind:om="om" />
  </div>
</template>

<script>
import OM from './components/OrderManagement.vue'
window.axios = require('axios')

export default {
  name: 'app',
  components: {
    OM
  },

  mounted: function() {
    let config = {'user-key': '8ca3c4e4a1dd7de432d90b962ece1fde'};
    axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=280', {headers: config})
  },

  data() {
    return {
       om: [
         {id: 1,
         title: "todo1",
         completed: false}
       ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
