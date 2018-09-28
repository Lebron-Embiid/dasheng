<template>
	<div id="home">
      <app-banner :swipeList="swipeList" :vipShow="vip" @childToParent="showVip"></app-banner>
	    <!-- 尊享vip -->
      <transition name="fade">
        <div class="vip_box" v-show="vipShow">
          <div class="container">
            <div class="cell_box">
              <h3>服务中的项目<span>More <img src="../assets/img/icon/down.png"></span></h3>
                <router-link to="/eOrder" v-for="(item,index) in cellLists" :key="index">
                <mt-cell :title="item.title">
                  <span>{{item.date}}</span>
                  <img slot="icon" :src="item.img">
                </mt-cell>
              </router-link>
            </div>
            <div class="cell_box">
              <h3>您的专属律师</h3>
              <img class="ls_head" :src="head_img">
              <h4>主律师：{{head_name}}</h4>
              <ul>
                <li v-for="(item,index) in lsList" :key="index"><h5>{{item.info}}</h5><p><img :src="item.icon">{{item.num}}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
	    <!-- 我们的提供服务 -->
	    <div class="service_box">
	      <h3>我们的提供服务</h3>
	      <ul>
	        <li v-for="(item,index) in iconList" :key="index"><router-link :to="{name:'Search',params:{id:item.id}}"><h4><img :src="item.icon">{{item.title}}</h4><p>{{item.info}}</p></router-link></li>
	      </ul>
	      <form class="search_box">
	        <div><img src="../assets/img/icon/search.png"><input type="text" @focus="$router.push('/store')" name="search" placeholder="搜律所，律师" autocomplete="off"></div>
	      </form>
	    </div>
	    <!-- 底部文字 -->
	    <div class="footer_words">
	      <h5>还不清楚需要哪个服务？请使用<router-link to="/chat">在线客服</router-link>。</h5>
	      <h3>大胜法宝</h3>
	      <p>让每个法律纠纷，都获得律师帮助</p>
	    </div>
	</div>
</template>

<script>
import Vue from 'vue'
import comBanner from '@/components/common/banner'
import { Tabbar, TabItem, TabContainer, TabContainerItem, Cell  } from 'mint-ui'
Vue.use(Tabbar).use(TabItem).use(TabContainer).use(TabContainerItem).use(Cell)

export default {
  name: 'index',
  data () {
    return {
      vipShow: false,
      head_img: require("../assets/img/ls_head.png"),
      head_name:"Alexander",
      vip: true,
      swipeList:[{
        href: "",
        img: require("../assets/img/banner.jpg")
      },{
        href: "",
        img: require("../assets/img/banner.jpg")
      },{
        href: "",
        img: require("../assets/img/banner.jpg")
      }],
      cellLists: [{
        title:"用工合同纠纷咨询",
        date:"2018-08-16",
        img:require("../assets/img/icon/serve_icon1.png")
      },{
        title:"张三起诉我司合同纠纷应诉",
        date:"2018-08-16",
        img:require("../assets/img/icon/serve_icon2.png")
      },{
        title:"执行文书递交",
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
      iconList:[{
        id: 1,
        icon: require("../assets/img/icon/service_icon1.png"),
        title: "咨询",
        info: "遇到法律问题不知怎么办？从咨询开始！"
      },{
        id: 2,
        icon: require("../assets/img/icon/service_icon2.png"),
        title: "和解",
        info: "遇到纠纷，我们帮您快速调节"
      },{
        id: 3,
        icon: require("../assets/img/icon/service_icon3.png"),
        title: "起诉",
        info: "打官司，找我们帮您排忧解难"
      },{
        id: 4,
        icon: require("../assets/img/icon/service_icon4.png"),
        title: "执行",
        info: "遇到老赖，我们帮您维权"
      },{
        id: 5,
        icon: require("../assets/img/icon/service_icon5.png"),
        title: "应诉",
        info: "对方起诉您，我们是你坚强的守护神",
      },{
        id: 6,
        icon: require("../assets/img/icon/service_icon6.png"),
        title: "文书",
        info: "规范严谨的法律文书，我们帮您搞定！",
      },{
        id: 7,
        icon: require("../assets/img/icon/service_icon7.png"),
        title: "会员卡",
        info: "您的专属法律顾问！",
      }]
    }
  },
  methods:{
  	showVip(data){
      this.vipShow = !this.vipShow
  	}
  },
  components:{
    'app-banner':comBanner
  }
}
</script>

<style scoped>
  .banner{
    position: relative;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .banner .ban_img{
    display: block;
    width: 100%;
  }
  .cell_box,.service_box{
    overflow: hidden;
    border: 1px solid #E9E9E9;
    padding: 20px 20px 25px;
    margin: 10px 0 50px;
  }
  .service_box{
    border: 0;
    margin: 0;
    padding-bottom: 30px;
    border-bottom: 1px solid #DCDCDC;
  }
  .service_box a{
  	overflow: hidden;
  	display: block;
  }
  .cell_box h3,.service_box h3{
    font-size: 30px;
    margin: 0 0 20px;
    padding-bottom: 20px;
    font-weight: normal;
    border-bottom: 1px solid #F3F3F3;
  }
  .service_box h3{
    padding-bottom: 0;
    border-bottom: 0;
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
    margin: 0 0 40px;
    text-align: center;
    font-weight: 500;
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

  .ls_head{
    display: block;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin: 40px auto 20px;
    padding: 5px;
    border: 1px solid #ECECEC;
  }
  .cell_box ul{
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
  }
  .cell_box ul li h5{
    margin: 0 0 10px;
    color: #4a4a4a;
    font-size: 28px;
    font-weight: normal;
  }
  .cell_box ul li p{
    margin: 0;
    font-size: 26px;
    text-align: center;
  }
  .cell_box ul li p img{
    display: inline-block;
    width: 38px;
    height: 41px;
    vertical-align: middle;
    margin: 0 5px 5px 0;
  }

  .service_box ul{
    overflow: hidden;
    margin-bottom: 30px;
  }
  .service_box ul li{
    float: left;
    width: 49%;
    background: #000;
    margin-bottom: 10px;
    box-sizing: border-box;
    position: relative;
  }
  .service_box ul li a{
  	height: 200px;
    padding: 0 25px;
  }
  .service_box ul li h4{
    margin: 0;
    color: #2b2b2b;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-top: 40px;
  }
  .service_box ul li p{
    text-align: left;
    color: #2b2b2b;
    font-size: 22px;
    margin: 0;
  }
  .service_box ul li:nth-child(2n+1){
    float: right;
  }
  .service_box ul li:first-child{
    width: 100%;
    background: url(../assets/img/service_bg.jpg) top center no-repeat;
    background-size: 100% 100%;
  }
  .service_box ul li:first-child a{
  	padding: 0 40px 0 0;
  }
  .service_box ul li:first-child h4{
    text-align: right;
    margin: 60px 0 10px;
  }
  .service_box ul li:first-child p{
    text-align: right;
  }
  .service_box ul li img{
    display: inline-block;
    width: 72px;
    height: 66px;
    vertical-align: middle;
    margin: 0 10px 10px 0;
  }
  .service_box ul li:first-child img{
    float: left;
    position: absolute;
    left: 0;
    top: 0;
  }

  .service_box ul li:nth-child(2){
    background: #f79e98;
  }
  .service_box ul li:nth-child(3){
    background: #c891d2;
  }
  .service_box ul li:nth-child(4){
    background: #86d1e8;
  }
  .service_box ul li:nth-child(5){
    background: #8a93ca;
  }
  .service_box ul li:nth-child(6){
    background: #f6b1c6;
  }
  .service_box ul li:last-child{
    background: #f6ddb1;
  }

  .search_box{
    padding: 15px 0;
    background: #e3e4e6;
    border-radius: 10px;
    text-align: center;
  }
  .search_box img{
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin: 0 20px 6px 0;
  }

  .footer_words{
    text-align: center;
  }
  .footer_words h5{
    color: #7b7b7b;
    font-size: 26px;
    margin: 30px 0 40px;
  }
  .footer_words h5 a{
    color: #295d98;
  }
  .footer_words h3{
    color: #7b7b7b;
    font-size: 50px;
  }
  .footer_words p{
    color: #7b7b7b;
    font-size: 26px;
    margin: 20px 0 30px;
  }


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
