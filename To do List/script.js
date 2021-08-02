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
            btnRemove.prop('disabled', false);
            btnSort.prop('disabled', false);

        })
        list.prepend(listItem);
        btnAdd.prop('disabled', true);
        btnClear.prop('disabled', false);
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
    btnClear.prop('disabled', true);
})


btnSort.click(() => {
    let tasksCompleted = $('#list .taskCompleted');
    tasksCompleted.appendTo('#list');
    btnSort.prop('disabled', true);
})

btnRemove.click(() => {
    let tasksCompleted = $('#list .taskCompleted');
    tasksCompleted.remove();
    btnRemove.prop('disabled', true);
})


function toggleAddBtn(enable) {
    if (enable) {
        btnAdd.prop('disabled', false);
    }
    else {
        btnAdd.prop('disabled', true);
    }
}

inpText.on('input', () => {
    toggleAddBtn(inpText.val() != '');
})


function toggleClrBtn(enable) {
    if (enable) {
        btnClear.prop('disabled', false);
    }
    else {
        btnClear.prop('disabled', true);
    }
}
