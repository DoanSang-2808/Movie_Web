<template>
  <div class="button-wrapper button-wrapper-login" @click="btnOnclick">
    <button class="btn btn-login" :style="{ 'background-color': btnColor }">
      <i :class="icon" :style="{'margin-right': marginRight}" ></i>
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
    },
    icon: {
      type: String,
    },
    marginRight: {
      type: String,
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
