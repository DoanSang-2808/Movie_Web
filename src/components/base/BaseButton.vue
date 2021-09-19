<template>
  <div class="button-wrapper button-wrapper-login" @click="btnOnclick">
    <button class="btn btn-login" :style="{ 'background-color': btnColor }">
      {{ btnText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnText: {
      type: String,
    },
    btnColor: {
      type: String,
    },
    btnMode: {
      type: Number,
    }
  },
  methods: {
    /**
     * Hàm xử lsi sự kiện bấm Button
     * Author: DTSang(18/09)
     */
    btnOnclick() {
  
      if(this.btnMode == 1){
        this.$emit("btnRegisterOnclick");
      } else if(this.btnMode == 0){
        this.$emit("btnLoginOnclick");
      }
    }
  },
};
</script>

<style scoped>
@import url("../../css/base/BaseButton.css");
</style>
