import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.baseURL='/api'
import { ref, onMounted, onUpdated, getCurrentInstance } from 'vue'
//用getCurrentInstance来代替this
import { useRoute, useRouter } from 'vue-router'
//用于监听路由变化
import { ElMessage, ElMessageBox } from "element-plus";
import { useStore } from 'vuex'
import qs from 'qs';
export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        const store = useStore()
        // set page and size
        let getpage = ref(1)
        let getsize = ref(10)
        onMounted(() => {
            console.log("wait")
            getWait()
        })
        var reData = {
            page: getpage.value,
            size: getsize.value,
        }
        var sendData = qs.stringify(reData)
        let waitData = ref([])
        let length = 0;
        function getWait() {
            axios({
                method: "post",
                url: "/api/admin_uncheck_article/",
                data: sendData,
            })
                .then(function (res) {
                    length = res.data.len;
                    console.log(length)
                    waitData.value = res.data.data
                    console.log(res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        let flagResult = ref("未审核")

        function toOnemessage(itemid) {
            // console.log(itemid)
            router.push({
                path: '/a6home/oneArticle',
                query: { messageId: itemid }
            })
        }

        function toVideoMessage(itemid) {
            // console.log(itemid)
            console.log("it is video")
            router.push({
                path: '/a6home/oneVideo',
                query: { messageId: itemid }
            })
        }
        function nextpage() {
            if (length < 10) {
                ElMessage({
                    showClose: true,
                    message: '没有啦',
                    type: 'warning',
                })
            }
            else {
                getpage.value = getpage.value + 1;
                getWait();
            }

        }
        function lastpage() {
            if (getpage.value == 1) {
                ElMessage({
                    showClose: true,
                    message: '已经到顶了',
                    type: 'warning',
                })

            } else {
                getpage.value = getpage.value - 1;
                getWait();
            }
        }
        return {
            // judgeCheck,
            toOnemessage, nextpage, lastpage,
            flagResult, getpage,toVideoMessage,
            reData, sendData,
            getWait, waitData,
        }

    },
}

