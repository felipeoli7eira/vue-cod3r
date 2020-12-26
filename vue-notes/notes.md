[ 7: Introdução aos componentes ]

	1.0 O que é um componente?

	Um componente é um arquivo de extensão .vue que contém 3 tags: <template> para marcação html, <script> para
	estádo métodos e toda lógica do componente <style> para o estilo css do componente.

	1.1 Como usar um componente?

	Para usar um componente é preciso registra-lo. Para registrar um componente existem duas maneiras: globalmente e localmente.
	Registrando um componente de forma
	global, qualquer outro componente terá acesso ao mesmo e para isso basta importa-lo no arquivo main.js e registra-lo
	da seguinte maneira:

	import MyComponente from './MyComponent.vue'

	Vue.component('MyComponent', MyComponent)
