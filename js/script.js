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
            if(this.newTodo.text.trim()) {
                this.newTodo.text = this.newTodo.text.trim();
                const newObj = {...this.newTodo};
                this.todos.push(newObj);
                this.newTodo.text = '';
            } 
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        toggleTodo(todo) {
            todo.done = !todo.done;
        },
    },
})