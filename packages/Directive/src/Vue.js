import Compile from "./Compile";

export default class Vue{
    constructor(options){
        this.$options = options||{};
        this._data = options.data||undefined;

        new Compile(options.el, this);
    }
}