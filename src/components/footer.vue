<template>
	<div id="footer">
		<mt-tabbar v-model="message" fixed>
		  <mt-tab-item id="index">
		    <img slot="icon" :src="this.tabs[0]">
		    首页
		  </mt-tab-item>
		  <mt-tab-item id="store">
		    <img slot="icon" :src="this.tabs[1]">
		    找律师
		  </mt-tab-item>
		  <mt-tab-item id="person">
		    <img slot="icon" :src="this.tabs[2]">
		    我的
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Tabbar,TabItem } from 'mint-ui'
	Vue.use(Tabbar).use(TabItem)

	export default{
		name: 'Header',
		data(){
        	return{
	        //选中的tabbar值message为外面页面传入的值selected
	            message:this.selected,
	        //这里使用的icon图标为图片，所以需要加图片改变的传入，若使用阿里图标，则不用加
	            tabs:[
                require("../assets/img/icon/footer_icon1.png"),
                require("../assets/img/icon/footer_icon2.png"),
                require("../assets/img/icon/footer_icon3.png")
              ],
	        }
	    },
	    props:{
	        selected: String
	    },
	    watch: {
	        message: function (val, oldVal) {
	            // 这里就可以通过 val 的值变更来确定去向
	            switch(val){
	                case 'index':
	                    this.$router.replace('/');
	                break;
	                case 'store':
	                    this.$router.replace('/store');
	                break;
	                case 'person':
                      this.$router.replace('/person');
	                break;
	            }
	        }
      }
	}
</script>

<style scoped>
	/deep/ .mint-tab-item{
		display: flex;
		justify-content:center;
    	align-items: center;
		height: 98px;
		padding: 0;
		background: #ccc;
		width: 33%;
		margin-right: 0.5%;
		color: #fff;
	}
	/deep/ .mint-tab-item:last-child{
		margin-right: 0;
	}
	/deep/ .mint-tab-item-icon{
		width: 58px;
		height: 46px;
		display: inline-block;
		vertical-align: middle;
		margin: 0 5px 3px 0;
	}
	/deep/ .mint-tab-item-label{
		display: inline-block;
		font-size: 34px;
	}
	/deep/ .mint-tabbar > .mint-tab-item.is-selected{
		color: #fff;
		background: #169bd5;
	}
</style>
