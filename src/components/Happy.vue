<template>
    <div id="ddd">
         <Headers></Headers>
          <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'Happy'
}
</script>
<style scoped>
 #ddd{
        width: 300px;
        height: 300px;
        background-color:blue;
        color:red;
    }

</style>
