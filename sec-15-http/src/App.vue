<template>
	<div id="app" class="container">
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="user.name"></b-form-input>
			</b-form-group>

			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg" v-model="user.email"></b-form-input>
			</b-form-group>
		</b-card>
		<b-button @click="send" size="lg" variant="primary">send</b-button>
		<b-button @click="getUsers" size="lg" variant="success">get</b-button>

		<b-list-group>
			<b-list-group-item v-for="(user, id) in users" :key="id">
				<strong>Nome: {{ user.name + ' | ' + id		 }}</strong> <br>
				<strong>E-mail: {{ user.email }}</strong>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default { /* eslint-disable */

	data()
	{
		return {
			users: [],
			user: {
				name: '',
				email: ''
			}
		}
	},

	methods: {

		send()
		{
			this.$http.post('users.json', this.user).then(response => {
				this.user.name  = ''
				this.user.email = ''
			}).catch(error => console.warn(error))
		},

		getUsers()
		{
			this.$http.get('users.json')
			.then(resData => {
				this.users = resData.data
			})
			.catch(error => console.log(error))
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
