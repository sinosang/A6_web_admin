import axios from "axios";
import { ref, onMounted, onUpdated, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessage, ElMessageBox } from "element-plus";
export default {
    setup() {
        const route = useRoute();
        // 获取路由实例
        const router = useRouter();
        let page = ref(1);
        let size = ref(10);
        onMounted(() => {
            getAllmessage();
        });
        const allMessage = ref([]);
        // 获取全部信息
        let length = 0;
        let chooseflag = ref(1);
        function getAllmessage() {
            chooseflag.value = 1;
            axios({
                method: "get",
                url:
                    "/api/admin_all_article/?page=" + page.value + "&size=" + size.value,
            })
                .then(function (res) {
                    length = res.data.len;
                    allMessage.value = res.data.data;
                    console.log("len", length)
                    console.log("allmessage", res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        //sort
        function getSortmessage() {
            chooseflag.value = 0;
            axios({
                method: "get",
                url:
                    "/api/admin_sort_article/?page=" + page.value + "&size=" + size.value,
            })
                .then(function (res) {
                    length = res.data.len;
                    allMessage.value = res.data.data;
                    console.log("len", length)
                    console.log("sortmessage", res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        function chooseMessage() {
            if (chooseflag.value == 1) {
                console.log("before is all,now sort")
                getSortmessage()
            }
            else if (chooseflag.value == 0) {
                console.log("before is sort,now all")
                getAllmessage()
            }
        }
        // 查阅单个信息
        function getOneMessage(itemid) {
            console.log("getone")
            router.push({
                path: '/a6home/oneArticle',
                query: { messageId: itemid }
            })
        }
        // 查看信息
        function toshowArticle(itemid) {
            console.log("show")
            router.push({
                path: '/a6home/showArticle',
                query: { messageId: itemid }
            })
        }
        function reload() {
            window.location.reload()
        }
        //page button
        function nextpage() {
            if (length < 10) {
                ElMessage({
                    showClose: true,
                    message: '没有啦',
                    type: 'warning',
                })
            }
            else {
                page.value = page.value + 1;
                if (chooseflag.value == 1) {
                    getAllmessage()
                }
                else if (chooseflag.value == 0) {
                    getSortmessage()
                }
            }

        }
        function lastpage() {
            if (page.value == 1) {
                ElMessage({
                    showClose: true,
                    message: '已经到顶了',
                    type: 'warning',
                })

            } else {
                page.value = page.value - 1;
                if (chooseflag.value == 1) {
                    getAllmessage()
                }
                else if (chooseflag.value == 0) {
                    getSortmessage()
                }
            }
        }
        function toVideoMessage(itemid) {
            // console.log(itemid)
            console.log("it is video")
            router.push({
                path: '/a6home/oneVideo',
                query: { messageId: itemid }
            })
        }
        return {
            allMessage, page, size, chooseMessage,
            getAllmessage, reload, getSortmessage,
            getOneMessage, toshowArticle,
            nextpage, lastpage,toVideoMessage
        };
    },
};