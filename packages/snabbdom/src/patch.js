import vnode from "./vnode";
import createElement from "./createElement";

export default function () {
    // 判断传入的第一个参数是dom节点还是虚拟节点
    if (oldVnode.sel == '' || oldVnode.sel == undefined) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, {}, undefined, oldVnode)
    }

    // 判断oldVnode和newVnode是不是同一节点
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {

    } else {
        let newVnodeElm = createElement(newVnode);
        if (oldVnode.elm.parentNode && newVnodeElm) {
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
        }

        oldVnode.elm.parentNode.removeChild(oldVnode.elm);
    }
}