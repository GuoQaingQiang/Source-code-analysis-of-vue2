export default class Compile{
    constructor(el, vue){
        this.$vue = vue;
        this.$el = document.querySelector(el);
        if(this.$el){
            this.node2Fragment(this.$el)
        }
    }

    node2Fragment(el){
        
    }
}