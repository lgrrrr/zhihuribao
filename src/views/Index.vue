<template>
    <div class="index">
        <Header />
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
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    },
    data() {
        return {
            isLoading: false,
            swiperList: '',
            conList: '',
            hisList: ''
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