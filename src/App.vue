<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  }
}
</script>

<style>
#app {
  font-family: PingFang SC,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
}
.container{
  padding: 0 30px;
}
ul{
  list-style: none;
  padding-left: 0;
  margin: 0;
}
h1,h2,h3,h4,h5,h6,p{font-weight: normal;margin: 0;}
a{text-decoration: none;}
.vip{
  display: block;
  position: absolute;
  right: 30px;
  bottom: -30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 5px #DBDBDB;
  z-index: 5;
}
input,button{
  border: 0;
  background: none;
  color: #7b7b7b;
  font-size: 26px;
  outline: none;  
}
textarea{
  resize: none;
  outline: none;
}

#header{
  border-bottom: 2px solid #EBEBEB;   
}
.swipe_box{
  height: 300px;
  position: relative;
}
.swipe_box .mint-swipe img{
  display: block;
  width: 100%;
}

.customer_service{
  overflow: hidden;
  position: fixed;
  right: 30px;
  bottom: 150px;
  border-radius: 50%;
  box-shadow: 0 5px 10px #CECECE;
}
.customer_service img{
  display: block;
  width: 100px;
  height: 100px;
}

.buy_box{
  width: 100%;
  padding: 30px;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  z-index: 5;
}
.buy_box a{
  display: block;
  width: 100%;
  height: 82px;
  line-height: 82px;
  text-align: center;
  color: #fff;
  font-size: 30px;
  background: #e74f5b;
  border-radius: 10px;
}


.apply_box{
  padding: 25px 0;
  border-top: 12px solid #f2f3f6;
}
.apply_box h3{
  color: #363636;
  font-size: 28px;
  padding: 0 30px 12px 30px;
  border-bottom: 1px solid #E6E6E6;
}
.apply_box h3 span{
  margin: 0 15px;
}
.first_item{
  overflow: hidden;
  padding: 25px 30px 15px;
  border-bottom: 1px solid #E6E6E6;
  display: flex;
  align-items: center;
}
.first_item .left{
  width: 35%;
  float: left;
  color: #5b5b5b;
  font-size: 24px;
}
.first_item .right{
  width: 65%;
  float: left;
}
.first_item .right input{
  color: #909090;
  font-size: 24px;
  width: 60%;
}


.mint-datetime .picker-toolbar{
  height: 80px;
  padding: 0 30px;
}
.mint-datetime-action{
  height: 80px;
  line-height: 80px;
  color: #444;
  font-size: 26px;
}
.mint-datetime-cancel{
  text-align: left;
}
.mint-datetime-confirm{
  text-align: right;
}

.picker-item{
  font-size: 26px;
}
.mint-popup-bottom{
  width: 100%;
}
.edit_title{
  background: #fff;
  border-bottom: 1px solid #EDEDED;
  overflow: hidden;
  color: #909090;
  font-size: 28px;
}
.cancle{
  float: left;
  padding: 30px;
}
.query{
  float: right;
  padding: 30px;
}

.shade .top-view{
    height: 80px;
    padding: 10px 0;
  }
.shade .top-view p{
    font-size: 24px;
  }
.shade .image img{
    /*position: static;*/
    height: auto;
  }

</style>
