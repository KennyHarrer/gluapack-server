const authMiddleware = require('../authorizationMiddleware.js');

const express = require('express');

const router = express.Router();

router.use('/addcsluafiles', authMiddleware, express.text(), require('./addCsLuaFile.js'));
router.use('/clearcache', authMiddleware, require('./clearCache.js'));
router.use('/getcsluafiles', require('./getCsLua.js'));

module.exports = router;
