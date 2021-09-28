<template>
  <div class="footer-wrapper" :class="{ hidden: isHidden }">
    <div class="up-footer"></div>
    <div class="footer">
      <p style="margin-bottom: 50px">Bạn có câu hỏi? Liên hệ chúng tôi.</p>
      <div class="container">
        <div class="row">
          <div class="col-6 col-lg-3">
            <p>Câu hỏi thường gặp</p>
            <p>Quan hệ với nhà đầu tư</p>
            <p>Quyền riêng tư</p>
            <p>Kiểm tra tốc độ</p>
          </div>
          <div class="col-6 col-lg-3">
            <p>Trung tâm trợ giúp</p>
            <p>Việc làm</p>
            <p>Tùy chọn cookie</p>
            <p>Thông báo pháp lí</p>
          </div>
          <div class="col-6 col-lg-3">
            <p>Tài khoản</p>
            <p>Các cách xem</p>
            <p>Thông tin doanh nghiệp</p>
            <p>Chỉ có trên Netflix</p>
          </div>
          <div class="col-6 col-lg-3">
            <p>Trung tâm da phương tiện</p>
            <p>Điều khoản sử dụng</p>
            <p>Liên hệ với chúng tôi</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
export default {
  name: "TheFooter",
  data() {
    return {
      isHidden: VueCookies.get("Account").role == "admin",
    };
  },
};
</script>

<style scoped>
@import url("../../css/layout/TheFooter.css");
.hidden {
  display: none;
}
</style>
