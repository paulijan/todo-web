<template>
  <div class="container d-flex flex-column justify-content-center align-items-center min-vh-100">
    <div class="w-100">
      <h1 class="my-4 text-center">Just Do It</h1>
      <form @submit.prevent="addTodo">
        <div class="input-group mb-3">
          <input v-model="newTodo" type="text" class="form-control" placeholder="Neue Aufgabe hinzufügen" />
          <button class="btn btn-primary" type="submit">Hinzufügen</button>
        </div>
      </form>
      <div class="mb-3">
        <input v-model="filter" type="text" class="form-control" placeholder="Aufgaben filtern" />
      </div>
      <div class="mb-3 d-flex justify-content-between">
        <select v-model="sortOption" class="form-select">
          <option value="default">Sortieren nach</option>
          <option value="completed">Erledigt</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
      <ul class="list-group">
        <li
          v-for="(todo, index) in filteredAndSortedTodos"
          :key="todo.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div class="todo-item w-100 d-flex justify-content-between align-items-center">
            <div v-if="editIndex === index" class="edit-form d-flex">
              <input v-model="editTodo" @keyup.enter="updateTodo(index)" type="text" class="form-control mr-2" />
              <button class="btn btn-primary btn-sm mr-2" @click="updateTodo(index)">Speichern</button>
              <button class="btn btn-secondary btn-sm" @click="cancelEdit">Abbrechen</button>
            </div>
            <div v-else class="d-flex justify-content-between align-items-center w-100">
              <div class="d-flex align-items-center">
                <input type="checkbox" v-model="todo.completed" @change="updateTodoStatus(index)" />
                <span :class="{ completed: todo.completed }" class="ml-2">{{ todo.what }}</span>
              </div>
              <div class="button-group d-flex">
                <button class="btn btn-warning btn-sm mr-2" @click="editTask(index, todo.what)">✏️</button>
                <button class="btn btn-danger btn-sm" @click="removeTodo(index)">🗑️</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';

const BACKEND_BASE_URL = import.meta.env.VUE_APP_BACKEND_BASE_URL || 'http://localhost:8080';

export default defineComponent({
  name: 'ToDoList',
  setup() {
    const newTodo = ref('');
    const editTodo = ref('');
    const editIndex = ref<number | null>(null);
    const filter = ref('');
    const sortOption = ref('default');
    const todos = ref<{ id: number; what: string; completed: boolean }[]>([]);

    const addTodo = async () => {
      if (newTodo.value.trim() !== '') {
        const todo = {
          what: newTodo.value,
          completed: false,
        };
        try {
          const response = await fetch(`${BACKEND_BASE_URL}/api/v1/todos`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
          });
          if (response.ok) {
            await loadTodos();
            newTodo.value = '';
          } else {
            console.error('Fehler beim Hinzufügen der Aufgabe:', response.statusText);
          }
        } catch (error) {
          console.error('Fehler beim Hinzufügen der Aufgabe:', error);
        }
      }
    };

    const removeTodo = async (index: number) => {
      const todoId = todos.value[index].id;
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/api/v1/todos/${todoId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          await loadTodos();
        } else {
          console.error('Fehler beim Entfernen der Aufgabe:', response.statusText);
        }
      } catch (error) {
        console.error('Fehler beim Entfernen der Aufgabe:', error);
      }
    };

    const loadTodos = async () => {
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/api/v1/todos`);
        const data = await response.json();
        todos.value = data.map((todo: any) => ({ ...todo, id: Number(todo.id) }));
      } catch (error) {
        console.error('Fehler beim Laden der Aufgaben:', error);
      }
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
        completed: todos.value[index].completed,
      };
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/api/v1/todos/${todoId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTodo),
        });
        if (response.ok) {
          await loadTodos();
          editIndex.value = null;
          editTodo.value = '';
        } else {
          console.error('Fehler beim Aktualisieren der Aufgabe:', response.statusText);
        }
      } catch (error) {
        console.error('Fehler beim Aktualisieren der Aufgabe:', error);
      }
    };

    const updateTodoStatus = async (index: number) => {
      const todoId = todos.value[index].id;
      const updatedTodo = {
        id: todoId,
        what: todos.value[index].what,
        completed: todos.value[index].completed,
      };
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/api/v1/todos/${todoId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTodo),
        });
        if (response.ok) {
          await loadTodos();
        } else {
          console.error('Fehler beim Aktualisieren des Aufgabenstatus:', response.statusText);
        }
      } catch (error) {
        console.error('Fehler beim Aktualisieren des Aufgabenstatus:', error);
      }
    };

    const cancelEdit = () => {
      editIndex.value = null;
      editTodo.value = '';
    };

    const filteredAndSortedTodos = computed(() => {
      let filteredTodos = todos.value.filter(todo => todo.what.toLowerCase().includes(filter.value.toLowerCase()));

      switch (sortOption.value) {
        case 'completed':
          filteredTodos = filteredTodos.filter(todo => todo.completed);
          break;
        case 'a-z':
          filteredTodos = filteredTodos.sort((a, b) => a.what.localeCompare(b.what));
          break;
        case 'z-a':
          filteredTodos = filteredTodos.sort((a, b) => b.what.localeCompare(a.what));
          break;
        default:
          break;
      }

      return filteredTodos;
    });

    onMounted(() => {
      loadTodos();
    });

    return {
      newTodo,
      editTodo,
      editIndex,
      filter,
      sortOption,
      todos,
      filteredAndSortedTodos,
      addTodo,
      removeTodo,
      editTask,
      updateTodo,
      updateTodoStatus,
      cancelEdit,
    };
  },
});
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
