# [ 7 ] Introdução aos componentes 

#### O que é um componente?

Um componente é um arquivo de extensão **.vue** que tem o seguinte formato:

```
    <template>
    </template>

    <script>
    </script>

    <stype>
    </style>
```

#### Como usar um componente?

Para usar um componente é preciso importa-lo e registra-lo como sendo de uso do arquivo que está importando. Para registrar um componente existem duas maneiras: globalmente e localmente.

Registrando um componente de forma global, qualquer outro componente terá acesso ao mesmo sem que seja preciso importa-lo. Para isso basta que no arquivo main.js esse componente seja importado e registrado da seguinte maneira:

```
import MyComponent from './MyComponent.vue'

Vue.component('MyComponent', MyComponent)
```



# [ 8 ] Comunicação entre componentes

#### Comunicação direta

A comunicação direta entre componente pai e componente filho se dá através de propriedades (*props*).

Para que isso seja feito, o componente filho precisa dizer explicitamente que quer receber propriedades e

quais são essas propriedades.

**Pai.vue**

```
<template>
	<Filho :name="felipe">
</template>
```

**Filho.vue**

```
<template>
    {{ name }}
</template>

<script>
	export default {
       props: ['name']
    }
</script>
```

#### As propriedades são manipuladas como qualquer outro dado dentro de data()

##### Tipagem de props

```
props: {
	users: [String, Object]
	
	users: {
		type: String,
        required: true
    }

    users: {
		type: String,
        required: true,
        default: '...'
    }

     
    users: {
		type: String,
        required: true,
        default: function() {
          ...code
	   	}
	}
```

#### Comunicação indireta de filho para pai

A comunicação direta entre pai e filho se dá através das *props*, já quando há a necessidade de o filho se comunicar com o pai, umas das soluções para isso é o filho emitir um evento personalizado que o pai vai ficar escutando e quando acontecer, vai tratar e fazer alguma coisa.

##### Filho.vue

```
<button @click="emitEvent">emit event</button>

methods: {
    emitEvent() {
    	this.$emit('eventName', data... )
    }

}
```

##### Pai.vue

```
<Filho @eventName="data = $event">
```



#### Callbacks

Outra estratégia para fazer a comunicação do filho pro pai, é usando *callback*. No pai, cria-se uma *function* que será passada para o filho e em determinado momento o filho vai executar essa função que o pai passou.

##### Pai.vue

```
methods: {
	callback()
    {
    	console.log('pai callback')
    }
}
```

##### Filho.vue

```
<button @click="callbackPai">exec callback</button>

props: {
	callback: {
    	type: Function
    }
},

methods: {
	callbackPai()
	{
		this.callback()
	}
}
```



#### Comunicação entre componentes distantes via Barramento

Uma estratégia usada quando é preciso fazer a comunicação entre componente distantes mas sem ficar emitindo vários eventos, é usar Barramento.

**Mas o que é barramento?**

Barramento é nada mais nada menos que uma instância *Vue* compartilhada.

Cria-se um arquivo **.js** (*EventBus.js*) pode ser direto no /src que vai apenas exportar uma nova instância *Vue*:

#### EventBus.js

```
import Vue from 'vue'
export default new vue()
```

Agora qualquer componente poder usar essa instância para tanto escutar eventos, quanto emiti-los.

```
EventBus.$emit('eventName', data...)

EventBus.$on('eventName', (data => console.log(data)))
```



# [ 9 ] Uso avançado de componente 

##### Passando dados de um componente para outro via corpo (slot)

Quando algum conteúdo é passado para um componente filho por dentro do corpo da tag do componente pai, significa que o componente está recebendo conteúdo via slot.

##### Pai.vue

```
<Pai>
	<p>hello</p>
</Pai>
```

##### Filho.vue

```
<template>
	<div>
    	<slot />
    </div>
</template>
```

#####  Nomeando slots

```
<Pai>
	<p slot="author">Felipe</p>
    <p slot="text">hello world</p>
    <p slot="email">felipe@gmail.com</p>
</Pai>
```

##### Filho.vue

```
<template>
	<div>
	    <slot name="author" />
        <slot name="text" />
        <slot name="email" />
    </div>
</template>
```

##### Slot nomeado com slot padrão

É possível usar slot nomeado com slot padrão, mas o conteúdo que será substituído no slot padrão será o conteúdo que não tiver sido nomeado no componente que está passando os dados.

##### Componente dinâmico

Componente dinâmico é uma estratégia para renderizar um ou outro componente baseado em uma condição.

```
<component :is="componenteRender">

data() {
	return {
	    componenteRender: 'MyComponent'
    }
}
```

Obs: os componentes por default sempre são criados e destruídos pelo *Vue*. Para evitar esse comportamento basta envolver o componente na *tag* **keep-alive**:

```
<keep-alive>
	<MyComponent />
</keep-alive>
```



Fazendo isso o componente não será mais destruído ou criado, ele vai apenas aparecer e desaparecer da tela, com isso os métodos de ciclo de vida desse componente não funcionarão mais. Uma das vantagens de se fazer isso é que mesmo que o componente saia de tela, ele mantem o seu state. Para usar algo equivalente aos métodos de ciclo de vida do componente basta trocar created() por activated() e destroyed() por deactivated()

```
<component :is="MyComponent" />

return {
	activated() {
	    console.log('activated')
    },

    deactivated() {
	    console.log('deactivated')
	}
}
```