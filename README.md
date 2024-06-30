# README

## Just Do It - ToDo Application

### Overview

"Just Do It" is a simple and efficient ToDo application built using Vue 3 and TypeScript. The application allows users to add, edit, delete, filter, and sort tasks. The tasks are managed through a backend API.

### Features

- **Add Tasks:** Add new tasks to your list.
- **Edit Tasks:** Modify existing tasks.
- **Delete Tasks:** Remove tasks from your list.
- **Filter Tasks:** Filter tasks based on keywords.
- **Sort Tasks:** Sort tasks by completion status, alphabetical order (A-Z, Z-A).

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd todo-web

2. **
### Usage

**Adding a Task:**

Enter a task in the input field at the top and click "Hinzufügen".

**Editing a Task:**

Click the ✏️ button next to a task, modify the task, and click "Speichern".

**Deleting a Task:**

Click the 🗑️ button next to a task to remove it.

**Filtering Tasks:**

Use the filter input field to search for tasks by keywords.

**Sorting Tasks:**

Use the dropdown to sort tasks by "Erledigt" (completed), "A-Z", or "Z-A".

### Code Structure

**Template**

The template contains the layout for the application. It includes:
- A form to add new tasks.
- An input field to filter tasks.
- A dropdown to sort tasks.
- A list to display tasks with options to edit or delete each task.

**Script**

The script manages the application logic using Vue's Composition API:
- **Refs:** `newTodo`, `editTodo`, `editIndex`, `filter`, `sortOption`, and `todos` are reactive references.
- **Computed Properties:** `filteredAndSortedTodos` to filter and sort tasks.
- **Lifecycle Hook:** `onMounted` to load tasks from the backend when the component is mounted.
- **Methods:** `addTodo`, `removeTodo`, `loadTodos`, `editTask`, `updateTodo`, `updateTodoStatus`, and `cancelEdit` for various functionalities.
### Styles

The styles define the appearance of completed tasks.

### Development

To build and preview the application for production:

npm run build
npm run preview


To run unit tests:

npm run test:unit


To lint and format the code:

npm run lint
npm run format

### Dependencies

- **Vue 3:** The JavaScript framework used for building the UI.
- **Bootstrap:** Used for styling the application.
- **Axios:** For making HTTP requests to the backend.
- **TypeScript:** For static type-checking.

### Dev Dependencies

- **Vite:** A fast build tool.
- **ESLint:** For linting the code.
- **Prettier:** For code formatting.
- **Vitest:** For unit testing.
- **Vue Test Utils:** For testing Vue components.

### Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgements

Thanks to the open-source community for providing the tools and libraries used in this project.

