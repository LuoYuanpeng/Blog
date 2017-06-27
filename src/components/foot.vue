<template>
	<footer :class="footer">
		Copyright ©2017  Yoriluo
	</footer>
</template>
<script>
	export default {
		name:'foot',
		data() {
			return {
				footer:'Autofooter',
			}
		},
		props:["essayNum"],
		watch: {
			essayNum(val) {
				this.footer = val ==0 ? "Heightfooter" : "Autofooter";
			}
		}
	}
</script>
<style scoped>
.Autofooter{
	height: 170px;
	background-color: #efefef;
	text-align: center;
	line-height: 100px;
	color: #bebebe;
	margin-top: 100px;
	font-size: 14px;
	font-weight: 300;
}
.Heightfooter{
	position: fixed;
	bottom: 0;
	height: 170px;
	width: 100%;
	background-color: #efefef;
	text-align: center;
	line-height: 100px;
	color: #bebebe;
	font-size: 14px;
	font-weight: 300;
}
</style>
