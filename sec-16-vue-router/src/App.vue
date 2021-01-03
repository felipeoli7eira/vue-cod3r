<template>
	<div id="app">
		<!-- <NavBar /> -->
		<router-view name="menu" />
		<transition mode="out-in" enter-active-class="animated rubberBand" leave-active-class="animated rollOut">
			<router-view />
		</transition>
		<router-view name="menuFooter" />
	</div>
</template>

<script>

	// import NavBar from '@/components/NavBar'

export default {

	// components: { NavBar }
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
