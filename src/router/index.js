// skl-blog/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import loginpage from '../components/loginpage/loginpage.vue'
import a6home from '../A6/a6home/a6home.vue'
import waitmessage from '../A6/waitmessage/waitmessage.vue'
import a6search from '../A6/search/a6search.vue'
import a6allmessage from '../A6/allmessage/a6all.vue'
import a6alluser from '../A6/alluser/alluser.vue'
import a6oneuser from '../A6/alluser/oneuser/oneuser.vue'
import a6admin from '../A6/admin/admin.vue'
import oneArticle from '../A6/oneMessage/oneArticle.vue'
import showArticle from '../A6/oneMessage/showArticle.vue'
import oneVideo from '../A6/oneMessage/oneVideo.vue'

const routes = [
  {
    path: '/',
    name: 'loginpage',
    component: loginpage,
  },
  // A6home
  {
    path: '/a6home',
    name: 'a6home',
    component: a6home,
    children:[
      {
        path: 'waitmessage',
        name: 'waitmessage',
        component: waitmessage,
      }, 
      {
        path: 'a6allmessage',
        name: 'a6allmessage',
        component: a6allmessage,
      },
      {
        path: 'oneArticle',
        name: 'oneArticle',
        component:oneArticle,
      }, 
      {
        path: 'oneVideo',
        name: 'oneVideo',
        component:oneVideo,
      }, 
      {
        path: 'showArticle',
        name: 'showArticle',
        component:showArticle,
      }, 
      {
        path: 'a6search',
        name: 'a6search',
        component:a6search,
      }, 
      {
        path: 'a6admin',
        name: 'a6admin',
        component: a6admin,
      }, 
      {
        path: 'a6alluser',
        name: 'a6alluser',
        component:a6alluser,
        children:[{
          path: 'a6oneuser',
        name: 'a6oneuser',
        component:a6oneuser,
        }]
      }, 
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;