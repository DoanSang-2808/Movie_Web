<template>
    <div class="button-wrapper">
        <button class="btn" :style="{'background-color': btnColor}"> {{btnText}}</button>
    </div>
</template>

<script>

export default{
    name: "Button",
    props: {
        btnText: {
            type: String
        },
        btnColor: {
            type: String
        }
    }
}
</script>

<style scoped>
@import url('../../css/base/BaseButton.css');
</style>
