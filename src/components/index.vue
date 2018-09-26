<template>
  <div id="index">
    <dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
    <app-index></app-index>
    <dsFooter :selected="selected"></dsFooter>
    <!-- <mt-tab-container v-model="selected">
      <mt-tab-container-item id="index">
        <app-index></app-index>
      </mt-tab-container-item>
      <mt-tab-container-item id="store">
        <app-store></app-store>
      </mt-tab-container-item>
      <mt-tab-container-item id="person">
        <app-person></app-person>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="index">
        <img slot="icon" :src="this.tabs[0]">
        首页
      </mt-tab-item>
      <mt-tab-item id="store">
        <img slot="icon" :src="this.tabs[1]">
        商城
      </mt-tab-item>
      <mt-tab-item id="person">
        <img slot="icon" :src="this.tabs[2]">
        我的
      </mt-tab-item>
    </mt-tabbar> -->
  </div>
</template>

<script>
  import Vue from 'vue'
  import dsHeader from '@/components/header'
  import dsFooter from '@/components/footer'
  import Home from '@/components/home'
  // import Store from '@/components/store'
  // import Person from '@/components/person'
  import {Tabbar,TabItem,TabContainer, TabContainerItem} from 'mint-ui'
  Vue.use(Tabbar).use(TabItem).use(TabContainer).use(TabContainerItem)

export default {
  name: 'index',
  data () {
    return {
        headerTitle: "尊贵会员",
        backshow: false,
        show: true,
          //选中的tabbar值message为外面页面传入的值selected
        selected: "index",
          //这里使用的icon图标为图片，所以需要加图片改变的传入，若使用阿里图标，则不用加
        tabs:[
          require("../assets/img/icon/footer_icon1.png"),
          require("../assets/img/icon/footer_icon2.png"),
          require("../assets/img/icon/footer_icon3.png")
        ],
    }
  },
  components:{
    dsHeader,
    dsFooter,
    'app-index':Home,
    // 'app-store':Store,
    // 'app-person':Person
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #index{
    padding: 88px 0 98px;
  }
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
