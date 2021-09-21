<template>
  <div class="login-wrapper">
    <div class="login-content">
      <div class="login-content-form-main">
        <h3><b>Đăng nhập</b></h3>
        <ValidationObserver ref="form">
          <div class="login-form">
            <div class="login-form-user">
              <p style="margin: 0; text-align: left; display: none">
                Email hoặc số điện thoại
              </p>
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
                    v-model="email"
                  />
                  <i
                    class="bi bi-exclamation-circle"
                    :class="{ error: errors.length !== 0 }"
                  ></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="login-form-pass">
              <p style="margin: 0; text-align: left; display: none">Mật khẩu</p>
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
                    v-model="password"
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
                btnColor="#cf2122"
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
export default {
  name: "Login",
  components: { Button },
  data() {
    return {
      email: "",
      password: "",
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
            .post("https://apiwebmovie.herokuapp.com/login", value)
            .then((response) => {
              console.log(response);
              self.$toast("Đăng nhập thành công", {
                timeout: 2000,
              });
              self.$emit("hasLogin", true)
              self.$router.push({ name: "Movie"})
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
    changeIsShow(){
      this.$store.dispatch('handleChangeIsShow', true)
    },
  },
  watch: {
    /**
     * Hàm lắng nghe sự thay đổi của email
     * Auhtor: DTSang(19/09)
     */
    email: function () {
      this.account.email = this.email;
    },
    /**
     * Hàm lắng nghe sự thay đổi password
     * Author: DTSang(19/09)
     */
    password: function () {
      this.account.password = this.password;
    },
  },
};
</script>

<style scoped>
@import url("../css/views/Login.css");
</style>
