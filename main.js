let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

let app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Вы загрузили эту страницу в ' + new Date().toLocaleString()
    }
})

let app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

let app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { text: 'message 1'},
            { text: 'message 2'},
            { text: 'message 3'},
        ]
    }
})

let app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hello Vue.js',
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

let app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Привет Vue.js'
    },
})
