/**
 * tokens数组变成dom字符串
 * @param {*} tokens 
 * @param {*} data 
 * @returns string
 */

export default function tokensToDomstr(tokens, data) {
    var domStr = "";

    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        switch (token[0]) {
            case "#":
                domStr += loop(token[2], data[token[1]]);
                break;
            case "text":
                domStr += token[1];
                break;
            default:
                domStr += getPointData(data, token[1]);
        }
    }

    return domStr;
}

function loop(tokens, data) {
    var result = "";

    data.map(item => {
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            switch (token[0]) {
                case "#":
                    result += loop(token[2], item[token[1]]);
                    break;
                case "text":
                    result += token[1];
                    break;
                default:
                    result += getPointData(item, token[1]);
            }
        }
    })

    return result;
}


function getPointData(dataObj, keyName) {
    if (keyName.indexOf(".") >= 0) {
        return dataObj;
    }

    return dataObj[keyName];
}