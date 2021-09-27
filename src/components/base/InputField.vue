<template>
  <div class="wrapper-input">
    <input type="text" placeholder="Nhập tên phim..." />
  </div>
</template>
<script>
export default {
  name: "InputField",
  data() {
    return {};
  },
};
</script>

<style scoped>
.wrapper-input {
  height: 100%;
  width: 100%;
}
.wrapper-input input {
  background: #fff !important;
  color: #000 !important;
}
</style>
