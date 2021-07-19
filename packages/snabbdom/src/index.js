import h from "./h";
import patch from "./patch";

const newVNode = h("ul",{}, [
    h("li",{},"app container1"),
    h("li",{},"app container2"),
    h("li",{},"app container3"),
    h("li",{},"app container4")
]);
const container = document.getElementById("app");

var clickBtn = document.getElementById("app");
clickBtn.addEventListener("click", function(){
    patch(container, newVNode);
})

