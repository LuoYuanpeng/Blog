<template>
  <div class="wrapper">
	  <head-top v-on:navtype="getType"></head-top>
	  <section class="container">
			<ul>
				<li class='each-sec' v-for="item in items">
					<article class='post'>
						<h2><router-link :to="{path:'/article',query:{ID:item._id,type:item.essay.type}}">{{item.essay.title}}</router-link></h2>
						<time class='time'>{{item.essay.time}}</time>
						<p>{{item.essay.intro}}</p>
						<router-link id='read' :to="{path:'/article',query:{ID:item._id,type:item.essay.type}}">Read more »</router-link>
					</article>
				</li>
			</ul>
			<div class="page-select">
				<button id="last-page" @click="pageMinus" v-show="lastPage">← last page</button>
				<button id="next-page" @click="pageAdd" v-show="nextPage">next page →</button>
			</div>
		</section>
		<foot v-bind:essayNum="items.length"></foot>
  </div>
</template>

<script>
	import HeadTop from './headtop'
	import Foot from './foot'
	export default {
	  name: 'page',
	  data(){
	  	return {
	  		type:'Index',
	  		items:'',
	  		pagenum:'',
	  		toId:'',
	  		nowPage:1,
	  		nextPage:true,
	  		lastPage:false
	  	}
	  },
	  components:{
	  	HeadTop,Foot
	  },
	  mounted:function(){
	  	this.getType();
	  },
	  methods:{
	  	getType:function(args){
	  		this.type =args || this.$route.query.type || 'Index';
	  		this.$http.post('/api/indexPage',{type:this.type}).then((res)=>{
	  		this.items = JSON.parse(res.body['essayObj']);
	  		this.pagenum = res.body.pageNum;
	  		this.lastPage = false;
	  		if(this.pagenum == 1) {
	  			this.nextPage = false;
	  		}
	  		else if(this.pagenum != 1 && this.pagenum !=0){
	  			this.nextPage =true;
	  		}
	  		},(res) =>{
	  			console.log(res);
	  		});
	  	},
	  	pageMinus:function(){
			this.nowPage--;
	  		this.lastPage = (this.nowPage == 1) ? false:true;
	  		this.nextPage = (this.nowPage == this.pagenum) ? false:true;
	  		this.$http.post('/api/pageNum',{page:this.nowPage,type:this.type}).then((res)=>{
	  			this.items = res.body['essayObj'];
	  		},(res)=>{
	  			console.log(res);
	  		})
	  	},
	  	pageAdd:function(){
	  		this.nowPage++;
	  		this.lastPage = (this.nowPage == 1) ? false:true;
	  		this.nextPage = (this.nowPage == this.pagenum) ? false:true;
	  		this.$http.post('/api/pageNum',{page:this.nowPage,type:this.type}).then((res)=>{
	  			this.items = res.body['essayObj'];
	  		},(res)=>{
	  			console.log(res);
	  		})
	  	}
	  }
}
</script>

<style scoped>
.wrapper{
	height: 100%;
}
.container{
	width: 65%;
	min-width: 750px;
	min-height: 49%;
	margin:40px auto;
	background-color: #fff;
}

.each-sec{
	border-bottom: 1px solid #ddd;
}
.post{
	border-bottom: 1px solid #ddd;
}
.post h2{
	font-size: 30px;
	font-weight: 300;
	margin-top: 15px;
}
.post h2 a{
	color: #222;
	transition:color .4s linear;
	-webkit-transition:color .4s linear;
}
.post h2 a:hover{
	color: #8c8c8c;
}
.time{
	display: block;
	margin: 15px 0;
	color: #acacac;
}
.post p{
	font-size:16px;
	line-height: 28px;
	font-weight: 400;
	color: #3a3a3a;
	letter-spacing: 1px;
}
#read{
	display: inline-block;
	margin: 30px 0;
	margin-bottom: 50px;
	color: #acacac;
	transition:color .2s linear;
	-webkit-transition:color .2s linear;
}
#read:hover{
	color: #585858;
}
/*style of model*/

.page-select{
	height: 34px;
	margin: 40px 0;
	margin-bottom: 70px;
}
.page-select button{
	font-size: 14px;
	color: #b5b5b5;
	padding: 9px 25px;
	background-color: #fff;
	border-radius: 5px;
	border:1px solid #bdbdbd;
}
.page-select button:hover{
	cursor: pointer;
	color:#8c8c8c;
	border:1px solid #949292;
}
#last-page{
	float: left;
}
#next-page{
	float: right;
}
</style>
