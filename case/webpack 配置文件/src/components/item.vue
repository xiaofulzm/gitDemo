<template>
	<div>
		<input type="checkbox" name="" id="" v-model="todo.completed"  />
		<span>{{todo.text}}</span>
		<button v-on:click="deleteTodo">完成</button>
	</div>
</template>

<script>
	export default {
		props:{
			todo:{
				type:Object,
				required:true
			}
		},
		methods:{
			deleteTodo(){
				this.$emit("del",this.todo.id)
			}
		}
	}
	
</script>

<style>
</style>