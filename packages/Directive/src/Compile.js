import Watcher from './Watcher'

export default class Compile {
    constructor(el, vue) {
        this.$vue = vue;
        this.$el = document.querySelector(el);
        if (this.$el) {
            let $fragment = this.node2Fragment(this.$el)
            this.compile($fragment);
            
            this.$el.appendChild($fragment);
        }
    }

    node2Fragment(el) {
        var fragment = document.createDocumentFragment();
        
        var child;
        while (child = el.firstChild) {
            fragment.appendChild(child)
        }

        return fragment;
    }

    compile(fragment) {
        var childNodes = fragment.childNodes;
        var self = this;
        var reg = /\{\{(.*)\}\}/
        childNodes.forEach(node => {
            var text = node.textContent;
            if (node.nodeType == 1) {
                self.compileElement(node)
            } else if (node.nodeType == 3 && reg.test(text)) {
                let name = text.match(reg)[1]
                self.compileText(node, name,reg)
            }
        })
    }

    compileElement(node) {
        var attributes = node.attributes;

        // 类数组转成数组
        Array.prototype.slice.call(attributes).forEach(item => {
            // 分析指令
            var name = item.name, value = item.value;
            // 指令
            var dir = name.substring(2)

            if (name.indexOf('v-') == 0) {
                if (dir == 'if') {

                } else if (dir == 'model') {
                    new Watcher(this.$vue, value, value => {
                        node.vlaue = value;
                    })
                    var v = this.getVueValue(this.$vue, value);
                    node.value = v;

                    node.addEventListener('input', e => {
                        this.setVueValue(this.$vue, value,e.target.value);
                        v = e.target.value;
                    })
                }
            }
        })
    }

    compileText(node, name,reg) {
        const textContent = node.textContent;
        node.textContent = node.textContent.replace(reg, this.getVueValue(this.$vue, name));
        new Watcher(this.$vue, name, value => {
            node.textContent = textContent.replace(reg, value);
        });
    }

    getVueValue(vue, exp) {
        var val = vue._data;
        exp = exp.split(".");

        exp.forEach(k => {
            val = val[k]
        })
        
        return val;
    }

    setVueValue(vue, exp, value) {
        var val = vue._data;
        exp = exp.split(".");

        exp.forEach((k, i) => {
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        })
    }
}