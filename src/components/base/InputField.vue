<template>
  <div class="wrapper-input">
    <input type="text" placeholder="Nhập tên phim..." v-model="valueInput" />
  </div>
</template>
<script>
export default {
  name: "InputField",
  props: {
    value: {
      type: String,
    },
    valueArray: {
      type: Array,
    },
    keyword: {
      type: String,
    },
  },
  data() {
    return {
      valueInput: "",
    };
  },
  watch: {
    /**
     * Lắng nghe sự thay đổi của của prop value
     * Author: DTSang(27/08)
     */
    value: function () {
      this.valueInput = this.value;
    },
    valueArray: function () {
      let arr = "";
      for (const element of this.valueArray) {
        arr = arr + element + ",";
      }
      this.valueInput = arr.slice(0, -1);
    },
    /**
     * Lắng nghe sự thay đổi của valueInput
     * Author: DTSang(27/08)
     */
    valueInput: function () {
      this.$emit("changeInput", [this.keyword, this.valueInput]);
    },
  },
  methods: {
    reset() {
      this.valueInput = "";
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
