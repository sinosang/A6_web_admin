
<template>
 <!-- <img :src='pictureuse' /> -->
<div style="display:flex">
<div class="alluser_body">
  <div v-for="(item, index) in alluser" :key="index">
    <div @click="oneuser(item.id)" class="alluser_item">
      <div class="item_content">
        <!-- <img src="../../assets/image/logo4.png" /> -->
        <img v-if="item.imgpath!=null" :src="'http://120.78.147.187:80/' +item.imgpath" />
         <img v-else-if="item.imgpath==null" src="../../assets/image/logo4.png" /> 
        <div>{{ item.username }}</div>
        <!-- <div>用户密码:{{ item.password }}</div>
        <div>用户注册的手机号:{{ item.telephone}}</div>
         -->
      </div>
    </div>
  </div>
  </div>
  <div class="oneuser_body">
      <router-view :key="$route.fullPath"></router-view>
    </div>
</div>
</template>

<script>
import alluser from "./alluser";
export default alluser;
</script>



<style scoped src="./alluser.css">
</style>