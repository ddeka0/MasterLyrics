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
      <v-card >
          <v-toolbar flat dense class="success darken-1" dark>
					<v-toolbar-title>Add/Edit Translation</v-toolbar-title>
				</v-toolbar>
        <v-card-title color="primary" class="display-1" align="left" >
           </v-card-title>

        <v-card-text>
         <v-text-field
            v-model="email"
            label="Hindi"
            required
            full-width background-color="success lighten-5"
        ></v-text-field>

        <v-text-field
            v-model="email"
            label="English"
            required
            full-width background-color="success lighten-5"
        ></v-text-field>
         
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            flat="flat"
            @click="dialog = false"
            class = "error"
          >
            Close
          </v-btn>

          <v-btn
            flat="flat"
            @click="dialog = false"
            class= "success"
          >
            Confirm
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

</template>

<script>

export default {
name: 'EditAdd',
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
