<template>
	<div class="formbox">
    	<input type="text" placeholder="文章标题" id="title" v-model="title">
    	类型：
    	<select id="selected" v-model="type">
    		<option value="Technology">前端</option>
    		<option value="LifeStyle">生活</option>
    		<option value="Reading">读后感</option>
    	</select>
    	<br>
        <textarea id="intro" placeholder="文章简介" v-model="intro"></textarea><br>
    	<label for="content">文章内容：</label><br>
    	<textarea id="content" v-model="content"></textarea><br>
    	<button id="btn" @click="submit">发表</button>
    </div>
</template>

<script>
	export default {
		name:'write',
		data() {
			return {
				type:'',
				intro:'',
				content:'',
				time:'',
				title:'',
				DateNow:'',
				Months:'',
				year:'',
				month:'',
				today:'',
				doDay:''
			}
		},

		mounted:function(){
				this.getTime();
		},

		methods:{
			getTime:function(){
				this.DateNow = new Date();
				this.Months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
				this.year = this.DateNow.getFullYear();
				this.month = this.Months[this.DateNow.getMonth()];
				this.today = this.daySelect(this.DateNow.getDate());
				this.time = this.month+' '+this.today+',  '+this.year;
			},

			submit:function(){
				this.tranData = {
					title:this.title,
    				time:this.time,
    				content:this.content,
    				type:this.type,
                    intro:this.intro
                };
				this.$http.post('/api/public',this.tranData).then((res)=>{
					if(res.body.statusCode == 10110){
						// location.href="/";
					}
				},(res)=>{
					console.log(res.body);
				})
			},

			daySelect:function(day){
    			this.doDay= '';
    			switch(day){
    				case 1:
    					this.doDay = '1st';
    					break;
    				case 2:
    					this.doDay = '2nd';
    					break;
    				case 3:
    					this.doDay = '3rd';
    					break;
    				default:
    					this.doDay = day+'th';
    			}
    			return this.doDay;
    		}

		}
	}
</script>

<style scoped>
.formbox{
				height:655px;
			    width: 700px;
			    margin: 0 auto;
			    border-radius: 5px;
			    border: 1px solid #b7b7b7;
			    margin-top: 50px;
			    box-shadow: 0 0 10px #cccccc;
			    background-color: #fff;
			}
			#title{
				height: 30px;
				width: 400px;
				margin: 40px 20px;
				border:1px solid  #db9aeb;
				line-height: 35px;
				text-indent: 6px;
				font-size: 14px;
				border-radius: 4px;
				margin-bottom: 15px;
				outline: none;
			}
			#selected{
				height: 30px;
			}
            #intro{
                height: 80px;
                width: 600px;
                margin: 7px 20px;
                resize: none;
                border-radius: 3px;
                outline: none;
                border:1px solid  #db9aeb;
                padding-top: 5px;
                padding-left: 7px;
            }
			label{
				margin-left: 20px;
			    color: #cb26e7;
			    font-size: 20px;
			    font-weight: 400;
			}
			#content{
				height: 400px;
				width: 600px;
				margin: 7px 20px;
				resize: none;
				outline: none;
				padding-left: 7px;
				font-size: 15px;
				padding-top: 5px;
				border: 1px solid  #db9aeb;
				font-family: Consolas,"Liberation Mono",Menlo,Courier,monospace;
			}
			button{
				height: 30px;
				width: 80px;
				font-size: 14px;
				border-radius: 5px;
				margin:0 20px;
				border:1px solid #d0d0d0;
				background-color: #fff;
				color: #b3afaf;
				margin-top: 10px;
			}
			button:hover{
				outline: none;
				background-color: #d81ce5;
				color: #fff;
				cursor: pointer;
			}
</style>
