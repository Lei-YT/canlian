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
        <p class="user-name">{{ userName }}</p>
        <p class="user-locate">{{ userAddress }}</p>
      </div>
    </div>
    <div class="user-action-list">
      <van-cell value="我的消息" icon="chat-o" is-link>
        <template #icon>
          <svg-icon icon-class="msg" />
        </template>
      </van-cell>
      <van-cell value="我的学习" icon="notes-o" is-link>
        <template #icon>
          <svg-icon icon-class="learn" />
        </template>
      </van-cell>
      <van-cell value="我的足迹" icon="location-o" is-link>
        <template #icon>
          <svg-icon icon-class="locate" />
        </template>
      </van-cell>
    </div>
  </myIndexPage>
</template>

<script>
export default {
  data() {
    return {
      // avatar: require("@/assets/logo.png")
      avatar: "https://img01.yzcdn.cn/vant/cat.jpeg",
      userName: "Name",
      userAddress: "Address",
    };
  },
};
</script>

<style lang="less" scoped>
.user-card {
  height: 200px;
  padding: 1em;
  background: url("../assets/user-card-bg.svg") no-repeat;
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
  .van-cell {
    border-radius: @border-radius-lg;
    margin-bottom: 1.5em;
  }
  .svg-icon {
    width: 1em;
    height: 24px;
    line-height: 24px;
    margin-right: @padding-base;
  }
}
</style>
