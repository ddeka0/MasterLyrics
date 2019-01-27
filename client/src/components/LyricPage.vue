<template>
<v-container  app >
	<v-layout row wrap>
		<v-flex offset-xs2 >
            <div >
            <v-timeline >
                <v-timeline-item
                color="purple lighten-2"
                fill-dot
                left
                >
                <v-card>
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
                        <!-- <v-flex xs5>
                        <v-img src="/static/song_icon.png"  contain @click="drclick"> 
                         </v-img>
                        </v-flex>    -->
                        <v-flex >
                            
                            <p align="left">
                        Song Name: <br>
                        Album: <br>
                        Artist: <br>
                            </p>
                        </v-flex>

                    </v-layout>
                    </v-container>
                </v-card>
                </v-timeline-item>

                <v-timeline-item
                color="amber lighten-1"
                fill-dot
                right
                small
                >
                <v-card>
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
                        {{lyric}}
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
                <v-card>
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
                        Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
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
          lyric: "हिंदी गाने हिंदी में" ,
          id: this.$route.params.id,
          error: ""
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
                    console.log("LyricPage Song lyric is = ",response.data.lyrics)
                    
                    this.lyric = response.data.lyric
                    // this.id = response.data.id
                }catch(err) {
                    console.log("after error" + err)
                    this.error = err.response.data.error
                }
 }
  }
</script>

<style scoped>

</style>