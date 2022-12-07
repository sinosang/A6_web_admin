
import qs from 'qs';
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
    let reason_text = ref('');
    onMounted(() => {
      console.log("getId", getId);
      getArticle();
    });
    let getId = route.query.messageId;
    function getArticle() {
      axios({
        method: "get",
        url: "/api/admin_article/?id=" + getId,
      })
        .then(function (res) {
          article_file.value = res.data.data.file;
          // 利用正则表达式替换/n为<br>标签
          article_file.value=article_file.value.replace('/\n/g','<br>')
          article_user.value = res.data.data.user;
          article_imgpath.value = res.data.data.imgpath;
          article_id.value = res.data.data.id;
          article_title.value = res.data.data.title;
          console.log(article_title.value)
          passresult.value = res.data.data.check;
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
          checkflag = res.data.data.check
          //  console.log(checkflag)
          console.log(res.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      if (checkflag == true) {
        ElMessage({
          showClose: true,
          message: '审核通过！',
          type: 'success',
        })
      }
      window.location.reload()
    }

    function nopassMessage() {
      console.log("nopass", article_id.value);
      var getData = {
        id: article_id.value,
        reason: reason_text.value
      }
      var senddata = qs.stringify(getData)
      let checkflag = false;
      axios({
        method: "post",
        url: "/api/put_back_article/",
        data: senddata,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      })
        .then(function (res) {
          console.log(res.data.data);
          checkflag = res.data.data.check;
          console.log(checkflag)
        })
        .catch(function (error) {
          console.log(error);
        });
      if (checkflag == false) {
        console.log("checkflag", checkflag)
        ElMessage({
          showClose: true,
          message: '驳回成功！',
          type: 'success',
        })
      }
      window.location.reload()
    }
    return {
      userId, reason_text, passresult,article_title,
      article_file, article_user, article_imgpath, article_id,
      getArticle, passMessage, nopassMessage,
    };
  },
};

