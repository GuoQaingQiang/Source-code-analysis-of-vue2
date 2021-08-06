import Dep from "./Dep";
import { parsePath } from "./utils";

var uid = 0;
export default class Watcher {
    constructor(target, expression, callback) {
        this.id = uid++;
        this.target = target;
        this.getter = parsePath(expression);
        this.callback = callback;
        this.value = this.get();
    }
    update() {
        this.run();
    }

    get() {
        // 依赖收集阶段
        Dep.target = this;
        const obj = this.target;
        var value;
        try {
            value = this.getter(obj);
        } finally {
            Dep.target = null;
        }
        return value;
    }
    run() {
        this.getAndInvoke(this.callback);
    }

    getAndInvoke(cb) {
        var value = this.get();
        if (value != this.value || typeof value != 'object') {
            const oldValue = this.value;
            this.value = value;
            cb.call(this.target, value, oldValue)
        }
    }
}