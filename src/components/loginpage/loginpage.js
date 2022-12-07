
//  axios.defaults.baseURL='http://47.104.89.164:80/'
import { useRoute, useRouter } from 'vue-router'
//用于监听路由变化
import { ref, getCurrentInstance, onMounted } from 'vue'
import axios from 'axios';
import { ElMessage } from 'element-plus'
axios.defaults.withCredentials = true;
//axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
import { useStore } from 'vuex'
import qs from 'qs';

import { User, Key, UserFilled, GoodsFilled, Promotion, View } from '@element-plus/icons-vue'
export default {
  setup() {
    // 获取路由实例
    const route = useRoute()
    const router = useRouter();
    // WELCOME
    const account = ref("")
    const password = ref("")
    const login_flag = ref(0)
    // REGISTER
    const reUser = ref("")
    const rePassword1 = ref("")
    const rePassword2 = ref("")
    const recode = ref()
    onMounted(() => {

    })

    
    const store = useStore()
    var getname = ""
    //store
    function storedata(edata) {
      // Vuex存储
      route.params.getname = edata
      getname = "" + route.params.getname,
        store.dispatch('updatename', getname)
      console.log(edata)
      console.log(route.params.getname)
    }
    //login
    function onSubmit() {
      var subData = {
        username: account.value,
        password: password.value
      }
      var logindata = qs.stringify(subData)
      axios({
        method: 'post',
        url: "/api/admin_login/",
        data: logindata,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      })
        .then(function (res) {
          //console.log(data)
          console.log(res.data)
          if (res.data.status == 200) {
            storedata(res.data.data.username)
            ElMessage({
              showClose: true,
              message: '登录成功！',
              type: 'success',
            })
            router.push({
              path: '/a6home/waitmessage'
            })
          } else if (res.data.message == "参数不完整") {
            ElMessage({
              showClose: true,
              message: '用户名或密码不得为空',
              type: 'warning',
            })
          }
          else if (res.data.message == "用户名或者密码错误") {
            ElMessage({
              showClose: true,
              message: '用户名或者密码错误',
              type: 'error',
            })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    //register
    function A6_register() {
      var reData = {
        username: reUser.value,
        password: rePassword1.value,
        password2: rePassword2.value,
        user_code: recode.value
      }
      var testdata = qs.stringify(reData)
      axios({
        method: 'post',
        url: "/api/admin_register/",
        data: testdata,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      })
        .then(function (res) {
          console.log(res.data)
          if (res.data.status == "201") {
            ElMessage({
              showClose: true,
              message: '创建账号成功！',
              type: 'success',
            })
            login_flag.value = 0;
          }
          else if (res.data.message == "邀请码错误") {
            ElMessage({
              showClose: true,
              message: '邀请码错误！',
              type: 'error',
            })
          }
          else if (res.data.message == "用户名已存在") {
            ElMessage({
              showClose: true,
              message: '用户名已存在',
              type: 'warning',
            })
          }
        })
        .catch(function (error) {
          console.log(error);
        });

    }
    function ontest() {
      console.log("test")
      var subData = {
        username: account.value,
        password: password.value
      }

      // let transformRequest = [
      //   function (data) {
      //     let ret = ''
      //     for (let it in data) {
      //       // 防止数据为 null 时，转换成字符串 'null' 传给后端导致报错
      //       ret += encodeURIComponent(it) + '=' + (data[it] !== null ? encodeURIComponent(data[it]) : '') + '&'
      //     }
      //     ret = ret.substring(0, ret.lastIndexOf('&'))
      //     return ret
      //   }
      // ]
      const params = new FormData();
      params.append('username', 'z');
      params.append('password', '1');
      axios({
        method: 'get',
        url: '/api/admin_login/',
        data: {
          username: account.value,
          password: password.value
        },
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(function (res) {
          console.log(res)
        })
        .catch(function (error) {
          console.log(error);
        });
      //console.log("formdata",formdata)
      // router.push({
      //   path: "/a6home",
      // });
    }
    function testdelete() {
      console.log("delete")
      var datas = {
        user_id: "3"
      }
      axios({
        method: 'post',
        url: "/api/delete/" + "?/user_id" + datas.user_id,
        params: datas
      })
        .then(function (res) {
          console.log(res)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    function toRegister() {
      login_flag.value = 1;
    }

    function knowall() {
      axios({
        method: 'get',
        url: "/api/admin_get_all_user/",
      })
        .then(function (res) {
          console.log(res)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    function backLogin() {
      login_flag.value = 0;
    }
    function aboutme() {
      console.log("looklooklook")
    }
    return {
      User, Key, UserFilled, GoodsFilled, Promotion, View,
      recode, rePassword1, rePassword2, reUser,
      account, password, login_flag, getname,
      testdelete, knowall, ontest,
      onSubmit, A6_register, backLogin, toRegister,
      aboutme, storedata,
    };
  },
};