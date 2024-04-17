var todoTasks = [];

var taskStatus = {
    current: 'current',
    past: 'past'
};

function Task (taskID, taskName, status) {
    this.taskID = taskID;
    this.taskName = taskName;
    this.status = status;
}

function addTaskElement (task) {
    var listElement = document.getElementById ('current-list');
    var taskElement = document.createElement ('li');
    var textElement = document.createTextNode (task.taskName);
    taskElement.setAttribute ('id', task.taskID);
    taskElement.appendChild (textElement);
    listElement.appendChild (taskElement);
}

function addTask (event) {
    var inputElement = document.getElementById ('input-task');
    if (inputElement.value != '') {
        var id = 'item-' + todoTasks.length;
        var task = new Task (taskID, inputElement.value, taskStatus.active);
        addTaskElement(task);
        inputElement.value = '';
    } 
}

function finishTask (event) {
    var taskElement = event.target;
    var taskID = taskElement.taskID;
    for (var i = 0; i < todoTasks.length; i++) {
        if (todoTasks[i].taskID === taskID) {
            todoTasks[i].status = taskStatus.completed;
            break;
        }
    }
    taskElement.remove();
    document.getElementById('past-list').appendChild(taskElement);
}

function initialize () {
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('current-task').onclick = finishTask;
}
initialize();