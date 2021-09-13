<template>
   <div class="main-wrapper">
       <div style="height: 56px"></div>
       <Register hidden />
       <Login hidden />
       <Movie  />  
         
    </div> 
</template>

<script>
import Movie from '../../views/Movie.vue'
import Login from '../../views/Login.vue'
import Register from '../../views/Register.vue'
export default {
    name: "TheMain",
    components: {Movie, Login, Register}
}
</script>

<style scoped>
@import url('../../css/layout/TheMain.css');
</style>
