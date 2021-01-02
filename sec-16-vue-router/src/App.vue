<template>
	<div id="app">
		<NavBar />
		<router-view></router-view>
	</div>
</template>

<script>

	import NavBar from '@/components/NavBar'

export default {

	components: { NavBar }
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
