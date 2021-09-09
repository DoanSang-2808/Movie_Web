<template>
   <div class="header-wrapper">
       <div class="container-fluid height100">
           <div class="row height100">
               <div class=" col col-sm-9 col-xl-6">
                   <div class="container-fluid height100">
                       <div class="row height100">
                           <div class="col-md-3 center">
                               <img src="../../assets/img/logo-full.png" alt="" class="logo">
                           </div>
                           <div class="col-md-3 center"><span><i class="bi bi-search"></i></span>Tìm kiếm</div>
                           <div class="col-md-2 center">Trang chủ</div>
                           <div class="col-md-2 center">About</div>
                           <div class="col-md-2 center">Liên hệ</div>
                       </div>
                   </div>
               </div>
               <div class="col col-sm-3 col-xl-6 ">
                   <div class="height100" style="display: flex; flex-direction: row-reverse; align-items: center">
                       <Button btnText="Đăng nhập" btnColor="#cf2122"/>
                   </div>
               </div>
           </div>
       </div>   
    </div> 
</template>

<script>
import Button from '../base/BaseButton.vue'
export default {
    name: "TheHeader",
    components: { 
        Button
    }
}
</script>

<style scoped>
@import url('../../css/layout/TheHeader.css');
</style>

