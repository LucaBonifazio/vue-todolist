new Vue ({
    el: '#root',
    data: {
        newTodo: '',
        done: false,
        todos: [
            {
                text: 'pasta',
                done: '',  
            },
            {
                text: 'carne',
                done: '',  
            },
            {
                text: 'verdura',
                done: '',  
            },       
        ],
    },
    methods: {
        addNewTodo() {
            this.todos.push({text: this.newTodo});
            this.newTodo = '';
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        toggleTodo(todo) {
            todo.done = !todo.done;
        },
    },
})