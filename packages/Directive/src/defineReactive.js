import observe from "./observe";
import Dep from "./Dep";

export default function defineReactive(data, key, val, fn) {
    // let subs = [] // 新增
    const dep = new Dep();
    let childOb = observe(val);
    
    Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get: function () {
            // 新增
            // if (data.$target) {
            //     subs.push(data.$target);
            // }
            if(Dep.target){
                dep.depend();
                if(childOb){
                    childOb.dep.depend();
                }
            }
            return val;
        },
        set: function (newVal) {
            if (newVal === val) return;
            fn && fn(newVal);
            // 新增
            // if (subs.length) {
            //     // 用 setTimeout 因为此时 this.data 还没更新
            //     setTimeout(() => {
            //         subs.forEach(sub => sub());
            //     }, 0)
            // }
            val = newVal;
            console.log(key, ":", newVal)
            childOb = observe(newVal);

            dep.notify();
        }
    })
}