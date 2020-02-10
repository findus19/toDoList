'use strict';

let input = document.querySelector('input.header-input'),
    //inputStorage = document.querySelector('.header'),
    addNewToDo = document.getElementById('add'),
    ulToDo = document.querySelector('ul.todo'),
    ulToDoComplete = document.querySelector('ul.todo-completed');
    console.log(ulToDoComplete);

let local = {
    textLi1: '',
    divBtn1: '',
    btnRemove1: '',
    btnComplete1: '',
    ulToDo1: ''
}

ulToDo.textContent = localStorage.getItem('items');

const addToDo = function(){
    event.preventDefault();
    const textLi = document.createElement('li');
    textLi.classList.add('todo-item');
    const newToDo = input.value;
    textLi.append(newToDo);
    local.textLi1 = textLi;

    const divBtn = document.createElement('div');
    divBtn.classList.add('todo-buttons');
    local.divBtn1 = divBtn;

    const btnRemove = document.createElement('button');
    btnRemove.classList.add('todo-remove');
    local.btnRemove1 =btnRemove;

    const btnComplete = document.createElement('button');
    btnComplete.classList.add('todo-complete');
    local.btnComplete1 = btnComplete;
    ulToDo.appendChild(textLi).appendChild(divBtn).append(btnRemove, btnComplete);
    local.ulToDo1 = ulToDo.appendChild(textLi).appendChild(divBtn).append(btnRemove, btnComplete);

    input.value = '';
    
    removeToDo(btnRemove);
    completeToDo(btnComplete, textLi);
    console.log(local);

    localStorage.setItem('items', local);
};

const removeToDo = function(element){
    element.addEventListener('click', function(event) {
        element.parentNode.parentNode.remove();
        event.stopPropagation();
    });
};

const completeToDo = function(element,text){ 
    element.addEventListener('click', function() {
        ulToDoComplete.appendChild(text);
    });
};

addNewToDo.addEventListener('click', addToDo);

input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        addToDo();
    }
});

