function onReady() {
  const toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');

  // Create New Todo
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id,
    });

    id++;

    newToDoText.value = '';

    renderTheUI(toDos);
    console.log(toDos);
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  // Delete ToDos
  function deleteToDo(toDo) {
    const filterToDos = toDos.filter(todo => todo.id !== toDo.id);
    renderTheUI(filterToDos);
  }

  // Render List Items
  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      newLi.className = 'mdl-list__item';

      const labelList = document.createElement('label');
      labelList.className = 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect';
      labelList.setAttribute('for', 'checkbox1');

      const primarySpan = document.createElement('span');
      primarySpan.className = 'mdl-checkbox__label custom';
      primarySpan.textContent = toDo.title;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'mdl-checkbox__input';
      checkbox.setAttribute('id', 'checkbox1');

      const span = document.createElement('span');
      span.className = 'mdl-list__item-secondary-action';

      const deleteItem = document.createElement('i');
      deleteItem.className = 'fas fa-trash';

      newLi.appendChild(labelList);
      newLi.appendChild(span);

      labelList.appendChild(checkbox);
      labelList.appendChild(primarySpan);
      componentHandler.upgradeElement(labelList);

      span.appendChild(deleteItem);

      toDoList.appendChild(newLi);

      deleteItem.addEventListener('click', () => {
        deleteToDo(toDo);
      });
    });
  }
}

window.onload = function() {
  onReady();
};
