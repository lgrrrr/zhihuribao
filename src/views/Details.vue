<template>
    <div class="details">
        <div class="detailsHeader">
            <img :src="image">
            <h3>{{title}}</h3>
            <p>{{image_source}}</p>
        </div>
        <div class="detailsCon" v-html="body"></div>
        <DetailsFooter />
    </div>
</template>
<script>
import DetailsFooter from '@/components/DetailsFooter.vue'
export default {
    components:{
      DetailsFooter
    },
    data() {
        return {
            image:'',
            title:'',
            image_source:''
        }
    },
    mounted:function(){
        this.axios.get("news/3892357").then(res => {
            this.image=res.data.image;
            this.title=res.data.title;
            this.image_source=res.data.image_source;
            this.body=res.data.body;
        })
    }
}
</script>
<style>

</style>