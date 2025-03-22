let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text !== '') {
        const todo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        todos.push(todo);
        input.value = '';
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        
        li.innerHTML = `
            <span onclick="toggleTodo(${todo.id})">${todo.text}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        
        todoList.appendChild(li);
    });
}

// Add event listener for Enter key
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});
