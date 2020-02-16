<template>
    <div class="index">
        <div class="header">
            <h4>{{time | nowDay}}<span>{{time | nowMonth}}</span></h4>
            <h1 v-if="grt=(ho<9?'早上好':
                    ho<12?'上午好':
                    ho<15?'中午好':
                    ho<19?'下午好':
                    '晚上好'
                    )">{{grt}}
                <router-link :to="'Personal'"><img src="@/assets/img/head.jpg" alt=""></router-link>
            </h1>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="banner">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="item in swiperList" :key="item.id" @click="go">
                        <a :href="item.url">
                            <img :src="item.image">
                            <p>
                                {{item.title}}
                                <span>{{item.hint}}</span>
                            </p>
                        </a>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="indexText">
                <a :href="item.url" v-for="item in conList" :key="item.id" @click="go">
                    <p>{{item.title}}
                        <span>{{item.hint}}</span>
                    </p>
                    <img :src="item.images">
                </a>
            </div>
            <div class="indexText history">
                <a :href="item.url" v-for="item in hisList" :key="item.id" @click="go">
                    <p>{{item.title}}
                        <span>{{item.hint}}</span>
                    </p>
                    <img :src="item.images">
                </a>
            </div>
        </van-pull-refresh>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    compoents: {

    },
    data() {
        return {
            //时间
            time:Date.parse(new Date()),
            //问候语
            grt:"hello",
            ho:new Date().getHours(),
            //刷新加载
            isLoading: false,
            swiperList: [],
            conList: [],
            hisList: []
        }
    },
    filters: {
        nowDay: function (value) {
        let date = new Date(value);
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return d
        },
        nowMonth: function (value) {
        let date = new Date(value);
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? (MM) : MM;  
        return MM + '月'
        }
    },
    methods: {
        go() {
            this.$router.replace('/Details');
        },
        //刷新加载
        onRefresh() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
    },
    mounted:function(){
        this.axios.get("news/latest").then(res => {
            this.swiperList=res.data.top_stories;
            this.conList=res.data.stories
        }),
        this.axios.get("news/before/20131119").then(res => {
            this.hisList=res.data.stories
        })
    }
}
</script>
<style>

</style>