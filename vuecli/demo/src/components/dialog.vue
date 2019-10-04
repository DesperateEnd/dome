<template>
    <div >
        <div v-show="show">123</div>
        <div v-show="not_show">abc</div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed:{

    //这里的三点叫做 : 扩展运算符
    ...mapState({
      show:state=>state.dialog.show,
      not_show:state=>!state.dialog.show,
    }),
  }
}
</script>

<style>

</style>
