const express = require('express')
const { getLuaCache } = require('../cache')
const router = express.Router()

router.get('/', (req, res) => {
    if (global.luacache == undefined) { return res.status(400).json({ error: 'no lua cache' }) }
    res.send(200).json(getLuaCache())
})

module.exports = router