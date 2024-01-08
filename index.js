const app = require('./gluapacker/expressServer')
const api = require('./gluapacker/api')
app.use('/api', api)