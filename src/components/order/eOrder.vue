<template>
	<div id="Eorder">
    	<dsHeader :headerTitle="headerTitle" :backshow="backshow" :show="show"></dsHeader>
		<div class="order_box">
			<h3>{{eOrder_title}}</h3>
			<div class="order_info">
				<div class="left">
					<img :src="headImg" alt="">
					<h4>{{name}}</h4>
				</div>
				<div class="right">
					<p>电话：{{phone}}</p>
					<p>邮箱：{{email}}</p>
					<p>微信：{{wechat}}</p>
				</div>
			</div>
		</div>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="tab1"><span>纠纷描述</span></mt-tab-item>
		  <mt-tab-item id="tab2"><span>服务进程</span></mt-tab-item>
		  <mt-tab-item id="tab3"><span>服务项目</span></mt-tab-item>
		</mt-navbar>

		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="tab1">
			<div class="tab1_info">
				<h3>您的信息</h3>
				<div class="tab1_cell">
					<div class="left">姓名</div>
					<div class="right"><input type="text" placeholder="须填写真实姓名" v-model="username" name="username" autocomplete="off"></div>
				</div>
				<div class="tab1_cell">
					<div class="left">住址</div>
					<div class="right"><input type="text" placeholder="须填写，用于判断司法管辖地" v-model='address' name="address" autocomplete="off"></div>
				</div>
				<div class="tab1_cell">
					<div class="left">手机</div>
					<div class="right"><input type="text" placeholder="须填写" name="phone" v-model="myphone" autocomplete="off"></div>
				</div>
				<div class="tab1_cell">
					<div class="left">Email</div>
					<div class="right"><input type="text" placeholder="" name="email" v-model="myemail" autocomplete="off"></div>
				</div>
			</div>
			<div class="tab1_info">
				<h3>纠纷方信息</h3>
				<div class="tab1_cell">
					<div class="left">姓名</div>
					<div class="right"><input type="text" placeholder="须填写真实姓名" v-model="othername" name="othername" autocomplete="off"></div>
				</div>
				<div class="tab1_cell">
					<div class="left">纠纷发生事件</div>
					<div class="right"><input type="text" placeholder="" name="event" v-model="eventVal" autocomplete="off"></div>
				</div>
				<div class="tab1_cell">
					<div class="left">收到法院文书时间</div>
					<div class="right"><!-- <input type="text" placeholder="须填写" disabled :value="time" name="time" autocomplete="off"> -->
					  <span @click="openPicker">{{time}}</span>
					  <mt-datetime-picker
					    ref="timepicker"
					    type="date"
					    @confirm="handleConfirm">
					  </mt-datetime-picker>
					</div>
				</div>
				<div class="tab1_cell">
					<div class="left">纠纷类型</div>
					<div class="right">
						<div @click="showType">{{pickerType}}<img src="../../assets/img/icon/down2.png" alt=""></div>
						<mt-popup v-model="popupVisible" position="bottom">
							<div class="edit_title">
								<!-- <div class="cancle" @click="hideType">取消</div> -->
								<div class="query" @click="hideType">确定</div>
							</div>
							<mt-picker width="100%" ref="picker" :slots="slots" @change="onValuesChange" v-model="pickerType"></mt-picker>
						</mt-popup>
					</div>
				</div>
			</div>
			<div class="tab1_info">
				<h3>地址信息</h3>
				<div class="tab1_cell" v-for="(item,index) in addressList" :key="index">
					<div class="left">{{item.title}}</div>
					<div class="right">
						<three-address></three-address>
						<input type="text" placeholder="详细地址，如应方街道26号18栋2003" :name="item.name">
					</div>
				</div>
			</div>
			<div class="tab1_info">
				<h3>证据信息</h3>
				<div class="tab1_cell">
					<div class="check_box">
						<mt-checklist
						  title="能提供的信息"
						  v-model="value"
						  :options="options">
						</mt-checklist>
					</div>
				</div>
				<div class="other_cell">
					<h3>其他补充证据</h3>
					<textarea name="other" v-model="other_evidence" placeholder="请详细描述纠纷事件经过..."></textarea>
				</div>
				<div class="other_cell">
					<h3>事件描述</h3>
					<textarea name="desc" v-model="other_desc" placeholder="如果还有上面选中中不包含的证据，请填写。"></textarea>
				</div>
			</div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="tab2">
			<div class="tab2_info">
				<!-- 律师 -->
				<ul v-show="eOrder_title == '律师信息'">
					<li>
						<div class="process_box active">
							<img src="../../assets/img/icon/e_icon_on1.png" class="icon">
							<div class="gray_div">
								<h2>案件信息</h2>
								<div class="process_btn">
									<span v-for="(item,index) in processTills1" :key="index" @click="clickTill1(index)">{{item.till_info}} <img src="../../assets/img/icon/till.png" v-if="item.till_show"><img src="../../assets/img/icon/project_icon3.png" v-else></span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="process_box">
							<img src="../../assets/img/icon/e_icon2.png" class="icon">
							<div class="gray_div">
								<h2>证据信息查询</h2>
								<h3>查征信登记表</h3>
								<p>举证信息查询单</p>
								<img-upload :count="count" :multiple="multiple"></img-upload>
								<div class="process_btn">
									<span v-for="(item,index) in processTills2" :key="index" @click="clickTill2(index)">{{item.till_info}} <img src="../../assets/img/icon/till.png" v-if="item.till_show"><img src="../../assets/img/icon/project_icon3.png" v-else></span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="process_box">
							<img src="../../assets/img/icon/e_icon3.png" class="icon">
							<div class="gray_div">
								<h2>案件信息</h2>
								<h3>合同</h3>
								<h3>委托书</h3>
								<p>起诉状、财产保全申请书、财产保全担保书、证据自录</p>
								<img-upload></img-upload>
								<div class="process_btn">
									<span v-for="(item,index) in processTills3" :key="index" @click="clickTill3(index)">{{item.till_info}} <img src="../../assets/img/icon/till.png" v-if="item.till_show"><img src="../../assets/img/icon/project_icon3.png" v-else></span>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<!-- 客户 -->
				<ul v-show="eOrder_title == '客户信息'">
					<li>
						<div class="process_box active">
							<img src="../../assets/img/icon/e_icon_on1.png" class="icon">
							<div class="gray_div">
								<h2>案件信息</h2>
								<div class="process_btn">
									<span v-for="(item,index) in processTills4" :key="index" @click="clickTill4(index)">{{item.till_info}} <img src="../../assets/img/icon/till.png" v-if="item.till_show"><img src="../../assets/img/icon/project_icon3.png" v-else></span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="process_box">
							<img src="../../assets/img/icon/e_icon2.png" class="icon">
							<div class="gray_div">
								<h2>证据信息查询</h2>
								<h3>查征信登记表</h3>
								<p>举证信息查询单</p>
								<div class="process_btn">
									<span v-for="(item,index) in processTills5" :key="index" @click="clickTill5(index)">{{item.till_info}} <img src="../../assets/img/icon/till.png" v-if="item.till_show"><img src="../../assets/img/icon/project_icon3.png" v-else></span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="process_box">
							<img src="../../assets/img/icon/e_icon4.png" class="icon">
							<div class="gray_div">
								<h2>案件信息</h2>
								<h3>合同</h3>
								<h3>委托书</h3>
								<p>起诉状、财产保全申请书、财产保全担保书、证据自录</p>
								<div class="process_btn">
									<span v-for="(item,index) in processTills6" :key="index" @click="clickTill6(index)">{{item.till_info}} <img src="../../assets/img/icon/till.png" v-if="item.till_show"><img src="../../assets/img/icon/project_icon3.png" v-else></span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="process_box">
							<img src="../../assets/img/icon/e_icon3.png" class="icon">
							<div class="gray_div">
								<h2>委托立案登记</h2>
								<h3>受理通知</h3>
								<h3>受理通知</h3>
								<p>提交材料清单、证据目录</p>
								<p>消费期限告知书、诉讼费缴纳期限<span>2019-08-17</span></p>
								<div class="process_btn">
									<span v-for="(item,index) in processTills7" :key="index" @click="clickTill7(index)">{{item.till_info}} <img src="../../assets/img/icon/till.png" v-if="item.till_show"><img src="../../assets/img/icon/project_icon3.png" v-else></span>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="tab3">
			<div class="tab3_info">
				<h3>服务项目</h3>
				<ul class="pro_ul">
					<li v-for="(item,index) in projectList" :key="index"><img :src="item.icon"><p>{{item.title}}<span>{{item.name}}</span></p></li>
				</ul>
				<h4>您的律师服务费 <span>¥{{price}}</span></h4>
			</div>
			<div class="tab3_info nobor">
				<ul class="edit_ul">
					<li><router-link to="/Complaint"><img src="../../assets/img/icon/project_icon1.png"><p>投诉<img src="../../assets/img/icon/right_three2.png" alt=""></p></router-link></li>
					<li><router-link to="/Evaluation"><img src="../../assets/img/icon/project_icon2.png"><p>评价<img src="../../assets/img/icon/right_three2.png" alt=""></p></router-link></li>
					<li><router-link to=""><img src="../../assets/img/icon/project_icon3.png"><p>加单<img src="../../assets/img/icon/right_three2.png" alt=""></p></router-link></li>
				</ul>
			</div>
		  </mt-tab-container-item>
		</mt-tab-container>
    <div class="footer_query">
      <div class="footer_left">¥{{price}}</div>
      <div class="footer_right"><router-link to="">提交订单</router-link></div>
    </div>
		<router-link to="/chat" class="customer_service"><img src="../../assets/img/service_ad.png"></router-link>
	</div>
</template>


<script>
import Vue from 'vue'
import dsHeader from '@/components/header'
import imgUpload from '@/components/common/uploadPhoto'
import Address from '@/components/common/address'
import { Navbar, TabItem , Picker , Popup , Checklist , DatetimePicker , MessageBox } from 'mint-ui';
Vue.use(Navbar).use(TabItem).use(Picker).use(Popup).use(Checklist).use(DatetimePicker);
import moment from 'moment'

export default{
	data(){
		return{
			headerTitle: "e 颂服务订单",
	    	backshow: true,
        show: false,
        headImg:require("../../assets/img/store_head.png"),
        name:"张三",
        phone:"136-8989-5656",
        email:"585800@qq.com",
        wechat:"2565555",
        eOrder_title:"律师信息",
        selected: "tab1",
        slots: [
            {
              flex: 1,
              values: ['婚姻家庭', '未婚家庭', '单亲家庭'],
              className: 'slot1',
              textAlign: 'center'
            }
          ],
	      	popupVisible: false,
	      	pickerType:"婚姻家庭",
	      	addressList:[{
	      		title:"被告户籍地",name:"detailAddress1"
	      	},{
	      		title:"被高满一年居住地",name:"detailAddress2"
	      	},{
	      		title:"房产所在地",name:"detailAddress3"
	      	},{
	      		title:"原告户籍地",name:"detailAddress4"
	      	}],
	      	value:[],
        //checklist设置
          options : [{
              label: '身份证',
              value: 'A'
          },{
              label: '户口本',
              value: 'B'
          },{
              label: '出生证',
              value: 'C'
          },{
              label: '结婚证',
              value: 'D'
          },{
              label: '离婚证',
              value: 'E'
          },{
              label: '离婚协议',
              value: 'F'
          },{
              label: '房产证',
              value: 'G'
          },{
              label: '银行账户',
              value: 'H'
          },{
              label: '转账凭证',
              value: 'I'
          },{
              label: '死亡证明',
              value: 'J'
          },{
              label: '亲属关系证明',
              value: 'K'
          },{
              label: '遗嘱',
              value: 'L'
          },{
              label: '录音录像',
              value: 'M'
          },{
              label: '证人证言',
              value: 'N'
          },{
              label: '有价物品',
              value: 'O'
          },{
              label: '照片',
              value: 'P'
          },{
              label: '车辆行驶证',
              value: 'Q'
          },{
              label: '证券账户',
              value: 'R'
          },{
              label: '公司股权',
              value: 'S'
          },{
              label: '债务/债务凭证',
              value: 'T'
          },{
              label: '书面通知/函件',
              value: 'U'
          },{
              label: '社交软件沟通记录（短信、微信、QQ、E-mali）',
              value: 'V'
          }],
          projectList:[{
            icon:require("../../assets/img/icon/e_icon1.png"),
            title:"案件信息",
            name:"张律师"
          },{
            icon:require("../../assets/img/icon/e_icon2.png"),
            title:"证据调查",
            name:"张律师"
          },{
            icon:require("../../assets/img/icon/e_icon3.png"),
            title:"案件材料准备",
            name:"张律师"
          }],
      		count: 3,
      		multiple: true,
      		price: '10.00',

      		username:"",
      		address:"",
      		myphone:"",
      		myemail:"",
      		othername:"",
      		eventVal:"",
      		time:"2018-08-18",
      		other_evidence:"",
      		other_desc:"",

      		processTills1:[{
	      		till_info:"客户确认",
            till_show: true,
            till_check: false
      		},{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		}],
      		processTills2:[{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		},{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		}],
      		processTills3:[{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		},{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		}],
      		processTills4:[{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		},{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		}],
      		processTills5:[{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		},{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		}],
      		processTills6:[{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		},{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		}],
      		processTills7:[{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		},{
	      		till_info:"客户确认",
	      		till_show: true,
            till_check: false
      		}]
		}
	},
	components:{
		dsHeader,
		'img-upload':imgUpload,
		'three-address':Address
	},
	methods:{
		getNowFormatDate() {
		  var date = new Date();
		  var seperator1 = "-";
		  var year = date.getFullYear();
		  var month = date.getMonth() + 1;
		  var strDate = date.getDate();
		  if (month >= 1 && month <= 9) {
		    month = "0" + month;
		  }
		  if (strDate >= 0 && strDate <= 9) {
		    strDate = "0" + strDate;
		  }
		  var currentdate = year + seperator1 + month + seperator1 + strDate;
		  return currentdate;
		},
		onValuesChange(picker, values) {
        	this.pickerType = values[0]
	    },
	    showType(){
	    	this.popupVisible = true
	    },
	    hideType(){
	    	this.popupVisible = false
	    },
		openPicker() {
	      this.$refs.timepicker.open();
	    },
	    handleConfirm (data) {
     		this.time = moment(data).format('YYYY-MM-DD')
		},
		clickTill1(index){
      if(this.processTills1[index].till_check == false){
        MessageBox.confirm('确定执行此操作?').then(action => {
            this.processTills1[index].till_info = this.getNowFormatDate();
            this.processTills1[index].till_show = false;
            this.processTills1[index].till_check = true;
        });
      }
		},
		clickTill2(index){
      if(this.processTills2[index].till_check == false){
        MessageBox.confirm('确定执行此操作?').then(action => {
          this.processTills2[index].till_info = this.getNowFormatDate();
          this.processTills2[index].till_show = false;
          this.processTills2[index].till_check = true;
        });
      }
		},
		clickTill3(index){
      if(this.processTills3[index].till_check == false){
        MessageBox.confirm('确定执行此操作?').then(action => {
          this.processTills3[index].till_info = this.getNowFormatDate();
          this.processTills3[index].till_show = false;
          this.processTills3[index].till_check = true;
        });
      }
		},
		clickTill4(index){
      if(this.processTills4[index].till_check == false){
        MessageBox.confirm('确定执行此操作?').then(action => {
          this.processTills4[index].till_info = this.getNowFormatDate();
          this.processTills4[index].till_show = false;
          this.processTills4[index].till_check = true;
        });
      }
		},
		clickTill5(index){
      if(this.processTills5[index].till_check == false){
        MessageBox.confirm('确定执行此操作?').then(action => {
          this.processTills5[index].till_info = this.getNowFormatDate();
          this.processTills5[index].till_show = false;
          this.processTills5[index].till_check = true;
        });
      }
		},
		clickTill6(index){
      if(this.processTills6[index].till_check == false){
        MessageBox.confirm('确定执行此操作?').then(action => {
          this.processTills6[index].till_info = this.getNowFormatDate();
          this.processTills6[index].till_show = false;
          this.processTills6[index].till_check = true;
        });
      }
		},
		clickTill7(index){
      if(this.processTills7[index].till_check == false){
        MessageBox.confirm('确定执行此操作?').then(action => {
          this.processTills7[index].till_info = this.getNowFormatDate();
          this.processTills7[index].till_show = false;
          this.processTills7[index].till_check = true;
        });
      }
		},
	}
}
</script>

<style scoped>
	#Eorder{
		padding: 88px 0 108px;
	}
	.order_box{
		border: 12px solid #f2f3f6;
		border-left: 0;
		border-right: 0;
	}
	.order_box h3{
		color: #363636;
		font-size: 28px;
		border-bottom: 1px solid #E0E0E0;
		padding: 20px 30px 10px;
		font-weight: 500;
	}
	.order_info{
		padding: 30px 30px 20px;
		overflow: hidden;
	}
	.order_info .left{
		width: 120px;
		margin-right: 45px;
		float: left;
	}
	.order_info .left img{
		display: block;
		width: 120px;
		height: 120px;
	}
	.order_info .left h4{
		color: #373737;
		font-size: 28px;
		text-align: center;
		margin-top: 15px;
	}
	.order_info .right{
		width: 75%;
		float: left;
	}
	.order_info .right p{
		color: #444;
		font-size: 24px;
		margin-top: 10px;
	}

	/deep/ .mint-navbar{
		border-bottom: 1px solid #DADADB;
	}
	/deep/ .mint-navbar .mint-tab-item{
		overflow: hidden;
		padding-top: 25px;
	}
	/deep/ .mint-navbar .mint-tab-item.is-selected{
		border-bottom: 0;
	}
	/deep/ .mint-navbar .mint-tab-item span{
		padding-bottom: 13px;
		color: #676767;
		font-size: 26px;
	}
	/deep/ .mint-navbar .mint-tab-item.is-selected span{
		border-bottom: 3px solid #e74f5b;
		color: #e74f5b;
	}

	.tab1_info{
		border-top: 12px solid #f2f3f6;
	}
	.tab1_info h3,.tab3_info h3{
		color: #343434;
		font-size: 28px;
		padding: 25px 30px 15px;
		border-bottom: 1px solid #ECECEC;
	}
	.tab3_info h3{
		padding: 10px 0;
	}
	.tab1_cell,	.other_cell{
		color: #909090;
		font-size: 24px;
		padding: 25px 30px 15px;
		border-bottom: 1px solid #EDEDED;
		overflow: hidden;
	}
	.tab1_cell:last-child{
		border-bottom: 0;
	}
	.tab1_cell .left{
		width: 25%;
		float: left;
		padding-right: 20px;
		box-sizing: border-box;
		color: #909090;
		font-size: 24px;
		line-height: 1.5;
	}
	.tab1_cell .right{
		width: 75%;
		float: left;
	}
	.tab1_cell .right input{
		background: none;
		color: #909090;
		font-size: 24px;
		display: block;
		width: 100%;
	}
	.tab1_cell .right div img{
		float: right;
		width: 24px;
		height: 17px;
		margin-top: 5px;
	}


	/deep/ .mint-popup-bottom{
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

	/deep/ .mint-checklist .mint-cell{
		float: left;
	}
	/deep/ .mint-checklist-title{
		color: #7f7f7f;
		font-size: 24px;
	}
	/deep/ .mint-checkbox-core{
		border-radius: 0;
		transform: scale(1.5);
		margin-right: 12px;
	}
	/deep/ .mint-checkbox-label{
		color: #7c7c7c;
		font-size: 24px;
	}
	/deep/ .mint-checkbox-input:checked + .mint-checkbox-core{
		background-color: #e74f5b;
		border-color: #e74f5b;
	}

	.other_cell h3{
		padding: 0;
		border-bottom: 0;
		margin-bottom: 10px;
	}
	.other_cell textarea{
		outline: none;
		width: 100%;
		height: 100px;
		color: #b1b0b0;
		font-size: 24px;
		border: 0;
		resize: none;
	}

	.footer_query{
		position: fixed;
		width: 100%;
		overflow: hidden;
		left: 0;
		bottom: 0;
		background: #fff;
		border-top: 12px solid #f2f3f6;
		display: flex;
		align-items: center;
	}
	.footer_query .footer_left{
		width: 63%;
		height: 97px;
		line-height: 97px;
		float: left;
		padding-left: 30px;
		box-sizing: border-box;
		color: #eb2b3a;
		font-size: 36px;
	}
	.footer_query .footer_right{
		width: 37%;
		height: 97px;
		line-height: 97px;
		float: right;
		text-align: center;
		background: #e74f5b;
	}
	.footer_query .footer_right a{
		color: #fff;
		font-size: 30px;
		display: block;
		overflow: hidden;
	}


	.tab2_info{
		overflow: hidden;
		padding: 40px 30px 0 55px;
	}
	.tab2_info ul{
		border-left: 1px solid #E5E5E5;
	}
	.process_box{
		/*overflow: hidden;*/
		padding: 0 0 23px 50px;
		position: relative;
	}
	.process_box.active{
		border-left: 2px solid #4CAE48;
	}
	.process_box .icon{
		position: absolute;
		width: 51px;
		height: 51px;
		left: -26px;
		top: 0;
	}
	.gray_div{
		background: #f2f3f7;
		padding: 15px 20px 30px;
		border-left: 2px solid #6B94B4;
		position: relative;
	}
	.gray_div::before{
		content: "";
		width: 10px;
		height: 18px;
		background: url(../../assets/img/icon/left_three.png) center center no-repeat;
		background-size: 100%;
		position: absolute;
		left: -10px;
		top: 10px;
	}
	.gray_div h2{
		color: #6a93b5;
		font-size: 24px;
		margin-bottom: 10px;
	}
	.gray_div h3{
		color: #6a93b5;
		font-size: 22px;
		margin-bottom: 10px;
	}
	.gray_div p{
		color: #8f8f8f;
		font-size: 20px;
		margin-bottom: 10px;
	}
	.gray_div p span{
		display: inline-block;
		padding: 4px 15px;
		border-radius: 50px;
		background: #e74f5b;
		color: #fff;
		font-size: 20px;
		margin-left: 10px;
	}
	.process_btn{
		margin: 10px 0 0;
	}
	.process_btn span{
		display: inline-block;
		width: 230px;
		padding: 10px 15px;
		box-sizing: border-box;
		border: 1px solid #9EB8CD;
		border-radius: 20px;
		margin-right: 40px;
		color: #6a93b5;
		font-size: 22px;
		vertical-align: middle;
	}
	.process_btn span:last-child{
		margin-right: 0;
	}
	.process_btn span img{
		display: block;
		float: right;
		width: 24px;
		height: 24px;
	}


	.tab3_info{
		overflow: hidden;
		padding: 30px 30px 15px;
		border-bottom: 12px solid #f2f3f6;
	}
	.tab3_info.nobor{
		border-bottom: 0;
	}
	.tab3_info .pro_ul{
		overflow: hidden;
		margin: 30px 0 60px;
	}
	.tab3_info .pro_ul li{
		width: 97%;
		float: right;
		margin-bottom: 25px;
		height: 51px;
		color: #444;
		font-size: 26px;
		/*overflow: hidden;*/
		background: #f2f3f7;
		display: flex;
		align-items: center;
		position: relative;
		padding-left: 50px;
		box-sizing: border-box;
	}
	.tab3_info .pro_ul li img{
		display: block;
		width: 51px;
		height: 51px;
		border-radius: 50%;
		position: absolute;
		left: -20px;
		top: 0;
	}
	.tab3_info .pro_ul li p{
		display: block;
		width: 100%;
	}
	.tab3_info .pro_ul li span{
		float: right;
		color: #b0b0b0;
		font-size: 22px;
		margin: 5px 20px 0 0;
	}
	.tab3_info .pro_ul li:last-child{
		margin-bottom: 0;
	}
	.tab3_info h4{
		text-align: right;
		color: #444;
		font-size: 24px;
	}
	.tab3_info h4 span{
		color: #e74f5b;
	}

	.edit_ul{
		overflow: hidden;
	}
	.edit_ul li{
		border-bottom: 1px solid #E5E5E5;
		margin-bottom: 30px;
		overflow: hidden;
		display: flex;
		align-items: center;
	}
	.edit_ul li a{
		display: block;
		padding: 10px 0;
		width: 100%;
		color: #343434;
		font-size: 26px;
	}
	.edit_ul li a > img{
		float: left;
		display: block;
		width: 24px;
		height: 24px;
	}
	.edit_ul li a p{
		float: right;
		width: 94%;
	}
	.edit_ul li a p img{
		display: block;
		float: right;
		width: 16px;
		height: 19px;
		margin-top: 5px;
	}

	.mint-msgbox /deep/ .shade .top-view{
		height: 80px;
		padding: 10px 0;
	}
	.mint-msgbox /deep/ .shade .top-view p{
		font-size: 24px;
	}
	.mint-msgbox /deep/ .shade .image img{
		/*position: static;*/
		height: auto;
	}

</style>
