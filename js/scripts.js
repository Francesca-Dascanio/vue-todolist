const { createApp } = Vue;

createApp ({

    data () {

        return {
            todos: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Fare il bucato',
                    done: false,
                },
                {
                    text: 'Fare i compiti',
                    done: false,
                },
                {
                    text: 'Ascoltare musica',
                    done: false,
                }
            ],
            inputUser: '',
        }
    },
    methods: {
        deleteToDo: function (index) {

            this.todos.splice(index, 1);
            console.log(this.todos);
        }
    }
}
).mount('#app')

