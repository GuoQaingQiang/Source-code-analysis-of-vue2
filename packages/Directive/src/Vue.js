import Compile from "./Compile";
import observe from './observe';
import Watcher from "./Watcher";

export default class Vue {
    constructor(options) {
        this.$options = options || {};
        this._data = options.data || undefined;

        // 监听数据
        observe(this._data);

        this._initData();
        // this._initComputed();

        // 绑定vue watch
        this._initWatch();

        // 模板编译
        new Compile(options.el, this);
    }

    _initData() {
        Object.keys(this._data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    return this._data[key];
                },
                set(newVal) {
                    this._data[key] = newVal;
                }
            })
        })
    }

    // _initComputed() {

    // }

    _initWatch(){
        var watch = this.$options.watch;
        Object.keys(watch).forEach(key=>{
            new Watcher(this, key, watch[key])
        })
    }
}