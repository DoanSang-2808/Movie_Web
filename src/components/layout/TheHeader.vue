<template>
  <div class="header-wrapper">
    <div class="container-fluid height100">
      <div class="row height100">
        <div class="col-6 col-md-10 col-xxl-6">
          <div class="container-fluid height100">
            <div class="row height100">
              <router-link to="/" class="col-12 col-sm-6 col-md-3 center">
                <div class="dropdown">
                  <a
                    class="btn dropdown-css"
                    href="#"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-justify option"></i>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <router-link to="/" class="dropdown-item"
                        >Trang chủ</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/search" class="dropdown-item" href="#"
                        >Tìm kiếm</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/about" class="dropdown-item" href="#"
                        >About</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/contact" class="dropdown-item" href="#"
                        >Liên hệ</router-link
                      >
                    </li>
                  </ul>
                </div>
                <img src="../../assets/img/logo-full.png" alt="" class="logo" />
              </router-link>
              <router-link to="/search" class="col-md-3 center hover hidden">
                <span><i class="bi bi-search"></i></span>Tìm kiếm
              </router-link>
              <router-link to="/" class="col-md-2 center hover hidden"
                >Trang chủ</router-link
              >
              <router-link to="/about" class="col-md-2 center hover hidden"
                >About</router-link
              >
              <router-link to="/contact" class="col-md-2 center hover hidden"
                >Liên hệ</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-6 col-md-2 col-xxl-6">
          <div
            class="height100"
            style="
              display: flex;
              flex-direction: row-reverse;
              align-items: center;
            "
          >
            <router-link to="/login">
              <Button :btnText="hasLogin" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../base/BaseButton.vue";
export default {
  name: "TheHeader",
  components: {
    Button,
  },
  data() {
    return {};
  },
  computed: {
    /**
     * Hàm tính lại hasLogin khi isShow thay đổi
     * Author: DTSang(19/09)
     */
    hasLogin() {
      if (this.$store.state.isShow == true) {
        return "Đăng xuất";
      }
      return "Đăng nhập";
    },
  },
  methods: {},
};
</script>

<style scoped>
@import url("../../css/layout/TheHeader.css");
a {
  text-decoration: none;
  color: #fff;
}
</style>
