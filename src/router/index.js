import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Personal from '@/views/Personal.vue'
import Details from '@/views/Details.vue'
import Comment from '@/views/Comment.vue'
import Answer from '@/views/Answer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/Personal',
    component: Personal
  },
  {
    path: '/Details',
    component: Details
  },
  {
    path: '/Comment',
    component: Comment
  },
  {
    path: '/Answer',
    component: Answer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
