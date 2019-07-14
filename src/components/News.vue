<template>
    <div>
        <h1>这里有最新的<span>新闻</span>等着您来观看</h1>
        <img src="../assets/news.jpg" alt="news">
    </div>
</template>
<script>
export default {
  name: 'News'
}
</script>
<style scoped>
    h1{color:red;font-size: 20px;font-weight: 400;}
    img{
        width: 200px;
        height: 200px;
    }
    span{
        font-weight: 700;
        color:chartreuse;
    }
</style>
