<template>
  <div class="container">
    <h1 class="my-4">To-Do List</h1>
    <form @submit.prevent="addTodo">
      <div class="input-group mb-3">
        <input v-model="newTodo" type="text" class="form-control" placeholder="Add a new task" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">Add</button>
        </div>
      </div>
    </form>
    <ul class="list-group">
      <li v-for="(todo, index) in sortedTodos" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center" :class="{ completed: todo.completed }">
        <div class="todo-item">
          <div v-if="editIndex === index" class="edit-form">
            <input v-model="editTodo" @keyup.enter="updateTodo(index)" type="text" class="form-control" />
            <button class="btn btn-primary btn-sm" @click="updateTodo(index)">Save</button>
            <button class="btn btn-secondary btn-sm" @click="cancelEdit">Cancel</button>
          </div>
          <div v-else class="todo-text">
            <input type="checkbox" v-model="todo.completed" @change="updateTodoStatus(index)" />
            <span>{{ todo.what }}</span>
            <div class="button-group">
              <button class="btn btn-warning btn-sm" @click="editTask(index, todo.what)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="removeTodo(index)">Remove</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue';

export default defineComponent({
  name: 'ToDoList',
  setup() {
    const newTodo = ref('');
    const editTodo = ref('');
    const editIndex = ref<number | null>(null);
    const todos = ref<{ id: number, what: string, completed: boolean }[]>([]);

    const addTodo = async () => {
      if (newTodo.value.trim() !== '') {
        const todo = {
          what: newTodo.value,
          completed: false
        };
        try {
          const response = await fetch('http://localhost:8080/api/v1/todos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
          });
          if (response.ok) {
            const data = await response.json();
            todos.value.push(data);
            newTodo.value = '';
            sortTodos();
          } else {
            console.error('Failed to add todo:', response.statusText);
          }
        } catch (error) {
          console.error('Error adding todo:', error);
        }
      }
    };

    const removeTodo = async (index: number) => {
      const todoId = todos.value[index].id;
      try {
        const response = await fetch(`http://localhost:8080/api/v1/todos/${todoId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          todos.value.splice(index, 1);
        } else {
          console.error('Failed to remove todo:', response.statusText);
        }
      } catch (error) {
        console.error('Error removing todo:', error);
      }
    };

    const loadTodos = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/todos');
        const data = await response.json();
        todos.value = data;
        sortTodos();
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    };

    const sortTodos = () => {
      todos.value.sort((a, b) => {
        if (a.completed === b.completed) {
          return b.id - a.id;
        }
        return a.completed ? 1 : -1;
      });
    };

    const editTask = (index: number, what: string) => {
      editIndex.value = index;
      editTodo.value = what;
    };

    const updateTodo = async (index: number) => {
      const todoId = todos.value[index].id;
      const updatedTodo = {
        id: todoId,
        what: editTodo.value,
        completed: todos.value[index].completed
      };
      try {
        const response = await fetch(`http://localhost:8080/api/v1/todos/${todoId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedTodo)
        });
        if (response.ok) {
          todos.value[index].what = editTodo.value;
          editIndex.value = null;
          editTodo.value = '';
          sortTodos();
        } else {
          console.error('Failed to update todo:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };

    const updateTodoStatus = async (index: number) => {
      const todoId = todos.value[index].id;
      const updatedTodo = {
        id: todoId,
        what: todos.value[index].what,
        completed: todos.value[index].completed
      };
      try {
        const response = await fetch(`http://localhost:8080/api/v1/todos/${todoId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedTodo)
        });
        if (response.ok) {
          sortTodos();
        } else {
          console.error('Failed to update todo status:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating todo status:', error);
      }
    };

    const cancelEdit = () => {
      editIndex.value = null;
      editTodo.value = '';
    };

    const sortedTodos = computed(() => {
      return [...todos.value];
    });

    watch(todos, () => {
      sortTodos();
    });

    onMounted(() => {
      loadTodos();
    });

    return {
      newTodo,
      editTodo,
      editIndex,
      todos,
      sortedTodos,
      addTodo,
      removeTodo,
      editTask,
      updateTodo,
      updateTodoStatus,
      cancelEdit
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 600px;
}

.todo-item {
  width: 100%;
}

.todo-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group {
  display: flex;
  gap: 10px;
}

.edit-form {
  display: flex;
  gap: 10px;
  width: 100%;
}

.edit-form input {
  flex: 1;
}

.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
