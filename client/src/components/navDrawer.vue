<template>
  <v-navigation-drawer
    :mini-variant.sync="mini"
    v-model="drawer"
    class="blue lighten-3"
    dark
    app
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-btn icon color="primary">
            <v-icon>view_list</v-icon>
          </v-btn>

          <v-list-tile-content>
            <v-list-tile-title></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        @click="item.action"
        :key="item.title"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile
        @click="drclick ()"
      >
        <v-list-tile-action>
          <v-icon>info</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <about v-bind:dialog="dialog" ></about>
  </v-navigation-drawer>
</template>

<script>

import About from './About'

  export default {
  name: 'navDrawer',
   components: {
    About
  },
  props:{
    // about dialog box
    dialog:{
      type:Boolean,
      default: false
    },
  },
  data () {
      return {
          drawer: true,
        items: [
          { title: 'Home', icon: 'home' , to: '/' },
          { title: 'A to Z list', icon: 'sort_by_alpha' }
          // { title: 'About', icon: 'info'  }
        ],
        mini :true,
        right: null,
      }
    },
    methods: {
    drclick () {
        this.dialog = false
        this.dialog = true
    }
    }
  }
</script>

<style scoped>

</style>