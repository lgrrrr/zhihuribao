<template>
    <div class="personal">
        <div class="header">
            <h6>
                <router-link :to="'/'"><img src="@/assets/img/returnjiantou.png" alt=""></router-link>
            </h6>
            <div class="head">
                <img src="@/assets/img/head.jpg" alt="">
                邮于
            </div>
        </div>
        <div class="con" v-for="item in conList" :key="item.id">
            <h4>
                {{item.title}}
                <img :src="item.src">
            </h4>
        </div>
        <div class="footer">
            <router-link to="" v-for="item in footerList" :key="item.id">
                <img :src="item.src" alt="">
                <p>{{item.title}}</p>
            </router-link> 
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            conList:[
                {"title":"我的收藏","src":require("@/assets/img/jiantou.png")},
                {"title":"消息中心","src":require("@/assets/img/jiantou.png")}
            ],
            footerList:[
                {"src":require("@/assets/img/yejianmoshi.png"),"title":"夜间模式"},
                {"src":require("@/assets/img/shezhi.png"),"title":"设置"}
            ]
        }
    }
}
</script>
<style>

</style>