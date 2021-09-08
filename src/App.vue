<template>
  <div id="app">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheMain from './components/layout/TheMain.vue'
import TheFooter from './components/layout/TheFooter.vue'
export default {
  name: 'App',
  components: {
    TheHeader, TheMain, TheFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #06121e;
  color: #fff;
  width: 100vw; 
  height: 100vh;
}
</style>
