<template>
  <div class="page">
    <van-nav-bar :title="title" left-arrow :fixed="true" @click-left="back" />
    <section class="page-content">
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less">
.page-content {
  margin-top: @nav-bar-height;
}
</style>
