<template>
 <v-layout row justify-center>
    <!-- <v-btn
      color="primary"
      dark
      @click="dialog = true"
    >
      Open Dialog
    </v-btn> -->
    <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <v-card color="primary" dark>
         <v-img
          class="white--text"
          width="400"
          src="/static/about.jpg"
        >
        </v-img>
        <v-card-title class="display-1" align="left">
          <v-img src="/static/song_icon.png" height="50" contain ></v-img>
          <span class="font-weight-bold">
          MASTER </span> 
           <span class="font-weight-medium">&nbsp;लिरिक्स</span>
           </v-card-title>

        <v-card-text>
         This is a music lyric search application which help user to find and translate songs lyrics.<br> <br>
         <v-divider></v-divider>
         <p align=left>
           <br>
         <strong class="headline"> Contributers:- </strong><br>
            Avais Ahmad <br>
            Debashish Deka<br>
            Dhananjay Sharma<br>
            Lokesh Yadav<br>
            Priti Sharma<br>
            Sayali Borkar
         </p>
         <strong class="headline"> &copy;2019 — Group 2</strong> <br>
         
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            dark
            flat="flat"
            @click="dialog = false"
          >
            Dismiss
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

</template>

<script>

export default {
name: 'About',
  props:{
    // about dialog box
    dialog:{
      type:Boolean,
      default: false
    },
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.information {
	color: blue
}
</style>
