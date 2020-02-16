<template>
    <div class="detailFooter">
        <h3>
            <router-link :to="'/'" class="jiantou"><img src="@/assets/img/returnjiantou.png" alt=""></router-link>
        </h3>
        <div class="icon">
            <router-link :to="'/Comment'"><img src="@/assets/img/pinglun.png" alt=""></router-link>
            <router-link to=""><img src="@/assets/img/dianzan1.png" alt=""></router-link>
            <router-link to=""><img src="@/assets/img/shoucang.png" alt=""></router-link>
            <router-link to=""><img src="@/assets/img/fenxiang1.png" alt=""></router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isup: true
        }
    },
    methods: {
        arrowChange() {
            this.arrowChange=!this.arrowChange
        }
    }
}
</script>
<style>

</style>