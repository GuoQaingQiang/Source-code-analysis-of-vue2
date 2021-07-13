import templateToTokens from "./TemplateToTokens";
import tokensToDomstr from "./tokensToDomstr";
import getChildren from "./test";

getChildren();

window.TemplateEngine = {
    render(templateStr, data) {
        // 处理模板字符串成为tokens数组
        var tokens = templateToTokens(templateStr);
        // console.log(tokens);

        // 处理tokens数组成为dom字符串
        var domStr = tokensToDomstr(tokens, data);
        

        document.getElementById("app").innerHTML = domStr;
    }
};

