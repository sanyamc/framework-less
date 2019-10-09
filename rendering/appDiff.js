/*
    Simple DFS which walks through the entire tree and find the things to change

*/

const applyDiff =  (parentNode, realNode, virtualNode) => {

    if(!parentNode)
        return;

    if(!realNode && virtualNode) {
        parentNode.appendChild(virtualNode);
        return;
    }        

    if(!virtualNode && realNode) {
        realNode.remove();
        return;
    }

    if(isNodeChanged(realNode, virtualNode)) {
        realNode.replaceWith(virtualNode);
        return;
    }

    const realChildren = Array.from(realNode.children); // ? Is it guranteed to same order
    const virtualChildren = Array.from(virtualNode.children); // ? compared to realNode 

    for(let i=0; i<Math.max(realChildren.length, virtualChildren.length); i++) {
        applyDiff(realNode, realChildren[i], virtualChildren[i]);
    }

}


const isNodeChanged = (realNode, virtualNode) => {
    if(!realNode && virtualNode)
        return true;

    if(!virtualNode && realNode)
        return true;

    const realAttr = Array.from(realNode.attributes);
   // const virtualAttr = Array.from(virtualNode.attributes);

    if (realNode.attributes.length !== virtualNode.attributes.length)
        return true;
    
    const isDifferent = realAttr.find((attribute) => {
        const { name } = attribute;
        const node1Attr = realNode.getAttribute(name);
        const node2Attr = virtualNode.getAttribute(name);

        if(node1Attr !== node2Attr)
            return true;
    });

    if(isDifferent)
        return true;

    if (realNode.children.length === 0 &&
            virtualNode.children.length === 0 &&
                realNode.textContent !== virtualNode.textContent) {
                    return true;
                }
    
    return false;
}

export default applyDiff;