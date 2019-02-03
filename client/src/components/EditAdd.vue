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
            v-model="hword"
            label="Hindi"
            required
            full-width background-color="success lighten-5"
        ></v-text-field>

        <v-text-field
            v-model="eword"
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
            @click="editMeaning"
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
import DictionaryService from '@/services/DictionaryService'
export default {
name: 'EditAdd',
  props:{
    // about dialog box
    dialog:{
      type:Boolean,
      default: false
    },
  },
  data () {
	  return {
		  eword:"",
		  hword:""
	  }
  },
  methods: {
		async editMeaning () {
			try {
				this.dialog = false
				const response = await DictionaryService.editMeaning({
					eword: this.eword,
					hword: this.hword
				})
				console.log("login response form server : ",response.data)
				// redirect to search page
				// hide login tab and display user name
			}catch(err) {
				console.log(err.response)
				this.error = err.response.data.error /* err.response.data.error */
			}
		}
	}
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.information {
	color: blue
}
</style>
