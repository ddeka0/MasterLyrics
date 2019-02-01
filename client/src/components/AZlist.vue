<template>
<v-flex class="off">
<v-btn v-for="item in alpha" 
	fab 
	dark 
	depressed
	color="light-blue accent-4" 
	v-bind:key="item.id" 
	class="headline">
      {{item}}
</v-btn>
<br><br>
<v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs">{{ props.item.name }}</td>
      <td class="text-xs">{{ props.item.artist }}</td>
      <td class="text-xs">{{ props.item.album }}</td>
      <td class="text-xs">{{ props.item.year }}</td>
    </template>
  </v-data-table>
</v-flex>

</template>

<script>

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
        desserts: [
          {
            name: 'kal ho',
            artist: 'qqq',
            album: 'abc',
            year: 2011,
		  },
		]		
		}
	},
	methods: {

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
