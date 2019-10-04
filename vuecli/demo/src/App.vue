<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
  
    this.$http({
        method: 'post',
        url: '/api/sql',
        data: {
          name: 'virus'
        }
     }).then(function(res){
          console.log(res)
        })
    .catch(function(err){
          console.log(err)
        })
     this.$http({
        method: 'post',
        url: '/api/sqltow',
        data: {
          name: 'virus'
        }
     }).then(function(res){
          console.log(res)
        })
    .catch(function(err){
          console.log(err)
        })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
