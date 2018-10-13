<template>
	<div id="moreOrder">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
      <ly-tab
          v-model="selectedId"
          :items="items"
          :options="options"
          @change="tabChange">
      </ly-tab>
      <div class="pay_box">
        <div class="pay_item" @click="$router.push('/eOrder')" v-for="(item,index) in pay_lists" :key="index">
          <div class="left">
            <h4>订单号：{{item.orderId}}</h4>
            <p>服务费：¥{{item.price}}</p>
            <!-- <span :class="item.service">{{item.status}}</span> -->
            <span>律师：{{item.name}} {{item.phone}}</span>
          </div>
          <div class="right">
            <router-link to="/eOrder" :class="item.active">{{item.btn}}</router-link>
            <p>下单时间：{{item.time}}</p>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
import Vue from 'vue'
import dsHeader from '@/components/header'

export default{
	data(){
		return{
			headerTitle: "我的订单",
      backshow: true,
      show: false,
      pay_lists:[{
        name:"张三",
        phone:"13689895656",
        orderId:"0115789",
        price:"35000.00",
        status:"服务中",
        service: "active",
        active: "",
        btn: "去支付",
        time:"2018-08-18"
      },{
        name:"张三",
        phone:"13689895656",
        orderId:"0256896",
        price:"55000.00",
        status:"已完成服务",
        service: "",
        active: "finish",
        btn: "已完成支付",
        time:"2017-06-20"
      }],
      items: [
        {label: '咨询订单'},
        {label: '和解订单'},
        {label: '起诉订单'},
        {label: '执行订单'}
      ],
      options: {
        activeColor: '#169bd5'
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      selectedId: 0
		}
	},
	components:{
		dsHeader
  },
  methods:{
    tabChange(e){
      console.log(e)
    }
  }
}
</script>

<style scoped>
  #moreOrder{
    overflow: hidden;
    padding: 100px 0;
  }
  #header{
    border-bottom: 12px solid #f2f3f6;
  }
  /deep/ .ly-tab-list{
    padding: 0;
  }
  /deep/ .ly-tab-item{
    color: #404040;
    font-size: 26px;
    padding: 25px 40px;
    box-sizing: border-box;
    border-right: 1px solid #eee;
  }
  /deep/ .ly-tab-item:last-of-type{
    border-right: 0;
  }
  /deep/ .ly-tab-item:not(:first-child){
    margin-left: 0;
  }
  /deep/ .ly-tab-active-bar{
    display: none;
  }

  .pay_box{
    padding: 30px;
  }
  .pay_item{
    margin-bottom: 40px;
    background: #f2f3f7;
    overflow: hidden;
    padding: 30px;
  }
  .pay_item .left{
    width: 50%;
    float: left;
  }
  .pay_item .left h4{
    color: #444;
    font-size: 26px;
    margin-bottom: 10px;
  }
  .pay_item .left p{
    color: #169bd5;
    font-size: 24px;
    margin-bottom: 10px;
  }
  /* .pay_item .left span{
    color: #6c6c6c;
    font-size: 22px;
  } */
  .pay_item .left span{
    color: #444;
    font-size: 24px;
  }
  .pay_item .left span.active{
    color: #169bd5;
  }

  .pay_item .right{
    float: right;
    width: 50%;
    text-align: right;
  }
  .pay_item .right a{
    display: inline-block;
    width: 150px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 26px;
    background: #169bd5;
    text-align: center;
    margin-bottom: 15px;
  }
  .pay_item .right a.finish{
    color: #686868;
    background: none;
  }
  .pay_item .right p{
    color: #949494;
    font-size: 22px;
  }
</style>
