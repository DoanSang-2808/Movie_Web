<template>
  <div class="register-wrapper">
    <div class="register-content">
      <div class="register-content-form-main">
        <h3><b>Đăng kí</b></h3>
        <ValidationObserver ref="form">
          <div class="register-form">
            <div class="register-form-user">
              <p style="margin: 0; text-align: left; display: none">Email</p>
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
                    autocomplete="on"
                    v-model="email"
                  />
                  <i
                    class="bi bi-exclamation-circle"
                    :class="{ error: errors.length !== 0 }"
                  ></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="register-form-user">
              <p style="margin: 0; text-align: left; display: none">
                Tên người dùng
              </p>
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
                    autocomplete="on"
                    v-model="username"
                  />
                  <i
                    class="bi bi-exclamation-circle"
                    :class="{ error: errors.length !== 0 }"
                  ></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="register-form-pass">
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
            <div class="register-form-pass">
              <p style="margin: 0; text-align: left; display: none">
                Xác nhận mật khẩu
              </p>
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
                  />
                  <i
                    class="bi bi-exclamation-circle"
                    :class="{ error: errors.length !== 0 }"
                  ></i>
                </div>
              </ValidationProvider>
            </div>
            <div class="register-form-login">
              <Button
                btnText="Đăng kí"
                btnColor="#cf2122"
                :btnMode="1"
                @btnRegisterOnclick="btnRegisterOnclick"
              />
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
      email: "",
      username: "",
      password: "",
      passwordComfirm: "",
      account: {
        phone: "",
      },
    };
  },
  methods: {
    btnRegisterOnclick() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          if (this.passwordComfirm !== this.password) {
            this.$toast("Xác nhận mật khẩu chưa đúng", {
              timeout: 2000,
            });
          } else {
            let value = this.account;
            let self = this;
            axios
              .post("http://localhost:3500/register", value)
              .then((response) => {
                console.log(response.data);
                self.$toast("Đăng kí thành công", {
                  timeout: 2000,
                });
                self.email = "";
                self.username = "";
                self.password = "";
                self.passwordComfirm = "";
                self.account = {
                  phone: "",
                };
                self.$refs.form.reset();  
                self.$router.push({ name: "Login"})
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      });
    },
  },
  watch: {
    email: function () {
      this.account.email = this.email;
    },
    username: function () {
      this.account.username = this.username;
    },
    password: function () {
      this.account.password = this.password;
    },
  },
};
</script>

<style scoped>
@import url("../css/views/Register.css");
</style>
