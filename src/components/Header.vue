<template>
    <div class="indexHeader">
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
</template>
<script>
export default {
    data() {
        return {
            //时间
            time:Date.parse(new Date()),
            //问候语
            grt:"hello",
            ho:new Date().getHours()
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
    }
}
</script>
<style scoped>
.indexHeader{padding: 0.5rem 0;overflow: auto;}
.indexHeader h4{width: 15%;text-align: center;font-size: 1.2rem;}
.indexHeader h4,.indexHeader h1{float: left;}
.indexHeader h4 span{display: block;font-size: 0.8rem;font-weight: 600;}
.indexHeader h1{width: 80%;padding-left: 2.5%;border-left: 1px solid #eeeeee;font-size: 1.4rem;font-weight: 500;}
.indexHeader h1 img{width: 2.2rem;float: right;}
</style>