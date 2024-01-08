const express = require('express');
const router = express.Router();

const minify = require('../minifyLua');
const { addFileToLuaCache } = require('../cache');

router.post('/', (req, res) => {
    if (global.luacache == undefined) {
        return res.status(400).json({ error: 'no lua cache' });
    }
    const { vsfpath } = req.query || {}
    if (vsfpath == undefined) { return res.status(400).json({ error: 'no vsfpath' }); }
    let luacode = req.body
    if (luacode == undefined || luacode.length <= 0) { return res.status(400).json({ error: 'no glua' }); }
    try {
        luacode = minify(luacode)
    } catch (e) {}
    addFileToLuaCache(vsfpath, lua)
    res.status(200).json({ok:'ok'})
});

module.exports = router;
