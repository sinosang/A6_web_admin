<template>
  <!-- head -->
  <div class="home_header">
    <div>
      <img class="home_header_logo" @click="goback" src="../../assets/image/back.png" />
    </div>
    <div class="home_head_input">
      <input
        v-model="item_search"
        type="text"
        placeholder="请输入搜索的内容"
      />
      <div @click="searchMessage(item_search)">
        搜索
        </div>

    </div>

    <div class="home_header_admin">身份:admin</div>
  </div>

  <div class="home_main">
    <!-- left -->
    <div class="left_all">
      <img id="title_logo" src="../../assets/image/logo2.png" />
     <!-- <img id="title_logo" :src='picture' />  -->
      <div
        v-for="(item, index) in Tabdata"
        :key="index"
        @click="chooseTab(index)"
        :class="index == currentTab ? 'tab1' : 'tab2'"
      >
        <img class="tab_icon" :src="item.pic"  />
        {{ item.tab }}
      </div>
    </div>

    <!-- right -->
    <div class="right_all">
      <div class="tab"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import a6home from "./a6home";
export default a6home;
</script>

<style scoped src="../a6home/a6home.css">
</style>