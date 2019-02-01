<template>
<v-flex class="off">
<v-btn v-for="item in alpha" 
	fab 
	dark 
	depressed
	color="light-blue accent-4" 
	v-bind:key="item.id" 
	class="headline"
	@click="AZlistSearch (item)">
      {{item}}
</v-btn>
<br><br>
<v-data-table
    :headers="headers"
    :items="songs"
    class="elevation-1"
  >
	<template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here :(
      </v-alert>
    </template>
    <template slot="items" slot-scope="props">
		
      <td class="text-xs">{{ props.item.songNameEng }}</td>
      <td class="text-xs">{{ props.item.Artist }}</td>
      <td class="text-xs">{{ props.item.Album }}</td>
      <td class="text-xs">{{ props.item.Year }}</td>
    </template>
  </v-data-table>
</v-flex>

</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import SongSearchService from '@/services/SongSearchService'
export default {
    name: 'EditAdd',
	data () {
		return {
			alpha: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
			headers: [
          {
            text: 'Song',
            value: 'name'
          },
          { text: 'Artist', value: 'artist' },
          { text: 'Album', value: 'album' },
          { text: 'Year', value: 'year' }
		],
		songs: [],
        // songs: [
        //   {
        //     name: 'kal ho',
        //     artist: 'qqq',
        //     album: 'abc',
        //     year: 2011,
		//   },
		//   {
        //     name: 'aaj ho',
        //     artist: 'iyf',
        //     album: 'ef',
        //     year: 2019,
		//   },
		// ]		
		}
	},
	methods: {
		async AZlistSearch (item) {
			console.log('character is:' + item)
			try {
				const response = await SongSearchService.AZlistSearch({
					ch: item,
				})
				console.log(response.data[0].id)
				console.log("Result is  = ",response.data[0])
				// console.log("Song lyric is = ",response.data.lyrics)
				
				this.songs = response.data
				this.error = response.data.lyrics
				// this.id = response.data.id

				console.log("Printing songs " + this.songs)
			}catch(err) {
				console.log("inside AZLIST cache ")
				this.songs = []
				this.error = err.response.data.error
			}
		}
	},
	
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.off{
	margin-left: 200px;
	margin-right: 200px;
}

</style>
