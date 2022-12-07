<template>
  <div class="user_information">
    <div class="information_head">
      <div class="infor">基本信息</div>
      <div class="delete" @click="delete_user(userid)">删除用户</div>
    </div>
    <div class="information_content">
      <!-- image -->
      <div class="user_image">
        <img
          v-if="user_pic != null"
          :src="'http://120.78.147.187:80/' + user_pic"
        />
        <img
          v-else-if="user_pic == null"
          src="../../../assets/image/logo1.png"
        />
      </div>
      <!-- main -->
      <div class="user_main">
        <div>用户id:{{ userid }}</div>
        <div>用户名称:{{ user_name }}</div>
        <div>用户密码:{{ user_password }}</div>
        <div>用户注册的手机号：{{ user_telephone }}</div>
      </div>
    </div>
  </div>
  <div
    v-for="(item, index) in user_article_data"
    :key="index"
    class="user_upload"
  >
    <div>
      <img v-if="item.imgflag=='image'" :src="'http://120.78.147.187:80/' + item.imgpath" />
       <video v-else-if="item.imgflag=='video'" :src="'http://120.78.147.187:80/' + item.imgpath" />
    </div>
    <div class="user_upload_title">{{ item.title }}</div>
    <div
      v-if="item.check == false&item.imgflag=='image'"
      class="user_upload_button"
      @click="getOneMessage(item.id)"
    >
      未审核
    </div>
    <div
      v-else-if="item.check == true&item.imgflag=='image'"
      class="user_upload_button2"
      @click="toshowArticle(item.id)"
    >
      查看
    </div>
       <div
      v-if="item.check == false&item.imgflag=='video'"
      class="user_upload_button"
      @click="toVideoMessage(item.id)"
    >
      未审核
    </div>
    <div
      v-else-if="item.check == true&item.imgflag=='video'"
      class="user_upload_button2"
      @click="toVideoMessage(item.id)"
    >
      查看
    </div>
  </div>
</template>

<script>
import oneuser from "./oneuser";
export default oneuser;
</script>

<style scoped src="./oneuser.css">
</style>