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
							<v-btn-toggle mandatory flat depressed class="cyan" dark v-model="icon">
							<v-btn depressed value="English" class="cyan">
								<v-icon>create</v-icon>
								English
							</v-btn>
							 <v-divider
								vertical
								></v-divider>
							<v-btn depressed value="Hindi" class="cyan">
								<v-icon>keyboard</v-icon>
								Hindi
							</v-btn>
							<v-divider
								vertical
								></v-divider>
							<v-btn depressed value="Transliterate" class="cyan">
								<v-icon>translate</v-icon>
								Transliterate
							</v-btn>
							</v-btn-toggle>
						<br><br>
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
// import { serverBus } from '../main'
 import { bus } from '../main'

export default {
	data () {
		return {
			songName:"",
			error: null,
			icon: "English",
			id: ""
		}
	},
	methods: {
		async songSearch () {
			try {
				const response = await SongSearchService.songSearch({
					songName: this.songName,
				})
				console.log("Song Id is = ",response.data.id)
				console.log("Song lyric is = ",response.data.lyrics)
				
				this.error = response.data.lyrics
				this.id = response.data.id

				// serverBus.$emit('lyr', "response.data")
				// this.$emit("id", response.data)
				// bus.$emit('tc','aa aa')
				this.$router.push('/LyricPage/' + this.id)
			}catch(err) {
				this.error = err.response.data.error
			}
		}
	},
	
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.information {
	color: blue
}
</style>
