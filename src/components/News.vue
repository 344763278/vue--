<template>
  <div class="wrap newsWraper">
    <div class="contents">
      <div class="ad">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504601938579&di=e747b9ac8b77007daa64f0c7bf58eb2a&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fa1%2F107%2Fd%2F280.jpg"
          alt="ad" width="100%" height="250">
      </div>
      <ul class="items">
        <router-link tag="li" :to="'/news/detail/'+item.id" v-for="(item,index) in list" :key="index" class="item">
          <div class="img">
            <img
              :src="item.img"
              alt="" width="100" height="100">
          </div>
          <div class="desc">
            <h3>{{item.desc}}</h3>
            <span>{{item.type}}</span>
            <em>{{item.add}}{{item.id }}</em>
          </div>
        </router-link>
      </ul>
    </div>
    <!--<router-view class="detail"></router-view>-->
  </div>
</template>
<script type="text/ecmascript-6">
  import Bscroll from 'better-scroll'
  export default {
    data() {
      return {
        list: []
      }
    },
    methods: {
      loadListdata() {
        this.$http.get('../../static/news/data.json').then((res) => {
          this.list = res.data.data;
          this.$nextTick(function () {
            let scroll = new Bscroll('.newsWraper', {
              click: true
            })
          })
        })
      }
    },
    mounted() {
      this.loadListdata();
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .newsWraper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .contents {
    width: 100%;
    .ad {
      width: 100%;
      height: 250px;
      margin-bottom: 20px;
    }
    .items {
      .item {
        display: flex;
        margin-bottom: 15px;
        .img {
          flex: 0 0 80px;
          width: 100px;
          height: 100px;
        }
        .desc {
          position: relative;
          flex: 1;
          background-color: #eee;
          h3 {
            padding: 5px;
            display: block;
            height: 60px;
            line-height: 30px;
            font-size: 18px;
            font-weight: 450;
          }
          span {
            position: absolute;
            bottom: 10px;
            left: 5px;
            font-size: 14px;
          }
          em {
            position: absolute;
            right: 5px;
            bottom: 10px;
            font-size: 14px;
            font-style: normal;
          }
        }
      }
    }
    /*.detail {
      width: 100%;
      height: 400px;
      position: relative;
      z-index: 999999;
    }*/
  }
</style>
