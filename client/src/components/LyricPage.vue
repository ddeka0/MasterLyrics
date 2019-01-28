<template>
<v-container app >
	<v-layout row wrap>
		<v-flex offset-xs2 >
            <div >
            <v-timeline >
                <v-timeline-item
                color="purple lighten-2"
                fill-dot
                left
                >
                <v-card color="purple" class="white--text">
                    <v-card-title class="purple lighten-2 justify-end">
                    <v-icon
                        dark
                        size="42"
                        class="mr-3"
                    >
                        info
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">Details</h2>
                    </v-card-title>
                    <v-container>
                    <v-layout>
                        <v-flex xs5>
                        <v-img src="/static/album.jpg" contain > 
                         </v-img>
                        </v-flex> 
                        <v-spacer></v-spacer>
                        <v-flex align="left">
                        <div align="left">          
                            <div class="headline"> {{name}} </div> <br>
                            <div><b>Album:</b> {{album}}</div>
                            <div><b>Artist:</b> {{artist}}</div>
                            <div><b>Year:</b> {{year}}</div>
                        </div>   
                        </v-flex>

                    </v-layout>
                    </v-container>
                </v-card>
                </v-timeline-item>

                <v-timeline-item
                color="amber lighten-2"
                fill-dot
                right
                small
                >
                <v-card color="amber darken-3" class="white--text">
                    <v-card-title class="amber lighten-1">
                    <h2 class="display-1 mr-3 white--text font-weight-light">Lyric</h2>
                    <v-icon
                        dark
                        size="42"
                    >
                    music_note
                    </v-icon>
                    </v-card-title>
                    <v-container>
                    <v-layout>
                        <v-flex>
                            <v-chip class="subheading font-weight-medium" 
                                    color="amber darken-3" 
                                    dark 
                                    @click="chip=!chip"
                                    @input="key=lyJson[key]"
                                    v-for="(item, key) in lyJson" 
                                    v-bind:item="item"
                                    v-bind:key="item.id">
                                    <div v-if="chip==true">
                                        {{key}} 
                                    </div>
                                     <div v-else>
                                        {{lyJson[key]}}
                                    </div>
                            </v-chip>
                        </v-flex>
                        
                    </v-layout>
                    </v-container>
                </v-card>
                </v-timeline-item>

                <v-timeline-item
                color="cyan lighten-1"
                fill-dot
                left
                >
                <v-card color="cyan darken-3" class="white--text" height=450 >
                    <v-card-title class="cyan lighten-1 justify-end">
                    <v-icon
                        class="mr-3"
                        dark
                        size="42"
                    >
                       ondemand_video
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">Youtube</h2>
                    </v-card-title>
                    <v-container>
                    <v-layout>
                        <v-flex
                        >
                        <div id="vid">
                            <youtube :video-id="link" width=100% height=350 />
                            
                        </div>
                        </v-flex>
                    </v-layout>
                    </v-container>
                </v-card>
                </v-timeline-item>

            </v-timeline>
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
  name: 'LyricPage',
  data () {
      return {
          lyric: null ,
          id: this.$route.params.id,
          error: "",
          name: "",
          artist: "",
          year: "",
          album: "",
          link: "",
          lyJson: null,
          chip: true,
          vid_id: ''
      }
    },
    methods: {
		
	},

    async created () {
        console.log("mounted function calles")
        try {
                    console.log("before await")
                    const response = await SongSearchService.songSearchId({
                        id: this.id,
                    })
                    console.log("after await")
                    console.log(response.data.tuple)
                    console.log("LyricPage Song Id is = ",response.data.id)
                    console.log("LyricPage Song lyric is = ",response.data.lyric)
                    
                    this.name = response.data.tuple.songNameEng
                    this.artist = response.data.tuple.Artist
                    this.album = response.data.tuple.Album
                    this.year = response.data.tuple.Year
                    this.link = response.data.tuple.Link
                    this.lyric = response.data.lyric
                    
                    // removing end quotes from the json
                    this.lyric = this.lyric.replace(new RegExp('""', 'g'), '"')
                    this.lyJson = JSON.parse(this.lyric)
                    console.log("Meaning Song lyric is = " + this.lyJson.हर)        
                }catch(err) {
                    console.log("after error" + err)
                    this.error = err.response.data.error
                }
 }
  }
</script>

<style scoped>

</style>