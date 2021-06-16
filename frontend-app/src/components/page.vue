<template>
  <yd-layout>
    <yd-navbar :title="title" slot="navbar">
      <yd-navbar-back-icon slot="left" @click.native="back" />
    </yd-navbar>
    <slot></slot>
  </yd-layout>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
</style>
