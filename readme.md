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

# [ Recursos vue ]

```
    watch: {

        user: {
            deep: true,
            handler() {
                code...
            }
        }
    }
```

### Midificadores de evento

```
    <input v-model.lazy="func()" /> quando o elemento perde o foco

    <input v-model.trim="func()" /> remove espaços em branco antes e depois da string

    <input v-model.number="func()" /> converte uma string numérica em número
```

### Trabalhar com checkbox no Vue
para trabalhar com checkbox no Vue, é preciso fazer com que cada uma das opções existentes de checagem, apontem para um mesmo array em data()
```
    <input type="checkbox" v-model="boxes" name="box" value="one" />

    <input type="checkbox" v-model="boxes" name="box" value="two" />

    data() {
        return {
            boxes: []
        }
    }
```

### Trabalhar com radio button no Vue
Para trabalhar com radio button no Vue, é preciso fazer com que cada uma das opções existentes de checagem, apontem para o mesmo atributi em data()
```
    <input type="radio" v-model="opc" name="opc" value="one" />

    <input type="radio" v-model="opc" name="opc" value="two" />

    data() {
        return {
            opc: 'default'
        }
    }
```

### Trabalhar com select no Vue
Para trabalhar com ```<select>...</select>``` no Vue, é preciso ter um array em data() onde cada chave desse array vai ser um ```<option>...</option>```, e ter um atributo separado desse array que vai guardar o valor do option selecionado. Além disso é preciso setar o v-model no ***select*** e não no option:

```
    <select v-model="selectedOption">
        <option v-for="option in options" :key="option.val" :value="option.val">
            {{ option.label }}
        </option>
    </select>

    data() {
        return {
            options: [
                { val: 1, label: 'vue' },
                { val: 2, label: 'react' },
                { val: 3, label: 'angular' }
            ],

            selectedOption: 1 /* default */
        }
    }
```

# [ 12 ] Usando e criando diretivas personalizadas

No Vue é possível criar as própias diretivas de uma maneira muito simples. No arquivo main.js em src/ basta escrever o seguinte:

```
    Vue.directive('estilo',
        {
            bind(el, binding, vnode)
            {
                code...
            }
        }
    )

    Vue.directive('estilo',
        {
            bind(el, binding, vnode)
            {
                el.style.backgroundColor = 'red'
            }
        }
    )

    Vue.directive('estilo',
        {
            bind(el, binding, vnode)
            {
                el.style.backgroundColor = binding.value'
            }
        }
    )
```
Agora qualquer elemento com a diretiva ```v-estilo``` será afetado pelo código dessa diretiva.

```
    <p v-estilo="'red'">Usando a diretiva v-estilo</p>
```

## Estrutura de uma diretiva:

```
    v-nome:argumento.modificador.outroModificador.etc="valor"
```

### Pegando o argumento passado na diretiva:

```
Vue.directive('cor'
    {
        bind(el, binding, vnode)
        {
            if (binding.arg.cor === 'background')
            {
                code...
            }
            else
            {
                code...
            }
        }
    }
)
```

### Pegando os modificadores passados na diretiva:

```
Vue.directive('cor'
    {
        bind(el, binding, vnode)
        {
            if (binding.modifiers['timeOut'])
            {
                setTimeOut(
                    () => {
                        el.style.color = 'red'
                    },
                    1000
                )
            }
        }
    }
)
```

## Registrando uma diretiva localmente
Para registrar localmente uma diretiva, basta criar o atributo "directives" no objeto exportado nos arquivos .vue e definir como valor outro objeto com os nomes das diretivas:

```
<script>

    export default {

        data()
        {
            return {...}
        },

        /* assim -> */ directives: {

            estilo: {
                bind(el, binding, vnode)
                {
                    el.backgroundColor = 'red'
                }
            }
        },

        methods: {
            code...
        }
    }

</script>
```