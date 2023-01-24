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
            newToDo: {
                text: '',
                done: false
            }
        }
    },
    methods: {
        deleteToDo: function (index) {

            this.todos.splice(index, 1);
            console.log(this.todos);
        },
        addToDo () {


            if (this.inputUser != '') {
                this.newToDo.text = this.inputUser;
                this.todos.push(this.newToDo);
                console.log(this.todos);

                this.inputUser = '';
            }
            else {
                // altrimenti non fare niente
            }
            

            

        },
    }
}
).mount('#app')

