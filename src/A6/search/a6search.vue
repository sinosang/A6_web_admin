<template>

<div class="home_white_item">
</div>
  <div class="home_wait_item" 
  v-for="(item, index) in searchData" 
  :key="index">
    <img class="item_picture" :src="'http://120.78.147.187:80/'+item.img1.path" />
    <div class="item_title">
      <!-- <div>标题:{{user_title}}</div> -->
      <div>标题:{{ item.title }}</div>
      <!-- <div style="margin-top:50px;">上传者:{{user_name}}</div>-->
      <div style="margin-top: 20px">上传者id:{{ item.id }}</div>
    </div>
    <div class="item_infor"></div>
    <div class="item_status">
      <div v-if="item.check==false" class="item_status_button" @click="getOneMessage(item.id)">未审核</div>
      <div v-else-if="item.check==true" class="item_status_button2" @click="toshowArticle(item.id)">查看</div>
    </div>
     <!-- <p>图片:</p> -->
  </div>


</template>

<script>
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.baseURL='/api'
import { ref, onMounted, onUpdated, getCurrentInstance } from 'vue'
//用getCurrentInstance来代替this
import { useRoute, useRouter } from 'vue-router'
//用于监听路由变化
import { useStore } from 'vuex'
export default {
  setup() {
    const route = useRoute()
    // 获取路由实例
    const router = useRouter()
    const store = useStore()
     let getInput = ref(route.params.transInput);
     let page=ref(1);
     let size=ref(10);
     const searchData=ref([])
    onMounted(() => {
      console.log(getInput.value)
      showSearch(getInput)
    })

    function showSearch(getInput){
            axios({
                method: "get",
                url:
              "/api/admin_search//?page=" + page.value + "&size=" + size.value+"&search="+getInput.value,
            })
                .then(function (res) {     
                  console.log(res)
                  searchData.value=res.data.data            
                  console.log(res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
    function toshowArticle(itemid) {
            console.log("show")
            router.push({
                path: '/a6home/showArticle',
                query: { messageId: itemid }
            })
        }
        function getOneMessage(itemid) {
            console.log("getone")
            router.push({
                path: '/a6home/oneArticle',
                query: { messageId: itemid }
            })
        }
    return {
      searchData,getOneMessage,
      showSearch,
      toshowArticle,
      getInput,page,size,
    }

  },
}


</script>

<style scoped>
 .home_white_item{
  position:relative;
     color:transparent;
     width:100%;
     height:30px;
 }
 .home_white_item div:hover{
  transition:0.5s;
  background-color:#9fa77e;
 }
 .item_picture{
    width:150px;
    height:100%;
    border-radius:15px;
 }
 .item_title{
     width:250px;
     font-size:20px;
     display:flex;
     padding-left:15px;
     padding-top:15px;
     flex-direction:column;
 }
 .item_infor{
     width:500px;
     position:relative;
     left:15px;
     top:15px;
 }
 .item_status{
     width:200px;
 }
 .item_status_button{
     position:relative;
     text-align:center;
     width:80%;
     margin:0 auto;
     left:0px;
     height:50px;
     border-radius:15px;
     color:white;
     line-height:50px;
     font-size:23px;
     font-weight:bold;
     letter-spacing:5px;
     top:25%;
     transition: 0.5s;
     background-color:#f4cac3;
 }
 .item_status_button:hover{
     /* transform: scale(1.1); */
     cursor:pointer;
     background-color:#dd8f8d;
     transition: 0.5s;
 }
  /* 未审核 */
 .item_status_button2{
     position:relative;
     text-align:center;
     width:80%;
     margin:0 auto;
     left:0px;
     height:50px;
     border-radius:15px;
     color:white;
     line-height:50px;
     font-size:23px;
     font-weight:bold;
     letter-spacing:5px;
     top:25%;
     transition: 0.5s;
     background-color:#c3d696;
 }
 .item_status_button2:hover{
    cursor:pointer;
    transition: 0.5s;
     background-color:#9fa77e;
 }
 

 
</style>