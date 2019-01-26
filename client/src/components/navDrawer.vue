<template>
  <v-navigation-drawer
    :mini-variant.sync="mini"
    v-model="drawer"
    class="blue lighten-3"
    dark
    stateless
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
        :key="item.title"
        @click="drclick()"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

  export default {
  name: 'navDrawer',
  data () {
      return {
          drawer: true,
        items: [
          { to: '/' , title: 'Home', icon: 'home' },
          { title: 'A to Z list', icon: 'sort_by_alpha' },
          { title: 'About', icon: 'info' }
        ],
        mini :true,
        right: null
      }
    },
    methods: {
    async drclick () {
 
    }
    }
  }
</script>

<style scoped>

</style>