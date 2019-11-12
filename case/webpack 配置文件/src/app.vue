
<template>
	<div>
		<Header></Header>
		<todo></todo>
		<Footer></Footer>
	</div>
</template>


<script>
	
	//导入组件
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"
import todo from "./components/todo.vue"
	
	
	
	export default {
		components:{
			Header,
			Footer,
			todo
		}
	}
	
</script>

<style>
	h1{
		transform: rotateZ(10deg);
		text-align: center;
		background-color: cornflowerblue;
	}
</style>