'use strict';

let input = document.querySelector('input.header-input'),
    addNewToDo = document.getElementById('add'),
    ulToDo = document.querySelector('ul.todo');

const addToDo = function(){
    const textLi = document.createElement('li');
    textLi.classList.add('todo-item');
    const newToDo = input.value;
    textLi.append(newToDo);
    ulToDo.appendChild(textLi);

    const divBtn = document.createElement('div');
};

addNewToDo.addEventListener('click', addToDo);