<template>
<div class="article_body">
<div class="body_left">
  <div v-if="passresult==true" id="passresult">已通过</div>
  <div v-else-if="passresult==false" id="passresult">未通过</div>
  <h1>{{article_title}}</h1>

  <div class="head_line">1</div>
  <div class="head_bottom">投稿人:{{article_user}}</div>
  <img :src="'http://120.78.147.187:80/'+article_imgpath " />
   <div class="left_main" >{{article_file}}</div>
  </div>
<div class="body_right">
  <h2>审核意见：</h2>
    <el-input
    class="right_input"
    v-model="reason_text"
    :autosize="{ minRows: 11, maxRows: 11 }"
    type="textarea"
    resize="none"
    :maxlength="500"
    placeholder="输入审核意见"
  />
</div>
<div class="pass_button" @click="passMessage">通过</div>
<div class="nopass_button" @click="nopassMessage">不通过</div>
</div>
</template>

<script>
import oneMessage from "./oneArticle";
export default oneMessage;
</script>

<style scoped>
.article_body{
  position:relative;
  height:85vh;
  display:flex;
}
.body_left{
  position:relative;
  top:5px;
  left:3%;
  width:50%;
  height:80vh;
  background-color:white;
  box-shadow:0.5px 0.5px 2px 1px #F5F5F5;
  overflow:auto;
}
.body_left h1{
  color:#87858C;
  text-align:center;
}
.body_left img{
  position:relative;
  width:40%;
  height:150px;
  top:25px;
  left:30%;
}
.head_line{
  background-color:#707070;
  width:90%;
  margin:0 auto;
  margin-top:-10px;
  height:1.5px;
  color:transparent;
}
.head_bottom{
  position:relative;
  top:5px;
 font-size:25px;
  text-align:center;
  color:#87858C;
}
.left_main{
  text-indent:2em;
  width:96%;
  margin:0 auto;
  position:relative;
  top:35px;
  white-space: pre-line;
}
.body_right{
  position:fixed;
  right:3%;
  width:30%;
  height:45vh;
  background-color:#FFFFFF;
}
.body_right h2{
 margin-left:15px;
 color:#87858C;
 
}
.right_input{
  margin-left:5%;
  width:90%;
}
.pass_button{
  font-size:25px;
  line-height:50px;
  letter-spacing:10px;
  padding-left:25px;
  width:90px;
  height:50px;
  background-color:#C3D696;
  position:fixed;
  top:65%;
  right:22%;
  color:white;
  border-radius:15px;
  cursor:pointer;
}
.nopass_button{
  font-size:25px;
  line-height:50px;
  width:120px;
  text-align:center;
  height:50px;
  background-color:#F5CAC3;
  position:fixed;
  top:65%;
  right:6%;
  color:white;
  border-radius:15px;
  cursor:pointer;
}

#passresult{
    z-index:100;
    position:absolute;
    right:15px;
    top:15px; 
    width:70px;
    height:30px;
    text-align:center;
    line-height:30px;
    color:white;
    border-radius:15px;
    background-color:#c0c4b8;
  }
</style>