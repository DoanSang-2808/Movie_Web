<template>
    <div class="register-wrapper">
        <div class="register-content">
            <div class="register-content-form-main">
                <h3><b>Đăng kí</b></h3>
                <div class="register-form">
                    <div class="register-form-user">
                        <p style="margin: 0;text-align:left; display:none">Email hoặc số điện thoại</p>
                        <div class="input" >
                            <input type="text" name="username" placeholder="Email hoặc số điện thoại" autocomplete="on">
                        </div>
                    </div>
                    <div class="register-form-pass">
                        <p style="margin: 0;text-align:left; display:none">Mật khẩu</p>
                        <div class="input">
                            <input type="password" name="password" placeholder="Mật khẩu">
                        </div>
                    </div>
                    <div class="register-form-pass">
                        <p style="margin: 0;text-align:left; display:none">Xác nhận mật khẩu</p>
                        <div class="input">
                            <input type="password" name="passwordCf" placeholder="Xác nhận mật khẩu">
                        </div>
                    </div>
                    <div class="register-form-login">
                        <Button btnText="Đăng kí" btnColor="#cf2122" />
                    </div>
                    <div class="login-form-option">
                        <p>Bạn cần trợ giúp?</p>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../components/base/BaseButton.vue'
export default {
    name: 'Register',
    components: {Button}
}
</script>

<style scoped>
@import url('../css/views/Register.css');
</style>