// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Page from './components/page'
import Article from './components/article'
import WriteEssay from './components/write'
import './assets/css/common.css'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
	mode:'history',
	routes:[{
		path:'',
		name:'index',
		component:Page
	},{
		path:'/article',
		name:'article',
		component:Article
	},{
		path:'/essay',
		name:'essay',
		component:WriteEssay
	}]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
