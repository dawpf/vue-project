<template>
  <div class="login_container">
    这是login页面
    <div style="margin-top:50px">
      <button class="btn" @click="goPage('Home')">跳转到home</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "login页面的数据"
    };
  },
  methods: {
    goPage(val) {
      this.$router.push({ name: val, query: { id: "1" } });
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: red;
  padding: 20px;
  .btn {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #000;
  }
}
</style>
