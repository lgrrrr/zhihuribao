<template>
    <div class="comment answer">
        <div class="header">
            <h3>
                <router-link :to="'/Comment'"><img src="@/assets/img/returnjiantou.png" alt=""></router-link>
                回复
                <span class="issue">发布</span>
            </h3>
        </div>
        <p class="clar"></p>
        <div class="answerCon">
            <p>友善的评论是交流的起点...</p>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            comList: []
        }
    },
    mounted:function(){
        this.axios.get("story/4232852/long-comments").then(res => {
            this.comList=res.data.comments.author;
        })
    }
}
</script>
<style>

</style>