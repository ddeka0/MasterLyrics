<template>
<v-toolbar app dark color="primary">
  <v-toolbar-side-icon>
    <v-img src="/static/song_icon.png" aspect-ratio="1 "></v-img>
  </v-toolbar-side-icon>
    <v-toolbar-title class="headline ">
        <span class="font-weight-bold">
          MASTER</span>
        <span>Lyrics</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn depressed color="success">Register</v-btn>
    <v-btn depressed color="warning">Login</v-btn>
</v-toolbar>

</template>

<script>
  export default {
  name: 'toolbar',
  data () {
    return {
      tb : '',
    }
  },
  }
</script>

<style scoped>

</style>