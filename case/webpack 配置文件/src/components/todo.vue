<template>
	<div>
		<input type="text"
			autofocus="autofocus"  
			placeholder="添加任务"
			class="layui-input"
			v-on:keyup.enter="addItem"
		 />
		 
		 <tabs
			v-bind:filter="filter"
			v-on:toggle="toggleFilter"
			v-on:clearAll="clearAll"
			v-bind:todos="todos"
		></tabs>
		 
		<item
			v-for ="todo in filterTodos"
			v-bind:todo="todo"
			v-bind:key="todo.id"
			v-on:del="deleteTodo"
			></item>
			
		
	</div>
	
	
</template>

<script>
	import item from "./item.vue" 
	import tabs from "./tabs.vue"
	
	export default{
		
		data (){
				return {
					todos:[],
					filter:"所有项目",
					id:0
				}
		},
		methods:{
			addItem(e){
				if(e.target.value){
					console.log("用户已经输入了基本信息")
					this.todos.unshift({
						id:this.id++,
						text:e.target.value.trim(),
						completed:false
					})
				}
				e.target.value =""
			},
			deleteTodo(id){
				this.todos.forEach(todo=>{
					if(this.id===id){
						todo.completed=true
					}
				})
			},
			toggleFilter(state){
				this.filter=state
			},
			clearAll(){
				this.todos =this.todos.filter(todo=>!todo.completed);
			}
		},
		components:{
			item,
			tabs
		},
		computed:{
			filterTodos(){
				let finalTodos=this.todos;
				switch(this.filter){
					case "所有项目":
						finalTodos=this.todos;
						break;
					case "已完成":
						finalTodos=this.todos.filter(todo=>todo.completed);
						break;
					case "未完成":
						finalTodos=this.todos.filter(todo=>todo.completed);
						break;
				}
				return finalTodos;
			}
		}
	};
	
</script>

<style>
</style>