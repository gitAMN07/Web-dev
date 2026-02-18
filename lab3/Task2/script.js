const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function createTodoItem(text) {
  const li = document.createElement('li');
  li.classList.add('todo-item');

  const leftContainer = document.createElement('div');
  leftContainer.classList.add('todo-left');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.classList.add('todo-text');
  span.textContent = text;

  checkbox.addEventListener('change', () => {
    span.classList.toggle('done');
  });

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  leftContainer.appendChild(checkbox);
  leftContainer.appendChild(span);

  li.appendChild(leftContainer);
  li.appendChild(deleteButton);

  return li;
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = todoInput.value.trim();

  if (value === '') {
    return;
  }

  const newItem = createTodoItem(value);
  todoList.appendChild(newItem);

  todoInput.value = '';
});