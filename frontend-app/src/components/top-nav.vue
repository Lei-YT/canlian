<template>
  <yd-navbar :title="title" :fixed="true" >
    <yd-navbar-back-icon slot="left" @click.native="back" v-if="backicon" />
  </yd-navbar>
</template>

<script>
export default {
  props: ['title', 'backicon']
};
</script>
