import Scanner from "./Scanner";
import nestTokens  from "./nestTokens";

export default function TemplateToTokens(templateStr) {
    var tokens = [];

    var scanner = new Scanner(templateStr);
    while (scanner.eos()) {
        var word = scanner.scanUntil("{{");
        if (word) {
            tokens.push(["text", word]);
        }
        scanner.scan("{{");

        word = scanner.scanUntil("}}");
        if (word) {
            if (word.indexOf("#") == 0) {
                tokens.push(["#", word.substr(1)]);
            } else if (word.indexOf('/') == 0) {
                tokens.push(["/", word.substr(1)]);
            } else {
                tokens.push(["name", word]);
            }
        }
        scanner.scan("}}");
    }

    // 将一维数组转成多维数组
    return nestTokens(tokens);
}