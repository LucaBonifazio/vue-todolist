new Vue ({
    el: '#root',
    data: {
        newTodo: {
            text: '',
            done: false,
        },
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
            this.todos.push({...this.newTodo});
            this.newTodo.text = '';
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        toggleTodo(todo) {
            todo.done = !todo.done;
        },
    },
})