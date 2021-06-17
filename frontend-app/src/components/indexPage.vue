<template>
  <div class="indexPage">
    <section class="page-content">
      <slot></slot>
    </section>
    <tabbarBottom />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped lang="less">
.indexPage {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  .topTabs {
    // position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
