<template>
  <div class="show_body">
    <div class="edit_button" @click="tooneArticle">修改</div>
    <h1>{{ article_title }}</h1>
    <div class="head_line">1</div>
    <div class="head_bottom">投稿人:{{ article_user }}</div>
    <img :src="'http://120.78.147.187:80/' + article_imgpath" />
    <div class="show_main">{{ article_file }}</div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, onUpdated, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    let userId = route.query.userId;
    let article_file = ref();
    let article_user = ref();
    let article_imgpath = ref();
    let article_title = ref();
    let article_id = ref();
    onMounted(() => {
      console.log("showId", showId);
      getArticle();
    });
    let showId = route.query.messageId;
    function getArticle() {
      axios({
        method: "get",
        url: "/api/admin_article/?id=" + showId,
      })
        .then(function (res) {
          article_file.value = res.data.data.file;
          // 利用正则表达式替换/n为<br>标签
          article_file.value = article_file.value.replace("/\n/g", "<br>");
          article_user.value = res.data.data.user;
          article_imgpath.value = res.data.data.imgpath;
          article_id.value = res.data.data.id;
          article_title.value = res.data.data.title;
          console.log(res.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    function tooneArticle() {
      router.push({
        path: "/a6home/oneArticle",
        query: { messageId: showId },
      });
    }
    return {
      userId,
      article_title,
      article_file,
      article_user,
      article_imgpath,
      article_id,
      getArticle,
      tooneArticle,
    };
  },
};
</script>

<style scoped>
.show_body {
  position: relative;
  height: 85vh;
  position: relative;
  top: 5px;
  left: 3%;
  width: 94%;
  height: 85vh;
  background-color: white;
  box-shadow: 0.5px 0.5px 2px 1px #f5f5f5;
  overflow: auto;
}
.show_body h1 {
  color: #87858c;
  text-align: center;
}
.show_body img {
  position: relative;
  width: 36%;
  height: 250px;
  top: 25px;
  left: 32%;
}
.head_line {
  background-color: #707070;
  width: 90%;
  margin: 0 auto;
  margin-top: -10px;
  height: 1.5px;
  color: transparent;
}
.head_bottom {
  position: relative;
  top: 5px;
  font-size: 25px;
  text-align: center;
  color: #87858c;
}
.show_main {
  text-indent: 2em;
  width: 96%;
  margin: 0 auto;
  position: relative;
  top: 35px;
  white-space: pre-line;
}
.edit_button{
    z-index:100;
    position:absolute;
    right:20px;
    top:20px; 
    width:80px;
    height:40px;
    font-size:23px;
    text-align:center;
    line-height:40px;
    color:white;
    border-radius:15px;
    background-color:#C3D696;
    cursor:pointer;
}
</style>