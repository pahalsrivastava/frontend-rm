const { addTask, completeTask, getPendingTasks, deleteTask, resetTasks } = require('../modules/todo');

beforeEach(() => resetTasks());
afterAll(() => console.log("All To-Do tests finished"));

describe('To-do List', () => {

    test('adds a task', () => {
        const task = addTask("Learn Jest");
        expect(task).toEqual({ id: 1, task: "Learn Jest", completed: false });
        expect(getPendingTasks()).toHaveLength(1);
    });

    test('throws error for empty task', () => {
        expect(() => addTask("")).toThrow("Task cannot be empty");
    });

    test('completes a task', () => {
        addTask("Learn Jest");
        const completed = completeTask(1);
        expect(completed.completed).toBe(true);
        expect(getPendingTasks()).toHaveLength(0);
    });

    test('deletes a task', () => {
        addTask("Learn Jest");
        const deleted = deleteTask(1);
        expect(deleted.id).toBe(1);
        expect(getPendingTasks()).toHaveLength(0); 
    });

});
