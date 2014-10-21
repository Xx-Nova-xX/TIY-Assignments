var example = 'var arr = ["a", "b", "c"]; console.log(Object.keys(arr))';
var symbol = "var arr = ['a', 'b', 'c']";
var type = "array";
var name = "it's an array with three string elements";
var meaning = "array holds a list of strings or items and can be called by index, which begins at 0";
//var operands = "({}, ";


function symbol(){
    return symbol;
}

function type(){
    return type;
}

function name(){
    return name;
}

function meaning(){
    return meaning;
}

function operands(){
    return operands;
}
console.log("\n\n" + "*" + example + "*\n" + "<pre><code>\n" + "```javascript\n");
console.log("*  Symbol: " + symbol + "\n     - Type: " + type + "\n     - Type: " + name + "\n     - Meaning: " + meaning + "\n     - Operands: " + operands + "\n");
console.log("```\n" + "</pre></code>\n" + "______________________________________________________________________________");

