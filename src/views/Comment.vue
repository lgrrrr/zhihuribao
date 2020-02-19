<template>
    <div class="comment">
        <div class="header">
            <h3>
                <img src="@/assets/img/returnjiantou.png" @click="back">
                {{comments}} 条评论
            </h3>
        </div>
        <div class="commentCon">
            <h4>{{long_comments}} 条长评</h4>
            <div class="con" v-for="item in comList" :key="item.id">
                <img :src="item.avatar" alt="" class="avatar">
                <div class="conText">
                    <h5>
                        {{item.author}}
                        <img src="@/assets/img/more.png" alt="">
                    </h5>
                    <div>{{item.content}}</div>
                    <div class="nei">{{item.time}}</div>
                    <div class="right">
                        <img src="@/assets/img/dianzan2.png">
                        <img src="@/assets/img/huifu.png"> 
                    </div>
                </div>
            </div>
        </div>
        <div class="commentCon short">
            <h4>{{short_comments}} 条短评
                <img src="@/assets/img/top.png">
            </h4>
            <div class="con" v-for="item in shortList" :key="item.id">
                <img :src="item.avatar" alt="" class="avatar">
                <div class="conText">
                    <h5>
                        {{item.author}}
                        <img src="@/assets/img/more.png" alt="">
                    </h5>
                    <div>{{item.content}}</div>
                    <div class="nei">{{item.time}}</div>
                    <div class="right">
                        <img src="@/assets/img/dianzan2.png">
                        <img src="@/assets/img/huifu.png">
                    </div>
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
            shortList: [],
            comments:'',
            long_comments:'',
            short_comments:''
        }
    },
    methods: {
        back() {
            this.$router.replace('/Details');
        }
    },
    mounted:function(){
        this.axios.get("story/4232852/long-comments").then(res => {
            this.comList=res.data.comments;
        }),
        this.axios.get("story/4232852/short-comments").then(res => {
            this.shortList=res.data.comments;
        })
        this.axios.get("story-extra/3892357").then(res => {
            this.comments=res.data.comments;
            this.long_comments=res.data.long_comments;
            this.short_comments=res.data.short_comments;
        })
    }
}
</script>
<style>

</style>