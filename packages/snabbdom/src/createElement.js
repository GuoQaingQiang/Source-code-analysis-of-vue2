// 将虚拟dom转成真实dom
// vnode: {sel, data,children, text, elm}
export default function createElement (vnode) {
    let domNode = document.createElement(vnode.sel);

    // 文本节点
    if(vnode.text !== '' && (vnode.children == undefined || vnode.children.length == 0)){
        domNode.innerText = vnode.text;
    } else if(Array.isArray(vnode.children) && vnode.children.length > 0){
        for(let i = 0; i < vnode.children.length; i++){
            domNode.appendChild(createElement(vnode.children[i]));
        }
    }
    vnode.elm = domNode;
    return vnode.elm;
}