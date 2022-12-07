
import axios from "axios";
import { ref, onMounted, onUpdated, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  setup() {
    const route = useRoute();
    // 获取路由实例
    const router = useRouter();
    const store = useStore();
    onMounted(() => {
      getAlluser();
    });
    let picture=ref('');
    const alluser = ref([]);
    let pictureuse=ref('')
    function getAlluser() {
      axios({
        method: "get",
        url: "/api/admin_get_all_user/",
      })
        .then(function (res) {
          console.log(res.data.data);
          // pictureuse.value=res.data.data.user12.img12.path;
          // console.log(pictureuse)
          alluser.value = res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    function delete_user(id) {
      let getid=ref()
      getid.value=id;
      console.log(getid.value)
      // ElemessageBox
    ElMessageBox.confirm(
    '确认要删除用户？',
    'Warning',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      axios({
        method: "post",
        url: "/api/delete/?user_id="+getid.value
      })
        .then(function (res) {
        })
        .catch(function (error) {
          console.log(error);
        });
      ElMessage({
        type: 'success',
        message: '已删除用户',
      })
        sleep(2000).then(()=>{ 
        location.reload();
        })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '未删除',
      })
      sleep(2000).then(()=>{ 
        location.reload();
        })
    })

    }
    function oneuser(id){
      console.log("nowid",id);

      router.push({ 
        name: 'a6oneuser',
        query:{
          transid:id
          } 
        })
    }
const sleep = time => {
 return new Promise(resolve => setTimeout(resolve,time)
 ) } 

    return {
      alluser,oneuser,picture,pictureuse,
      getAlluser,delete_user,
    };
  },
};