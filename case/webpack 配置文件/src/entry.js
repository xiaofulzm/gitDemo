import Vue from "vue"
import app from "./app.vue"
import "@babel/polyfill"


let ele = new Vue({
	render: function (createElement,context){
		return createElement(app)
	}
})



ele.$mount("#app")
