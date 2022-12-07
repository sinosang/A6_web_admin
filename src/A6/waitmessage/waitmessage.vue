<template>
  <div class="home_white_item">123</div>

  <div class="home_wait_item" 
  v-for="(item, index) in waitData" 
  :key="index" >
    <img v-if="item.imgflag=='image'" class="item_picture"
     :src=" 'http://120.78.147.187:80/' +item.imgpath " />
    <video v-if="item.imgflag=='video'" class="item_picture"
       :src=" 'http://120.78.147.187:80/' +item.imgpath " /> 
    <img v-else-if="item.imgpath==null" class="item_picture"
       src="../../assets/image/logo5.png" /> 

    <div class="item_title">
      <div>标题:{{item.title}}</div>
      <!-- <div style="margin-top:50px;">上传者:{{user_name}}</div>-->
      <div style="margin-top: 20px">上传者:{{ item.user }}</div>
    </div>
    <div class="item_infor"></div>
    <div class="item_status">
      <div class="item_status_button"
      v-if="item.imgflag=='image'"
      @click="toOnemessage(item.id)"
      >{{flagResult}}</div>
       <div class="item_status_button"
      v-if="item.imgflag=='video'"
      @click="toVideoMessage(item.id)"
      >{{flagResult}}</div>
    </div>
  </div>
    <!-- <div class="changepage">
    <img id="icon_lastpage" @click="lastpage"
     src="../../assets/image/nextpage.png" />
  <div>当前页面:{{getpage}}   </div>
    <img id="icon_nextpage" @click="nextpage"
    src="../../assets/image/nextpage.png" />
  </div> -->
</template>

<script>
import waitmessage from "./wait";
export default waitmessage;
</script>

<style scoped src="./wait.css">
</style>