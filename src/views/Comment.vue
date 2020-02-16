<template>
    <div class="comment">
        <div class="header">
            <h3>
                <router-link :to="'/Details'"><img src="@/assets/img/returnjiantou.png" alt=""></router-link>
                <!--{{all}}-->88 条评论
            </h3>
        </div>
        <div class="commentCon">
            <h4><!--{{long}}-->12 条长评</h4>
            <div class="con" v-for="item in comList" :key="item.id">
                <img :src="item.avatar" alt="" class="avatar">
                <div class="conText">
                    <h5>
                        {{item.author}}
                        <img src="@/assets/img/more.png" alt="">
                    </h5>
                    <p>{{item.content}}</p>
                    <p class="nei">{{item.time}}
                        <span>
                            <img src="@/assets/img/dianzan2.png" alt="">
                            <img src="@/assets/img/huifu.png" alt="" @click="answer">
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="commentCon short">
            <h4><!--{{short}}-->76 条短评
                <img src="@/assets/img/top.png">
            </h4>
            <div class="con" v-for="item in shortList" :key="item.id">
                <img :src="item.avatar" alt="" class="avatar">
                <div class="conText">
                    <h5>
                        {{item.author}}
                        <img src="@/assets/img/more.png" alt="">
                    </h5>
                    <p>{{item.content}}</p>
                    <p class="nei">{{item.time}}
                        <span>
                            <img src="@/assets/img/dianzan2.png" alt="">
                            <img src="@/assets/img/huifu.png" alt="" @click="answer">
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="commentFooter">
            <img src="@/assets/img/head.jpg" alt="">
            <p>说说你的看法...</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            comList: [],
            shortList: []
        }
    },
    methods: {
        answer() {
            this.$router.replace('/Answer');
        }
    },
    mounted:function(){
        this.axios.get("story/4232852/long-comments").then(res => {
            this.comList=res.data.comments;
        }),
        this.axios.get("story/4232852/short-comments").then(res => {
            this.shortList=res.data.comments;
        })
        // this.axios.get("http://news-at.zhihu.com/api/4/story-extra/3892357").then(res => {
        //     this.all=res.data.comments;
        //     this.long=res.data.long_comments;
        //     this.short=res.data.short_comments;
        // })
    }
}
</script>
<style>

</style>