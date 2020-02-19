<template>
    <div class="detailFooter">
        <h3>
            <router-link :to="'/'" class="jiantou"><img src="@/assets/img/returnjiantou.png"></router-link>
        </h3>
        <div class="icon">
            <p @click="comment"><img src="@/assets/img/pinglun.png"><span>88</span></p>
            <p @click="zan"><img :src="good > 0? require('@/assets/img/yidianzan.png') : require('@/assets/img/dianzan1.png') "><span>{{num}}</span></p>
            <p @click="collect"><img :src="coll > 0? require('@/assets/img/yishoucang.png') : require('@/assets/img/shoucang.png')"></p>
            <p><img src="@/assets/img/fenxiang1.png"></p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            good:0,
            num:0,
            coll:''
        }
    },
    methods: {
        comment() {
            this.$router.replace('/Comment');
        },
        zan() {
            if(this.good==1) {
                this.num=this.num-1;
                this.good=0;
            }else{
                this.num=this.num+1;
                this.good=1;
            }
        },
        collect() {
            if(this.coll == 1){
                this.coll = 0;
            }else{
                this.coll = 1;
            }
        }
        
    }
}
</script>
<style scoped>
.detailFooter{width: 100%;position: fixed;bottom: 0;left: 0;z-index: 99;overflow: auto;padding: 0.6rem 0rem;width: 100%;background-color: #F3F3F3;}
.detailFooter .jiantou{padding: 0 1.5rem 0 0.8rem;float: left;border-right: 1px solid #DDDDDD;}
.detailFooter img{width: 1.1rem;}
.detailFooter .icon{float: left;width: 85%;}
.detailFooter .icon p{width: 25%;text-align: center;float: left;position: relative;}
.detailFooter .icon p span{position: absolute;top: -5px;right: 18px;font-size: 0.8rem;}
</style>