const btnAdd = $('#btnAdd');
const btnRemove = $('#btnRemove');
const btnSort = $('#btnSort');
const btnClear = $('#btnClear');
const list = $('#list');
const inpText = $('#inpText');


// add and ENTER btn functionality
function addTask() {
    let task = inpText.val();
    if (task) {
        let listItem = $('<li>', {
            'class': "list-group-item",
            text: task
        });
        listItem.click((event) => {
            listItem.toggleClass('taskCompleted');
        })
        list.prepend(listItem);
    }
    inpText.val('');
    inpText.focus();
}

btnAdd.click(addTask);

inpText.keyup((event) => {
    if (event.keyCode == 13) {
        addTask();
    }
})

//clear btn functionality
btnClear.click(() => {
    list.text('');
})


btnSort.click(() => {
    let tasksCompleted = $('#list .taskCompleted');
    tasksCompleted.appendTo('#list');
})

btnRemove.click(() => {
    let tasksCompleted = $('#list .taskCompleted');
    tasksCompleted.remove();
})