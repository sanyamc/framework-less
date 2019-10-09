const registry = {};
const store = {};

const renderWrapper = (component) => {
    return (targetElement, state) => {
        const elem = component(targetElement, state);

        const childElements = elem.querySelectorAll('[data-component]');

        let children = Array
        .from(childElements);
        
        children
        .forEach((target) => {
            const name = target.dataset.component;
            console.log("data component: "+name);
            const child = registry[name];

            if(!child)
                return;

            target.replaceWith(child(target, state));
        });

        return elem;
    }
}

export const add = (name, view) => {
    registry[name] = renderWrapper(view);
}

export const renderRoot = (rootElement, state) => {
    return renderWrapper((rootElement)=> {
        return rootElement.cloneNode(true);
    })(rootElement, state);
}

export default {
    add,
    renderRoot
};