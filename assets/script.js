const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            inputError: false,
            todos: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Lavare i panni',
                    done: false,
                },
                {
                    text: 'Avviare lavatrice',
                    done: true,
                },
                {
                    text: 'Andare in palestra',
                    done: false,
                },
                {
                    text: 'Prepare borsa',
                    done: false,
                },
                 {
                    text: 'Ricordati di mangiare',
                    done: true,
                },
                {
                    text: 'Cucinare',
                    done: false,
                },
                {
                    text: 'Lodare il sole',
                    done: true,
                },
                {
                    text: 'Camminare',
                    done: true,
                }
            ],

        };
    },
    methods: {
        addTodo() {
            let cleanedTodo = this.newTodo.trim();
            if (cleanedTodo.length >= 5) {
                this.todos.unshift(cleanedTodo);
                this.newTodo = '',
                    this.inputError = false;
            } else {
                this.inputError = true;
            }
        },
        deleteItem(index) {
            this.todos.splice(index, 1);
        }
    }
});

app.mount('#root')
