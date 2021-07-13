// 将一维tokens折叠嵌套成为多维数组
export default function nestTokens(tokens) {
    var result = loop(tokens) ;
   

    console.log(result);
    return result;
}

function loop(arr) {
    let result = [];
    if (arr.length <= 0) {
        return result;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                switch (arr[i][0]) {
                    case "#":
                        result.push(["#",arr[i][1], loop(arr.slice(i + 1, findIndex(arr, arr[i][1])))]);
                        i = findIndex(arr, arr[i][1]);
                        break;
                    default:
                        result.push(arr[i]);
                }
            }
        }
        return result;
    }
}

function findIndex(arr, tagName){
    for(let i = arr.length -1; i >= 0; i --){
        if(arr[i][0] == "/" && arr[i][1] === tagName){
            return i;
        }
    }
}
