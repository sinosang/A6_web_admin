<template>
  <div class="admin_infor">
    <div class="infor_head">
      <div class="head_title">基本信息</div>
      <div class="head_edit">123</div>
    </div>
    <div class="infor_content">
      <img src="../../assets/image/girl.jpg" />
      <div class="content_main">
        <div>Admin</div>
        <div>ID:114514</div>
        <div>注册日期:2022-11-25</div>
      </div>
    </div>
  </div>
  <div class="admin_about">
    <div class="infor_head">
      <div class="head_title">关于账号</div>
      <div class="head_edit">123</div>
    </div>
    <div class="infor_content">
      <div style="width: 120px"></div>
      <div class="content_main">
        <div>邀请码:123456</div>
        <div>手机:16598364863</div>
        <div>邮箱:1253287928@qq.com</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.admin_infor {
  background-color: white;
  width: 90%;
  height: 300px;
  margin: 0 auto;
  border-radius: 60px;
}
.infor_head {
  display: flex;
  margin: 0 auto;
  width: 94%;
  height: 65px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent transparent #707070 transparent;
  border-bottom-color: rgb(125, 123, 123, 0.41);
}
.head_title {
  cursor: default;
  position: relative;
  font-size: 28px;
  top: 25px;
  left: 25px;
  color: #87858c;
}
.head_edit {
  cursor: pointer;
  position: relative;
  left: 85%;
  top: 35px;
  color: transparent;
  width: 30px;
  height: 30px;
  background: url("../../assets/image/edit.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.infor_content {
  display: flex;
}
.infor_content img {
  position: relative;
  top: 25px;
  left: 55px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.content_main div {
  position: relative;
  left: 120px;
  margin-top: 23px;
  height: 50px;
  font-size: 30px;
  color: #87858c;
}
.admin_about {
  position: relative;
  background-color: white;
  width: 90%;
  height: 300px;
  margin: 0 auto;
  margin-top: 35px;
  border-radius: 60px;
}
</style>