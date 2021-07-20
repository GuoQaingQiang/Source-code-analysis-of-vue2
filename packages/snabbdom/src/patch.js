import vnode from "./vnode";
import createElement from "./createElement";

export default function (oldVnode, newVnode) {
    // 判断传入的第一个参数是dom节点还是虚拟节点
    if (oldVnode.sel == '' || oldVnode.sel == undefined) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }

    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
        // diff的四种命中查找
        console.error("精细化比较我放弃了");
    } else {
        // 暴力替换
        let newVnodeElm = createElement(newVnode);
        if (oldVnode.elm.parentNode && newVnodeElm) {
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
        }

        oldVnode.elm.parentNode.removeChild(oldVnode.elm);
    }
}