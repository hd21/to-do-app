function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');
    newLi.className = 'mdl-list__item';

    let primarySpan = document.createElement('span');
    primarySpan.className = 'mdl-checkbox__label custom';
    primarySpan.textContent = title;

    let labelList = document.createElement('label');
    labelList.className = 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect';
    labelList.setAttribute('for', 'checkbox1');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'mdl-checkbox__input';
    checkbox.setAttribute('id', 'checkbox1');

    let span = document.createElement('span');
    span.className = 'mdl-list__item-secondary-action';
    let deleteItem = document.createElement('i');
    deleteItem.className = 'fas fa-trash';

    newLi.appendChild(labelList);
    newLi.appendChild(span);

    labelList.appendChild(checkbox);
    labelList.appendChild(primarySpan);
    componentHandler.upgradeElement(labelList);

    span.appendChild(deleteItem);

    toDoList.appendChild(newLi);
    deleteItem.onclick = function() {
      toDoList.removeChild(newLi);
    };

    newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};
