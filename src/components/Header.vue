<template>
  <div class="wrap1">
    <ul class="ul">
      <router-link tag="li" to="/home/top" class="li" @click="alert">
        <a href="javascript">头条</a>
      </router-link>
      <router-link tag="li" to="/home/entertainment" class="li">
        <a href="javascript">娱乐</a>
      </router-link>
      <router-link tag="li" to="/home/finance" class="li">
        <a href="javascript">财经</a>
      </router-link>
      <router-link tag="li" to="/home/tech" class="li">
        <a href="javascript">科技</a>
      </router-link>
      <router-link tag="li" to="/home/shop" class="li">
        <a href="javascript">购物</a>
      </router-link>
      <router-link tag="li" to="/home/history" class="li">
        <a href="javascript">历史</a>
      </router-link>
      <router-link tag="li" to="/home/life" class="li">
        <a href="javascript">生活</a>
      </router-link>
      <router-link tag="li" to="/home/more" class="li">
        <a href="javascript">&gt;</a>
      </router-link>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    methods: {
      alert(){
        alert(1)
      }
    }
  };
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .wrap1 {
    position: relative;
    z-index: 9999;
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    .ul {
      display: flex;
      background-color: #fff;
      .li {
        flex: 1;
        text-align: center;
        &.router-link-active a {
          color: #c60023;
        }
        a {
          display: block;
        }
      }
    }
  }
</style>
