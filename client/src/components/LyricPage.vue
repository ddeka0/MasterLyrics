<template>
<v-container  app >
	<v-layout row wrap>
		<v-flex flat>
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
                            cc
                        {{lyric}}
                        abc
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

// import { serverBus } from '../main'
 import { bus } from '../main'
  export default {
  name: 'LyricPage',
  data () {
      return {
          lyric: "हिंदी गाने हिंदी में" 
      }
    },

    created () {
  // Using the server bus
//   serverBus.$on('lry', (lyric) => {
//    this.lyric = lyric
//   })
    bus.$on('tc', (data) => {
        this.lyric = data
    })
 }
  }
</script>

<style scoped>

</style>