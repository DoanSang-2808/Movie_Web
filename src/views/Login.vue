<template>
  <div class="login-wrapper">
    <div class="login-content">
      <div class="login-content-form-main">
        <h3><b>Đăng nhập</b></h3>
        <ValidationObserver ref="form">
          <div class="login-form">
            <div class="login-form-user">
              <!-- <p style="margin: 0; text-align: left; display: none">
                Email hoặc số điện thoại
              </p> -->
              <ValidationProvider
                tag="div"
                rules="required|email"
                name="Email"
                v-slot="{ errors }"
              >
                <div
                  class="input"
                  data-toggle="tooltip"
                  data-placement="top"
                  :title="errors[0]"
                >
                  <input
                    type="text"
                    name="email"
                    placeholder="Email hoặc số điện thoại"
                    v-model="account.email"
                  />
                  <i
                    class="bi bi-exclamation-circle"
                    :class="{ error: errors.length !== 0 }"
                  ></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="login-form-pass">
              <!-- <p style="margin: 0; text-align: left; display: none">Mật khẩu</p> -->
              <ValidationProvider
                tag="div"
                rules="required"
                name="Password"
                v-slot="{ errors }"
              >
                <div
                  class="input"
                  data-toggle="tooltip"
                  data-placement="top"
                  :title="errors[0]"
                >
                  <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    v-model="account.password"
                  />
                  <i
                    class="bi bi-exclamation-circle"
                    :class="{ error: errors.length !== 0 }"
                  ></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="login-form-login">
              <Button
                btnText="Đăng nhập"
                :btnMode="0"
                @btnLoginOnclick="btnLoginOnclick"
              />
            </div>
            <div class="login-form-option">
              <div style="display: flex">
                <input type="checkbox" name="saveAccount" id="" />
                <p>Ghi nhớ tôi</p>
              </div>
              <p>Bạn cần trợ giúp?</p>
            </div>
          </div>
        </ValidationObserver>
      </div>
      <div class="login-content-form-other">
        <p>Bạn chưa tài khoản?</p>
        <router-link to="/register">Đăng kí ngay</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/base/BaseButton.vue";
import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  name: "Login",
  components: { Button },
  data() {
    return {
      account: new Object(),
    };
  },
  methods: {
    /**
     * Hàm bắt sự kiện khi click vào button Đăng nhập trong form
     * Author: DTSang(19/09)
     */
    btnLoginOnclick() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          let value = this.account;
          let self = this;
          axios
            .post(`${process.env.VUE_APP_ROOT_API}/login`, value)
            .then((response) => {
              self.$toast("Đăng nhập thành công", {
                timeout: 2000,
              });
              //self.$emit("hasLogin", true);
              let account = {
                email: response.data.email,
                username: response.data.username,
                id: response.data._id,
                role: response.data.role,
                token: response.data.token,
              };
              VueCookies.set("Account", account);
              if (response.data.role == "guest") {
                self.$router.push({ name: "Movie" });
              } else {
                self.$router.push({ name: "MovieCMS" });
              }
              self.changeIsShow();
            })
            .catch((error) => {
              console.log(error.response);
              self.$toast(error.response.data.notification, {
                timeout: 2000,
              });
            });
        }
      });
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
@import url("../css/views/Login.css");
</style>
