import filters from './views/filters.js';
import toDoCount from './views/todoCount.js';
import todos from './views/todos.js';
import getToDos from './getToDos.js';
import registry from './registry.js';
import applyDiff from './appDiff.js';

registry.add('todos', todos);
registry.add('filters',filters);
registry.add('counter', toDoCount);

    const render = ()=> {
        window.requestAnimationFrame(() =>{
            const main = document.querySelector('.todoapp');
            const state = {
                todos: getToDos(),
                currentFilter: 'All'
            };
            const newMain = registry.renderRoot(main, state);
           // main.replaceWith(newMain);        
           applyDiff(document.body, main, newMain);
            });
    }

    window.setInterval(() => {        
        render();
    }, 5000);