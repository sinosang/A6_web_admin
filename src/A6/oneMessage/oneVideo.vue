<template>
  <div class="videoShow">
    <video
      :autoplay="playStatus"
      ref="videoPlayer"
      :options="playerOptions"
      controls
      :src="getvideo"
    ></video>
  </div>
  <div class="videoBottom">
    <div class="videoTitle">{{ article_title }}</div>
    <div class="videoUser">上传者:{{ article_user }}</div>
    <div class="videoFile">简介:{{ article_file }}</div>
    <div v-if="passresult==true" class="videoResulut">已通过</div>
  <div v-else-if="passresult==false" class="videoResulut">未通过</div>
  </div>
  <div style="display:flex;margin-bottom:55px;">
 <div class="pass_button" @click="passMessage">通过</div>
<div class="nopass_button" @click="nopassMessage">不通过</div>
  </div>
</template>

<script>
import qs from "qs";
import axios from "axios";
import { ref, onMounted, onUpdated, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessage, ElMessageBox } from "element-plus";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    let userId = route.query.userId;
    let article_file = ref();
    let article_user = ref();
    let article_imgpath = ref();
    let article_id = ref();
    let article_title = ref();
    let passresult = ref();
    let reason_text = ref("");
    onMounted(() => {
      console.log("getId", getId);
      getArticle();
    });
    let getvideo = ref();
    let getId = route.query.messageId;
    function getArticle() {
      axios({
        method: "get",
        url: "/api/admin_article/?id=" + getId,
      })
        .then(function (res) {
          article_file.value = res.data.data.file;
          // 利用正则表达式替换/n为<br>标签
          article_file.value = article_file.value.replace("/\n/g", "<br>");
          article_user.value = res.data.data.user;
          article_imgpath.value = res.data.data.imgpath;
          article_id.value = res.data.data.id;
          article_title.value = res.data.data.title;

          passresult.value = res.data.data.check;
          getvideo.value = "http://120.78.147.187:80/" + article_imgpath.value;
          console.log(getvideo.value);
          console.log(res.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    function passMessage() {
      let id = article_id.value;
      let checkflag = true;
      axios({
        method: "get",
        url: "/api/admin_pass_article/?id=" + id,
      })
        .then(function (res) {
          checkflag = res.data.data.check;
          //  console.log(checkflag)
          console.log(res.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      if (checkflag == true) {
        ElMessage({
          showClose: true,
          message: "审核通过！",
          type: "success",
        });
      }
      window.location.reload();
    }

    function nopassMessage() {
      console.log("nopass", article_id.value);
      var getData = {
        id: article_id.value,
        reason: reason_text.value,
      };
      var senddata = qs.stringify(getData);
      let checkflag = false;
      axios({
        method: "post",
        url: "/api/put_back_article/",
        data: senddata,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(function (res) {
          console.log(res.data.data);
          checkflag = res.data.data.check;
          console.log(checkflag);
        })
        .catch(function (error) {
          console.log(error);
        });
      if (checkflag == false) {
        console.log("checkflag", checkflag);
        ElMessage({
          showClose: true,
          message: "驳回成功！",
          type: "success",
        });
      }
      window.location.reload();
    }
    return {
      userId,
      reason_text,
      passresult,
      article_title,
      article_file,
      article_user,
      article_imgpath,
      article_id,
      getArticle,
      getvideo,
      passMessage,
      nopassMessage,
    };
  },
};
</script>

<style scoped>
.videoShow {
  background-color: black;
  position: relative;
  top: 15px;
  margin: 0 auto;
  width: 86%;
  height: 500px;
}
.videoShow video {
  width: 100%;
  height: 100%;
}
.videoBottom {
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 30px;
  width: 86%;
  background-color: white;
  height: 350px;
}
.videoTitle {
  position:relative;
  padding-top:15px;
  color: #87858c;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.videoUser{
    position:absolute;
    color:gray;
    left:50px;
    top:80px;
}

.videoResulut{
    z-index:100;
    position:absolute;
    right:15px;
    top:80px; 
    width:70px;
    height:30px;
    text-align:center;
    line-height:30px;
    color:white;
    border-radius:15px;
    background-color:#c0c4b8;
  }
.videoFile{
  text-indent:2em;
  width:80%;
  position:relative;
  top:105px;
  left:10%;
  white-space: pre-line;
  height:100px; 
  overflow: auto;
  }
  .pass_button{
  font-size:25px;
  line-height:50px;
  letter-spacing:10px;
  padding-left:25px;
  position:relative;
  top:0px;
  width:90px;
  height:50px;
  left:30%;
  background-color:#C3D696;
  color:white;
  border-radius:15px;
  cursor:pointer;
}
.nopass_button{
  background-color:#F5CAC3;
   font-size:25px;
  line-height:50px;
  letter-spacing:2px;
  padding-left:25px;
  position:relative;
  top:0px;
  width:100px;
  height:50px;
  left:60%;
  color:white;
  border-radius:15px;
  cursor:pointer; 
  position:relative;
 
}
</style>