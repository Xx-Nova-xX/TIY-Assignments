var example = 'var proto = {}; var obj= Object.create(proto); Object.getPrototypeOf(obj) === proto; // true;';
var symbol = "{ };";
var type = "empty dictionary";
var name = "dictionary";
var meaning = "it holds keys that are accessed by . ";
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

