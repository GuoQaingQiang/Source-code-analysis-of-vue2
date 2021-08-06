// 发布订阅模式
var uid = 0;
export default class Dep {
    constructor() {
        this.id = uid++;
        this.subs = []; // 订阅者
    }

    // 添加订阅
    addSubs(sub){
        this.subs.push(sub);
    }

    // 添加依赖
    depend(){
        if(Dep.target){
            this.addSubs(Dep.target);
        }
    }

    // 通知更新
    notify() {
        const subs = this.subs.slice();
        for (var i = 0, l = subs.length; i < l; i++) {
           subs[i].update();
        }

    }
}