import templateToTokens from "./TemplateToTokens";
import tokensToDomstr from "./tokensToDomstr";
import getChildren from "./test";

getChildren();

window.TemplateEngine = {
    render(templateStr, data) {
        // templateStr to tokens
        var tokens = templateToTokens(templateStr);

        // tokens to domstr
        var domStr = tokensToDomstr(tokens, data);
        
        document.getElementById("app").innerHTML = domStr;
    }
};

