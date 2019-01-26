<template>
  <v-footer
    height="auto"
    color="primary lighten-1" app
  >
    <v-layout
      justify-center
      row
      wrap
    >

      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2019 — <strong>Group 2</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
  name: 'footer',
  data () {
    return {
      ff : '',
    }
  },
  }
</script>

<style scoped>

</style>