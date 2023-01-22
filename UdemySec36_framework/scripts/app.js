const TodosApp = {
  data() {
    return {
      todos: [],
      enteredTodoText: "",
      editedTodoId: null,
    };
  },
  methods: {
    async saveTodo(event) {
      event.preventDefault();

      if (this.editedTodoId) {
        const todoId = this.editedTodoId;
        const todoIndex = this.todos.findIndex(function (todoItem) {
          return todoItem.id === this.editedTodoId;
        });

        const updateTodoItem = {
          id: this.todos[todoIndex].id,
          text: this.enteredTodoText,
        };

        this.todos[todoIndex] = updatedTodoItem;
        this.editedTodoId = null;
      } else {
        const newTodo = {
          text: this.enteredTodoText,
          id: new Date().toISOString(),
        };
        this.todos.push(newTodo);
      }

      this.enteredTodoText = "";
    },

    deleteTodo(todoId) {
      this.todos = this.todos.filter(function (todoItem) {
        return todoItem.id !== todoId;
      });
    },

    startEditTodo(todoId) {
      this.editedTodoId = todoId;
      const todo = this.todos.find(function (todoItem) {
        return todoItem.id === todoId;
      });
      this.enteredTodoText = todo.Text;
    },
  },

  created() {},
};

Vue.createApp(TodosApp).mount("#todos-app");
