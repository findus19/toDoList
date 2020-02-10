'use strict';

let input = document.querySelector('input.header-input'),
    //inputStorage = document.querySelector('.header'),
    addNewToDo = document.getElementById('add'),
    ulToDo = document.querySelector('ul.todo'),
    ulToDoComplete = document.querySelector('ul.todo-completed');



/* function loadToDoComplete(){
    const dataComplete = localStorage.getItem('itemsComplete');
    if(dataComplete){
        ulToDoComplete.innerHTML = dataComplete;
    }
    const btnRemoveLoad = document.querySelectorAll('button.todo-remove');
    for(const button of btnRemoveLoad){
        removeToDo(button);
    } 
};


loadToDoComplete() */



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

    removeToDo(btnRemove);
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
    const btnCompleteLoad = document.querySelectorAll('button.todo-complete');
    const liToDoLoad = document.querySelectorAll('li.todo-item')
    for(const button of btnCompleteLoad){
        for(const text of liToDoLoad){
            completeToDo(button, text);
        };
    }   
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

/* function complateLoadToDo(){
    const btnCompleteLoad = document.querySelectorAll('button.todo-complete');
    const liToDoLoad = document.querySelectorAll('li.todo-item')
    for(const button of btnCompleteLoad){
        for(const text of liToDoLoad){
            completeToDo(button, text);
        };
    }  
}; */

loadToDo();
loadToDoComplete();
/* complateLoadToDo(); */




/* btnRemoeLoad.addEventListener("click", () => {
    event.preventDefault();
    ul.innerHTML = "";
    localStorage.removeItem('items', ulToDo.innerHTML);
}); */

//constbtnRemove = document.querySelectorAll('button.todo-remove');

//localStorage.setItem('itemsComplete', ulToDoComplete.innerHTML);
