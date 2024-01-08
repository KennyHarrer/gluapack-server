function getExistingIndex(vsfpath) {
    for (i = 0; i < global.luacache.length;i++) {
        if (lua.vsfpath == vsfpath) { 
            return i
        } 
    }
}

function addFileToLuaCache(vsfpath, lua, time) {
    const existingIndex = getExistingIndex(vsfpath)

    const cacheObj = {
        vsfpath,
        lua,
        time
    }

    if (existingIndex) {
        global.luacache[existingIndex] = cacheObj
    } else {
        global.luacache.push(cacheObj)
    }
}

function clearLuaCache() {
    global.luacache = {}
}

function getLuaCache() {
    return global.luacache
}


module.exports = {clearLuaCache, addFileToLuaCache, getLuaCache}