<template>
	<div class="swipe_box">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(item,index) in swipeList" :key="index"><img :src="item.img"></mt-swipe-item>
		</mt-swipe>
		<img class="vip" v-show="vipShow" :vip="vipShow" @click="vipBtn" src="../../assets/img/vip.png">
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.use(Swipe).use(SwipeItem)

export default{
	data(){
		return {

		}
	},
  props:{
    swipeList: Array,
    vipShow: Boolean
  },
  methods:{
    vipBtn(){
      // this.$emit("childToParent",this.vipShow)
      this.$router.push('/search/7')
    }
  }
}
</script>

<style scoped>
	/deep/ .mint-swipe-indicator{
		width: 16px;
		height: 16px;
		margin-right: 10px;
		border-radius: 50%;
		background: rgba(255,255,255,.51);
		opacity: 1;
	}
	/deep/ .mint-swipe-indicator:last-child{
		margin-right: 0;
	}
	/deep/ .mint-swipe-indicator.is-active{
		background: rgba(255,255,255,1);
	}
</style>
