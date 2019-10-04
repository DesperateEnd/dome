<template>
  <div class="hello">
   
    <!-- <a href="javascript:;" @click="$store.commit('switch_dialog')">点击</a> -->
    <a href="javascript:;" @click="$store.dispatch('switch_dialog')">点击</a>
    
    <t-dialog></t-dialog>
  
  </div>
</template>

<script>
import dialog from '@/components/dialog'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    "t-dialog":dialog
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color1:#000;
  #app{
    background:$color1; 
  }
</style>
