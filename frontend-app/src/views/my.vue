<template>
  <myIndexPage>
    <div class="user-card" flex="main:left cross:center">
      <van-image
        round
        fit="cover"
        width="90px"
        height="90px"
        class="user-avatar"
        :src="avatar"
      />
      <div class="user-info" flex-box="1">
        <p class="user-name">name</p>
        <p class="user-locate">address</p>
      </div>
    </div>
    <div class="user-action-list" >
      <!-- <van-cell-group> -->
      <van-cell value="我的消息" icon="chat-o" is-link />
      <van-cell value="我的学习" icon="notes-o" is-link />
      <van-cell value="我的足迹" icon="location-o" is-link />
      <!-- </van-cell-group> -->
    </div>
  </myIndexPage>
</template>

<script>
export default {
  data(){
    return {
      // avatar: require("@/assets/logo.png")
      avatar: "https://img01.yzcdn.cn/vant/cat.jpeg"
    }
  }
};
</script>

<style lang="less">
.user-card {
  height: 200px;
  padding: 1em;
  background: url('../assets/user-card-bg.svg') no-repeat ;
  background-size: cover;
  background-color: @primary-color;
  color: @white;
  text-align: left;
  .user-avatar {
    border: 2px solid @white;
    margin-right: 1em;
  }
  .user-info {
    font-size: @font-size-lg;
    line-height: 1.5;
    .user-name {
      font-size: x-large;
    }
  }
}
.user-action-list {
  padding: 1.5em;
  .van-cell{
    border-radius: @border-radius-lg;
    margin-bottom: 1.5em;
  }
}
</style>
