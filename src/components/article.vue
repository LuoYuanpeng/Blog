<template>
	<div class="wrapper">
		<head-top></head-top>
		<section class="model-container">
				<header id="class-title">
					<h2 id="CHS">{{typeSelect[Type]}}</h2>
					<span id="ENG">{{Type}}</span>
				</header>
				<article id="main" v-html="content">
				</article>
			</section>
			<foot></foot>
	</div>
</template>
<script>
	import HeadTop from './headtop'
	import Foot from './foot'
	export default {
		name:'article',
		components:{
			HeadTop,Foot
		},
		data() {
			return {
				Id:'',
				content:'',
				typeSelect:{
					'Technology':'前端',
					'LifeStyle': '生活',
					'Reading':'读后感'
				}
			}
		},
		created() {
			this.Id = this.$route.query.ID;
			this.Type = this.$route.query.type;
		},
		mounted() {
			this.getessay();
		},
		methods:{
			getessay() {
				this.$http.post('/api/getEssay',{Id:this.Id}).then((res)=>{
					this.content = `<h2>${res.body.essay.title}</h2><time class="time">${res.body.essay.time}</time>${res.body.essay.content}`;
				},(res)=>{
					console.log(res);
				});
			}
		}
	}
</script>
<style>
.wrapper{
	height: 100%;
}
.model-container{
	width: 65%;
	min-width: 750px;
	margin:0 auto;
	background-color: #fff;
	margin-bottom: 130px;
	padding-bottom: 40px;
    border-bottom: 1px solid #e7e7e7;
}
.time{
	display: block;
	padding-bottom:20px;
}
#class-title{
	height: 100px;
	text-align: center;
}
#class-title h2{
	font-size: 25px;
	padding-top: 20px;
	font-weight: 300;
	color: #adadad;
}
#class-title span{
	color: #ddd;
}
#main h2{
	font-size: 30px;
	font-weight: 300;
	padding-bottom: 20px;
}
#main p{
	padding-bottom: 20px;
	font-size: 16px;
}
#main h3{
	font-size: 27px;
	font-weight: 300;
	padding-bottom: 20px;
}
#main pre{
	background-color:#f1f0ea;
	border-radius: 3px;
	padding: 10px 15px;
	margin: 0;
	font-family: Consolas,"Liberation Mono",Menlo,Courier,monospace;
	margin-bottom: 30px;

}
blockquote{
	margin-bottom: 20px;
}
#main a:hover{
	color:#949494;
}
#main img{
	max-width: 100%;
	height: auto;
}
</style>
