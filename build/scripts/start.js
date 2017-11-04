const logger = require('../lib/logger')

logger.info('Starting server...')
var port = process.env.PORT || 8000
require('../../server/main').listen(port, () => {
  logger.success('Server is running at http://localhost:'+port)
})
