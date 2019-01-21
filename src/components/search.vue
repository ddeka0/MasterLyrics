<template>
  <div class="search">

    <h1>Search</h1>

    <input type="text" v-model="search_ip"> Your Input: {{search_ip}} <br/>
  </br>
    <button v-on:click="onSearch(search_ip)">Search</button>
  </div>


</template>


<script>
  export default {
  name: 'search',

  data() {
    return {
      search_ip : '',
    }
  },

  methods: {
    onSearch: function(s_ip){
      alert('You Searched for :- ' + s_ip);
      console.log('Search button pressed')
    }

  }


  }


</script>

<style scoped>

</style>
