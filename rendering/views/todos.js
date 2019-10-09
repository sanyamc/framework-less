const getToDoElement = (todo) => {

    const { completed, text }  = todo;

    return `
    <li class=${completed ? 'class=completed':''}>
    <div class="view">
    <input 
      ${completed ? 'checked' : ''}
      class="toggle" 
      type="checkbox">
    <label>${text}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="${text}"> 
    </li>
    `    
}

export default (element, {todos}) => {
    const newElement = element.cloneNode();

    const test = `<div data-component='child1'>
                    <div data-component="child-child1"></div>
                  </div>
                  <div data-component="child2"></div>`;// to test that recursive version
                  // does do additional work

    const toElements = todos
    .map(getToDoElement)
    .join('');

    newElement.innerHTML = toElements;
    return newElement;
}