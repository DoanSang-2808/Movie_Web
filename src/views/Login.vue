<template>
    <div class="login-wrapper">
        <div class="login-content">
            <div class="login-content-form-main">
                <h3><b>Đăng nhập</b></h3>
                <div class="login-form">
                    <div class="login-form-user">
                        <p style="margin: 0;text-align:left; display:none">Email hoặc số điện thoại</p>
                        <div class="input" >
                            <input type="text" name="username" placeholder="Email hoặc số điện thoại">
                        </div>
                    </div>
                    <div class="login-form-pass">
                        <p style="margin: 0;text-align:left; display:none">Mật khẩu</p>
                        <div class="input">
                            <input type="password" name="password" placeholder="Mật khẩu">
                        </div>
                    </div>
                    <div class="login-form-login">
                        <Button btnText="Đăng nhập" btnColor="#cf2122" />
                    </div>
                    <div class="login-form-option">
                        <div style="display:flex">
                            <input type="checkbox" name="saveAccount" id="">
                            <p>Ghi nhớ tôi</p>
                        </div>
                        <p>Bạn cần trợ giúp?</p>
                    </div>    
                </div>
            </div>
            <div class="login-content-form-other">
                <p>Bạn chưa tài khoản?</p>
                <a href="">Đăng kí ngay</a>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../components/base/BaseButton.vue'
export default {
    name: 'Login',
    components: {Button}
}
</script>

<style scoped>
@import url('../css/views/Login.css');
</style>