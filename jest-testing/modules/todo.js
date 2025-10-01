let tasks = [];

function addTask(task) {
    if (!task || task.trim() === "") throw new Error("Task cannot be empty");
    const newTask = { id: tasks.length + 1, task, completed: false }; 
    tasks.push(newTask);
    return newTask;
}

function completeTask(id) {
    const t = tasks.find(task => task.id === id);
    if (!t) throw new Error("Task not found");
    t.completed = true;
    return t;
}

function getPendingTasks() { 
    return tasks.filter(task => !task.completed);
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) throw new Error("Task not found");
    return tasks.splice(index, 1)[0];
}

function resetTasks() { 
    tasks = [];
}

module.exports = { addTask, completeTask, getPendingTasks, deleteTask, resetTasks };
