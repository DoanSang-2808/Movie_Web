<template>
  <div class="header-wrapper">
    <div class="container-fluid height100">
      <div class="row height100">
        <div class="col-6 col-md-10 col-xxl-6">
          <div class="container-fluid height100">
            <div class="row height100">
              <router-link to="/movies" class="col-12 col-sm-6 col-md-2 center">
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
              <router-link
                to="/search"
                class="col-md-3 center hover hidden"
                :class="{ isAdmin: isHidden }"
              >
                <span><i class="bi bi-search"></i></span>Tìm kiếm
              </router-link>
              <router-link
                to="/movies"
                class="col-md-2 center hover hidden"
                :class="{ isAdmin: isHidden }"
                >Trang chủ</router-link
              >
              <router-link
                to="/about"
                class="col-md-2 center hover hidden"
                :class="{ isAdmin: isHidden }"
                >About</router-link
              >
              <router-link
                to="/contact"
                class="col-md-2 center hover hidden"
                :class="{ isAdmin: isHidden }"
                >Liên hệ</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-6 col-md-2 col-xxl-6">
          <div class="height100 row-reverse">
            <div to="/login">
              <Button :btnText="hasLogin" @btnOnclick="btnLogoutOnclick" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../base/BaseButton.vue";
import VueCookies from "vue-cookies";
export default {
  name: "TheHeader",
  components: {
    Button,
  },
  data() {
    return {
      isHidden:
        VueCookies.isKey("Account") == false
          ? false
          : VueCookies.get("Account").role == "admin",
    };
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
  methods: {
    /**
     * Hàm sự lí sự kiện bấm vào nút Logout
     * Author: DTSang(29/09)
     */
    btnLogoutOnclick() {
      if (VueCookies.isKey("Account") == true) {
        VueCookies.remove("Account");
        this.changeIsShow();
        this.$router.push({ name: "Home" });
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    /**
     * Hàm thay dổi giá trị của isShow trong store
     * Ảthor: DTSang(19/09)
     */
    changeIsShow() {
      this.$store.dispatch("handleChangeIsShow", VueCookies.isKey("Account"));
    },
  },
};
</script>

<style scoped>
@import url("../../css/layout/TheHeader.css");
a {
  text-decoration: none;
  color: #fff;
}
.isAdmin {
  display: none !important;
}
</style>
