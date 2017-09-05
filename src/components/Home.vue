<template>
  <div class="wrap">
    <my-head></my-head>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import myHead from './Header.vue'
  export default {
    components: {
      myHead
    }
  };
</script>


