<template>
  <div class="wrap">
    <div v-if="list.length>0">
      <div class="pic">
        <img :src="list[Number(this.$route.params.id) - 1].src" alt="" width="100%" height="100%">
      </div>
      {{list[Number(this.$route.params.id) - 1].desc}}
    </div>

    <!--{{list[Number(this.$route.params.id) - 1].desc}}-->
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        list: []
      }
    },
    methods: {
      getListData(){
        this.$http.get('../../static/news/detail.json').then(function (res) {
          this.list = res.data.data;
        }.bind(this))
      }
    },
    mounted(){
      this.getListData();
    }
  };
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .wrap {
    padding: 30px;
    line-height: 30px;
    font-size: 25px;
    .pic {
      width: 100%;
      height: 160px;
      background-color: red;
      margin-bottom: 10px;
    }
  }
</style>
