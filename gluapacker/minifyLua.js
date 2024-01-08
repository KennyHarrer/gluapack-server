function removeFirstLinesInString(str, amount = 4) {
    //used to remove garbage from lua-format
    str = str.split('\n');
    for (i = 0; i < amount; i++) {
        str.shift();
    }
    return str.join('\n');
}

const luamin = require('lua-format');
function minfyLua(luacode) {
    return removeFirstLinesInString(
        luamin.Minify(luacode, { RenameVariables: true, RenameGlobals: false, SolveMath: true })
    );
}

module.exports = minfyLua;
