document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskDate = document.getElementById('task-date');
    const taskText = taskInput.value;
    const taskDateTime = taskDate.value;

    if (taskText === '' || taskDateTime === '') {
        alert('Please enter both a task and a date/time.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.textContent = `${taskText} - ${new Date(taskDateTime).toLocaleString()}`;
    taskItem.appendChild(taskContent);

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editTask(taskItem, taskContent, taskInput, taskDate));
    taskActions.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(taskItem));
    taskActions.appendChild(deleteBtn);

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => completeTask(taskItem));
    taskActions.appendChild(completeBtn);

    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskDate.value = '';
}

function editTask(taskItem, taskContent, taskInput, taskDate) {
    const newTaskText = prompt('Edit task:', taskContent.textContent.split(' - ')[0]);
    const newTaskDate = prompt('Edit date and time:', taskContent.textContent.split(' - ')[1]);

    if (newTaskText !== null && newTaskDate !== null) {
        taskContent.textContent = `${newTaskText} - ${new Date(newTaskDate).toLocaleString()}`;
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}

function completeTask(taskItem) {
    taskItem.classList.toggle('completed');
}
