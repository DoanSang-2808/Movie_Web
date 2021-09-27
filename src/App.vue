<template>
  <div id="app" :class="{ app: isShow }">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheMain from "./components/layout/TheMain.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
  computed: {
    isShow() {
      return this.$store.state.isShow;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("assets/img/background-login.jpg");
  height: 100vh;
  background-color: #05101b;
  color: #fff;
  /* width: 100vw;  */
}
.app {
  background-image: none !important;
  height: max-content !important;
  background-color: #05101b;
}
</style>
