<template>
    <div>
        <button :class="$style.hand">CSS 모듈을 적용한 버튼 </button>
    </div>
</template>

<script>
    export default {
        created() {
            /* eslint-disable */
            console.log(this.$style);
            console.log(this.$style);
        }
    }
</script>

<style module>
    .hand { cursor:pointer; background-color: purple; color:yellow;}
</style>