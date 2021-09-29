<template>
  <div class="wrapper-input">
    <input
      type="file"
      accept="image/gif, image/jpeg, image/png"
      @change="onFileChange"
    />
  </div>
</template>
<script>
export default {
  name: "InputField",
  props: {
    keyword: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    /**
     * Hàm bắt sự thay đổi của file
     * Author: DTSang(28/09)
     */
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.$emit("changeInput", [this.keyword, files[0]]);
    },
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
