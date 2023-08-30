const todoList = [
    {name: 'make dinner',
    dueDate: '2022-12-22'},
    {name: 'wash dishes',
    dueDate: '2022-12-22'}
];

renderTodoList();

function addToDo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElemnt = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElemnt.value;

    todoList.push({name, dueDate});
    inputElement.value = '';
    renderTodoList();
}

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        const html = `
            <p>
            ${name} ${dueDate}
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>
            </p>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}