
<template>
  <div class="login_page">
    <div class="login">
      <div class="login_left">
        <h1 style="color:transparent">村知道</h1>
        <img style="width:300px;height:200px;top:20px;" src="../../assets/image/logo2.png" />
        <div class="login_left_seTitle">
        
          <p id="seT1">
            一款乡村特色文化产品宣传与</p>
          <p id="seT2">农林,普法知识学习的app.</p>
        </div>
      </div>
      <!-- login -->
      <div class="login_right" v-show="login_flag == 0">
        <div class="login_title">Login</div>
        <div class="login_setitle">登录</div>
        <form class="login_form" style="top:20px">
          <!-- account -->
          <div class="login_input">
            <div class="login_input_title">账号:</div>
            <div class="login_input_input">
              <el-input
                class="input_type"
                v-model="account"
                type="text"
                placeholder="请输入账号"
                clearable
               
              />
            </div>
          </div>
          <!-- password -->
          <div class="login_input">
            <div class="login_input_title">密码:</div>
            <div class="login_input_input">
              <el-input
                class="input_type"
                v-model="password"
                type="text"
                placeholder="请输入密码"
                clearable
                show-password
               
              />
            </div>
          </div>
          <!-- 废弃 -->
          <!-- <div class="login_input">
            <div class="login_input_title">test:</div>
            <input class="inputtest" type="text" name="testname"
             v-model="account"
                placeholder="请输入账号/id"
                clearable autocomplete="off">
          </div> -->
          <!-- <el-button @click="knowall">knowall</el-button>
        <el-button @click="ontest">test</el-button>
        <el-button @click="testdelete">test_delete</el-button>
      -->
          <div class="login_right_bottom">
            <div
              @click="onSubmit"
              id="login_right_button_lgsubmit"
              class="login_right_button"
            >
              登录
            </div>
            <div
              @click="toRegister"
              id="login_right_button_lgregister"
              class="login_right_button"
            >
              注册
            </div>
          </div>
          <div class="login_right_role">
            *需要以管理员身份登录
          </div>
          <div class="login_right_about">
            <el-link :icon="Promotion" type="info" @click="aboutme">
              关于我们</el-link>
          </div>

          <div class="login_right_forget">
            <el-link :icon="View" type="primary">忘记密码?</el-link>
          </div>
        </form>
      </div>
      <!-- register -->
      <div class="login_right" v-show="login_flag == 1">
        <div class="login_title">Register</div>
        <div class="login_setitle">注册</div>
        <form class="login_form">
          <!-- usercode -->
          <div class="login_input">
            <div class="login_input_title">邀请码:</div>
            <div class="login_input_input">
              <el-input
                class="input_type"
                v-model="recode"
                type="text"
                placeholder="请输入邀请码"
                clearable
              />
            </div>
          </div>
          <!-- account -->
          <div class="login_input">
            <div class="login_input_title">账号:</div>
            <div class="login_input_input">
              <el-input
                class="input_type"
                v-model="reUser"
                type="text"
                placeholder="请输入账号/id"
                clearable
              />
            </div>
          </div>
          <!-- password -->
          <div class="login_input">
            <div class="login_input_title">密码:</div>
            <div class="login_input_input">
              <el-input
                class="input_type"
                v-model="rePassword1"
                type="text"
                placeholder="请输入密码"
                clearable
                show-password
              />
            </div>
          </div>
          <!-- password2 -->
          <div class="login_input">
            <div class="login_input_title">确认密码:</div>
            <div class="login_input_input">
              <el-input
                class="input_type"
                v-model="rePassword2"
                type="text"
                placeholder="请输入密码"
                clearable
                show-password
              />
            </div>
          </div>
          <div class="login_right_bottom">
            <div
              @click="backLogin"
              id="login_right_button_reback"
              class="login_right_button"
            >
              返回
            </div>
            <div
              @click="A6_register"
              id="login_right_button_register"
              class="login_right_button"
            >
              注册账号
            </div>
          </div>
        </form>
      </div>
 
    </div>


  </div>
</template>


<script>
import loginpage from "./loginpage";
export default loginpage;
</script>

<style scope src="./loginpage.css">
</style>



