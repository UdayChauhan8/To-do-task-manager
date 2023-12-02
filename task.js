function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        // Create a new list item
        var listItem = document.createElement('li');
        listItem.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

function removeTask(button) {
    var taskList = document.getElementById('taskList');
    var listItem = button.parentElement;
    taskList.removeChild(listItem);
}
