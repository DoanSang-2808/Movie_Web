<template>
  <div class="register-wrapper">
    <div class="register-content">
      <div class="register-content-form-main">
        <h3><b>Đăng kí</b></h3>
        <ValidationObserver ref="form">
          <div class="register-form">
            <div class="register-form-user">
              <!-- <p style="margin: 0; text-align: left; display: none">Email</p> -->
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
                    placeholder="Nhập email"
                    autocomplete="off"
                    v-model="account.email"
                  />
                  <i
                    class="bi bi-exclamation-circle"
                    :class="{ error: errors.length !== 0 }"
                  ></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="register-form-user">
              <!-- <p style="margin: 0; text-align: left; display: none">
                Tên người dùng
              </p> -->
              <ValidationProvider
                tag="div"
                rules="required"
                name="Username"
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
                    name="username"
                    placeholder="Nhập username"
                    v-model="account.username"
                    autocomplete="off"
                  />
                  <i
                    class="bi bi-exclamation-circle"
                    :class="{ error: errors.length !== 0 }"
                  ></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="register-form-pass">
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
                    autocomplete="off"
                  />
                  <i
                    class="bi bi-exclamation-circle"
                    :class="{ error: errors.length !== 0 }"
                  ></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="register-form-pass">
              <!-- <p style="margin: 0; text-align: left; display: none">
                Xác nhận mật khẩu
              </p> -->
              <ValidationProvider
                tag="div"
                rules="required"
                name="PasswordComfirm"
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
                    name="passwordComfirm"
                    placeholder="Xác nhận mật khẩu"
                    v-model="passwordComfirm"
                    autocomplete="off"
                  />
                  <i
                    class="bi bi-exclamation-circle"
                    :class="{ error: errors.length !== 0 }"
                  ></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="register-form-login">
              <Button btnText="Đăng kí" @btnOnclick="btnRegisterOnclick" />
            </div>
            <div class="login-form-option">
              <p>Bạn cần trợ giúp?</p>
            </div>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/base/BaseButton.vue";
import { extend } from "vee-validate";
import axios from "axios";

extend("comfirm", {
  validate(value, password) {
    debugger; // eslint-disable-line
    return value == password;
  },
  message: "Xác nhận lại mật khẩu đã nhập",
});
export default {
  name: "Register",
  components: { Button },
  data() {
    return {
      passwordComfirm: "",
      account: {
        phone: "",
      },
    };
  },
  methods: {
    /**
     * Hàm xử lí sự kiện khi bấm vào buttono đăng kí
     * Author: DTSang(19/09)
     */
    btnRegisterOnclick() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          if (this.passwordComfirm !== this.account.password) {
            this.$toast("Xác nhận mật khẩu chưa đúng", {
              timeout: 2000,
            });
          } else {
            let value = this.account;
            let self = this;
            axios
              .post(`${process.env.VUE_APP_ROOT_API}/register`, value)
              .then(() => {
                self.$toast("Đăng kí thành công", {
                  timeout: 2000,
                });
                // self.email = "";
                // self.username = "";
                // self.password = "";
                // self.passwordComfirm = "";
                // self.account = {
                //   phone: "",
                // };
                //self.$refs.form.reset();
                self.$router.push({ name: "Login" });
              })
              .catch((error) => {
                console.log(error);
                self.$toast(error.response.data.notification, {
                  timeout: 2000,
                });
              });
          }
        }
      });
    },
  },
};
</script>

<style scoped>
@import url("../css/views/Register.css");
</style>
