<template>
	<header class="header">
		<div class="head">
			<div class="logo">Yoriluo</div>
			<nav>
				<ul class="clr">
					<li class="nav-list"><a class="nav-a"  data-type="AboutMe">关于我</a><span></span></li>
					<li class="nav-list"><a class="nav-a essayType" @click="getType($event)" data-type="Reading">读后感</a><span></span></li>
					<li class="nav-list"><a class="nav-a essayType" @click="getType($event)" data-type="LifeStyle">生活</a><span></span></li>
					<li class="nav-list"><a class="nav-a essayType" @click="getType($event)" data-type="Technology">前端</a><span></span></li>
					<li class="nav-list"><a class="nav-a essayType" @click="getType($event)" data-type="Index">首页</a><span></span></li>
				</ul>
			</nav>
		</div>
	</header>
</template>
<script>
	export default{
		name:'haed',
		data(){
			return{
				type:'Index'
			}
		},
		methods:{
			getType:function(evt){
				this.$emit('navtype',evt.target.getAttribute('data-type'));
				if(this.$route.path == '/article'){
					location.href = `/?type=${evt.target.getAttribute('data-type')}`;
				}
			}
		}
	}
</script>
<style scoped>
.header {
	height: 100px;
    font-size: 13px;
    background-color: #2a373d;
}
.head {
	width: 65%;
	min-width:750px;
	height: 100%;
	margin: 0 auto;
}
.logo{
	height: 40px;
    width: 123px;
    color: #fff;
    line-height: 40px;
    padding: 30px 0;
    font-weight: 300;
    float: left;
    font-size: 38px;
}
.head nav {
	float: right;
	width: 410px;
	height: 100%;
}
.head nav ul{
	height: auto;
	padding:40px 0;
}
.nav-list {
	position: relative;
	float: right;
	padding: 0 22px;
	margin: 0 3px;
	font-family: Microsoft JhengHei,Microsoft Yahei;
}
.nav-list span{
	position: absolute;
	left: 0;
	top: 28px;
	height: 1px;
	width: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	transition:width .4s;
	background-color: #cc9900;
}
.nav-list:hover a{
	color:#cc9900;
	cursor: pointer;
}
.nav-list:hover span{
	width: 100%;
}

</style>
