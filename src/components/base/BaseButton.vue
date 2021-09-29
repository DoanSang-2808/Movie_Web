<template>
  <div class="button-wrapper button-wrapper-login" @click="btnOnclick">
    <button class="btn btn-login btn-color-cf2122">
      <i :class="icon"></i>
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
    icon: {
      type: String,
    },
  },
  methods: {
    /**
     * Hàm xử lsi sự kiện bấm Button
     * Author: DTSang(18/09)
     */
    btnOnclick() {
      this.$emit("btnOnclick");
    },
  },
};
</script>

<style scoped>
@import url("../../css/base/BaseButton.css");
</style>
