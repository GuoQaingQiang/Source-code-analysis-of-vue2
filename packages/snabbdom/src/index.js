import h from "./h";
import patch from "./patch";
import createElement from "./createElement";

const newVNode = h("ul",{}, [
    h("li",{},"app container1"),
    h("li",{},"app container2"),
    h("li",{},"app container3"),
    h("li",{}, [
        h('ol', {}, [
            h("li", {}, 'ol1'),
            h("li", {}, 'ol2'),
            h("li", {}, 'ol3')
        ])
    ])
]);
const container = document.getElementById("app");

var clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", function(){
    // patch(container, newVNode);    
    container.appendChild(createElement(newVNode));
})

