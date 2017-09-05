<template>
  <div class="wrap">
    <div class="content">
      <div>
        <div class="tab">
          <el-carousel :interval="5000" arrow="always" height="200px">
            <el-carousel-item v-for="(item,index) in imgs" :key="index">
              <img :src="item.img" alt="img" width="100%" height="100%">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="list">
          <ul class="ul">
            <li class="li" v-for="(item,index) in list" :key="index">
              <img :src="item.picUrl" alt="img">
              <p>{{item.topTitle}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Bscroll from 'better-scroll'
  import myHead from './Header.vue'
  export default {
    data() {
      return {
        list: [],
        imgs: []
      }
    },
    components: {
      myHead
    },
    methods: {
      loadListData(){
        this.$http.get('../../static/home/list.json').then((res) => {
          this.list = res.data.data.topList;
          this.$nextTick(function () {
            let scroll = new Bscroll('.content', {
              click: true
            })
          })
        })
      },
      loadTabData() {
        this.$http.get('../../static/home/img.json').then((res) => {
          this.imgs = res.data.data;
        })
      }
    },
    mounted() {
      this.loadListData();
      this.loadTabData();
    }
  };
</script>
<style rel="stylesheet/less" lang="less" scoped>
  .wrap {
    position: absolute;
    bottom: 0px;
    top: 0px;
    width: 100%;
    .content {
      position: absolute;
      width: 100%;
      top: 30px;
      bottom: 0;
      overflow: hidden;
      .tab {
        width: 100%;
        height: 200px;
        margin-bottom: 5px;
      }
      .list {
        .ul {
          .li {
            width: 100%;
            height: 80px;
            display: flex;
            margin-bottom: 5px;
            img {
              width: 80px;
              height: 80px;
            }
            p {
              flex: 1;
              line-height: 80px;
              background-color: #999999;
              font-size: 25px;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
