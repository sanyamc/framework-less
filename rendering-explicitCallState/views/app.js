
import filters from './filters.js';
import toDoCount from './todoCount.js';
import todos from './todos.js';

export default (element, state) => {
    const newElement = element.cloneNode(true);

    let toDosElements = newElement.querySelector('.todo-list');
    let toDoCountElement = newElement.querySelector('.todo-count');
    let filterElement = newElement.querySelector('.filters');

    toDoCountElement.replaceWith(toDoCount(toDoCountElement, state));  
    toDosElements.replaceWith(todos(toDosElements, state)); 
    filterElement.replaceWith(filters(filterElement, state));
    return newElement;
}