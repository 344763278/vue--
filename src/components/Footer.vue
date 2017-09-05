<template>
  <div class="wrap">
    <ul class="ul">
      <router-link to="/home" tag="li" class="li">
        <a href="javascript:" class="glyphicon glyphicon-home"></a>
      </router-link>
      <router-link to="/news" tag="li" class="li">
        <a href="javascript:" class="glyphicon glyphicon-align-justify"></a>
      </router-link>
      <router-link to="/user" tag="li" class="li">
        <a href="javascript:" class="glyphicon glyphicon-user"></a>
      </router-link>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {};
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 30px;
    width: 100%;
    line-height: 30px;
    font-size: 18px;
    .ul {
      display: flex;
      .li {
        flex: 1;
        text-align: center;
        background-color: #fff;
        &.router-link-active a {
          color: green;
        }
        a {
          color: #000;
          display: block;
          font-size: 20px;
          line-height: 30px;

        }
      }
    }
  }

</style>
