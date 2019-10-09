
import view from './views/app.js';
import getToDos from './getToDos.js';

// 3 things need to be filled
// list of todos class
    
    const render = ()=> {
        window.requestAnimationFrame(() =>{
            const main = document.querySelector('.todoapp');
            const newMain = view(main, getToDos());
            main.replaceWith(newMain);        
            });
    }
    window.setInterval(() => {        
        render();
    }, 5000);