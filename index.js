const app = require('./gluapacker/expressServer')
const api = require('./gluapacker/api/index.js')
app.use('/api', api)