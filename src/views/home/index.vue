<template>
  <div class="home_container">这是home主页面 {{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "home页面的数据"
    };
  }
};
</script>

<style lang="less" scoped>
.home_container {
  background-color: yellow;
  padding: 20px;
}
</style>
