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

# [ 12 ] Filtros e Mixins

## Filtros

Filtros são funções que recebem um valor, e executam algum procedimento em cima desse valor recebido e devolvem uma resposta (básicamente são helpers que você escreve).

Examplo:

```
    export default {

        filters: {

            formatCPF(arg)
            {
                let arrayCPF = arg.split('')
                arrayCPF.splice(3, 0, '.')
                arrayCPF.splice(7, 0, '.')
                arrayCPF.splice(11, 0, '-')

                return arrayCPF.join('')
            }
        },

        data()
        {
            return {
                cpf: '00011122233'
            }
        }
    }

    Chamando esse filtro:

    <p>{{ cpf | formatCPF }} </p>
```

## Registrando um filtro de forma Global
```
    Vue.filter('inverter', (args) => {
        retur args.split('').reverse().join('')
    })


    usando:


    <p> {{ 'Felipe' | inverter }} </p>
```

# Nota:
Os filtros podem ser encadeados ( {{ 'string' | Fil | Fil | Fil }} ) e com isso o resultado de cada filtro vai sendo passado para o próximo e assim por diante

#Mixins

Mixins são uma alternativa de re-uso de código em diversos componentes VueJs. Na prátiva, é um arquivo .js com todas as lógicas do VueJS:

```
    Mixin.js

    export default {

        data()
        {
            code...
        },

        computed: {
            code...
        },

        created()
        {
            console.log('mixin code created')
        }
    }


    App.vue

    import Mixin from '@/Mixin'

    export default {

        mixins: [ Mixin ]
    }
```

Com isso o código dos arquivos App.vue e Mixin.js serão misturados.

# [ 16 ] Vue Router

instalação:

Crie um arquivo routes.js e importe ele no main.
O arquivo routes.js deverá importar o Vue, Vue Router e os componentes que deveão ser gerenciados pelo Vue Router.


routes.js
```
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import User from '@/components/user/User'
```

Agora é preciso setar o Vue Router como o roteador da aplicação vue com o comando ```Vue.use(Router)```

```
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import User from '@/components/user/User'

Vue.use(Router)
```

Feito isso, agora é preciso exportar o módulo de rotas para que no mainJS seja colocado as rotas dentro da instância Vue. Mas antes disso é preciso de fato criar as rotas da aplicação e setar as responsabilidades de cada uma para cada componente.

```
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import User from '@/components/user/User'

Vue.use(Router)

export default new Router(
    {
        mode: 'hash', // or history
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path: '/usuario',
                component: User
            }
        ]
    }
)
```
Pronto! agora basta ir no mainJs colocar as rotas dentro da instância VueJS.

```
import AppRoutes from '@/routes'

new Vue({
  router: AppRoutes,
  render: h => h(App),
}).$mount('#app')
```

## ```<router-view />```
A tag ```<router-view />``` é usada para identificar a parte de um componente onde vai acontecer a navegação do app.

## ```<router-link />```
A tag ```<router-link />``` é usada para criar um link de navegação ao estilo SPA (não carregando a página). Algumas props podem ser passadas nessa tag:

```
<router-link to="/" exact tag="" active-class="">
    <a>home</a>
</router-link>
```