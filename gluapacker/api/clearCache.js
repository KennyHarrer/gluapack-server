const express = require('express')
const { clearLuaCache } = require('../cache')
const router = express.Router()

router.get('/', (req, res) => {
    clearLuaCache()
    res.status(200).json({ok:'ok'})
})

module.exports = router