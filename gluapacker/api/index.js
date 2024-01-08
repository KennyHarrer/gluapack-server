const authMiddleware = require('../authorizationMiddleware.js')

const express = require('express')

const router = express.Router();

router.use('/addCSLuaFile', authMiddleware, require('./addCsLuaFile.js'))
router.use('/clearCache', authMiddleware, require('./clearCache.js'))
router.use('/GetCSLuaFiles', authMiddleware, require('./clearCache.js'))



module.exports = router