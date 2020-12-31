<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<p>
			{{ cpf | formatCPF }}
		</p>
	</div>
</template>

<script>
export default {

	filters: {
		formatCPF(cpf)
		{
			let cpfArray = cpf.split('')
			cpfArray.splice(3, 0, '.')
			cpfArray.splice(7, 0, '.')
			cpfArray.splice(11, 0, '-')

			return cpfArray.join('')
		}
	},

	data()
	{
		return {
			cpf: '00011122233'
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
