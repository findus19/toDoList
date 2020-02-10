'use strict';

let input = document.querySelector('input.header-input'),
    //inputStorage = document.querySelector('.header'),
    addNewToDo = document.getElementById('add'),
    ulToDo = document.querySelector('ul.todo'),
    ulToDoComplete = document.querySelector('ul.todo-completed');


const addToDo = function(){

    event.preventDefault();
    const textLi = document.createElement('li');
    textLi.classList.add('todo-item');
    const newToDo = input.value;
    textLi.append(newToDo);

    const divBtn = document.createElement('div');
    divBtn.classList.add('todo-buttons');

    const btnRemove = document.createElement('button');
    btnRemove.classList.add('todo-remove');

    const btnComplete = document.createElement('button');
    btnComplete.classList.add('todo-complete');

    ulToDo.appendChild(textLi).appendChild(divBtn).append(btnRemove, btnComplete);

    input.value = '';
    
    localStorage.setItem("items", ulToDo.innerHTML);
    console.log(textLi)
    removeToDo(btnRemove);
    console.log(btnComplete.classList.add('todo-complete'));
    completeToDo(btnComplete, textLi);
};



const removeToDo = function(element){
    element.addEventListener('click', function(event) {
        element.parentNode.parentNode.remove();
        event.stopPropagation();
        localStorage.setItem('items', ulToDo.innerHTML);
        localStorage.setItem("itemsComplete", ulToDoComplete.innerHTML);
    });
};

const completeToDo = function(element, text){ 
    element.addEventListener('click', function() {
        ulToDoComplete.appendChild(text);
        localStorage.setItem("items", ulToDo.innerHTML);
        localStorage.setItem("itemsComplete", ulToDoComplete.innerHTML);
    });
};

const completeToDoLoad = function(element){ 
    element.addEventListener('click', function() {
        ulToDoComplete.appendChild(element)
        localStorage.setItem("items", ulToDo.innerHTML);
        localStorage.setItem("itemsComplete", ulToDoComplete.innerHTML);
    });
};

addNewToDo.addEventListener('click', addToDo);

input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        addToDo();
    }
});

function loadToDo(){
    const data = localStorage.getItem('items');
    if(data){
        ulToDo.innerHTML = data;
    }
    const btnRemoveLoad = document.querySelectorAll('button.todo-remove');
    for(const button of btnRemoveLoad){
        removeToDo(button);
    }
    
          //  completeToDo(btnCompleteLoad, liToDoLoad);

    //}   
};
function loadToDoComplete(){
    const data = localStorage.getItem('itemsComplete');
    if(data){
        ulToDoComplete.innerHTML = data;
    }
    const btnRemoveLoad = document.querySelectorAll('button.todo-remove');
    for(const button of btnRemoveLoad){
        removeToDo(button);
    }     
};



loadToDo();
loadToDoComplete();
const btnCompleteLoad = document.querySelector('button.todo-complete');
//console.log(btnCompleteLoad);
const liToDoLoad = document.querySelector('li.todo-item');
//console.log(liToDoLoad);
//for(const button of btnCompleteLoad){
btnCompleteLoad.addEventListener('click', function() {
    ulToDoComplete.appendChild(liToDoLoad)
    localStorage.setItem("items", ulToDo.innerHTML);
    localStorage.setItem("itemsComplete", ulToDoComplete.innerHTML);
});
/* complateLoadToDo(); */


/* local = {
    btn: '',
    liLoad: ''
}
const btnCompleteLoad = document.querySelectorAll('button.todo-complete');
localStorage.setItem('task', JSON.stringify(itemsArray));
const liToDoLoad = document.querySelectorAll('li.todo-item');

const dataLoad = JSON.parse(localStorage.getItem('task'));

local.btn = btnCompleteLoad;
local.liLoad = liToDoLoad;

const liTasks = document.createElement('li');
liTasks.innerHTML = dataLoad
ulToDo.appendChild(liTasks);
let itemsArray = [];



itemsArray.push(local.btn)
itemsArray.push(local.liLoad)
localStorage.setItem('task', JSON.stringify(itemsArray))

 */

