<template>
	<div id="person">
    <dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
    <div class="vip_box">
      <div class="container">
        <div class="cell_box head_box">
          <h3><img @click="$router.push('/settings')" src="../assets/img/icon/settings.png" alt=""></h3>
          <img class="ls_head" :src="head_img">
          <h4>Alexander</h4>
        </div>
        <div class="collect_cell">
          <router-link to="/collect">我的收藏<img src="../assets/img/icon/right_three3.png" alt=""></router-link>
        </div>
        <div class="cell_box">
          <h3>我的订单<router-link tag="span" to="/moreOrder">More <img src="../assets/img/icon/down.png"></router-link></h3>
      	  <router-link to="/eOrder" v-for="(item,index) in cellLists" :key="index">
	          <mt-cell :title="item.title">
	            <span>{{item.date}}</span>
	            <img slot="icon" :src="item.img">
	          </mt-cell>
          </router-link>
        </div>
      </div>
    </div>
    <div class="vip_zone">
    	<!-- <h3>VIP专区</h3> -->
    	<ul>
    		<li @click="$router.push('/productDetail/6')" v-for="(item,index) in vip_cards" :key="index" :class="item.diamond == true?'active':''">
          <img :src="item.card_bg" alt="" class="vip_bg">
          <div class="vip_layer">
            <h5>您的专属律师</h5>
            <div class="layer_box">
              <div class="left">
                <img :src="item.head_img" class="vip_head" alt="">
              </div>
              <div class="right">
                <h4>律师：{{item.name}}</h4>
                <p>白金VIP：{{item.time}}</p>
              </div>
            </div>
          </div>
        </li>
    	</ul>
    </div>
    <div class="lawyer">
    	<router-link to="/lawyer">我是律师<img src="../assets/img/icon/right_three3.png" alt=""></router-link>
    </div>
    <dsFooter :selected="selected"></dsFooter>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import dsFooter from '@/components/footer'
import { Tabbar, TabItem,TabContainer, TabContainerItem, Cell } from 'mint-ui'
Vue.use(Tabbar).use(TabItem).use(TabContainer).use(TabContainerItem).use(Cell)

export default {
  name: 'index',
  data () {
    return {
      headerTitle: "个人中心",
      backshow: false,
      show: false,
			selected: "person",

      head_img: require("../assets/img/ls_head.png"),
      head_name:"Alexander",
      cellLists: [{
        title:"e颂服务订单",
        date:"2018-08-16",
        img:require("../assets/img/icon/serve_icon1.png")
      },{
        title:"咨询服务订单",
        date:"2018-08-16",
        img:require("../assets/img/icon/serve_icon2.png")
      },{
        title:"文书服务订单",
        date:"2018-08-16",
        img:require("../assets/img/icon/serve_icon3.png")
      }],
      lsList:[{
        info: "已受理",
        icon: require("../assets/img/icon/ls_icon1.png"),
        num: 888
      },{
        info: "职业年限",
        icon: require("../assets/img/icon/ls_icon2.png"),
        num: 888
      },{
        info: "专业擅长",
        icon: require("../assets/img/icon/ls_icon3.png"),
        num: 888
      }],
      vip_cards:[{
        diamond: false,   //判断是否为钻石会员卡 样式，true为是
        card_bg: require("../assets/img/lawyer_bg1.jpg"),
        head_img: require("../assets/img/ls_head.png"),
        name: "Alexander",
        time: "2018-11-03"
      },{
        diamond: true,   //判断是否为钻石会员卡 样式，true为是
        card_bg: require("../assets/img/lawyer_bg2.jpg"),
        head_img: require("../assets/img/ls_head.png"),
        name: "Alexander",
        time: "2018-11-03"
      }]
    }
  },
  components:{
    dsHeader,
    dsFooter
  }
}
</script>

<style scoped>
#person{
  padding: 88px 0 98px;
}
.vip_box{
	margin: 35px 0 0;
	overflow: hidden;
	/* border-bottom: 12px solid #F2F3F6; */
}
.cell_box{
  overflow: hidden;
  border: 1px solid #E9E9E9;
  padding: 20px 20px 25px;
  margin: 0 0 60px;
}
.collect_cell a{
  color: #2b2b2b;
  font-size: 30px;
}
.head_box{
	background: #f9f9f9;
}
.cell_box h3{
  font-size: 30px;
  margin: 0 0 20px;
  padding-bottom: 20px;
  font-weight: normal;
  border-bottom: 1px solid #F3F3F3;
  overflow: hidden;
}
.head_box h3{
	border-bottom: 0;
	margin-bottom: 0;
	padding-bottom: 0;
}
.head_box h3 img{
	display: block;
	width: 36px;
	height: 36px;
	float: right;
}
.cell_box h3 span{
  float: right;
  color: #3598dc;
  font-size: 22px;
  border: 2px solid #5BB8E0;
  border-radius: 20px;
  padding: 5px 15px;
  display: inline-block;
  vertical-align: top;
}
.cell_box h3 span img{
  width: 18px;
  height: 10px;
}
.cell_box h4{
  color: #3e3e3e;
  font-size: 30px;
  margin: 0 0 10px;
  text-align: center;
  font-weight: 500;
}
.ls_head{
  display: block;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin: 10px auto 20px;
  padding: 5px;
  border: 1px solid #ECECEC;
}
.mint-cell{
  background: #fafafa;
  margin-bottom: 15px;
}
/deep/ .mint-cell-wrapper{
  padding: 0 15px 0 0;
}
/deep/ .mint-cell-text{
  font-size: 26px;
}
/deep/ .mint-cell-value{
  font-size: 20px;
}
.cell_box a{
  color: #3e3e3e;
}
.cell_box a:hover{
  color: #3598dc;
}
.mint-cell:last-child{
  background: none;
  background: #fafafa;
}
.mint-cell img{
  width: 56px;
  height: 56px;
  margin-right: 10px;
}


.vip_zone{
	overflow: hidden;
	padding: 0 30px 40px;
	border-bottom: 12px solid #F2F3F6;
}
.vip_zone h3{
	color: #2b2b2b;
	font-size: 28px;
	padding-bottom: 20px;
	border-bottom: 1px solid #E7E7E7;
	margin-bottom: 25px;
}
.vip_zone ul{
  width: 100%;
  overflow: hidden;
	overflow-x: auto;
  white-space: nowrap;
}
.vip_zone ul li{
	/* width: 49%; */
  width: 603px;
  height: 255px;
  display: inline-block;
  margin-right: 25px;
  position: relative;
	/* float: left; */
}
.vip_zone ul li:last-child{
  margin-right: 0;
}
.vip_layer{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 20px;
  box-sizing: border-box;
}
.vip_layer h5{
  color: #fff;
  font-size: 28px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #F9D697;
}
.vip_zone ul li.active .vip_layer h5{
  color: #5a5a5a;
  border-color: #C2C6CE;
}
.vip_layer .layer_box{
  overflow: hidden;
}
.layer_box .left{
  float: left;
  margin-right: 20px;
}
.layer_box .left img{
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fff;
}
.layer_box .right{
  color: #fff;
}
.layer_box .right h4{
  font-size: 30px;
  margin: 30px 0 10px;
}
.layer_box .right p{
  font-size: 24px;
}
/* .vip_zone ul li:last-child{
	float: right;
} */
.vip_zone ul li img{
	display: block;
	width: 100%;
	height: auto;
}
.vip_zone ul li:active img{
  opacity: .8;
}

.lawyer{
	overflow: hidden;
	padding: 20px 30px 60px;
}
.lawyer a,.collect_cell a{
	display: block;
	padding: 20px;
	border: 1px solid #F1F1F1;
	color: #2b2b2b;
	font-size: 28px;
}
.collect_cell a{
  display: block;
  padding: 0;
  border-bottom: 0;
  margin: 0;
  overflow: hidden;
  border: 1px solid #E9E9E9;
  padding: 20px;
  margin: 0 0 30px;
}
.lawyer a img,.collect_cell a img{
	display: block;
	width: 16px;
	height: 19px;
	float: right;
	margin-top: 8px;
}
.lawyer a img,.collect_cell a img{
  width: 12px;
  height: 22px;
  margin-top: 5px;
}
</style>
