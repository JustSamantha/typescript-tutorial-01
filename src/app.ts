interface TodoItem {
    id:number;
    title:string;
    status:TodoItemStatus;
    completedOn?:Date;
}

enum TodoItemStatus {
    Done = "done",
    InProgress = "in-progress",
    ToDo = "todo",
}

const todoItems:Array<TodoItem> = [
    { id: 1, title: "Learn HTML", status: TodoItemStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: TodoItemStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: TodoItemStatus.ToDo }
];

function addTodoItem(todo:string):TodoItem {
    const id:number = getNextId(todoItems);

    const newTodo:TodoItem = {
        id,
        title: todo,
        status: TodoItemStatus.ToDo,
    }

    todoItems.push(newTodo);

    return newTodo;
}

function getNextId<T extends {id:number}>(items:T[]):number {
    return items.length+1;
}

const newTodo:TodoItem = addTodoItem("Buy lots of stuff with all the money we make from the app");

console.log(newTodo);
console.log(todoItems);