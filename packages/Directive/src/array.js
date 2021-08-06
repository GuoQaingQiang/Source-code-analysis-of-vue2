import { def } from "./utils";

const arrayPrototype = Array.prototype;

export const arrayMethods = Object.create(arrayPrototype);

const methodsNeedChange = [
    'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'
];

methodsNeedChange.forEach(methodName => {
    const original = arrayPrototype[methodName];

    def(arrayMethods, methodName, function () {
        const result = original.apply(this, arguments);
        const ob = this.__ob__;
        let inserted = [];

        let args = [...arguments];

        switch (methodName) {
            case "push":
            case "unshift":
                inserted = args;
                break;
            case "splice": 
                inserted = args.slice(2);
        }
        if (inserted) {
            ob.observeArray(inserted);
        }

        ob.dep.notify();

        console.log('测试数组响应');

        return result;
    }, false)
})