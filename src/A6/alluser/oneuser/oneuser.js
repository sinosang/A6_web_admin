
import axios from "axios";
import { ref, onMounted, onUpdated,onBeforeUpdate,onBeforeMount,nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessage, ElMessageBox, getPositionDataWithUnit } from "element-plus";
export default {
    setup() {
        const route = useRoute();
        // 获取路由实例
        const router = useRouter();
        const store = useStore();
        let userid = ref(route.query.transid);
        onBeforeUpdate(() => {
            // console.log("beforeUpdated"); 
        });
        onUpdated(() => {
            // console.log("onUpdated");
        });
        onMounted(() => {
            // console.log("onMounted")
            showUser(userid.value)      
        });
        onBeforeMount(() => {
            console.log("onBeforeMount")
            console.log("transid", userid.value);
            // 实行方法必须要在onmounted里面了
      
        });
        nextTick(() => {
            // console.log("nextTick");
          
        });
        function delete_user(id) {
            let flag = 0;
            let getid = ref();
            getid.value = id;
            // ElemessageBox
            ElMessageBox.confirm("确认要删除用户？", "Warning", {
                confirmButtonText: "确认",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    axios({
                        method: "post",
                        url: "/api/delete/?user_id=" + getid.value,
                    })
                        .then(function (res) {
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    ElMessage({
                        type: "success",
                        message: "已删除用户",
                    });
                    flag = 1;
                    sleep(2000).then(() => {
                        location.reload();
                    });
                })
                .catch(() => {
                    if (flag == 1) {

                    } else {
                        ElMessage({
                            type: "info",
                            message: "未删除",
                        });
                    }

                });
        }

        let user_pic = ref();
        let user_name = ref();
        let user_password = ref();
        let user_telephone = ref();

        // 获取article,为object，json格式
        let user_article = "";
        // 将article改变格式，json to string
        let changearticle = [];
        // 获取每个article的内容
        let user_article_data = ref([]);

        function showUser(id) {
            console.log("触发showuser")
            axios({
                method: "get",
                url: "/api/admin_get_one_user/?id=" + id,
            })
                .then(function (res) {
                    console.log("showuser",res.data.data)
                    user_pic.value = res.data.data.imgpath;
                    user_name.value = res.data.data.username;
                    user_password.value = res.data.data.password;
                    user_telephone.value = res.data.data.telephone;
                    user_article = res.data.data.article;
                    // 转Object为数组，并且获取其中数值
                    changearticle = Object.values(user_article)
                    console.log("获得changearticle",changearticle)
                    getArticle(id)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        function getArticle(id) {
            console.log("触发getarticle,获得每个文章数据", changearticle)
            axios({
                method: "get",
                url: "/api/get_oneuser_article/?id=" + id,
            })
                .then(function (res) {    
                user_article_data.value=res.data.data ;           
                console.log(user_article_data.value)           
                })
                .catch(function (error) {
                    console.log(error);
                });

        }

        // function articleData(id) {
        //     console.log("触发articledata,更新每个文章数据并渲染")
        //     axios({
        //         method: "get",
        //         url: "/api/admin_article/?id=" + id,
        //     })
        //         .then(function (res) {
        //               console.log(res.data.data)
        //             let tempdata = []
        //             tempdata = res.data.data
        //             user_article_data.push(tempdata)
        //         })
        //         .catch(function (error) {
        //         });
        // }
        // function getarticledata() {
        //     console.log("userdata", user_article_data)
        // }
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
        function toVideoMessage(itemid) {
            // console.log(itemid)
            console.log("it is video")
            router.push({
                path: '/a6home/oneVideo',
                query: { messageId: itemid }
            })
        }

        return {
            user_pic, user_article, user_article_data,
            userid, user_name, user_password, user_telephone,
            showUser,getArticle,toVideoMessage,
            delete_user,getOneMessage,toshowArticle
        };
    },
};

