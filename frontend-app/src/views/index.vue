<style scoped lang="less">
h1 {
  height: 150px;
  img {
    height: 100%;
  }
}
h2 {
  color: #666;
  margin-bottom: 200px;
  p {
    margin: 0 0 50px;
  }
}
</style>
<template>
  <indexPage>
    <h1>
      <img src="../images/logo.png" height="1200" />
    </h1>
    <p>Welcome !</p>
    <van-button :to="{ name: 'login' }" plain type="primary">Login</van-button>
  </indexPage>
</template>
<script>
export default {
  methods: {
    handleStart() {
      this.toLink("login");
    },
  },
};
</script>
