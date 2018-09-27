<template>
	<div id="address">
		<ul>
			<li><span @click="addressVisible = true">{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</span><img src="../../assets/img/icon/down3.png">
				<mt-popup
				  v-model="addressVisible"
				  position="bottom">
				  	<div class="edit_title">
						<!-- <div class="cancle" @click="hideType">取消</div> -->
						<div class="query" @click="addressVisible = false">确定</div>
					</div>
					<mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
				</mt-popup>
			</li>
			<!-- <li><span>市</span><img src="../../assets/img/icon/down3.png"></li> -->
			<!-- <li><span>区</span><img src="../../assets/img/icon/down3.png"></li> -->
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
　　import { Picker , Popup } from 'mint-ui'
	Vue.use(Picker).use(Popup)
	import myaddress from '../pca.json'

	export default{
		data(){
			return{
				addressVisible:false,
	　　　　　　myAddressSlots: [
	　　　　　　　　{
	　　　　　　　　　　flex: 1,
	　　　　　　　　　　defaultIndex: 1,
	　　　　　　　　　　values: Object.keys(myaddress), //省份数组
	　　　　　　　　　　className: 'slot1',
	　　　　　　　　　　textAlign: 'center'
	　　　　　　　　}, {
	　　　　　　　　　　divider: true,
	　　　　　　　　　　content: '-',
	　　　　　　　　　　className: 'slot2'
	　　　　　　　　}, {
	　　　　　　　　　　flex: 1,
	　　　　　　　　　　values: [],
	　　　　　　　　　　className: 'slot3',
	　　　　　　　　　　textAlign: 'center'
	　　　　　　　　},{
	　　　　　　　　　　divider: true,
	　　　　　　　　　　content: '-',
	　　　　　　　　　　className: 'slot4'
	　　　　　　　　},{
	　　　　　　　　　　flex: 1,
	　　　　　　　　　　values: [],
	　　　　　　　　　　className: 'slot5',
	　　　　　　　　　　textAlign: 'center'
	　　　　　　　　}
	　　　　　　],
	　　　　　　myAddressProvince:'',
	　　　　　　myAddressCity:'',
	　　　　　　myAddresscounty:'',
			}
		},
		methods: {
	// 　　　　closeShowAddress (e){
	// 　　　　　　if(e.target == this.$refs.selectAddress){
	// 　　　　　　　　this.isShowAddress = !this.isShowAddress;
	// 　　　　　　}
	// 　　　　},
	　　　　onMyAddressChange(picker, values) {
	　　　　　　if(myaddress[values[0]]){ //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
	　　　　　　　　picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
	　　　　　　　　picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
	　　　　　　　　this.myAddressProvince = values[0];
	　　　　　　　　this.myAddressCity = values[1];
	　　　　　　　　this.myAddresscounty = values[2];
	　　　　　　}
	　　　　},
	　　　},
	　　mounted(){
	　　　　this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
	　　　　　　this.myAddressSlots[0].defaultIndex = 0
	　　　　　　// 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
	　　　　　　//因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
	　　　　});
	　　}
	}
</script>

<style scoped>
	ul{
		overflow: hidden;
		margin-bottom: 12px;
	}
	ul li{
		float: left;
		/*width: 140px;*/
		color: #909090;
		width: 100%;
		margin-right: 20px;
		border: 1px solid #D2D2D2;
		border-radius: 10px;
		padding: 10px;
		box-sizing: border-box;
	}
	ul li:last-child{
		margin-right: 0;
	}
	ul li span{
	    width: 90%;
    	display: inline-block;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
	}
	ul li img{
		display: block;
		float: right;
		width: 18px;
		height: 16px;
		margin-top: 6px;
	}
</style>
