<template>
<v-container grid-list-xl text-xs-center>
	<v-layout row wrap>
		<v-flex flat xs6 offset-xs3>
			<div class="white elevation-2">
				<v-toolbar flat dense class="cyan lighten-2" dark>
					<v-toolbar-title>Search Your Song</v-toolbar-title>
				</v-toolbar>
				 <v-form>
					<v-container>
						<v-flex >
							<v-text-field
								v-model="songName"
								label="Search"
								required
								full-width background-color="cyan lighten-5"
							></v-text-field>
						</v-flex>
						<br>
					<div class="information" v-html="error"></div>
					<v-btn depressed dark class="cyan" @click="songSearch">Search</v-btn>
				</v-container>
			</v-form>
			</div>
		</v-flex>
	</v-layout>
</v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import SongSearchService from '@/services/SongSearchService'
export default {
	data () {
		return {
			songName:"",
			error: null
		}
	},
	methods: {
		async songSearch () {
			try {
				const response = await SongSearchService.songSearch({
					songName: this.songName,
				})
				console.log(response.data)
				this.error = response.data
			}catch(err) {
				this.error = err.response.data.error
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
