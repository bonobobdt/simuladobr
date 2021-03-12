<template>
  <v-app>
    <AppTopBar/>
    <v-main>
        <router-link to="/">Inicio</router-link> |
      <router-link to="/classificacao">Classificação</router-link>
    </v-main>
  </v-app> 
</template>

<script>
import AppTopBar from './components/shared/AppTopBar'
export default {
  name: 'App',
  components: {
    AppTopBar
  }
};
</script>
© 2021 GitHub, Inc.

<style lang="scss">

</style>
