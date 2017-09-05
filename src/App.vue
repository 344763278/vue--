<template>
  <div id="app">
    <log></log>
    <router-view class="view"></router-view>
    <my-foot></my-foot>
  </div>
</template>

<script>
  import MyFoot from './components/Footer'
  import Log from './components/Log'
  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      MyFoot,
      Log
    }
  }
</script>

<style>
  .view {
    /*margin-top: 30px;*/
    position: absolute;
    top: 30px;
    bottom: 30px;
    width: 100%;
  }
</style>
