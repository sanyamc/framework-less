
const getToDoCount = (state) => {

    let arr = state.filter((todo) => {
        return !todo.completed;
    });

    const { length } = arr;
    if (length === 1)
        return '1 item left';
    return `${length} items left`;
}




export default(element, {todos}) => {
    const newCounter = element.cloneNode(true);
    newCounter.textContent = getToDoCount(todos);
    return newCounter;
}