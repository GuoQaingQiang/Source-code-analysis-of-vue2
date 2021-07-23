import defineReactive from "./defineReactive/defineReactive";
import observe from "./defineReactive/observe";
import Watcher from "./defineReactive/Watcher";

var obj = {
    a: {
        m: {
            n: 12
        }
    },
    b: 12,
    c: {
        m: {
            n: 12
        }
    },
    d: [1,2,3,4]
}

// test DefineReactive
const inputNode = document.querySelector("#inputNode");
const inputNodeAM = document.querySelector("#inputNodeAM");
const inputNodeAN = document.querySelector("#inputNodeAN");
const inputNodeB = document.querySelector("#inputNodeB");
const inputNodeCM = document.querySelector("#inputNodeCM");
const inputNodeCN = document.querySelector("#inputNodeCN");
const resultNode = document.querySelector("#result");
const inputText = document.querySelector("#inputText");

inputNodeAM.addEventListener("input", (event) => {
    obj.a.m = event.target.value;
});
inputNodeAN.addEventListener("input", (event) => {
    obj.a.m.n = event.target.value;
});
inputNodeB.addEventListener("input", (event) => {
    obj.a.b = event.target.value;
});
inputNodeCM.addEventListener("input", (event) => {
    obj.c.m = event.target.value;
});
inputNodeCN.addEventListener("input", (event) => {
    obj.c.m.n = event.target.value;
});

inputNode.addEventListener("input", (event) => {
    inputValue = event.target.value;
});

defineReactive(window, "inputValue", "", function (newValue) {
    inputText.innerHTML = newValue;
});

observe(obj, function (newValue) {
    console.log(newValue);
    
    resultNode.innerHTML = JSON.stringify(obj);
});

new Watcher(obj, 'a.m.n', (val)=>{
    console.log(val);
})
obj.a.m.n = 88;
console.log(obj);