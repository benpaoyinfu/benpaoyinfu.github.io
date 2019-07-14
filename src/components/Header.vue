<template>
    <div id="main">
        <router-link class="heade" :to="{name:'Home'}">首页</router-link>
        <router-link class="heade" :to="{name:'Happy'}">娱乐</router-link>
    </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
.heade{
    width:300px;
    text-align: center;
    font-size: 16px;
    color:yellowgreen;
}
#main{
    width: 300px;
}
</style>
