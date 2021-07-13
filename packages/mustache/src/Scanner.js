export default class Scanner {
    constructor(templateStr) {
        this.pos = 0; // 指针
        this.tail = templateStr; // 尾巴
        this.templateStr = templateStr;
    }

    // 走过指定内容【{{，}}，#】，没有返回值
    scan(tag) {
        if(this.tail.indexOf(tag) == 0){
            this.pos += tag.length;
            this.tail = this.templateStr.substr(this.pos);
        }
    }

    // 扫描字符串，遇到指定内容， 返回路过的文字
    scanUntil(stopTag) {
        var startIndex = this.pos;
        while(this.tail.indexOf(stopTag) !== 0 && this.eos()){
            this.pos++;
            this.tail = this.templateStr.substr(this.pos);
        }

        // substr vs substring ，第二个参数，substr代表截取的长度，substring代表截取位置的素索引
        return this.templateStr.substring(startIndex, this.pos);
    }

    // 指针是否到头
    eos(){
        return this.pos < this.templateStr.length;
    }
}