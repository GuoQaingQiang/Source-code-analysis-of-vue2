import defineReactive from "./defineReactive";
import Dep from "./Dep";
import observe from "./observe";
import { def } from "./utils.js";

export default class Observer {
    constructor(value, fn) {
        this.dep = new Dep();
        def(value, "__ob__", this, value);

        if (Array.isArray(value)) {
            this.observeArray(value);
        } else {
            this.walk(value, fn);
        }

    }

    walk(value, fn) {
        for (const key in value) {
            defineReactive(value, key, value[key], fn);
        }
    }

    observeArray(arr) {
        for (let i = 0, l = arr.length; i < l; i++) {
            observe(arr[i]);
        }
    }
}