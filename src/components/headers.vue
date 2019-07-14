<template>
    <div id="btn">
        <router-link class="rou" :to="{name:'Movie'}">电影</router-link>
        <router-link class="rou" :to="{name:'Music'}">音乐</router-link>
        <router-link class="rou" :to="{name:'News'}">新闻</router-link>
    </div>
</template>
<script>
export default {
  name: 'Headers'
}
</script>
<style scoped>
     .rou{
         font-size: 16px;
         color:aqua;
     }
      #btn{
        width: 300px;
        background-color:blue;
        color:red;
        font-size: 30px;
    }
</style>
