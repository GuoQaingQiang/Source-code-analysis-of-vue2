export default function (sel, data, c) {
    // 检查参数的个数
    if (arguments.length !== 3)
        throw new Error("h函数参数有误（sel, data, c）")

    // 检查参数c的类型
    if (typeof c == "string" || typeof c == "number") {
        return vnode(sel, data, undefined, c, undefined);
    } else if (Array.isArray(c)) {
        let children = [];
        for (let i = 0; i < children.length; i++) {
            if (!(typeof c[i] == "object" && c[i].hasOwnProperty('sel')))
                throw new Error("数组参数中有项不是h函数")
            children.push(c[i]);
        }
        return vnode(sel, data, children, undefined, undefined);
    } else if (typeof c == "object" && c.hasOwnProperty('sel')) {
        return vnode(sel, data, [c], undefined, undefined);
    } else {
        throw new Error("h函数参数有误（sel, data, c）")
    }
}