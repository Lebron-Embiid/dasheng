<template>
	<div id="imgUpload">
	    <div class="prewImg">
	    	<image-upload
		      class="image_upload"
		      :touch-size = "1"
		      :multiple = "multiple"
		      :max-count = "count"
		      v-show="iShow"
		      @chooseImages='bindtap_chooseImages'
		    />
	    	<img :src="image.src" v-for="(image , i) in images" :key="i" @click="bingtap_preview(i)" alt="">
	    </div>

		<!-- 图片预览 -->
	    <image-preview
	      style="z-index:200"
	      :images="preImages"
	      v-model="index"
	      :numIsShow="true"
	      :deleteIsShow="true"
	      @click="bingtap_hiddenImg"
	      @delete="bindtap_delete"
	    />
	</div>
</template>

<script>
import Vue from 'vue'
import {ImageUpload , ImagePreview} from 'vue-image-upload-preview'
import { MessageBox } from 'mint-ui'

export default{
	data(){
		return{
			images: [],
      		iShow: true,
      		index: -1
		}
	},
	props:{
		multiple: Boolean,
		count: Number
	},
	components:{
		'image-preview':ImagePreview,
    	'image-upload':ImageUpload
	},
	methods:{
	    bindtap_chooseImages(res){
	    	// this.images = res[0].src
	    	// this.iShow = true
	    	console.log(this.images)
	    	this.images = this.images.concat(res);
	    	console.log(this.images)
	    },
	    bindtap_upload(){
	      this.$refs.imgaeUpload.uploadImages(this.images)
  			.then(res => {
	        console.log(res)
	      }).catch(err => {
	        console.log(err)
	      })
	    },
	    bindtap_delete(){
			this.images = this.images.filter((v,i) => {
		    	return this.index!=i;
		    })
	    },
	    /**
	     *  绑定函数 -- 预览图片
	     */
	    bingtap_preview(i){
	      this.index = i;
	    },
	    bingtap_hiddenImg() {
	      this.index = -1;
	    }
	},
	computed:{
    	// 预览图片路径
    	preImages(){
    		return this.images.map(v=>{return v.src});
    	}
  	},
}
</script>

<style>
	#imgUpload{
		overflow: hidden;
		margin-bottom: 10px;
	}
	.image_upload{
		width: 113px;
		height: 113px;
		background: url(../../assets/img/upload_bg.jpg) center center no-repeat;
		background-size: 100%;
		float: left;
		margin: 0 20px 20px 0;
	}
	.prewImg{
		display: block;
		width: auto;
		height: auto;
		box-sizing: border-box;
		overflow: hidden;
	}
	.prewImg img{
		float: left;
		margin: 0 20px 20px 0;
		display: block;
		width: 113px;
		height: 113px;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}
	.upload-button input{
		width: 100%;
		height: 100%;
	}
	.shade .top-view img{
	    background: none;
	    border-radius: 50%;
	  }
	.shade .top-view img::after{
	    content: "删除";
	    color: #fff;
	    font-size: 24px;
	    position: absolute;
	    top: 50%;
	    width: 100%;
	    text-align: center;
	    transform: translateY(-50%);
	  }
</style>
