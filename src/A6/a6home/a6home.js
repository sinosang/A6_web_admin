import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
import { ref, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Search, Pointer } from '@element-plus/icons-vue'
import wait from '../../assets/image/wait.png'
import message from '../../assets/image/message.png'
import alluser from '../../assets/image/alluser.png'
import admin from '../../assets/image/admin.png'
import exit from '../../assets/image/exit.png'
export default {
  setup() {

    var admin_name = ref('')
    const route = useRoute()
    // 获取路由实例
    const router = useRouter()
    const store = useStore()
    const getname = ref("")
    onMounted(() => {
    })

    function datashow() {
      getname.value = "" + store.state.name
      admin_name.value = getname.value
    }
    // 选择子页面
    let Tabdata = [
      { tab: "待审核信息", pic: wait },
      { tab: "全部信息", pic: message },
      { tab: "全部用户", pic: alluser },
      { tab: "个人信息", pic: admin },
      { tab: "退出登录", pic: exit }]
    let currentTab = ref(0);
    function chooseTab(index) {
      // console.log(index);
      if (index == 0) {
        // 待审核信息
        currentTab.value = index;
        // console.log(currentTab)
        router.push({ path: '/a6home/waitmessage' })
      }
      else if (index == 1) {
        // 全部信息
        currentTab.value = index;
        router.push({ path: '/a6home/a6allmessage' })
      }
      else if (index == 2) {
        // 全部用户
        currentTab.value = index;
        router.push({ path: '/a6home/a6alluser' })
      }
      else if (index == 3) {
        // 个人信息
        currentTab.value = index;
        router.push({ path: '/a6home/a6admin' })
      }
      else {
        currentTab.value = index;
        router.push({ path: '/' })
      }
    }
    // 进入搜索页面
    function searchMessage(searchInput) {
      // searchpage
      router.push({
        name: 'a6search',
        params: {
          transInput: searchInput
        }
      })
    }
    function goback() {
      router.go(-1)
    }
    return {
      Search, Pointer, goback,
      Tabdata, currentTab,
      admin_name, getname,
      datashow, chooseTab,
      searchMessage,
    }

  },
}

