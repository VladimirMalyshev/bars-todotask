const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('input', () => {
    addButton.disabled = taskInput.value.trim() === '';
});

addButton.addEventListener('click', () => {
    const taskName = taskInput.value.trim();
    if (taskName) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');

        const taskTitle = document.createElement('span');
        taskTitle.textContent = taskName;
        taskTitle.classList.add('task-title');

        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.addEventListener('change', () => {
            taskItem.classList.toggle('completed', taskCheckbox.checked);
        });

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskTitle);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        addButton.disabled = true;
    }
});