<template>
  <div class="wrap">
    <div class="tit">
      <div class="tit-img">
        <img
          src="https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D220/sign=5bd26efed0f9d72a0864171fe42b282a/d4628535e5dde711d1714937aeefce1b9c16614b.jpg"
          alt="" width="100" height="100">
      </div>
      <div class="name">
        <h4>存在</h4>
        <span class="weixin">微信号:445566778899</span>
        <div class="pic">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504611364519&di=9d6b09aad7414cc1aff505e2bbe91dc7&imgtype=0&src=http%3A%2F%2Fpic1.fangketong.net%2Fapp_attach%2F201508%2F07%2F20150807_110_22589_1.png"
            alt="" width="50" height="30">
        </div>
      </div>
    </div>
    <div class="money">
      <span class="glyphicon glyphicon-jpy"></span>
      &nbsp;&nbsp;
      钱包
    </div>
    <ul class="other">
      <li class="money">
        <span class="glyphicon glyphicon-heart-empty"></span>
        &nbsp;&nbsp;
        收藏
      </li>
      <li class="money">
        <span class="glyphicon glyphicon-floppy-disk"></span>
        &nbsp;&nbsp;
        相册
      </li>
      <li class="money">
        <span class="glyphicon glyphicon-briefcase"></span>
        &nbsp;&nbsp;
        卡包
      </li>
      <li class="money">
        <span class="glyphicon glyphicon-dashboard"></span>
        &nbsp;&nbsp;
        表情
      </li>
    </ul>
    <div class="setting money">
      <span class="glyphicon glyphicon-cog"></span>
      &nbsp;&nbsp;
      设置
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {};
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .wrap {
    position: relative;
    top: 0;
    .tit {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 10px 20px;
      background-color: #fff;
      .tit-img {
        height: 100px;
        flex: 0 0 100px;
        margin-right: 20px;
      }
      .name {
        flex: 1;
        h4 {
          line-height: 50px;
          font-size: 20px;
        }
        .weixin {
          line-height: 50px;
          font-size: 16px;
        }
        .pic {
          position: absolute;
          top: 35px;
          right: 20px;
        }
      }
    }
    .money {
      padding: 10px 20px;
      background-color: #fff;
      margin-top: 20px;
      font-size: 20px;
    }
    .other {
      margin-top: 20px;
      .money {
        margin: 0 0 5px 0;
      }
    }
  }
</style>
