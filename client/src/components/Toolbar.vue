<template>
<v-toolbar flat app dark color="primary">
  <router-link to="/">
  <v-toolbar-side-icon to="/">
    <v-img src="/static/song_icon.png" aspect-ratio="1 " contain @click="drclick"> 
    </v-img>
    
  </v-toolbar-side-icon>
  </router-link>
    <v-toolbar-title class="headline ">
        <span class="font-weight-bold">
          MASTER</span>
        <span class="font-weight-medium">लिरिक्स</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="session==false"> 
    <v-btn depressed color="success" to="/register"> Register</v-btn>

    <v-btn depressed color="deep-orange" to="/login"> Login </v-btn>
    </div>
    <div v-if="session==true">
      <v-btn depressed color="error" to="/logout"> Logout</v-btn>
    </div>

</v-toolbar>

</template>

<script>
  export default {
  name: 'toolbar',
  data () {
    return {
      tb : '',
      session: false
    }
  },
  methods: {
    async drclick () {
        console.log("clicked")
    }
    },
  }

</script>

<style scoped>

</style>