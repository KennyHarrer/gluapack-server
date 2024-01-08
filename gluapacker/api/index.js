const authMiddleware = require('../authorizationMiddleware.js')

const express = require('express')

const router = express.Router();

router.use('/addcsluafiles', authMiddleware, require('./addCsLuaFile.js'))
router.use('/clearcache', authMiddleware, require('./clearCache.js'))
router.use('/getcsluafiles', authMiddleware, require('./clearCache.js'))



module.exports = router