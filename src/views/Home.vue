<template>
  <div class="home-wrapper">
    <div class="content">
      <h1><b>Các bộ phim lẻ mới nhất, được cập nhật liên tục</b></h1>
      <h3>Xem ở mọi nơi. Hủy bất kì lúc nào !</h3>
      <h6>Bạn đã sẵn sàng chưa ?</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    /**
     * Hàm tính toán isShow khi isShow ở store thay đổi
     * Author: DTSang(19/09)
     */
    // isShow() {
    //   return this.$store.state.isShow;
    // },
  },
};
</script>

<style>
.home-wrapper {
  width: 100%;
  height: calc(100% - 56px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0.8rem;
}
.content {
  font-weight: 900;
}
</style>
