<template>
<div class="home_white_item">
  <img id="icon_sort" @click="chooseMessage"
   src="../../assets/image/sort.png" />
  <img id="icon_refresh" @click="reload"
  src="../../assets/image/refresh.png" />
</div>
  <div class="home_wait_item" 
  v-for="(item, index) in allMessage" 
  :key="index">
       <img v-if="item.imgflag=='image'" class="item_picture"
     :src=" 'http://120.78.147.187:80/' +item.imgpath " />
    <video v-if="item.imgflag=='video'" class="item_picture"
       :src=" 'http://120.78.147.187:80/' +item.imgpath " :poster="poster" /> 
    <img v-else-if="item.imgpath==null" class="item_picture"
       src="../../assets/image/logo4.png" /> 
    
    <div class="item_title">
      <!-- <div>标题:{{user_title}}</div> -->
      <div style="">标题:{{item.title}}</div>
      <!-- <div style="margin-top:50px;">上传者:{{user_name}}</div>-->
      <div style="margin-top: 35px">上传者:{{ item.user }}</div>
    </div>
    <div class="item_infor"></div>
    <div class="item_status">
      <div v-if="item.check==false & item.imgflag=='image'" class="item_status_button"
       @click="getOneMessage(item.id)"
      >未审核</div>
      <div v-if="item.check==false & item.imgflag=='video'" class="item_status_button"
       @click="toVideoMessage(item.id)"
      >未审核</div>
      <div v-else-if="item.check==true & item.imgflag=='image' " class="item_status_button2"
       @click="toshowArticle(item.id)">
       查看</div>
       <div v-else-if="item.check==true & item.imgflag=='video'" class="item_status_button2"
       @click="toVideoMessage(item.id)">
       查看</div>
    </div>
     <!-- <p>图片:</p> -->
  </div>
  <div class="changepage">
    <img id="icon_lastpage" @click="lastpage"
     src="../../assets/image/nextpage.png" />
  <div>当前页面:{{page}}   </div>
    <img id="icon_nextpage" @click="nextpage"
    src="../../assets/image/nextpage.png" />
  </div>
</template>

<script>
import a6allmessage from "./a6all";
export default a6allmessage;
</script>


<style src="./a6all.css">
</style>