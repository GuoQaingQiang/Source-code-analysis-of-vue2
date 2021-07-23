import Observer from "./Observer";

export default function (value,fn) {
    if (typeof value != "object") return;
    var ob;
    if (typeof value.__ob__ != 'undefined') {
        ob = value.__ob__;
    } else {
        ob = new Observer(value,fn);
    }
    return ob;
}