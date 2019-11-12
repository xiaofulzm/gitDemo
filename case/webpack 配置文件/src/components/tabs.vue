<template>
	<div>
		<button>{{unfinishTtem}}个未完成项目</button>
		<button 
			v-for="state in states"
			 v-bind:key="state"
			 v-on:click="toggleFilter(state)"
			 >{{state}}</button>
		<button v-on:click="clearAll(state)">清除已完成事件</button>
	</div>
</template>
	
<script>
	export default{
		props:{
			todos:{
				type:Array,
				required:true
			},
			filter:{
				type:String,
				required:true
			}
		},
		data(){
			return {
				states:[
					"所有项目",
					"已完成",
					"未完成"
				]
			}
		},
		computed:{
			unfinishTtem(){
				return this.todos.filter(todo=>!todo.completed).length
			}
		},
		methods:{
			toggleFilter(state){
				this.$emit("toggle",state)
			},
			clearAll(){
				this.$emit("clearAll")
			}
		}
	}
	
</script>

